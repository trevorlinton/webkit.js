/***************************************************************************/
/*                                                                         */
/*  ttsubpix.c                                                             */
/*                                                                         */
/*    TrueType Subpixel Hinting.                                           */
/*                                                                         */
/*  Copyright 2010-2012 by                                                 */
/*  David Turner, Robert Wilhelm, and Werner Lemberg.                      */
/*                                                                         */
/*  This file is part of the FreeType project, and may only be used,       */
/*  modified, and distributed under the terms of the FreeType project      */
/*  license, LICENSE.TXT.  By continuing to use, modify, or distribute     */
/*  this file you indicate that you have read the license and              */
/*  understand and accept it fully.                                        */
/*                                                                         */
/***************************************************************************/

#include <ft2build.h>
#include FT_INTERNAL_DEBUG_H
#include FT_INTERNAL_CALC_H
#include FT_INTERNAL_STREAM_H
#include FT_INTERNAL_SFNT_H
#include FT_TRUETYPE_TAGS_H
#include FT_OUTLINE_H

#include "ttsubpix.h"


#ifdef TT_CONFIG_OPTION_SUBPIXEL_HINTING

/* Define this to force natural (i.e. not bitmap-compatible) widths.     */
/* The default leans strongly towards natural widths except for a few    */
/* legacy fonts where a selective combination produces nicer results.    */
/* #define FORCE_NATURAL_WIDTHS   */


/* These are `classes' of fonts that can be grouped together and used in */
/* rules below.  A blank entry "" is required at the end of these!       */
#define FAMILY_CLASS_RULES_SIZE  7

Font_Class FAMILY_CLASS_Rules
[FAMILY_CLASS_RULES_SIZE] =
{
	{ "MS Legacy Fonts",
		{ "Aharoni",
			"Andale Mono",
			"Andalus",
			"Angsana New",
			"AngsanaUPC",
			"Arabic Transparent",
			"Arial Black",
			"Arial Narrow",
			"Arial Unicode MS",
			"Arial",
			"Batang",
			"Browallia New",
			"BrowalliaUPC",
			"Comic Sans MS",
			"Cordia New",
			"CordiaUPC",
			"Courier New",
			"DFKai-SB",
			"David Transparent",
			"David",
			"DilleniaUPC",
			"Estrangelo Edessa",
			"EucrosiaUPC",
			"FangSong_GB2312",
			"Fixed Miriam Transparent",
			"FrankRuehl",
			"Franklin Gothic Medium",
			"FreesiaUPC",
			"Garamond",
			"Gautami",
			"Georgia",
			"Gulim",
			"Impact",
			"IrisUPC",
			"JasmineUPC",
			"KaiTi_GB2312",
			"KodchiangUPC",
			"Latha",
			"Levenim MT",
			"LilyUPC",
			"Lucida Console",
			"Lucida Sans Unicode",
			"MS Gothic",
			"MS Mincho",
			"MV Boli",
			"Mangal",
			"Marlett",
			"Microsoft Sans Serif",
			"Mingliu",
			"Miriam Fixed",
			"Miriam Transparent",
			"Miriam",
			"Narkisim",
			"Palatino Linotype",
			"Raavi",
			"Rod Transparent",
			"Rod",
			"Shruti",
			"SimHei",
			"Simplified Arabic Fixed",
			"Simplified Arabic",
			"Simsun",
			"Sylfaen",
			"Symbol",
			"Tahoma",
			"Times New Roman",
			"Traditional Arabic",
			"Trebuchet MS",
			"Tunga",
			"Verdana",
			"Webdings",
			"Wingdings",
			"",
		},
	},
	{ "Core MS Legacy Fonts",
		{ "Arial Black",
			"Arial Narrow",
			"Arial Unicode MS",
			"Arial",
			"Comic Sans MS",
			"Courier New",
			"Garamond",
			"Georgia",
			"Impact",
			"Lucida Console",
			"Lucida Sans Unicode",
			"Microsoft Sans Serif",
			"Palatino Linotype",
			"Tahoma",
			"Times New Roman",
			"Trebuchet MS",
			"Verdana",
			"",
		},
	},
	{ "Apple Legacy Fonts",
		{ "Geneva",
			"Times",
			"Monaco",
			"Century",
			"Chalkboard",
			"Lobster",
			"Century Gothic",
			"Optima",
			"Lucida Grande",
			"Gill Sans",
			"Baskerville",
			"Helvetica",
			"Helvetica Neue",
			"",
		},
	},
	{ "Legacy Sans Fonts",
		{ "Andale Mono",
			"Arial Unicode MS",
			"Arial",
			"Century Gothic",
			"Comic Sans MS",
			"Franklin Gothic Medium",
			"Geneva",
			"Lucida Console",
			"Lucida Grande",
			"Lucida Sans Unicode",
			"Lucida Sans Typewriter",
			"Microsoft Sans Serif",
			"Monaco",
			"Tahoma",
			"Trebuchet MS",
			"Verdana",
			"",
		},
	},

	{ "Misc Legacy Fonts",
		{ "Dark Courier", "", }, },
	{ "Verdana Clones",
		{ "DejaVu Sans",
			"Bitstream Vera Sans", "", }, },
	{ "Verdana and Clones",
		{ "DejaVu Sans",
			"Bitstream Vera Sans",
			"Verdana", "", }, },
};


