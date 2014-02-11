/*
 * fontconfig/src/fccfg.c
 *
 * Copyright © 2000 Keith Packard
 *
 * Permission to use, copy, modify, distribute, and sell this software and its
 * documentation for any purpose is hereby granted without fee, provided that
 * the above copyright notice appear in all copies and that both that
 * copyright notice and this permission notice appear in supporting
 * documentation, and that the name of the author(s) not be used in
 * advertising or publicity pertaining to distribution of the software without
 * specific, written prior permission.  The authors make no
 * representations about the suitability of this software for any purpose.  It
 * is provided "as is" without express or implied warranty.
 *
 * THE AUTHOR(S) DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE,
 * INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS, IN NO
 * EVENT SHALL THE AUTHOR(S) BE LIABLE FOR ANY SPECIAL, INDIRECT OR
 * CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
 * DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
 * TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

/* Objects MT-safe for readonly access. */

#include "fcint.h"
#include <dirent.h>
#include <sys/types.h>

#if defined (_WIN32) && !defined (R_OK)
#define R_OK 4
#endif

static FcConfig    *_fcConfig; /* MT-safe */

static FcConfig *
FcConfigEnsure (void)
{
    FcConfig	*config;
retry:
    config = fc_atomic_ptr_get (&_fcConfig);
    if (!config)
    {
	config = FcInitLoadConfigAndFonts ();

	if (!fc_atomic_ptr_cmpexch (&_fcConfig, NULL, config)) {
	    FcConfigDestroy (config);
	    goto retry;
	}
    }
    return config;
}

FcBool
FcConfigInit (void)
{
  return FcConfigEnsure () ? FcTrue : FcFalse;
}

void
FcConfigFini (void)
{
    FcConfig *cfg = fc_atomic_ptr_get (&_fcConfig);
    if (cfg && fc_atomic_ptr_cmpexch (&_fcConfig, cfg, NULL))
	FcConfigDestroy (cfg);
}


FcConfig *
FcConfigCreate (void)
{
    FcSetName	set;
    FcConfig	*config;

    config = malloc (sizeof (FcConfig));
    if (!config)
	goto bail0;

    config->configDirs = FcStrSetCreate ();
    if (!config->configDirs)
	goto bail1;

    config->configFiles = FcStrSetCreate ();
    if (!config->configFiles)
	goto bail2;

    config->fontDirs = FcStrSetCreate ();
    if (!config->fontDirs)
	goto bail3;

    config->acceptGlobs = FcStrSetCreate ();
    if (!config->acceptGlobs)
	goto bail4;

    config->rejectGlobs = FcStrSetCreate ();
    if (!config->rejectGlobs)
	goto bail5;

    config->acceptPatterns = FcFontSetCreate ();
    if (!config->acceptPatterns)
	goto bail6;

    config->rejectPatterns = FcFontSetCreate ();
    if (!config->rejectPatterns)
	goto bail7;

    config->cacheDirs = FcStrSetCreate ();
    if (!config->cacheDirs)
	goto bail8;

    config->blanks = 0;

    config->substPattern = 0;
    config->substFont = 0;
    config->substScan = 0;
    config->maxObjects = 0;
    for (set = FcSetSystem; set <= FcSetApplication; set++)
	config->fonts[set] = 0;

    config->rescanTime = time(0);
    config->rescanInterval = 30;

    config->expr_pool = NULL;

    FcRefInit (&config->ref, 1);

    return config;

bail8:
    FcFontSetDestroy (config->rejectPatterns);
bail7:
    FcFontSetDestroy (config->acceptPatterns);
bail6:
    FcStrSetDestroy (config->rejectGlobs);
bail5:
    FcStrSetDestroy (config->acceptGlobs);
bail4:
    FcStrSetDestroy (config->fontDirs);
bail3:
    FcStrSetDestroy (config->configFiles);
bail2:
    FcStrSetDestroy (config->configDirs);
bail1:
    free (config);
bail0:
    return 0;
}

static FcFileTime
FcConfigNewestFile (FcStrSet *files)
{
    FcStrList	    *list = FcStrListCreate (files);
    FcFileTime	    newest = { 0, FcFalse };
    FcChar8	    *file;
    struct  stat    statb;

    if (list)
    {
	while ((file = FcStrListNext (list)))
	    if (FcStat (file, &statb) == 0)
		if (!newest.set || statb.st_mtime - newest.time > 0)
		{
		    newest.set = FcTrue;
		    newest.time = statb.st_mtime;
		}
	FcStrListDone (list);
    }
    return newest;
}

FcBool
FcConfigUptoDate (FcConfig *config)
{
    FcFileTime	config_time, config_dir_time, font_time;
    time_t	now = time(0);
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return FcFalse;
    }
    config_time = FcConfigNewestFile (config->configFiles);
    config_dir_time = FcConfigNewestFile (config->configDirs);
    font_time = FcConfigNewestFile (config->fontDirs);
    if ((config_time.set && config_time.time - config->rescanTime > 0) ||
	(config_dir_time.set && (config_dir_time.time - config->rescanTime) > 0) ||
	(font_time.set && (font_time.time - config->rescanTime) > 0))
    {
	/* We need to check for potential clock problems here (OLPC ticket #6046) */
	if ((config_time.set && (config_time.time - now) > 0) ||
    	(config_dir_time.set && (config_dir_time.time - now) > 0) ||
        (font_time.set && (font_time.time - now) > 0))
	{
	    fprintf (stderr,
                    "Fontconfig warning: Directory/file mtime in the future. New fonts may not be detected.\n");
	    config->rescanTime = now;
	    return FcTrue;
	}
	else
	    return FcFalse;
    }
    config->rescanTime = now;
    return FcTrue;
}

static void
FcSubstDestroy (FcSubst *s)
{
    FcSubst *n;

    while (s)
    {
	n = s->next;
	if (s->test)
	    FcTestDestroy (s->test);
	if (s->edit)
	    FcEditDestroy (s->edit);
	free (s);
	s = n;
    }
}

FcExpr *
FcConfigAllocExpr (FcConfig *config)
{
  if (!config->expr_pool || config->expr_pool->next == config->expr_pool->end)
  {
    FcExprPage *new_page;

    new_page = malloc (sizeof (FcExprPage));
    if (!new_page)
      return 0;

    new_page->next_page = config->expr_pool;
    new_page->next = new_page->exprs;
    config->expr_pool = new_page;
  }

  return config->expr_pool->next++;
}

FcConfig *
FcConfigReference (FcConfig *config)
{
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return 0;
    }

    FcRefInc (&config->ref);

    return config;
}

void
FcConfigDestroy (FcConfig *config)
{
    FcSetName	set;
    FcExprPage	*page;

    if (FcRefDec (&config->ref) != 1)
	return;

    (void) fc_atomic_ptr_cmpexch (&_fcConfig, config, NULL);

    FcStrSetDestroy (config->configDirs);
    FcStrSetDestroy (config->fontDirs);
    FcStrSetDestroy (config->cacheDirs);
    FcStrSetDestroy (config->configFiles);
    FcStrSetDestroy (config->acceptGlobs);
    FcStrSetDestroy (config->rejectGlobs);
    FcFontSetDestroy (config->acceptPatterns);
    FcFontSetDestroy (config->rejectPatterns);

    if (config->blanks)
	FcBlanksDestroy (config->blanks);

    FcSubstDestroy (config->substPattern);
    FcSubstDestroy (config->substFont);
    FcSubstDestroy (config->substScan);
    for (set = FcSetSystem; set <= FcSetApplication; set++)
	if (config->fonts[set])
	    FcFontSetDestroy (config->fonts[set]);

    page = config->expr_pool;
    while (page)
    {
      FcExprPage *next = page->next_page;
      free (page);
      page = next;
    }

    free (config);
}

