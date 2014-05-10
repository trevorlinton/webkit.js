/***************************************************************************/
/*                                                                         */
/*  ttsubpix.h                                                             */
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


#ifndef __TTSUBPIX_H__
#define __TTSUBPIX_H__

#include <ft2build.h>
#include "ttobjs.h"
#include "ttinterp.h"


FT_BEGIN_HEADER


#ifdef TT_CONFIG_OPTION_SUBPIXEL_HINTING

  /*************************************************************************/
  /*                                                                       */
  /* Tweak flags that are set for each glyph by the below rules.           */
  /*                                                                       */
  /*                                                                       */
#define SPH_TWEAK_ALLOW_X_DMOVE                   0x0000001
#define SPH_TWEAK_ALLOW_X_DMOVEX                  0x0000002
#define SPH_TWEAK_ALLOW_X_MOVE_ZP2                0x0000004
#define SPH_TWEAK_ALWAYS_DO_DELTAP                0x0000008
#define SPH_TWEAK_ALWAYS_SKIP_DELTAP              0x0000010
#define SPH_TWEAK_COURIER_NEW_2_HACK              0x0000020
#define SPH_TWEAK_DEEMBOLDEN                      0x0000040
#define SPH_TWEAK_DELTAP_SKIP_EXAGGERATED_VALUES  0x0000080
#define SPH_TWEAK_DO_SHPIX                        0x0000100
#define SPH_TWEAK_EMBOLDEN                        0x0000200
#define SPH_TWEAK_MIAP_HACK                       0x0000400
#define SPH_TWEAK_NORMAL_ROUND                    0x0000800
#define SPH_TWEAK_NO_ALIGNRP_AFTER_IUP            0x0001000
#define SPH_TWEAK_NO_CALL_AFTER_IUP               0x0002000
#define SPH_TWEAK_NO_DELTAP_AFTER_IUP             0x0004000
#define SPH_TWEAK_PIXEL_HINTING                   0x0008000
#define SPH_TWEAK_RASTERIZER_35                   0x0010000
#define SPH_TWEAK_ROUND_NONPIXEL_Y_MOVES          0x0020000
#define SPH_TWEAK_SKIP_INLINE_DELTAS              0x0040000
#define SPH_TWEAK_SKIP_IUP                        0x0080000
#define SPH_TWEAK_SKIP_NONPIXEL_Y_MOVES           0x0100000
#define SPH_TWEAK_SKIP_OFFPIXEL_Y_MOVES           0x0200000
#define SPH_TWEAK_TIMES_NEW_ROMAN_HACK            0x0400000
#define SPH_TWEAK_MIRP_CVT_ZERO                   0x0800000


  FT_LOCAL( FT_Bool )
  sph_test_tweak( TT_Face         face,
                  FT_String*      family,
                  FT_UInt         ppem,
                  FT_String*      style,
                  FT_UInt         glyph_index,
                  SPH_TweakRule*  rule,
                  FT_UInt         num_rules );

  FT_LOCAL_DEF( FT_UInt )
  scale_test_tweak( TT_Face         face,
                    FT_String*      family,
                    FT_UInt         ppem,
                    FT_String*      style,
                    FT_UInt         glyph_index,
                    SPH_ScaleRule*  rule,
                    FT_UInt         num_rules );

  FT_LOCAL( void )
  sph_set_tweaks( TT_Loader  loader,
                  FT_UInt    glyph_index );


  /*************************************************************************/
  /*                                                                       */
  /* These rules affect how the TT Interpreter does hinting, with the      */
  /* goal of doing subpixel hinting by (in general) ignoring x moves.      */
  /* Some of these rules are fixes that go above and beyond the            */
  /* stated techniques in the MS whitepaper on Cleartype, due to           */
  /* artifacts in many glyphs.  So, these rules make some glyphs render    */
  /* better than they do in the MS rasterizer.                             */
  /*                                                                       */
  /* "" string or 0 int/char indicates to apply to all glyphs.             */
  /* "-" used as dummy placeholders, but any non-matching string works.    */
  /*                                                                       */
  /* Some of this could arguably be implemented in fontconfig, however:    */
  /*                                                                       */
  /*  - Fontconfig can't set things on a glyph-by-glyph basis.             */
  /*  - The tweaks that happen here are very low-level, from an average    */
  /*    user's point of view and are best implemented in the hinter.       */
  /*                                                                       */
  /* The goal is to make the subpixel hinting techniques as generalized    */
  /* as possible across all fonts to prevent the need for extra rules such */
  /* as these.                                                             */
  /*                                                                       */
  /* The rule structure is designed so that entirely new rules can easily  */
  /* be added when a new compatibility feature is discovered.              */
  /*                                                                       */
  /* The rule structures could also use some enhancement to handle ranges. */
  /*                                                                       */
  /*     ****************** WORK IN PROGRESS *******************           */
  /*                                                                       */

  /* These macros are defined absent a method for setting them */
#define SPH_OPTION_BITMAP_WIDTHS           FALSE
#define SPH_OPTION_SET_SUBPIXEL            TRUE
#define SPH_OPTION_SET_GRAYSCALE           FALSE
#define SPH_OPTION_SET_COMPATIBLE_WIDTHS   FALSE
#define SPH_OPTION_SET_RASTERIZER_VERSION  38

#endif /* TT_CONFIG_OPTION_SUBPIXEL_HINTING */


FT_END_HEADER

#endif /* __TTSUBPIX_H__ */

/* END */