/* Define `classes' of styles that can be grouped together and used in   */
/* rules below.  A blank entry "" is required at the end of these!       */
#define STYLE_CLASS_RULES_SIZE  5

Font_Class STYLE_CLASS_Rules
[STYLE_CLASS_RULES_SIZE] =
{
	{ "Regular Class",
		{ "Regular",
			"Book",
			"Medium",
			"Roman",
			"Normal",
			"",
		},
	},
	{ "Regular/Italic Class",
		{ "Regular",
			"Book",
			"Medium",
			"Italic",
			"Oblique",
			"Roman",
			"Normal",
			"",
		},
	},
	{ "Bold/BoldItalic Class",
		{ "Bold",
			"Bold Italic",
			"Black",
			"",
		},
	},
	{ "Bold/Italic/BoldItalic Class",
		{ "Bold",
			"Bold Italic",
			"Black",
			"Italic",
			"Oblique",
			"",
		},
	},
	{ "Regular/Bold Class",
		{ "Regular",
			"Book",
			"Medium",
			"Normal",
			"Roman",
			"Bold",
			"Black",
			"",
		},
	},
};


/* Special fixes for known legacy fonts;                                 */
/* this is the primary workhorse rule for legacy fonts                   */
#define COMPATIBILITY_MODE_RULES_SIZE  4

SPH_TweakRule  COMPATIBILITY_MODE_Rules
[COMPATIBILITY_MODE_RULES_SIZE] =
{
	{ "MS Legacy Fonts", 0, "", 0 },
	{ "Apple Legacy Fonts", 0, "", 0 },
	{ "Misc Legacy Fonts", 0, "", 0 },
	{ "Verdana Clones", 0, "", 0 },
};


/* Don't do subpixel (ignore_x_mode) hinting; do normal hinting.         */
#define PIXEL_HINTING_RULES_SIZE  4

SPH_TweakRule  PIXEL_HINTING_Rules
[PIXEL_HINTING_RULES_SIZE] =
{
	/* these characters are almost always safe */
	{ "", 0, "", '<' },
	{ "", 0, "", '>' },
	/* fixes the vanishing stem */
	{ "Times New Roman", 0, "Bold", 'A' },
	{ "Times New Roman", 0, "Bold", 'V' },
};


/* According to Greg Hitchcock and the MS whitepaper, this should work   */
/* on all legacy MS fonts, but creates artifacts with some.  Only using  */
/* where absolutely necessary.                                           */
#define SKIP_INLINE_DELTAS_RULES_SIZE  1

SPH_TweakRule  SKIP_INLINE_DELTAS_Rules
[SKIP_INLINE_DELTAS_RULES_SIZE] =
{
	{ "-", 0, "", 0 },
};


/* Subpixel hinting ignores SHPIX rules on X.  Force SHPIX for these.    */
#define DO_SHPIX_RULES_SIZE  1

SPH_TweakRule  DO_SHPIX_Rules
[DO_SHPIX_RULES_SIZE] =
{
	{ "-", 0, "", 0 },
};


/* Skip Y moves that start with a point that is not on a Y pixel         */
/* boundary and don't move that point to a Y pixel boundary.             */
#define SKIP_NONPIXEL_Y_MOVES_RULES_SIZE  10