/*
 * Add cache to configuration, adding fonts and directories
 */

FcBool
FcConfigAddCache (FcConfig *config, FcCache *cache,
		  FcSetName set, FcStrSet *dirSet)
{
    FcFontSet	*fs;
    intptr_t	*dirs;
    int		i;

    /*
     * Add fonts
     */
    fs = FcCacheSet (cache);
    if (fs)
    {
	int	nref = 0;
	
	for (i = 0; i < fs->nfont; i++)
	{
	    FcPattern	*font = FcFontSetFont (fs, i);
	    FcChar8	*font_file;

	    /*
	     * Check to see if font is banned by filename
	     */
	    if (FcPatternObjectGetString (font, FC_FILE_OBJECT,
					  0, &font_file) == FcResultMatch &&
		!FcConfigAcceptFilename (config, font_file))
	    {
		continue;
	    }
		
	    /*
	     * Check to see if font is banned by pattern
	     */
	    if (!FcConfigAcceptFont (config, font))
		continue;
		
	    nref++;
	    FcFontSetAdd (config->fonts[set], font);
	}
	FcDirCacheReference (cache, nref);
    }

    /*
     * Add directories
     */
    dirs = FcCacheDirs (cache);
    if (dirs)
    {
	for (i = 0; i < cache->dirs_count; i++)
	{
	    FcChar8	*dir = FcOffsetToPtr (dirs, dirs[i], FcChar8);
	    if (FcConfigAcceptFilename (config, dir))
		FcStrSetAddFilename (dirSet, dir);
	}
    }
    return FcTrue;
}

static FcBool
FcConfigAddDirList (FcConfig *config, FcSetName set, FcStrSet *dirSet)
{
    FcStrList	    *dirlist;
    FcChar8	    *dir;
    FcCache	    *cache;

    dirlist = FcStrListCreate (dirSet);
    if (!dirlist)
        return FcFalse;
	
    while ((dir = FcStrListNext (dirlist)))
    {
	if (FcDebug () & FC_DBG_FONTSET)
	    printf ("adding fonts from%s\n", dir);
	cache = FcDirCacheRead (dir, FcFalse, config);
	if (!cache)
	    continue;
	FcConfigAddCache (config, cache, set, dirSet);
	FcDirCacheUnload (cache);
    }
    FcStrListDone (dirlist);
    return FcTrue;
}

/*
 * Scan the current list of directories in the configuration
 * and build the set of available fonts.
 */

FcBool
FcConfigBuildFonts (FcConfig *config)
{
    FcFontSet	    *fonts;

    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return FcFalse;
    }
	
    fonts = FcFontSetCreate ();
    if (!fonts)
	return FcFalse;

    FcConfigSetFonts (config, fonts, FcSetSystem);

    if (!FcConfigAddDirList (config, FcSetSystem, config->fontDirs))
	return FcFalse;
    if (FcDebug () & FC_DBG_FONTSET)
	FcFontSetPrint (fonts);
    return FcTrue;
}

FcBool
FcConfigSetCurrent (FcConfig *config)
{
    FcConfig *cfg;

retry:
    cfg = fc_atomic_ptr_get (&_fcConfig);

    if (config == cfg)
	return FcTrue;

    if (!config->fonts[FcSetSystem])
	if (!FcConfigBuildFonts (config))
	    return FcFalse;

    if (!fc_atomic_ptr_cmpexch (&_fcConfig, cfg, config))
	goto retry;

    if (cfg)
	FcConfigDestroy (cfg);

    return FcTrue;
}

FcConfig *
FcConfigGetCurrent (void)
{
    return FcConfigEnsure ();
}

FcBool
FcConfigAddConfigDir (FcConfig	    *config,
		      const FcChar8 *d)
{
    return FcStrSetAddFilename (config->configDirs, d);
}

FcStrList *
FcConfigGetConfigDirs (FcConfig   *config)
{
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return 0;
    }
    return FcStrListCreate (config->configDirs);
}

FcBool
FcConfigAddFontDir (FcConfig	    *config,
		    const FcChar8   *d)
{
    return FcStrSetAddFilename (config->fontDirs, d);
}

FcBool
FcConfigAddDir (FcConfig	    *config,
		const FcChar8	    *d)
{
    return (FcConfigAddConfigDir (config, d) &&
	    FcConfigAddFontDir (config, d));
}

FcStrList *
FcConfigGetFontDirs (FcConfig	*config)
{
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return 0;
    }
    return FcStrListCreate (config->fontDirs);
}

FcBool
FcConfigAddCacheDir (FcConfig	    *config,
		     const FcChar8  *d)
{
    return FcStrSetAddFilename (config->cacheDirs, d);
}

FcStrList *
FcConfigGetCacheDirs (const FcConfig *config)
{
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return 0;
    }
    return FcStrListCreate (config->cacheDirs);
}

FcBool
FcConfigAddConfigFile (FcConfig	    *config,
		       const FcChar8   *f)
{
    FcBool	ret;
    FcChar8	*file = FcConfigFilename (f);

    if (!file)
	return FcFalse;

    ret = FcStrSetAdd (config->configFiles, file);
    FcStrFree (file);
    return ret;
}

FcStrList *
FcConfigGetConfigFiles (FcConfig    *config)
{
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return 0;
    }
    return FcStrListCreate (config->configFiles);
}

FcChar8 *
FcConfigGetCache (FcConfig  *config FC_UNUSED)
{
    return NULL;
}

FcFontSet *
FcConfigGetFonts (FcConfig	*config,
		  FcSetName	set)
{
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return 0;
    }
    return config->fonts[set];
}

void
FcConfigSetFonts (FcConfig	*config,
		  FcFontSet	*fonts,
		  FcSetName	set)
{
    if (config->fonts[set])
	FcFontSetDestroy (config->fonts[set]);
    config->fonts[set] = fonts;
}

FcBlanks *
FcConfigGetBlanks (FcConfig	*config)
{
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return 0;
    }
    return config->blanks;
}

FcBool
FcConfigAddBlank (FcConfig	*config,
		  FcChar32    	blank)
{
    FcBlanks	*b, *freeme = 0;

    b = config->blanks;
    if (!b)
    {
	freeme = b = FcBlanksCreate ();
	if (!b)
	    return FcFalse;
    }
    if (!FcBlanksAdd (b, blank))
    {
        if (freeme)
            FcBlanksDestroy (freeme);
	return FcFalse;
    }
    config->blanks = b;
    return FcTrue;
}

int
FcConfigGetRescanInterval (FcConfig *config)
{
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return 0;
    }
    return config->rescanInterval;
}

FcBool
FcConfigSetRescanInterval (FcConfig *config, int rescanInterval)
{
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return FcFalse;
    }
    config->rescanInterval = rescanInterval;
    return FcTrue;
}

/*
 * A couple of typos escaped into the library
 */
int
FcConfigGetRescanInverval (FcConfig *config)
{
    return FcConfigGetRescanInterval (config);
}

FcBool
FcConfigSetRescanInverval (FcConfig *config, int rescanInterval)
{
    return FcConfigSetRescanInterval (config, rescanInterval);
}


