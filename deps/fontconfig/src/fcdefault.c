/*
 * fontconfig/src/fcdefault.c
 *
 * Copyright © 2001 Keith Packard
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

#include "fcint.h"
#include <string.h>

/* MT-safe */

static const struct {
    FcObject	field;
    FcBool	value;
} FcBoolDefaults[] = {
    { FC_HINTING_OBJECT,	   FcTrue	},  /* !FT_LOAD_NO_HINTING */
    { FC_VERTICAL_LAYOUT_OBJECT,   FcFalse	},  /* FC_LOAD_VERTICAL_LAYOUT */
    { FC_AUTOHINT_OBJECT,	   FcFalse	},  /* FC_LOAD_FORCE_AUTOHINT */
    { FC_GLOBAL_ADVANCE_OBJECT,    FcTrue	},  /* !FC_LOAD_IGNORE_GLOBAL_ADVANCE_WIDTH */
    { FC_EMBEDDED_BITMAP_OBJECT,   FcTrue 	},  /* !FC_LOAD_NO_BITMAP */
    { FC_DECORATIVE_OBJECT,	   FcFalse	},
};

#define NUM_FC_BOOL_DEFAULTS	(int) (sizeof FcBoolDefaults / sizeof FcBoolDefaults[0])

FcStrSet *default_langs;

FcStrSet *
FcGetDefaultLangs (void)
{
    FcStrSet *result;
retry:
    result = (FcStrSet *) fc_atomic_ptr_get (&default_langs);
    if (!result)
    {
	char *langs;

	result = FcStrSetCreate ();

	langs = getenv ("FC_LANG");
	if (!langs || !langs[0])
	    langs = getenv ("LC_ALL");
	if (!langs || !langs[0])
	    langs = getenv ("LC_CTYPE");
	if (!langs || !langs[0])
	    langs = getenv ("LANG");
	if (langs && langs[0])
	{
	    if (!FcStrSetAddLangs (result, langs))
		FcStrSetAdd (result, (const FcChar8 *) "en");
	}
	else
	    FcStrSetAdd (result, (const FcChar8 *) "en");

	FcRefSetConst (&result->ref);
	if (!fc_atomic_ptr_cmpexch (&default_langs, NULL, result)) {
	    FcRefInit (&result->ref, 1);
	    FcStrSetDestroy (result);
	    goto retry;
	}
    }

    return result;
}

static FcChar8 *default_lang; /* MT-safe */

FcChar8 *
FcGetDefaultLang (void)
{
    FcChar8 *lang;
retry:
    lang = fc_atomic_ptr_get (&default_lang);
    if (!lang)
    {
	FcStrSet *langs = FcGetDefaultLangs ();
	lang = FcStrdup (langs->strs[0]);
	FcStrSetDestroy (langs);

	if (!fc_atomic_ptr_cmpexch (&default_lang, NULL, lang)) {
	    free (lang);
	    goto retry;
	}
    }

    return lang;
}

void
FcDefaultFini (void)
{
    FcChar8  *lang;
    FcStrSet *langs;

    lang = fc_atomic_ptr_get (&default_lang);
    if (lang && fc_atomic_ptr_cmpexch (&default_lang, lang, NULL)) {
	free (lang);
    }

    langs = fc_atomic_ptr_get (&default_langs);
    if (langs && fc_atomic_ptr_cmpexch (&default_langs, langs, NULL)) {
	FcRefInit (&langs->ref, 1);
	FcStrSetDestroy (langs);
    }
}