SPH_TweakRule  SKIP_NONPIXEL_Y_MOVES_Rules
[SKIP_NONPIXEL_Y_MOVES_RULES_SIZE] =
{
	/* fix vwxyz thinness*/
	{ "Consolas", 0, "Regular", 0 },
	/* fix tiny gap at top of m */
	{ "Arial", 0, "Regular", 'm' },
	/* Fix thin middle stems */
	{ "Core MS Legacy Fonts", 0, "Regular/Bold Class", 'N' },
	{ "Lucida Grande", 0, "", 'N' },
	{ "Lucida Grande", 0, "Bold", 'y' },
	/* Cyrillic small letter I */
	{ "Legacy Sans Fonts", 0, "", 0x438 },
	{ "Verdana Clones", 0, "",'N' },
	{ "Ubuntu", 0, "Regular Class", 'N' },
	/* Fix misshapen x */
	{ "Verdana", 0, "Bold", 'x' },
	/* Fix misshapen s */
	{ "Tahoma", 0, "", 's' },
};


#define SKIP_NONPIXEL_Y_MOVES_RULES_EXCEPTIONS_SIZE  6

SPH_TweakRule  SKIP_NONPIXEL_Y_MOVES_Rules_Exceptions
[SKIP_NONPIXEL_Y_MOVES_RULES_EXCEPTIONS_SIZE] =
{
	{ "Tahoma", 0, "", 'N' },
	{ "Comic Sans MS", 0, "", 'N' },
	{ "Verdana", 0, "Regular/Bold Class", 'N' },
	{ "Verdana", 11, "Bold", 'x' },
	/* Cyrillic small letter I */
	{ "Arial", 0, "", 0x438 },
	{ "Trebuchet MS", 0, "Bold", 0 },
};


/* Skip Y moves that move a point off a Y pixel boundary.                */
/* This fixes Tahoma, Trebuchet oddities and some issues with `$'.       */
#define SKIP_OFFPIXEL_Y_MOVES_RULES_SIZE  5

SPH_TweakRule  SKIP_OFFPIXEL_Y_MOVES_Rules
[SKIP_OFFPIXEL_Y_MOVES_RULES_SIZE] =
{
	{ "MS Legacy Fonts", 0, "", 0 },
	{ "Apple Legacy Fonts", 0, "", 0 },
	{ "Misc Legacy Fonts", 0, "", 0 },
	{ "Ubuntu", 0, "Regular Class", 0 },
	{ "Verdana Clones", 0, "", 0 },
};


#define SKIP_OFFPIXEL_Y_MOVES_RULES_EXCEPTIONS_SIZE  1

SPH_TweakRule  SKIP_OFFPIXEL_Y_MOVES_Rules_Exceptions
[SKIP_OFFPIXEL_Y_MOVES_RULES_EXCEPTIONS_SIZE] =
{
	{ "-", 0, "", 0 },
};


/* Round moves that don't move a point to a Y pixel boundary.            */
#define ROUND_NONPIXEL_Y_MOVES_RULES_SIZE  3

SPH_TweakRule  ROUND_NONPIXEL_Y_MOVES_Rules
[ROUND_NONPIXEL_Y_MOVES_RULES_SIZE] =
{
	/* Droid font instructions don't snap Y to pixels */
	{ "Droid Sans", 0, "Regular/Italic Class", 0 },
	{ "Droid Sans Mono", 0, "", 0 },
	{ "Ubuntu", 0, "", 0 },
};


#define ROUND_NONPIXEL_Y_MOVES_RULES_EXCEPTIONS_SIZE  3

SPH_TweakRule  ROUND_NONPIXEL_Y_MOVES_Rules_Exceptions
[ROUND_NONPIXEL_Y_MOVES_RULES_EXCEPTIONS_SIZE] =
{
	{ "Droid Sans", 12, "Bold", 0 },
	{ "Droid Sans", 13, "Bold", 0 },
	{ "Droid Sans", 16, "Bold", 0 },
};


/* Allow a Direct_Move_X along X freedom vector if matched.              */
#define ALLOW_X_DMOVEX_RULES_SIZE  1

SPH_TweakRule  ALLOW_X_DMOVEX_Rules
[ALLOW_X_DMOVEX_RULES_SIZE] =
{
	{ "-", 0, "Regular", 0 },
};


/* Allow a Direct_Move along X freedom vector if matched.                */
#define ALLOW_X_DMOVE_RULES_SIZE  1

SPH_TweakRule  ALLOW_X_DMOVE_Rules
[ALLOW_X_DMOVE_RULES_SIZE] =
{
	/* Fixes vanishing diagonal in 4 */
	{ "Verdana", 0, "Regular", '4' },
};


/* Allow a ZP2 move along freedom vector if matched;                     */
/* This is called from SHP, SHPIX, SHC, SHZ.                             */
#define ALLOW_X_MOVE_ZP2_RULES_SIZE  1

SPH_TweakRule  ALLOW_X_MOVE_ZP2_Rules
[ALLOW_X_MOVE_ZP2_RULES_SIZE] =
{
	{ "-", 0, "", 0 },
};