FcBool
FcConfigAddEdit (FcConfig	*config,
		 FcTest		*test,
		 FcEdit		*edit,
		 FcMatchKind	kind)
{
    FcSubst	*subst, **prev;
    FcTest	*t;
    int		num;

    switch (kind) {
    case FcMatchPattern:
	prev = &config->substPattern;
	break;
    case FcMatchFont:
	prev = &config->substFont;
	break;
    case FcMatchScan:
	prev = &config->substScan;
	break;
    default:
	return FcFalse;
    }
    subst = (FcSubst *) malloc (sizeof (FcSubst));
    if (!subst)
	return FcFalse;
    for (; *prev; prev = &(*prev)->next);
    *prev = subst;
    subst->next = 0;
    subst->test = test;
    subst->edit = edit;
    num = 0;
    for (t = test; t; t = t->next)
    {
	if (t->kind == FcMatchDefault)
	    t->kind = kind;
	num++;
    }
    if (config->maxObjects < num)
	config->maxObjects = num;
    if (FcDebug () & FC_DBG_EDIT)
    {
	printf ("Add Subst ");
	FcSubstPrint (subst);
    }
    return FcTrue;
}

typedef struct _FcSubState {
    FcPatternElt   *elt;
    FcValueList    *value;
} FcSubState;

static FcValue
FcConfigPromote (FcValue v, FcValue u, FcValuePromotionBuffer *buf)
{
    if (v.type == FcTypeInteger)
    {
	v.type = FcTypeDouble;
	v.u.d = (double) v.u.i;
    }
    else if (v.type == FcTypeVoid && u.type == FcTypeMatrix)
    {
	v.u.m = &FcIdentityMatrix;
	v.type = FcTypeMatrix;
    }
    else if (buf && v.type == FcTypeString && u.type == FcTypeLangSet)
    {
	v.u.l = FcLangSetPromote (v.u.s, buf);
	v.type = FcTypeLangSet;
    }
    return v;
}

FcBool
FcConfigCompareValue (const FcValue	*left_o,
		      FcOp		op_,
		      const FcValue	*right_o)
{
    FcValue	left = FcValueCanonicalize(left_o);
    FcValue	right = FcValueCanonicalize(right_o);
    FcBool	ret = FcFalse;
    FcOp	op = FC_OP_GET_OP (op_);
    int		flags = FC_OP_GET_FLAGS (op_);
    FcValuePromotionBuffer buf1, buf2;

    left = FcConfigPromote (left, right, &buf1);
    right = FcConfigPromote (right, left, &buf2);
    if (left.type == right.type)
    {
	switch (left.type) {
	case FcTypeInteger:
	    break;	/* FcConfigPromote prevents this from happening */
	case FcTypeDouble:
	    switch ((int) op) {
	    case FcOpEqual:
	    case FcOpContains:
	    case FcOpListing:
		ret = left.u.d == right.u.d;
		break;
	    case FcOpNotEqual:
	    case FcOpNotContains:
		ret = left.u.d != right.u.d;
		break;
	    case FcOpLess:
		ret = left.u.d < right.u.d;
		break;
	    case FcOpLessEqual:
		ret = left.u.d <= right.u.d;
		break;
	    case FcOpMore:
		ret = left.u.d > right.u.d;
		break;
	    case FcOpMoreEqual:
		ret = left.u.d >= right.u.d;
		break;
	    default:
		break;
	    }
	    break;
	case FcTypeBool:
	    switch ((int) op) {
	    case FcOpEqual:
	    case FcOpContains:
	    case FcOpListing:
		ret = left.u.b == right.u.b;
		break;
	    case FcOpNotEqual:
	    case FcOpNotContains:
		ret = left.u.b != right.u.b;
		break;
	    default:
		break;
	    }
	    break;
	case FcTypeString:
	    switch ((int) op) {
	    case FcOpEqual:
	    case FcOpListing:
		if (flags & FcOpFlagIgnoreBlanks)
		    ret = FcStrCmpIgnoreBlanksAndCase (left.u.s, right.u.s) == 0;
		else
		    ret = FcStrCmpIgnoreCase (left.u.s, right.u.s) == 0;
		break;
	    case FcOpContains:
		ret = FcStrStrIgnoreCase (left.u.s, right.u.s) != 0;
		break;
	    case FcOpNotEqual:
		if (flags & FcOpFlagIgnoreBlanks)
		    ret = FcStrCmpIgnoreBlanksAndCase (left.u.s, right.u.s) != 0;
		else
		    ret = FcStrCmpIgnoreCase (left.u.s, right.u.s) != 0;
		break;
	    case FcOpNotContains:
		ret = FcStrStrIgnoreCase (left.u.s, right.u.s) == 0;
		break;
	    default:
		break;
	    }
	    break;
	case FcTypeMatrix:
	    switch ((int) op) {
	    case FcOpEqual:
	    case FcOpContains:
	    case FcOpListing:
		ret = FcMatrixEqual (left.u.m, right.u.m);
		break;
	    case FcOpNotEqual:
	    case FcOpNotContains:
		ret = !FcMatrixEqual (left.u.m, right.u.m);
		break;
	    default:
		break;
	    }
	    break;
	case FcTypeCharSet:
	    switch ((int) op) {
	    case FcOpContains:
	    case FcOpListing:
		/* left contains right if right is a subset of left */
		ret = FcCharSetIsSubset (right.u.c, left.u.c);
		break;
	    case FcOpNotContains:
		/* left contains right if right is a subset of left */
		ret = !FcCharSetIsSubset (right.u.c, left.u.c);
		break;
	    case FcOpEqual:
		ret = FcCharSetEqual (left.u.c, right.u.c);
		break;
	    case FcOpNotEqual:
		ret = !FcCharSetEqual (left.u.c, right.u.c);
		break;
	    default:
		break;
	    }
	    break;
	case FcTypeLangSet:
	    switch ((int) op) {
	    case FcOpContains:
	    case FcOpListing:
		ret = FcLangSetContains (left.u.l, right.u.l);
		break;
	    case FcOpNotContains:
		ret = !FcLangSetContains (left.u.l, right.u.l);
		break;
	    case FcOpEqual:
		ret = FcLangSetEqual (left.u.l, right.u.l);
		break;
	    case FcOpNotEqual:
		ret = !FcLangSetEqual (left.u.l, right.u.l);
		break;
	    default:
		break;
	    }
	    break;
	case FcTypeVoid:
	    switch ((int) op) {
	    case FcOpEqual:
	    case FcOpContains:
	    case FcOpListing:
		ret = FcTrue;
		break;
	    default:
		break;
	    }
	    break;
	case FcTypeFTFace:
	    switch ((int) op) {
	    case FcOpEqual:
	    case FcOpContains:
	    case FcOpListing:
		ret = left.u.f == right.u.f;
		break;
	    case FcOpNotEqual:
	    case FcOpNotContains:
		ret = left.u.f != right.u.f;
		break;
	    default:
		break;
	    }
	    break;
	}
    }
    else
    {
	if (op == FcOpNotEqual || op == FcOpNotContains)
	    ret = FcTrue;
    }
    return ret;
}


#define _FcDoubleFloor(d)	((int) (d))
#define _FcDoubleCeil(d)	((double) (int) (d) == (d) ? (int) (d) : (int) ((d) + 1))
#define FcDoubleFloor(d)	((d) >= 0 ? _FcDoubleFloor(d) : -_FcDoubleCeil(-(d)))
#define FcDoubleCeil(d)		((d) >= 0 ? _FcDoubleCeil(d) : -_FcDoubleFloor(-(d)))
#define FcDoubleRound(d)	FcDoubleFloor ((d) + 0.5)
#define FcDoubleTrunc(d)	((d) >= 0 ? _FcDoubleFloor (d) : -_FcDoubleFloor (-(d)))