void
FcDefaultSubstitute (FcPattern *pattern)
{
    FcValue v, namelang, v2;
    int	    i;

    if (FcPatternObjectGet (pattern, FC_WEIGHT_OBJECT, 0, &v) == FcResultNoMatch )
	FcPatternObjectAddInteger (pattern, FC_WEIGHT_OBJECT, FC_WEIGHT_MEDIUM);

    if (FcPatternObjectGet (pattern, FC_SLANT_OBJECT, 0, &v) == FcResultNoMatch)
	FcPatternObjectAddInteger (pattern, FC_SLANT_OBJECT, FC_SLANT_ROMAN);

    if (FcPatternObjectGet (pattern, FC_WIDTH_OBJECT, 0, &v) == FcResultNoMatch)
	FcPatternObjectAddInteger (pattern, FC_WIDTH_OBJECT, FC_WIDTH_NORMAL);

    for (i = 0; i < NUM_FC_BOOL_DEFAULTS; i++)
	if (FcPatternObjectGet (pattern, FcBoolDefaults[i].field, 0, &v) == FcResultNoMatch)
	    FcPatternObjectAddBool (pattern, FcBoolDefaults[i].field, FcBoolDefaults[i].value);

    if (FcPatternObjectGet (pattern, FC_PIXEL_SIZE_OBJECT, 0, &v) == FcResultNoMatch)
    {
	double	dpi, size, scale;

	if (FcPatternObjectGetDouble (pattern, FC_SIZE_OBJECT, 0, &size) != FcResultMatch)
	{
	    size = 12.0;
	    (void) FcPatternObjectDel (pattern, FC_SIZE_OBJECT);
	    FcPatternObjectAddDouble (pattern, FC_SIZE_OBJECT, size);
	}
	if (FcPatternObjectGetDouble (pattern, FC_SCALE_OBJECT, 0, &scale) != FcResultMatch)
	{
	    scale = 1.0;
	    (void) FcPatternObjectDel (pattern, FC_SCALE_OBJECT);
	    FcPatternObjectAddDouble (pattern, FC_SCALE_OBJECT, scale);
	}
	size *= scale;
	if (FcPatternObjectGetDouble (pattern, FC_DPI_OBJECT, 0, &dpi) != FcResultMatch)
	{
	    dpi = 75.0;
	    (void) FcPatternObjectDel (pattern, FC_DPI_OBJECT);
	    FcPatternObjectAddDouble (pattern, FC_DPI_OBJECT, dpi);
	}
	size *= dpi / 72.0;
	FcPatternObjectAddDouble (pattern, FC_PIXEL_SIZE_OBJECT, size);
    }

    if (FcPatternObjectGet (pattern, FC_FONTVERSION_OBJECT, 0, &v) == FcResultNoMatch)
    {
	FcPatternObjectAddInteger (pattern, FC_FONTVERSION_OBJECT, 0x7fffffff);
    }

    if (FcPatternObjectGet (pattern, FC_HINT_STYLE_OBJECT, 0, &v) == FcResultNoMatch)
    {
	FcPatternObjectAddInteger (pattern, FC_HINT_STYLE_OBJECT, FC_HINT_FULL);
    }
    if (FcPatternObjectGet (pattern, FC_NAMELANG_OBJECT, 0, &v) == FcResultNoMatch)
    {
	FcPatternObjectAddString (pattern, FC_NAMELANG_OBJECT, FcGetDefaultLang ());
    }
    /* shouldn't be failed. */
    FcPatternObjectGet (pattern, FC_NAMELANG_OBJECT, 0, &namelang);
    /* Add a fallback to ensure the english name when the requested language
     * isn't available. this would helps for the fonts that have non-English
     * name at the beginning.
     */
    /* Set "en-us" instead of "en" to avoid giving higher score to "en".
     * This is a hack for the case that the orth is not like ll-cc, because,
     * if no namelang isn't explicitly set, it will has something like ll-cc
     * according to current locale. which may causes FcLangDifferentTerritory
     * at FcLangCompare(). thus, the English name is selected so that
     * exact matched "en" has higher score than ll-cc.
     */
    v2.type = FcTypeString;
    v2.u.s = FcStrdup ("en-us");
    if (FcPatternObjectGet (pattern, FC_FAMILYLANG_OBJECT, 0, &v) == FcResultNoMatch)
    {
	FcPatternObjectAdd (pattern, FC_FAMILYLANG_OBJECT, namelang, FcTrue);
	FcPatternObjectAddWithBinding (pattern, FC_FAMILYLANG_OBJECT, v2, FcValueBindingWeak, FcTrue);
    }
    if (FcPatternObjectGet (pattern, FC_STYLELANG_OBJECT, 0, &v) == FcResultNoMatch)
    {
	FcPatternObjectAdd (pattern, FC_STYLELANG_OBJECT, namelang, FcTrue);
	FcPatternObjectAddWithBinding (pattern, FC_STYLELANG_OBJECT, v2, FcValueBindingWeak, FcTrue);
    }
    if (FcPatternObjectGet (pattern, FC_FULLNAMELANG_OBJECT, 0, &v) == FcResultNoMatch)
    {
	FcPatternObjectAdd (pattern, FC_FULLNAMELANG_OBJECT, namelang, FcTrue);
	FcPatternObjectAddWithBinding (pattern, FC_FULLNAMELANG_OBJECT, v2, FcValueBindingWeak, FcTrue);
    }
    FcFree (v2.u.s);
}
#define __fcdefault__
#include "fcaliastail.h"
#undef __fcdefault__