/* Return MS rasterizer version 35 if matched.                           */
#define RASTERIZER_35_RULES_SIZE  8

SPH_TweakRule  RASTERIZER_35_Rules
[RASTERIZER_35_RULES_SIZE] =
{
	/* This seems to be the only way to make these look good */
	{ "Times New Roman", 0, "Regular", 'i' },
	{ "Times New Roman", 0, "Regular", 'j' },
	{ "Times New Roman", 0, "Regular", 'm' },
	{ "Times New Roman", 0, "Regular", 'r' },
	{ "Times New Roman", 0, "Regular", 'a' },
	{ "Times New Roman", 0, "Regular", 'n' },
	{ "Times New Roman", 0, "Regular", 'p' },
	{ "Times", 0, "", 0 },
};


/* Don't round to the subpixel grid.  Round to pixel grid.               */
#define NORMAL_ROUND_RULES_SIZE  2

SPH_TweakRule  NORMAL_ROUND_Rules
[NORMAL_ROUND_RULES_SIZE] =
{
	/* Fix point "explosions" */
	{ "Courier New", 0, "", 0 },
	{ "Verdana", 10, "Regular", '4' },
};


/* Skip IUP instructions if matched.                                     */
#define SKIP_IUP_RULES_SIZE  1

SPH_TweakRule  SKIP_IUP_Rules
[SKIP_IUP_RULES_SIZE] =
{
	{ "Arial", 13, "Regular", 'a' },
};


/* Skip MIAP Twilight hack if matched.                                   */
#define MIAP_HACK_RULES_SIZE  1

SPH_TweakRule  MIAP_HACK_Rules
[MIAP_HACK_RULES_SIZE] =
{
	{ "Geneva", 12, "", 0 },
};


/* Skip DELTAP instructions if matched.                                  */
#define ALWAYS_SKIP_DELTAP_RULES_SIZE  16

SPH_TweakRule  ALWAYS_SKIP_DELTAP_Rules
[ALWAYS_SKIP_DELTAP_RULES_SIZE] =
{
	{ "Georgia", 0, "Regular", 'k' },
	/* fixes problems with W M w */
	{ "Trebuchet MS", 0, "Italic", 0 },
	/* fix various problems with e in different versions */
	{ "Trebuchet MS", 14, "Regular", 'e' },
	{ "Trebuchet MS", 13, "Regular", 'e' },
	{ "Trebuchet MS", 15, "Regular", 'e' },
	{ "Arial", 11, "Regular", 's' },
	{ "Verdana", 10, "Regular", 0 },
	{ "Verdana", 9, "Regular", 0 },
	/* Cyrillic small letter short I */
	{ "Legacy Sans Fonts", 0, "", 0x438 },
	{ "Legacy Sans Fonts", 0, "", 0x439 },
	{ "Arial", 10, "Regular", '6' },
	{ "Arial", 0, "Bold/BoldItalic Class", 'a' },
	/* Make horizontal stems consistent with the rest */
	{ "Arial", 24, "Bold", 's' },
	{ "Arial", 25, "Bold", 's' },
	{ "Arial", 24, "Bold", 'a' },
	{ "Arial", 25, "Bold", 'a' },
};


/* Always do DELTAP instructions if matched.                             */
#define ALWAYS_DO_DELTAP_RULES_SIZE  2

SPH_TweakRule  ALWAYS_DO_DELTAP_Rules
[ALWAYS_DO_DELTAP_RULES_SIZE] =
{
	{ "Verdana Clones", 17, "Regular Class", 'K' },
	{ "Verdana Clones", 17, "Regular Class", 'k' },
};


/* Do an extra RTG instruction in DELTAP if matched.                     */
#define DELTAP_RTG_RULES_SIZE  1

SPH_TweakRule  DELTAP_RTG_Rules
[DELTAP_RTG_RULES_SIZE] =
{
	{ "-", 0, "", 0 },
};


/* Force CVT distance to zero in MIRP.                                   */
#define MIRP_CVT_ZERO_RULES_SIZE  1

SPH_TweakRule  MIRP_CVT_ZERO_Rules
[MIRP_CVT_ZERO_RULES_SIZE] =
{
	{ "-", 0, "", 0 },
};


/* Skip moves that meet or exceed 1 pixel.                               */
#define DELTAP_SKIP_EXAGGERATED_VALUES_RULES_SIZE  1