static FcValue
FcConfigEvaluate (FcPattern *p, FcPattern *p_pat, FcMatchKind kind, FcExpr *e)
{
    FcValue	v, vl, vr;
    FcMatrix	*m;
    FcChar8     *str;
    FcOp	op = FC_OP_GET_OP (e->op);

    switch ((int) op) {
    case FcOpInteger:
	v.type = FcTypeInteger;
	v.u.i = e->u.ival;
	break;
    case FcOpDouble:
	v.type = FcTypeDouble;
	v.u.d = e->u.dval;
	break;
    case FcOpString:
	v.type = FcTypeString;
	v.u.s = e->u.sval;
	v = FcValueSave (v);
	break;
    case FcOpMatrix:
	{
	  FcMatrix m;
	  FcValue xx, xy, yx, yy;
	  v.type = FcTypeMatrix;
	  xx = FcConfigPromote (FcConfigEvaluate (p, p_pat, kind, e->u.mexpr->xx), v, NULL);
	  xy = FcConfigPromote (FcConfigEvaluate (p, p_pat, kind, e->u.mexpr->xy), v, NULL);
	  yx = FcConfigPromote (FcConfigEvaluate (p, p_pat, kind, e->u.mexpr->yx), v, NULL);
	  yy = FcConfigPromote (FcConfigEvaluate (p, p_pat, kind, e->u.mexpr->yy), v, NULL);
	  if (xx.type == FcTypeDouble && xy.type == FcTypeDouble &&
	      yx.type == FcTypeDouble && yy.type == FcTypeDouble)
	  {
	    m.xx = xx.u.d;
	    m.xy = xy.u.d;
	    m.yx = yx.u.d;
	    m.yy = yy.u.d;
	    v.u.m = &m;
	  }
	  else
	    v.type = FcTypeVoid;
	  v = FcValueSave (v);
	}
	break;
    case FcOpCharSet:
	v.type = FcTypeCharSet;
	v.u.c = e->u.cval;
	v = FcValueSave (v);
	break;
    case FcOpLangSet:
	v.type = FcTypeLangSet;
	v.u.l = e->u.lval;
	v = FcValueSave (v);
	break;
    case FcOpBool:
	v.type = FcTypeBool;
	v.u.b = e->u.bval;
	break;
    case FcOpField:
	if (kind == FcMatchFont && e->u.name.kind == FcMatchPattern)
	{
	    if (FcResultMatch != FcPatternObjectGet (p_pat, e->u.name.object, 0, &v))
		v.type = FcTypeVoid;
	}
	else if (kind == FcMatchPattern && e->u.name.kind == FcMatchFont)
	{
	    fprintf (stderr,
                    "Fontconfig warning: <name> tag has target=\"font\" in a <match target=\"pattern\">.\n");
	    v.type = FcTypeVoid;
	}
	else
	{
	    if (FcResultMatch != FcPatternObjectGet (p, e->u.name.object, 0, &v))
		v.type = FcTypeVoid;
	}
	v = FcValueSave (v);
	break;
    case FcOpConst:
	if (FcNameConstant (e->u.constant, &v.u.i))
	    v.type = FcTypeInteger;
	else
	    v.type = FcTypeVoid;
	break;
    case FcOpQuest:
	vl = FcConfigEvaluate (p, p_pat, kind, e->u.tree.left);
	if (vl.type == FcTypeBool)
	{
	    if (vl.u.b)
		v = FcConfigEvaluate (p, p_pat, kind, e->u.tree.right->u.tree.left);
	    else
		v = FcConfigEvaluate (p, p_pat, kind, e->u.tree.right->u.tree.right);
	}
	else
	    v.type = FcTypeVoid;
	FcValueDestroy (vl);
	break;
    case FcOpEqual:
    case FcOpNotEqual:
    case FcOpLess:
    case FcOpLessEqual:
    case FcOpMore:
    case FcOpMoreEqual:
    case FcOpContains:
    case FcOpNotContains:
    case FcOpListing:
	vl = FcConfigEvaluate (p, p_pat, kind, e->u.tree.left);
	vr = FcConfigEvaluate (p, p_pat, kind, e->u.tree.right);
	v.type = FcTypeBool;
	v.u.b = FcConfigCompareValue (&vl, e->op, &vr);
	FcValueDestroy (vl);
	FcValueDestroy (vr);
	break;	
    case FcOpOr:
    case FcOpAnd:
    case FcOpPlus:
    case FcOpMinus:
    case FcOpTimes:
    case FcOpDivide:
	vl = FcConfigEvaluate (p, p_pat, kind, e->u.tree.left);
	vr = FcConfigEvaluate (p, p_pat, kind, e->u.tree.right);
	vl = FcConfigPromote (vl, vr, NULL);
	vr = FcConfigPromote (vr, vl, NULL);
	if (vl.type == vr.type)
	{
	    switch ((int) vl.type) {
	    case FcTypeDouble:
		switch ((int) op) {
		case FcOpPlus:	
		    v.type = FcTypeDouble;
		    v.u.d = vl.u.d + vr.u.d;
		    break;
		case FcOpMinus:
		    v.type = FcTypeDouble;
		    v.u.d = vl.u.d - vr.u.d;
		    break;
		case FcOpTimes:
		    v.type = FcTypeDouble;
		    v.u.d = vl.u.d * vr.u.d;
		    break;
		case FcOpDivide:
		    v.type = FcTypeDouble;
		    v.u.d = vl.u.d / vr.u.d;
		    break;
		default:
		    v.type = FcTypeVoid;
		    break;
		}
		if (v.type == FcTypeDouble &&
		    v.u.d == (double) (int) v.u.d)
		{
		    v.type = FcTypeInteger;
		    v.u.i = (int) v.u.d;
		}
		break;
	    case FcTypeBool:
		switch ((int) op) {
		case FcOpOr:
		    v.type = FcTypeBool;
		    v.u.b = vl.u.b || vr.u.b;
		    break;
		case FcOpAnd:
		    v.type = FcTypeBool;
		    v.u.b = vl.u.b && vr.u.b;
		    break;
		default:
		    v.type = FcTypeVoid;
		    break;
		}
		break;
	    case FcTypeString:
		switch ((int) op) {
		case FcOpPlus:
		    v.type = FcTypeString;
		    str = FcStrPlus (vl.u.s, vr.u.s);
		    v.u.s = FcStrdup (str);
		    FcStrFree (str);
			
		    if (!v.u.s)
			v.type = FcTypeVoid;
		    break;
		default:
		    v.type = FcTypeVoid;
		    break;
		}
		break;
	    case FcTypeMatrix:
		switch ((int) op) {
		case FcOpTimes:
		    v.type = FcTypeMatrix;
		    m = malloc (sizeof (FcMatrix));
		    if (m)
		    {
			FcMatrixMultiply (m, vl.u.m, vr.u.m);
			v.u.m = m;
		    }
		    else
		    {
			v.type = FcTypeVoid;
		    }
		    break;
		default:
		    v.type = FcTypeVoid;
		    break;
		}
		break;
	    case FcTypeCharSet:
		switch ((int) op) {
		case FcOpPlus:
		    v.type = FcTypeCharSet;
		    v.u.c = FcCharSetUnion (vl.u.c, vr.u.c);
		    if (!v.u.c)
			v.type = FcTypeVoid;
		    break;
		case FcOpMinus:
		    v.type = FcTypeCharSet;
		    v.u.c = FcCharSetSubtract (vl.u.c, vr.u.c);
		    if (!v.u.c)
			v.type = FcTypeVoid;
		    break;
		default:
		    v.type = FcTypeVoid;
		    break;
		}
		break;
	    case FcTypeLangSet:
		switch ((int) op) {
		case FcOpPlus:
		    v.type = FcTypeLangSet;
		    v.u.l = FcLangSetUnion (vl.u.l, vr.u.l);
		    if (!v.u.l)
			v.type = FcTypeVoid;
		    break;
		case FcOpMinus:
		    v.type = FcTypeLangSet;
		    v.u.l = FcLangSetSubtract (vl.u.l, vr.u.l);
		    if (!v.u.l)
			v.type = FcTypeVoid;
		    break;
		default:
		    v.type = FcTypeVoid;
		    break;
		}
		break;
	    default:
		v.type = FcTypeVoid;
		break;
	    }
	}
	else
	    v.type = FcTypeVoid;
	FcValueDestroy (vl);
	FcValueDestroy (vr);
	break;
    case FcOpNot:
	vl = FcConfigEvaluate (p, p_pat, kind, e->u.tree.left);
	switch ((int) vl.type) {
	case FcTypeBool:
	    v.type = FcTypeBool;
	    v.u.b = !vl.u.b;
	    break;
	default:
	    v.type = FcTypeVoid;
	    break;
	}
	FcValueDestroy (vl);
	break;
    case FcOpFloor:
	vl = FcConfigEvaluate (p, p_pat, kind, e->u.tree.left);
	switch ((int) vl.type) {
	case FcTypeInteger:
	    v = vl;
	    break;
	case FcTypeDouble:
	    v.type = FcTypeInteger;
	    v.u.i = FcDoubleFloor (vl.u.d);
	    break;
	default:
	    v.type = FcTypeVoid;
	    break;
	}
	FcValueDestroy (vl);
	break;
    case FcOpCeil:
	vl = FcConfigEvaluate (p, p_pat, kind, e->u.tree.left);
	switch ((int) vl.type) {
	case FcTypeInteger:
	    v = vl;
	    break;
	case FcTypeDouble:
	    v.type = FcTypeInteger;
	    v.u.i = FcDoubleCeil (vl.u.d);
	    break;
	default:
	    v.type = FcTypeVoid;
	    break;
	}
	FcValueDestroy (vl);
	break;
    case FcOpRound:
	vl = FcConfigEvaluate (p, p_pat, kind, e->u.tree.left);
	switch ((int) vl.type) {
	case FcTypeInteger:
	    v = vl;
	    break;
	case FcTypeDouble:
	    v.type = FcTypeInteger;
	    v.u.i = FcDoubleRound (vl.u.d);
	    break;
	default:
	    v.type = FcTypeVoid;
	    break;
	}
	FcValueDestroy (vl);
	break;
    case FcOpTrunc:
	vl = FcConfigEvaluate (p, p_pat, kind, e->u.tree.left);
	switch ((int) vl.type) {
	case FcTypeInteger:
	    v = vl;
	    break;
	case FcTypeDouble:
	    v.type = FcTypeInteger;
	    v.u.i = FcDoubleTrunc (vl.u.d);
	    break;
	default:
	    v.type = FcTypeVoid;
	    break;
	}
	FcValueDestroy (vl);
	break;
    default:
	v.type = FcTypeVoid;
	break;
    }
    return v;
}