SPH_TweakRule  DELTAP_SKIP_EXAGGERATED_VALUES_Rules
[DELTAP_SKIP_EXAGGERATED_VALUES_RULES_SIZE] =
{
	/* Fix vanishing stems */
	{ "Ubuntu", 0, "Regular", 'M' },
};


/* Don't allow ALIGNRP after IUP.                                        */
#define NO_ALIGNRP_AFTER_IUP_RULES_SIZE  4

SPH_TweakRule  NO_ALIGNRP_AFTER_IUP_Rules
[NO_ALIGNRP_AFTER_IUP_RULES_SIZE] =
{
	/* Prevent creation of dents in outline */
	{ "Courier New", 0, "Bold", 'C' },
	{ "Courier New", 0, "Bold", 'D' },
	{ "Courier New", 0, "Bold", 'Q' },
	{ "Courier New", 0, "Bold", '0' },
};


/* Don't allow DELTAP after IUP.                                         */
#define NO_DELTAP_AFTER_IUP_RULES_SIZE  2

SPH_TweakRule  NO_DELTAP_AFTER_IUP_Rules
[NO_DELTAP_AFTER_IUP_RULES_SIZE] =
{
	{ "Arial", 0, "Bold", 'N' },
	{ "Verdana", 0, "Regular", '4' },
};


/* Don't allow CALL after IUP.                                           */
#define NO_CALL_AFTER_IUP_RULES_SIZE  4

SPH_TweakRule  NO_CALL_AFTER_IUP_Rules
[NO_CALL_AFTER_IUP_RULES_SIZE] =
{
	/* Prevent creation of dents in outline */
	{ "Courier New", 0, "Bold", 'O' },
	{ "Courier New", 0, "Bold", 'Q' },
	{ "Courier New", 0, "Bold", 'k' },
	{ "Courier New", 0, "Bold Italic", 'M' },
};


/* De-embolden these glyphs slightly.                                    */
#define DEEMBOLDEN_RULES_SIZE  9

SPH_TweakRule  DEEMBOLDEN_Rules
[DEEMBOLDEN_RULES_SIZE] =
{
	{ "Courier New", 0, "Bold", 'A' },
	{ "Courier New", 0, "Bold", 'W' },
	{ "Courier New", 0, "Bold", 'w' },
	{ "Courier New", 0, "Bold", 'M' },
	{ "Courier New", 0, "Bold", 'X' },
	{ "Courier New", 0, "Bold", 'K' },
	{ "Courier New", 0, "Bold", 'x' },
	{ "Courier New", 0, "Bold", 'z' },
	{ "Courier New", 0, "Bold", 'v' },
};


/* Embolden these glyphs slightly.                                       */
#define EMBOLDEN_RULES_SIZE  5

SPH_TweakRule  EMBOLDEN_Rules
[EMBOLDEN_RULES_SIZE] =
{
	{ "Courier New", 12, "Italic", 'z' },
	{ "Courier New", 11, "Italic", 'z' },
	{ "Courier New", 10, "Italic", 'z' },
	{ "Courier New", 0, "Regular", 0 },
	{ "Courier New", 0, "Italic", 0 },
};


/* Do an extra RDTG instruction in DELTAP if matched.                    */
#define DELTAP_RDTG_RULES_SIZE  1

SPH_TweakRule  DELTAP_RDTG_Rules
[DELTAP_RDTG_RULES_SIZE] =
{
	{ "-", 0, "", 0 },
};


/* This is a CVT hack that makes thick horizontal stems on 2, 5, 7       */
/* similar to Windows XP.                                                */
#define TIMES_NEW_ROMAN_HACK_RULES_SIZE  12

SPH_TweakRule  TIMES_NEW_ROMAN_HACK_Rules
[TIMES_NEW_ROMAN_HACK_RULES_SIZE] =
{
	{ "Times New Roman", 16, "Italic", '2' },
	{ "Times New Roman", 16, "Italic", '5' },
	{ "Times New Roman", 16, "Italic", '7' },
	{ "Times New Roman", 16, "Regular", '2' },
	{ "Times New Roman", 16, "Regular", '5' },
	{ "Times New Roman", 16, "Regular", '7' },
	{ "Times New Roman", 17, "Italic", '2' },
	{ "Times New Roman", 17, "Italic", '5' },
	{ "Times New Roman", 17, "Italic", '7' },
	{ "Times New Roman", 17, "Regular", '2' },
	{ "Times New Roman", 17, "Regular", '5' },
	{ "Times New Roman", 17, "Regular", '7' },
};


/* This fudges distance on 2 to get rid of the vanishing stem issue.     */
/* A real solution to this is certainly welcome.                         */
#define COURIER_NEW_2_HACK_RULES_SIZE  15

SPH_TweakRule  COURIER_NEW_2_HACK_Rules
[COURIER_NEW_2_HACK_RULES_SIZE] =
{
	{ "Courier New", 10, "Regular", '2' },
	{ "Courier New", 11, "Regular", '2' },
	{ "Courier New", 12, "Regular", '2' },
	{ "Courier New", 13, "Regular", '2' },
	{ "Courier New", 14, "Regular", '2' },
	{ "Courier New", 15, "Regular", '2' },
	{ "Courier New", 16, "Regular", '2' },
	{ "Courier New", 17, "Regular", '2' },
	{ "Courier New", 18, "Regular", '2' },
	{ "Courier New", 19, "Regular", '2' },
	{ "Courier New", 20, "Regular", '2' },
	{ "Courier New", 21, "Regular", '2' },
	{ "Courier New", 22, "Regular", '2' },
	{ "Courier New", 23, "Regular", '2' },
	{ "Courier New", 24, "Regular", '2' },
};


#ifndef FORCE_NATURAL_WIDTHS

/* Use compatible widths with these glyphs.  Compatible widths is always */
/* on when doing B/W TrueType instructing, but is used selectively here, */
/* typically on glyphs with 3 or more vertical stems.                    */
#define COMPATIBLE_WIDTHS_RULES_SIZE  38

SPH_TweakRule  COMPATIBLE_WIDTHS_Rules
[COMPATIBLE_WIDTHS_RULES_SIZE] =
{
	{ "Arial Unicode MS", 12, "Regular Class", 'm' },
	{ "Arial Unicode MS", 14, "Regular Class", 'm' },
	/* Cyrillic small letter sha */
	{ "Arial", 10, "Regular Class", 0x448 },
	{ "Arial", 11, "Regular Class", 'm' },
	{ "Arial", 12, "Regular Class", 'm' },
	/* Cyrillic small letter sha */
	{ "Arial", 12, "Regular Class", 0x448 },
	{ "Arial", 13, "Regular Class", 0x448 },
	{ "Arial", 14, "Regular Class", 'm' },
	/* Cyrillic small letter sha */
	{ "Arial", 14, "Regular Class", 0x448 },
	{ "Arial", 15, "Regular Class", 0x448 },
	{ "Arial", 17, "Regular Class", 'm' },
	{ "DejaVu Sans", 15, "Regular Class", 0 },
	{ "Microsoft Sans Serif", 11, "Regular Class", 0 },
	{ "Microsoft Sans Serif", 12, "Regular Class", 0 },
	{ "Segoe UI", 11, "Regular Class", 0 },
	{ "Monaco", 0, "Regular Class", 0 },
	{ "Segoe UI", 12, "Regular Class", 'm' },
	{ "Segoe UI", 14, "Regular Class", 'm' },
	{ "Tahoma", 11, "Regular Class", 0 },
	{ "Times New Roman", 16, "Regular Class", 'c' },
	{ "Times New Roman", 16, "Regular Class", 'm' },
	{ "Times New Roman", 16, "Regular Class", 'o' },
	{ "Times New Roman", 16, "Regular Class", 'w' },
	{ "Trebuchet MS", 11, "Regular Class", 0 },
	{ "Trebuchet MS", 12, "Regular Class", 0 },
	{ "Trebuchet MS", 14, "Regular Class", 0 },
	{ "Trebuchet MS", 15, "Regular Class", 0 },
	{ "Ubuntu", 12, "Regular Class", 'm' },
	/* Cyrillic small letter sha */
	{ "Verdana", 10, "Regular Class", 0x448 },
	{ "Verdana", 11, "Regular Class", 0x448 },
	{ "Verdana and Clones", 12, "Regular Class", 'i' },
	{ "Verdana and Clones", 12, "Regular Class", 'j' },
	{ "Verdana and Clones", 12, "Regular Class", 'l' },
	{ "Verdana and Clones", 12, "Regular Class", 'm' },
	{ "Verdana and Clones", 13, "Regular Class", 'i' },
	{ "Verdana and Clones", 13, "Regular Class", 'j' },
	{ "Verdana and Clones", 13, "Regular Class", 'l' },
	{ "Verdana and Clones", 14, "Regular Class", 'm' },
};

#else

#define COMPATIBLE_WIDTHS_RULES_SIZE  1

SPH_TweakRule  COMPATIBLE_WIDTHS_Rules
[COMPATIBLE_WIDTHS_RULES_SIZE] =
{
	{ "-", 0, "", 0 },
};