static FcValueList *
FcConfigMatchValueList (FcPattern	*p,
			FcPattern	*p_pat,
			FcMatchKind      kind,
			FcTest		*t,
			FcValueList	*values)
{
    FcValueList	    *ret = 0;
    FcExpr	    *e = t->expr;
    FcValue	    value;
    FcValueList	    *v;

    while (e)
    {
	/* Compute the value of the match expression */
	if (FC_OP_GET_OP (e->op) == FcOpComma)
	{
	    value = FcConfigEvaluate (p, p_pat, kind, e->u.tree.left);
	    e = e->u.tree.right;
	}
	else
	{
	    value = FcConfigEvaluate (p, p_pat, kind, e);
	    e = 0;
	}

	for (v = values; v; v = FcValueListNext(v))
	{
	    /* Compare the pattern value to the match expression value */
	    if (FcConfigCompareValue (&v->value, t->op, &value))
	    {
		if (!ret)
		    ret = v;
	    }
	    else
	    {
		if (t->qual == FcQualAll)
		{
		    ret = 0;
		    break;
		}
	    }
	}
	FcValueDestroy (value);
    }
    return ret;
}

static FcValueList *
FcConfigValues (FcPattern *p, FcPattern *p_pat, FcMatchKind kind, FcExpr *e, FcValueBinding binding)
{
    FcValueList	*l;

    if (!e)
	return 0;
    l = (FcValueList *) malloc (sizeof (FcValueList));
    if (!l)
	return 0;
    if (FC_OP_GET_OP (e->op) == FcOpComma)
    {
	l->value = FcConfigEvaluate (p, p_pat, kind, e->u.tree.left);
	l->next = FcConfigValues (p, p_pat, kind, e->u.tree.right, binding);
    }
    else
    {
	l->value = FcConfigEvaluate (p, p_pat, kind, e);
	l->next = NULL;
    }
    l->binding = binding;
    if (l->value.type == FcTypeVoid)
    {
	FcValueList  *next = FcValueListNext(l);

	free (l);
	l = next;
    }

    return l;
}

static FcBool
FcConfigAdd (FcValueListPtr *head,
	     FcValueList    *position,
	     FcBool	    append,
	     FcValueList    *new,
	     FcObject        object)
{
    FcValueListPtr  *prev, l, last, v;
    FcValueBinding  sameBinding;

    /*
     * Make sure the stored type is valid for built-in objects
     */
    for (l = new; l != NULL; l = FcValueListNext (l))
    {
	if (!FcObjectValidType (object, l->value.type))
	{
	    fprintf (stderr,
		     "Fontconfig warning: FcPattern object %s does not accept value", FcObjectName (object));
	    FcValuePrintFile (stderr, l->value);
	    fprintf (stderr, "\n");

	    if (FcDebug () & FC_DBG_EDIT)
	    {
		printf ("Not adding\n");
	    }

	    return FcFalse;
	}
    }

    if (position)
	sameBinding = position->binding;
    else
	sameBinding = FcValueBindingWeak;
    for (v = new; v != NULL; v = FcValueListNext(v))
	if (v->binding == FcValueBindingSame)
	    v->binding = sameBinding;
    if (append)
    {
	if (position)
	    prev = &position->next;
	else
	    for (prev = head; *prev != NULL;
		 prev = &(*prev)->next)
		;
    }
    else
    {
	if (position)
	{
	    for (prev = head; *prev != NULL;
		 prev = &(*prev)->next)
	    {
		if (*prev == position)
		    break;
	    }
	}
	else
	    prev = head;

	if (FcDebug () & FC_DBG_EDIT)
	{
	    if (*prev == NULL)
		printf ("position not on list\n");
	}
    }

    if (FcDebug () & FC_DBG_EDIT)
    {
	printf ("%s list before ", append ? "Append" : "Prepend");
	FcValueListPrintWithPosition (*head, *prev);
	printf ("\n");
    }

    if (new)
    {
	last = new;
	while (last->next != NULL)
	    last = last->next;

	last->next = *prev;
	*prev = new;
    }

    if (FcDebug () & FC_DBG_EDIT)
    {
	printf ("%s list after ", append ? "Append" : "Prepend");
	FcValueListPrint (*head);
	printf ("\n");
    }

    return FcTrue;
}