#endif /* FORCE_NATURAL_WIDTHS */

  FT_LOCAL_DEF( FT_Bool )
  is_member_of_family_class( const FT_String*  detected_font_name,
                             const FT_String*  rule_font_name )
  {
    FT_UInt  i, j;


    /* Does font name match rule family? */
    if ( strcmp( detected_font_name, rule_font_name ) == 0 )
      return TRUE;

    /* Is font name a wildcard ""? */
    if ( strcmp( rule_font_name, "" ) == 0 )
      return TRUE;

    /* Is font name contained in a class list? */
    for ( i = 0; i < FAMILY_CLASS_RULES_SIZE; i++ )
    {
      if ( strcmp( FAMILY_CLASS_Rules[i].name, rule_font_name ) == 0 )
      {
        for ( j = 0; j < MAX_CLASS_MEMBERS; j++ )
        {
          if ( strcmp( FAMILY_CLASS_Rules[i].member[j], "" ) == 0 )
            continue;
          if ( strcmp( FAMILY_CLASS_Rules[i].member[j],
                       detected_font_name ) == 0 )
            return TRUE;
        }
      }
    }

    return FALSE;
  }


  FT_LOCAL_DEF( FT_Bool )
  is_member_of_style_class( const FT_String*  detected_font_style,
                            const FT_String*  rule_font_style )
  {
    FT_UInt  i, j;


    /* Does font style match rule style? */
    if ( strcmp( detected_font_style, rule_font_style ) == 0 )
      return TRUE;

    /* Is font style a wildcard ""? */
    if ( strcmp( rule_font_style, "" ) == 0 )
      return TRUE;

    /* Is font style contained in a class list? */
    for ( i = 0; i < STYLE_CLASS_RULES_SIZE; i++ )
    {
      if ( strcmp( STYLE_CLASS_Rules[i].name, rule_font_style ) == 0 )
      {
        for ( j = 0; j < MAX_CLASS_MEMBERS; j++ )
        {
          if ( strcmp( STYLE_CLASS_Rules[i].member[j], "" ) == 0 )
            continue;
          if ( strcmp( STYLE_CLASS_Rules[i].member[j],
                       detected_font_style ) == 0 )
            return TRUE;
        }
      }
    }

    return FALSE;
  }


  FT_LOCAL_DEF( FT_Bool )
  sph_test_tweak( TT_Face         face,
                  FT_String*      family,
                  FT_UInt         ppem,
                  FT_String*      style,
                  FT_UInt         glyph_index,
                  SPH_TweakRule*  rule,
                  FT_UInt         num_rules )
  {
    FT_UInt  i;


    /* rule checks may be able to be optimized further */
    for ( i = 0; i < num_rules; i++ )
    {
      if ( family                                                   &&
           ( is_member_of_family_class ( family, rule[i].family ) ) )
        if ( rule[i].ppem == 0    ||
             rule[i].ppem == ppem )
          if ( style                                             &&
               is_member_of_style_class ( style, rule[i].style ) )
            if ( rule[i].glyph == 0                                ||
                 FT_Get_Char_Index( (FT_Face)face,
                                    rule[i].glyph ) == glyph_index )
        return TRUE;
    }

    return FALSE;
  }


  FT_LOCAL_DEF( FT_UInt )
  scale_test_tweak( TT_Face         face,
                    FT_String*      family,
                    FT_UInt         ppem,
                    FT_String*      style,
                    FT_UInt         glyph_index,
                    SPH_ScaleRule*  rule,
                    FT_UInt         num_rules )
  {
    FT_UInt  i;


    /* rule checks may be able to be optimized further */
    for ( i = 0; i < num_rules; i++ )
    {
      if ( family                                                   &&
           ( is_member_of_family_class ( family, rule[i].family ) ) )
        if ( rule[i].ppem == 0    ||
             rule[i].ppem == ppem )
          if ( style                                            &&
               is_member_of_style_class( style, rule[i].style ) )
            if ( rule[i].glyph == 0                                ||
                 FT_Get_Char_Index( (FT_Face)face,
                                    rule[i].glyph ) == glyph_index )
        return rule[i].scale;
    }

    return 1000;
  }


#define TWEAK_RULES( x )                                       \
  if ( sph_test_tweak( face, family, ppem, style, glyph_index, \
                       x##_Rules, x##_RULES_SIZE ) )           \
    loader->exec->sph_tweak_flags |= SPH_TWEAK_##x;

#define TWEAK_RULES_EXCEPTIONS( x )                                        \
  if ( sph_test_tweak( face, family, ppem, style, glyph_index,             \
                       x##_Rules_Exceptions, x##_RULES_EXCEPTIONS_SIZE ) ) \
    loader->exec->sph_tweak_flags &= ~SPH_TWEAK_##x;


  FT_LOCAL_DEF( void )
  sph_set_tweaks( TT_Loader  loader,
                  FT_UInt    glyph_index )
  {
    TT_Face     face   = (TT_Face)loader->face;
    FT_String*  family = face->root.family_name;
    int         ppem   = loader->size->metrics.x_ppem;
    FT_String*  style  = face->root.style_name;


    /* don't apply rules if style isn't set */
    if ( !face->root.style_name )
      return;

#ifdef SPH_DEBUG_MORE_VERBOSE
    printf( "%s,%d,%s,%c=%d ",
            family, ppem, style, glyph_index, glyph_index );
#endif

    TWEAK_RULES( PIXEL_HINTING );

    if ( loader->exec->sph_tweak_flags & SPH_TWEAK_PIXEL_HINTING )
    {
      loader->exec->ignore_x_mode = FALSE;
      return;
    }

    TWEAK_RULES( ALLOW_X_DMOVE );
    TWEAK_RULES( ALLOW_X_DMOVEX );
    TWEAK_RULES( ALLOW_X_MOVE_ZP2 );
    TWEAK_RULES( ALWAYS_DO_DELTAP );
    TWEAK_RULES( ALWAYS_SKIP_DELTAP );
    TWEAK_RULES( DEEMBOLDEN );
    TWEAK_RULES( DELTAP_SKIP_EXAGGERATED_VALUES );
    TWEAK_RULES( DO_SHPIX );
    TWEAK_RULES( EMBOLDEN );
    TWEAK_RULES( MIAP_HACK );
    TWEAK_RULES( NORMAL_ROUND );
    TWEAK_RULES( NO_ALIGNRP_AFTER_IUP );
    TWEAK_RULES( NO_CALL_AFTER_IUP );
    TWEAK_RULES( NO_DELTAP_AFTER_IUP );
    TWEAK_RULES( RASTERIZER_35 );
    TWEAK_RULES( SKIP_INLINE_DELTAS );
    TWEAK_RULES( SKIP_IUP );
    TWEAK_RULES( MIRP_CVT_ZERO );

    TWEAK_RULES( SKIP_OFFPIXEL_Y_MOVES );
    TWEAK_RULES_EXCEPTIONS( SKIP_OFFPIXEL_Y_MOVES );

    TWEAK_RULES( SKIP_NONPIXEL_Y_MOVES );
    TWEAK_RULES_EXCEPTIONS( SKIP_NONPIXEL_Y_MOVES );

    TWEAK_RULES( ROUND_NONPIXEL_Y_MOVES );
    TWEAK_RULES_EXCEPTIONS( ROUND_NONPIXEL_Y_MOVES );

    if ( loader->exec->sph_tweak_flags & SPH_TWEAK_RASTERIZER_35 )
      loader->exec->rasterizer_version = 35;
    else
      loader->exec->rasterizer_version = SPH_OPTION_SET_RASTERIZER_VERSION;

    /* re-execute fpgm always to avoid problems */
    loader->exec->size->cvt_ready = FALSE;
    tt_size_ready_bytecode( loader->exec->size,
                            FT_BOOL( loader->load_flags & FT_LOAD_PEDANTIC ) );

    if ( IS_HINTED( loader->load_flags ) )
    {
      TWEAK_RULES( TIMES_NEW_ROMAN_HACK );
      TWEAK_RULES( COURIER_NEW_2_HACK );
    }

    if ( sph_test_tweak( face, family, ppem, style, glyph_index,
           COMPATIBILITY_MODE_Rules, COMPATIBILITY_MODE_RULES_SIZE ) )
    {
      loader->exec->compatibility_mode |= TRUE;
      loader->exec->ignore_x_mode      |= TRUE;
    }
    else
      loader->exec->compatibility_mode &= FALSE;

    if ( IS_HINTED( loader->load_flags ) )
    {
      if ( sph_test_tweak( face, family, ppem, style, glyph_index,
             COMPATIBLE_WIDTHS_Rules, COMPATIBLE_WIDTHS_RULES_SIZE ) )
        loader->exec->compatible_widths |= TRUE;
    }
  }

#endif /* TT_CONFIG_OPTION_SUBPIXEL_HINTING */


/* END */