static void
FcConfigDel (FcValueListPtr *head,
	     FcValueList    *position)
{
    FcValueListPtr *prev;

    for (prev = head; *prev != NULL; prev = &(*prev)->next)
    {
	if (*prev == position)
	{
	    *prev = position->next;
	    position->next = NULL;
	    FcValueListDestroy (position);
	    break;
	}
    }
}

static void
FcConfigPatternAdd (FcPattern	*p,
		    FcObject	object,
		    FcValueList	*list,
		    FcBool	append)
{
    if (list)
    {
	FcPatternElt    *e = FcPatternObjectInsertElt (p, object);

	if (!e)
	    return;
	FcConfigAdd (&e->values, 0, append, list, object);
    }
}

/*
 * Delete all values associated with a field
 */
static void
FcConfigPatternDel (FcPattern	*p,
		    FcObject	object)
{
    FcPatternElt    *e = FcPatternObjectFindElt (p, object);
    if (!e)
	return;
    while (e->values != NULL)
	FcConfigDel (&e->values, e->values);
}

static void
FcConfigPatternCanon (FcPattern	    *p,
		      FcObject	    object)
{
    FcPatternElt    *e = FcPatternObjectFindElt (p, object);
    if (!e)
	return;
    if (e->values == NULL)
	FcPatternObjectDel (p, object);
}

FcBool
FcConfigSubstituteWithPat (FcConfig    *config,
			   FcPattern   *p,
			   FcPattern   *p_pat,
			   FcMatchKind kind)
{
    FcSubst	    *s;
    FcSubState	    *st;
    int		    i;
    FcTest	    *t;
    FcEdit	    *e;
    FcValueList	    *l;
    FcPattern	    *m;
    FcStrSet	    *strs;

    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return FcFalse;
    }

    switch (kind) {
    case FcMatchPattern:
	s = config->substPattern;
	strs = FcGetDefaultLangs ();
	if (strs)
	{
	    FcStrList *l = FcStrListCreate (strs);
	    FcChar8 *lang;
	    FcValue v;

	    FcStrSetDestroy (strs);
	    while (l && (lang = FcStrListNext (l)))
	    {
		v.type = FcTypeString;
		v.u.s = lang;
		FcPatternObjectAddWithBinding (p, FC_LANG_OBJECT, v, FcValueBindingWeak, FcTrue);
	    }
	    FcStrListDone (l);
	}
	break;
    case FcMatchFont:
	s = config->substFont;
	break;
    case FcMatchScan:
	s = config->substScan;
	break;
    default:
	return FcFalse;
    }

    st = (FcSubState *) malloc (config->maxObjects * sizeof (FcSubState));
    if (!st && config->maxObjects)
	return FcFalse;

    if (FcDebug () & FC_DBG_EDIT)
    {
	printf ("FcConfigSubstitute ");
	FcPatternPrint (p);
    }
    for (; s; s = s->next)
    {
	/*
	 * Check the tests to see if
	 * they all match the pattern
	 */
	for (t = s->test, i = 0; t; t = t->next, i++)
	{
	    if (FcDebug () & FC_DBG_EDIT)
	    {
		printf ("FcConfigSubstitute test ");
		FcTestPrint (t);
	    }
	    st[i].elt = 0;
	    if (kind == FcMatchFont && t->kind == FcMatchPattern)
		m = p_pat;
	    else
		m = p;
	    if (m)
		st[i].elt = FcPatternObjectFindElt (m, t->object);
	    else
		st[i].elt = 0;
	    /*
	     * If there's no such field in the font,
	     * then FcQualAll matches while FcQualAny does not
	     */
	    if (!st[i].elt)
	    {
		if (t->qual == FcQualAll)
		{
		    st[i].value = 0;
		    continue;
		}
		else
		    break;
	    }
	    /*
	     * Check to see if there is a match, mark the location
	     * to apply match-relative edits
	     */
	    st[i].value = FcConfigMatchValueList (m, p_pat, kind, t, st[i].elt->values);
	    if (!st[i].value)
		break;
	    if (t->qual == FcQualFirst && st[i].value != st[i].elt->values)
		break;
	    if (t->qual == FcQualNotFirst && st[i].value == st[i].elt->values)
		break;
	}
	if (t)
	{
	    if (FcDebug () & FC_DBG_EDIT)
		printf ("No match\n");
	    continue;
	}
	if (FcDebug () & FC_DBG_EDIT)
	{
	    printf ("Substitute ");
	    FcSubstPrint (s);
	}
	for (e = s->edit; e; e = e->next)
	{
	    /*
	     * Evaluate the list of expressions
	     */
	    l = FcConfigValues (p, p_pat,kind,  e->expr, e->binding);
	    /*
	     * Locate any test associated with this field, skipping
	     * tests associated with the pattern when substituting in
	     * the font
	     */
	    for (t = s->test, i = 0; t; t = t->next, i++)
	    {
		if ((t->kind == FcMatchFont || kind == FcMatchPattern) &&
		    t->object == e->object)
		{
		    /*
		     * KLUDGE - the pattern may have been reallocated or
		     * things may have been inserted or deleted above
		     * this element by other edits.  Go back and find
		     * the element again
		     */
		    if (e != s->edit && st[i].elt)
			st[i].elt = FcPatternObjectFindElt (p, t->object);
		    if (!st[i].elt)
			t = 0;
		    break;
		}
	    }
	    switch (FC_OP_GET_OP (e->op)) {
	    case FcOpAssign:
		/*
		 * If there was a test, then replace the matched
		 * value with the new list of values
		 */
		if (t)
		{
		    FcValueList	*thisValue = st[i].value;
		    FcValueList	*nextValue = thisValue;
		
		    /*
		     * Append the new list of values after the current value
		     */
		    FcConfigAdd (&st[i].elt->values, thisValue, FcTrue, l, e->object);
		    /*
		     * Delete the marked value
		     */
                    if (thisValue)
			FcConfigDel (&st[i].elt->values, thisValue);
		    /*
		     * Adjust any pointers into the value list to ensure
		     * future edits occur at the same place
		     */
		    for (t = s->test, i = 0; t; t = t->next, i++)
		    {
			if (st[i].value == thisValue)
			    st[i].value = nextValue;
		    }
		    break;
		}
		/* fall through ... */
	    case FcOpAssignReplace:
		/*
		 * Delete all of the values and insert
		 * the new set
		 */
		FcConfigPatternDel (p, e->object);
		FcConfigPatternAdd (p, e->object, l, FcTrue);
		/*
		 * Adjust any pointers into the value list as they no
		 * longer point to anything valid
		 */
		if (t)
		{
		    FcPatternElt    *thisElt = st[i].elt;
		    for (t = s->test, i = 0; t; t = t->next, i++)
		    {
			if (st[i].elt == thisElt)
			    st[i].value = 0;
		    }
		}
		break;
	    case FcOpPrepend:
		if (t)
		{
		    FcConfigAdd (&st[i].elt->values, st[i].value, FcFalse, l, e->object);
		    break;
		}
		/* fall through ... */
	    case FcOpPrependFirst:
		FcConfigPatternAdd (p, e->object, l, FcFalse);
		break;
	    case FcOpAppend:
		if (t)
		{
		    FcConfigAdd (&st[i].elt->values, st[i].value, FcTrue, l, e->object);
		    break;
		}
		/* fall through ... */
	    case FcOpAppendLast:
		FcConfigPatternAdd (p, e->object, l, FcTrue);
		break;
	    default:
                FcValueListDestroy (l);
		break;
	    }
	}
	/*
	 * Now go through the pattern and eliminate
	 * any properties without data
	 */
	for (e = s->edit; e; e = e->next)
	    FcConfigPatternCanon (p, e->object);

	if (FcDebug () & FC_DBG_EDIT)
	{
	    printf ("FcConfigSubstitute edit");
	    FcPatternPrint (p);
	}
    }
    free (st);
    if (FcDebug () & FC_DBG_EDIT)
    {
	printf ("FcConfigSubstitute done");
	FcPatternPrint (p);
    }
    return FcTrue;
}

FcBool
FcConfigSubstitute (FcConfig	*config,
		    FcPattern	*p,
		    FcMatchKind	kind)
{
    return FcConfigSubstituteWithPat (config, p, 0, kind);
}

#if defined (_WIN32)

static FcChar8 fontconfig_path[1000] = ""; /* MT-dontcare */

#  if (defined (PIC) || defined (DLL_EXPORT))

BOOL WINAPI
DllMain (HINSTANCE hinstDLL,
	 DWORD     fdwReason,
	 LPVOID    lpvReserved);

BOOL WINAPI
DllMain (HINSTANCE hinstDLL,
	 DWORD     fdwReason,
	 LPVOID    lpvReserved)
{
  FcChar8 *p;

  switch (fdwReason) {
  case DLL_PROCESS_ATTACH:
      if (!GetModuleFileName ((HMODULE) hinstDLL, (LPCH) fontconfig_path,
			      sizeof (fontconfig_path)))
	  break;

      /* If the fontconfig DLL is in a "bin" or "lib" subfolder,
       * assume it's a Unix-style installation tree, and use
       * "etc/fonts" in there as FONTCONFIG_PATH. Otherwise use the
       * folder where the DLL is as FONTCONFIG_PATH.
       */
      p = (FcChar8 *) strrchr ((const char *) fontconfig_path, '\\');
      if (p)
      {
	  *p = '\0';
	  p = (FcChar8 *) strrchr ((const char *) fontconfig_path, '\\');
	  if (p && (FcStrCmpIgnoreCase (p + 1, (const FcChar8 *) "bin") == 0 ||
		    FcStrCmpIgnoreCase (p + 1, (const FcChar8 *) "lib") == 0))
	      *p = '\0';
	  strcat ((char *) fontconfig_path, "\\etc\\fonts");
      }
      else
          fontconfig_path[0] = '\0';

      break;
  }

  return TRUE;
}

#  endif /* !PIC */

#undef FONTCONFIG_PATH
#define FONTCONFIG_PATH fontconfig_path

#endif /* !_WIN32 */

#ifndef FONTCONFIG_FILE
#define FONTCONFIG_FILE	"fonts.conf"
#endif

static FcChar8 *
FcConfigFileExists (const FcChar8 *dir, const FcChar8 *file)
{
    FcChar8    *path;
    int         size, osize;

    if (!dir)
	dir = (FcChar8 *) "";

    osize = strlen ((char *) dir) + 1 + strlen ((char *) file) + 1;
    /*
     * workaround valgrind warning because glibc takes advantage of how it knows memory is
     * allocated to implement strlen by reading in groups of 4
     */
    size = (osize + 3) & ~3;

    path = malloc (size);
    if (!path)
	return 0;

    strcpy ((char *) path, (const char *) dir);
    /* make sure there's a single separator */
#ifdef _WIN32
    if ((!path[0] || (path[strlen((char *) path)-1] != '/' &&
		      path[strlen((char *) path)-1] != '\\')) &&
	!(file[0] == '/' ||
	  file[0] == '\\' ||
	  (isalpha (file[0]) && file[1] == ':' && (file[2] == '/' || file[2] == '\\'))))
	strcat ((char *) path, "\\");
#else
    if ((!path[0] || path[strlen((char *) path)-1] != '/') && file[0] != '/')
	strcat ((char *) path, "/");
    else
	osize--;
#endif
    strcat ((char *) path, (char *) file);

    if (access ((char *) path, R_OK) == 0)
	return path;

    FcStrFree (path);

    return 0;
}

static FcChar8 **
FcConfigGetPath (void)
{
    FcChar8    **path;
    FcChar8    *env, *e, *colon;
    FcChar8    *dir;
    int	    npath;
    int	    i;

    npath = 2;	/* default dir + null */
    env = (FcChar8 *) getenv ("FONTCONFIG_PATH");
    if (env)
    {
	e = env;
	npath++;
	while (*e)
	    if (*e++ == FC_SEARCH_PATH_SEPARATOR)
		npath++;
    }
    path = calloc (npath, sizeof (FcChar8 *));
    if (!path)
	goto bail0;
    i = 0;

    if (env)
    {
	e = env;
	while (*e)
	{
	    colon = (FcChar8 *) strchr ((char *) e, FC_SEARCH_PATH_SEPARATOR);
	    if (!colon)
		colon = e + strlen ((char *) e);
	    path[i] = malloc (colon - e + 1);
	    if (!path[i])
		goto bail1;
	    strncpy ((char *) path[i], (const char *) e, colon - e);
	    path[i][colon - e] = '\0';
	    if (*colon)
		e = colon + 1;
	    else
		e = colon;
	    i++;
	}
    }

#ifdef _WIN32
	if (fontconfig_path[0] == '\0')
	{
		char *p;
		if(!GetModuleFileName(NULL, (LPCH) fontconfig_path, sizeof(fontconfig_path)))
			goto bail1;
		p = strrchr ((const char *) fontconfig_path, '\\');
		if (p) *p = '\0';
		strcat ((char *) fontconfig_path, "\\fonts");
	}
#endif
    dir = (FcChar8 *) FONTCONFIG_PATH;
    path[i] = malloc (strlen ((char *) dir) + 1);
    if (!path[i])
	goto bail1;
    strcpy ((char *) path[i], (const char *) dir);
    return path;

bail1:
    for (i = 0; path[i]; i++)
	free (path[i]);
    free (path);
bail0:
    return 0;
}

static void
FcConfigFreePath (FcChar8 **path)
{
    FcChar8    **p;

    for (p = path; *p; p++)
	free (*p);
    free (path);
}

static FcBool	_FcConfigHomeEnabled = FcTrue; /* MT-goodenough */

FcChar8 *
FcConfigHome (void)
{
    if (_FcConfigHomeEnabled)
    {
        char *home = getenv ("HOME");

#ifdef _WIN32
	if (home == NULL)
	    home = getenv ("USERPROFILE");
#endif

	return (FcChar8 *) home;
    }
    return 0;
}

FcChar8 *
FcConfigXdgCacheHome (void)
{
    const char *env = getenv ("XDG_CACHE_HOME");
    FcChar8 *ret = NULL;

    if (env)
	ret = FcStrCopy ((const FcChar8 *)env);
    else
    {
	const FcChar8 *home = FcConfigHome ();
	size_t len = home ? strlen ((const char *)home) : 0;

	ret = malloc (len + 7 + 1);
	if (ret)
	{
	    memcpy (ret, home, len);
	    memcpy (&ret[len], FC_DIR_SEPARATOR_S ".cache", 7);
	    ret[len + 7] = 0;
	}
    }

    return ret;
}

FcChar8 *
FcConfigXdgConfigHome (void)
{
    const char *env = getenv ("XDG_CONFIG_HOME");
    FcChar8 *ret = NULL;

    if (env)
	ret = FcStrCopy ((const FcChar8 *)env);
    else
    {
	const FcChar8 *home = FcConfigHome ();
	size_t len = home ? strlen ((const char *)home) : 0;

	ret = malloc (len + 8 + 1);
	if (ret)
	{
	    memcpy (ret, home, len);
	    memcpy (&ret[len], FC_DIR_SEPARATOR_S ".config", 8);
	    ret[len + 8] = 0;
	}
    }

    return ret;
}

FcChar8 *
FcConfigXdgDataHome (void)
{
    const char *env = getenv ("XDG_DATA_HOME");
    FcChar8 *ret = NULL;

    if (env)
	ret = FcStrCopy ((const FcChar8 *)env);
    else
    {
	const FcChar8 *home = FcConfigHome ();
	size_t len = home ? strlen ((const char *)home) : 0;

	ret = malloc (len + 13 + 1);
	if (ret)
	{
	    memcpy (ret, home, len);
	    memcpy (&ret[len], FC_DIR_SEPARATOR_S ".local" FC_DIR_SEPARATOR_S "share", 13);
	    ret[len + 13] = 0;
	}
    }

    return ret;
}

FcBool
FcConfigEnableHome (FcBool enable)
{
    FcBool  prev = _FcConfigHomeEnabled;
    _FcConfigHomeEnabled = enable;
    return prev;
}

FcChar8 *
FcConfigFilename (const FcChar8 *url)
{
    FcChar8    *file, *dir, **path, **p;

    if (!url || !*url)
    {
	url = (FcChar8 *) getenv ("FONTCONFIG_FILE");
	if (!url)
	    url = (FcChar8 *) FONTCONFIG_FILE;
    }
    file = 0;

#ifdef _WIN32
    if (isalpha (*url) &&
	url[1] == ':' &&
	(url[2] == '/' || url[2] == '\\'))
	goto absolute_path;
#endif

    switch (*url) {
    case '~':
	dir = FcConfigHome ();
	if (dir)
	    file = FcConfigFileExists (dir, url + 1);
	else
	    file = 0;
	break;
#ifdef _WIN32
    case '\\':
    absolute_path:
#endif
    case '/':
	file = FcConfigFileExists (0, url);
	break;
    default:
	path = FcConfigGetPath ();
	if (!path)
	    return NULL;
	for (p = path; *p; p++)
	{
	    file = FcConfigFileExists (*p, url);
	    if (file)
		break;
	}
	FcConfigFreePath (path);
	break;
    }

    return file;
}

/*
 * Manage the application-specific fonts
 */

FcBool
FcConfigAppFontAddFile (FcConfig    *config,
			const FcChar8  *file)
{
    FcFontSet	*set;
    FcStrSet	*subdirs;
    FcStrList	*sublist;
    FcChar8	*subdir;

    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return FcFalse;
    }

    subdirs = FcStrSetCreate ();
    if (!subdirs)
	return FcFalse;

    set = FcConfigGetFonts (config, FcSetApplication);
    if (!set)
    {
	set = FcFontSetCreate ();
	if (!set)
	{
	    FcStrSetDestroy (subdirs);
	    return FcFalse;
	}
	FcConfigSetFonts (config, set, FcSetApplication);
    }
	
    if (!FcFileScanConfig (set, subdirs, config->blanks, file, config))
    {
	FcStrSetDestroy (subdirs);
	return FcFalse;
    }
    if ((sublist = FcStrListCreate (subdirs)))
    {
	while ((subdir = FcStrListNext (sublist)))
	{
	    FcConfigAppFontAddDir (config, subdir);
	}
	FcStrListDone (sublist);
    }
    FcStrSetDestroy (subdirs);
    return FcTrue;
}

FcBool
FcConfigAppFontAddDir (FcConfig	    *config,
		       const FcChar8   *dir)
{
    FcFontSet	*set;
    FcStrSet	*dirs;

    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return FcFalse;
    }

    dirs = FcStrSetCreate ();
    if (!dirs)
	return FcFalse;

    set = FcConfigGetFonts (config, FcSetApplication);
    if (!set)
    {
	set = FcFontSetCreate ();
	if (!set)
	{
	    FcStrSetDestroy (dirs);
	    return FcFalse;
	}
	FcConfigSetFonts (config, set, FcSetApplication);
    }

    FcStrSetAddFilename (dirs, dir);

    if (!FcConfigAddDirList (config, FcSetApplication, dirs))
    {
	FcStrSetDestroy (dirs);
	return FcFalse;
    }
    FcStrSetDestroy (dirs);
    return FcTrue;
}

void
FcConfigAppFontClear (FcConfig	    *config)
{
    if (!config)
    {
	config = FcConfigGetCurrent ();
	if (!config)
	    return;
    }

    FcConfigSetFonts (config, 0, FcSetApplication);
}

/*
 * Manage filename-based font source selectors
 */

FcBool
FcConfigGlobAdd (FcConfig	*config,
		 const FcChar8  *glob,
		 FcBool		accept)
{
    FcStrSet	*set = accept ? config->acceptGlobs : config->rejectGlobs;

    return FcStrSetAdd (set, glob);
}

static FcBool
FcConfigGlobMatch (const FcChar8    *glob,
		   const FcChar8    *string)
{
    FcChar8	c;

    while ((c = *glob++))
    {
	switch (c) {
	case '*':
	    /* short circuit common case */
	    if (!*glob)
		return FcTrue;
	    /* short circuit another common case */
	    if (strchr ((char *) glob, '*') == 0)
	    {
		size_t l1, l2;

		l1 = strlen ((char *) string);
		l2 = strlen ((char *) glob);
		if (l1 < l2)
		    return FcFalse;
		string += (l1 - l2);
	    }
	    while (*string)
	    {
		if (FcConfigGlobMatch (glob, string))
		    return FcTrue;
		string++;
	    }
	    return FcFalse;
	case '?':
	    if (*string++ == '\0')
		return FcFalse;
	    break;
	default:
	    if (*string++ != c)
		return FcFalse;
	    break;
	}
    }
    return *string == '\0';
}

static FcBool
FcConfigGlobsMatch (const FcStrSet	*globs,
		    const FcChar8	*string)
{
    int	i;

    for (i = 0; i < globs->num; i++)
	if (FcConfigGlobMatch (globs->strs[i], string))
	    return FcTrue;
    return FcFalse;
}

FcBool
FcConfigAcceptFilename (FcConfig	*config,
			const FcChar8	*filename)
{
    if (FcConfigGlobsMatch (config->acceptGlobs, filename))
	return FcTrue;
    if (FcConfigGlobsMatch (config->rejectGlobs, filename))
	return FcFalse;
    return FcTrue;
}

/*
 * Manage font-pattern based font source selectors
 */

FcBool
FcConfigPatternsAdd (FcConfig	*config,
		     FcPattern	*pattern,
		     FcBool	accept)
{
    FcFontSet	*set = accept ? config->acceptPatterns : config->rejectPatterns;

    return FcFontSetAdd (set, pattern);
}

static FcBool
FcConfigPatternsMatch (const FcFontSet	*patterns,
		       const FcPattern	*font)
{
    int i;

    for (i = 0; i < patterns->nfont; i++)
	if (FcListPatternMatchAny (patterns->fonts[i], font))
	    return FcTrue;
    return FcFalse;
}

FcBool
FcConfigAcceptFont (FcConfig	    *config,
		    const FcPattern *font)
{
    if (FcConfigPatternsMatch (config->acceptPatterns, font))
	return FcTrue;
    if (FcConfigPatternsMatch (config->rejectPatterns, font))
	return FcFalse;
    return FcTrue;
}
#define __fccfg__
#include "fcaliastail.h"
#undef __fccfg__
