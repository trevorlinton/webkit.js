/***************************************************************************/
/*                                                                         */
/*  ftsmooth.c                                                             */
/*                                                                         */
/*    Anti-aliasing renderer interface (body).                             */
/*                                                                         */
/*  Copyright 2000-2006, 2009-2012 by                                      */
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
#include FT_INTERNAL_OBJECTS_H
#include FT_OUTLINE_H
#include "ftsmooth.h"
#include "ftgrays.h"
#include "ftspic.h"

#include "ftsmerrs.h"

#ifdef FT_CONFIG_OPTION_INFINALITY_PATCHSET
#include <math.h>
#include "../../include/freetype/ftbitmap.h"
#include <strings.h>
#include "../autofit/aflatin.h"
#include "../../include/freetype/ftoutln.h"

#define verbose FALSE
#define STVALUES if (verbose) \
  printf ( "scale:%f translate:%ld ", *scale_value, *translate_value );
#endif /* FT_CONFIG_OPTION_INFINALITY_PATCHSET */

#ifdef __EMSCRIPTEN__
char *strcasestr(const char *s, const char *find);
/*
#include <ctype.h>
char *
strcasestr(s, find)
const char *s, *find;
{
	char c, sc;
	size_t len;

	if ((c = *find++) != 0) {
		c = tolower((unsigned char)c);
		len = strlen(find);
		do {
			do {
				if ((sc = *s++) == 0)
					return (NULL);
			} while ((char)tolower((unsigned char)sc) != c);
		} while (strncasecmp(s, find, len) != 0);
		s--;
	}
	return ((char *)s);
}
 */
#endif

  /* initialize renderer -- init its raster */
  static FT_Error
  ft_smooth_init( FT_Renderer  render )
  {
    FT_Library  library = FT_MODULE_LIBRARY( render );


    render->clazz->raster_class->raster_reset( render->raster,
                                               library->raster_pool,
                                               library->raster_pool_size );

    return 0;
  }


  /* sets render-specific mode */
  static FT_Error
  ft_smooth_set_mode( FT_Renderer  render,
                      FT_ULong     mode_tag,
                      FT_Pointer   data )
  {
    /* we simply pass it to the raster */
    return render->clazz->raster_class->raster_set_mode( render->raster,
                                                         mode_tag,
                                                         data );
  }

  /* transform a given glyph image */
  static FT_Error
  ft_smooth_transform( FT_Renderer       render,
                       FT_GlyphSlot      slot,
                       const FT_Matrix*  matrix,
                       const FT_Vector*  delta )
  {
    FT_Error  error = Smooth_Err_Ok;


    if ( slot->format != render->glyph_format )
    {
      error = Smooth_Err_Invalid_Argument;
      goto Exit;
    }

    if ( matrix )
      FT_Outline_Transform( &slot->outline, matrix );

    if ( delta )
      FT_Outline_Translate( &slot->outline, delta->x, delta->y );

  Exit:
    return error;
  }


  /* return the glyph's control box */
  static void
  ft_smooth_get_cbox( FT_Renderer   render,
                      FT_GlyphSlot  slot,
                      FT_BBox*      cbox )
  {
    FT_MEM_ZERO( cbox, sizeof ( *cbox ) );

    if ( slot->format == render->glyph_format )
      FT_Outline_Get_CBox( &slot->outline, cbox );
  }

#ifdef FT_CONFIG_OPTION_INFINALITY_PATCHSET
  static FT_Fixed FT_FixedFromFloat(float f)
  {
    short          value = f;
    unsigned short fract = (f - value) * 0xFFFF;


    return (FT_Fixed)((long)value << 16 | (unsigned long)fract );
  }


  /* ChromeOS sharpening algorithm */
  /* soften the sub-pixel anti-aliasing and sharpen */
  static void
  _ft_lcd_chromeos_sharpen( FT_Bitmap*  bitmap,
                        FT_Render_Mode  mode,
                        FT_Byte         cutoff,
                        double          gamma_value )
  {
    static FT_Bool        initialized_gamma = FALSE;
    static unsigned short gamma_ramp[256];
    FT_UInt               width  = (FT_UInt)bitmap->width;
    FT_UInt               height = (FT_UInt)bitmap->rows;
    int    ii;

    if ( !initialized_gamma )
    {
      initialized_gamma = TRUE;
      /* linear to voltage */
      for ( ii = 0; ii < 256; ii++ )
      {
        gamma_ramp[ii] = (unsigned char)
                         ( pow( (double)ii / 255.0, gamma_value ) * 255.0f );
        if ( gamma_ramp[ii] < cutoff )
          gamma_ramp[ii] = 0;
      }
    }

    /* horizontal in-place sub-pixel sharpening filter */
    if ( mode == FT_RENDER_MODE_LCD )
    {
      FT_Byte*  line = bitmap->buffer;


      for ( ; height > 0; height--, line += bitmap->pitch )
      {
        FT_UInt  xx;


        for ( xx = 0; xx < width; xx++ )
          line[xx] = gamma_ramp[line[xx]];
      }
    }
  }

  /* simple linear scale to handle various sliding values */
  float
  sliding_scale ( int            min_value,
                      int        max_value,
                      float      min_amount,
                      float      max_amount,
                      int        cur_value )
  {

    float m = ( min_amount - max_amount ) / (float)( min_value - max_value );
    float result = ( ( (float)cur_value * m) + ( max_amount - max_value * m ) ) ;

    if ( min_amount < max_amount )
    {
      if ( result < min_amount )
        return min_amount;
      if ( result > max_amount )
        return max_amount;
    }
    else
    {
      if ( result < max_amount )
        return max_amount;
      if ( result > min_amount )
        return min_amount;
    }

    return result;
  }


  /* brightness and contrast adjustment on the bitmap */
  static FT_Bool
  _ft_bitmap_bc  ( FT_Bitmap*       bitmap,
                      float         brightness,
                      float         contrast )
  {

    FT_UInt   width   = (FT_UInt)bitmap->width;
    FT_UInt   height  = (FT_UInt)bitmap->rows;
    FT_Byte*  line    = bitmap->buffer;
    FT_UInt   xx;


    if ( brightness == 0 && contrast == 0 )
      return FALSE;

    for ( height = (FT_UInt)bitmap->rows;
          height > 0;
          height--, line += bitmap->pitch )
    {
      for ( xx = 0; xx < width - 1; xx += 1 )
      {
        if ( line[xx] > 0)
        {
          float  value  = (float)( 255 - line[xx] ) / 256.0;
          FT_Int result = 0;

          if ( brightness < 0.0 )
            value = value * ( 1.0 + brightness );
          else
            value = value + ( ( 1.0 - value ) * brightness );

          value = ( value - 0.5 ) *
                    ( tan ( ( contrast + 1.0 ) * 3.141592/4.0 ) ) + 0.5;

          result = (FT_Int)( 255.0 - value * 256.0 );

          if ( result < 0 )
            result = 0;
          if ( result > 255 )
            result = 255;

          line[xx] = result;
        }
      }
    }
    return TRUE;
  }


  /* Filter to mimic Windows-style sharpening */
  /* Determined via 100% experimentation.     */
  static void
  _ft_lcd_windows_sharpen( FT_Bitmap*      bitmap,
                           FT_Render_Mode  mode,
                           FT_UInt         strength,
                           FT_Library      library )
  {

    FT_UInt   width   = (FT_UInt)bitmap->width;
    FT_UInt   height  = (FT_UInt)bitmap->rows;
    FT_Byte*  new_line;
    FT_Byte*  line = bitmap->buffer;
    FT_Bitmap new_bitmap;


    FT_Bitmap_New( &new_bitmap );
    FT_Bitmap_Copy( library, bitmap, &new_bitmap );
    new_line = (&new_bitmap)->buffer;

    if (strength > 0)
      for (height = (FT_UInt)bitmap->rows;
           height > 0;
           height--, line += bitmap->pitch, new_line += bitmap->pitch )
    {
      FT_UInt   xx, threshold = 128;
      FT_Byte*  prevline      = line - bitmap->pitch;
      FT_Byte*  nextline      = line + bitmap->pitch;
      FT_Byte*  new_prevline  = new_line - bitmap->pitch;
      FT_Byte*  new_nextline  = new_line + bitmap->pitch;

      for ( xx = 1; xx < width - 1; xx += 1 )
      {
        /* subpixel grid       sp11 sp21 sp31   */
        /* where sp22 is       sp12 sp22 sp32   */
        /* current subpixel.   sp13 sp23 sp33   */

        FT_Int prevtotal, nexttotal, lefttotal, righttotal, sidesdiff,
          prevdiff, nextdiff, sp11, sp21, sp31, sp12, sp22, sp32,
          sp13, sp23, sp33;

        sp12 = line [xx-1];
        sp22 = line [xx];
        sp32 = line [xx+1];

        if ( height == bitmap->rows )
        {
          prevtotal = sp11 = sp21 = sp31 = 0;
          prevdiff = sp22;
          lefttotal = sp12 + sp13;
          righttotal = sp32 + sp33;
        }
        else
        {
          prevtotal = prevline[xx-1] + prevline[xx] + prevline[xx+1];
          sp11 = prevline [xx-1];
          sp21 = prevline [xx];
          sp31 = prevline [xx+1];
          prevdiff = sp22 - sp21;
          lefttotal = sp11 + sp12 + sp13;
          righttotal = sp31 + sp32 + sp33;
        }

        if ( height == 1 )
        {
          nexttotal = sp13 = sp23 = sp33 = 0;
          nextdiff = sp22;
          lefttotal = sp11 + sp12;
          righttotal = sp31 + sp32;
        }
        else
        {
          nexttotal = nextline[xx-1] + nextline[xx] + nextline[xx+1];
          sp13 = nextline [xx-1];
          sp23 = nextline [xx];
          sp33 = nextline [xx+1];
          nextdiff = sp23 - sp22;
          lefttotal = sp11 + sp12 + sp13;
          righttotal = sp31 + sp32 + sp33;
        }

        sidesdiff = lefttotal - righttotal;

        if ( sidesdiff < 0 )
          sidesdiff *= -1;

        if ( prevdiff < 0 )
          prevdiff *= -1;

        if ( nextdiff < 0 )
          nextdiff *= -1;

        /* if the current pixel is less than threshold, and greater than 0  */
        if ( sp22 <= threshold && sp22 > 0 )
        {
          /* A pixel is horizontally isolated if: */
          /* 1: All upper adjecent pixels are >= threshold */
          if ( prevtotal >= nexttotal  &&
               abs( sp11 - sp12 ) > 5  &&
               abs( sp21 - sp22 ) > 5  &&
               abs( sp31 - sp32 ) > 5  && /* not a vert stem end */
               sp11 >= threshold       &&
               sp21 >= threshold       &&
               sp31 >= threshold       &&
               abs( sp23 - sp22 ) > 15 )  /* not on a vert stem */
          {
            /* darken upper adjacent subpixel;  lighten current */
            if ( height != (FT_UInt)bitmap->rows )
              new_prevline[xx] += ( ( 255 - new_prevline[xx] )
                                      * strength ) / 100 ;

            new_line[xx] -= ( new_line[xx] * strength ) / 100;

            if ( height != 1 && height != (FT_UInt)bitmap->rows )
              if ( new_nextline[xx] > 155 + ( 100 - strength ) )
                new_prevline[xx] = 255;

          }
          else if ( nexttotal > prevtotal  &&
                    abs( sp13 - sp12 ) > 5  &&
                    abs( sp23 - sp22 ) > 5  &&
                    abs( sp33 - sp32 ) > 5  &&
                    /* 2: All lower adjecent pixels are >= threshold */
                    sp13 >= threshold      &&
                    sp23 >= threshold      &&
                    sp33 >= threshold      &&
                    abs( sp22 - sp21 ) > 15 )
          {
            /* darken lower adjacent subpixel;  lighten current */
            if ( height != 1 )
              new_nextline[xx] += ( 255 - new_nextline[xx] ) * strength / 100;

            new_line[xx] -= ( new_line[xx] * strength ) / 100;

            if ( height != 1 )
              if ( new_nextline[xx] > 155 + ( 100 - strength ) )
                new_nextline[xx] = 255;

          }
        }
        else if ( sp22 > threshold && sp22 < 255 )
        {
          if ( sp11 <= threshold       &&
               abs( sp13 - sp12 ) > 5  &&
               abs( sp23 - sp22 ) > 5  &&
               abs( sp33 - sp32 ) > 5  &&
               sp21 <= threshold       &&
               sp31 <= threshold       &&
               prevtotal <= nexttotal  &&
               abs( sp22 - sp21 ) > 15 )
          {
            /* bring this subpixel 1/3 of the way to 255 at 100% strength */
            new_line[xx] += ( strength * ( 255 - new_line[xx] ) ) / 100;

            if ( height != (FT_UInt)bitmap->rows )
              new_prevline[xx] -= ( new_prevline[xx] * strength ) / 300;
          }
          else if ( sp13 <= threshold       &&
                    abs( sp11 - sp12 ) > 5  &&
                    abs( sp21 - sp22 ) > 5  &&
                    abs( sp31 - sp32 ) > 5  &&
                    sp23 <= threshold       &&
                    sp33 <= threshold       &&
                    nexttotal < prevtotal   &&
                    abs( sp23 - sp22 ) > 15 )
          {
            new_line[xx] += ( strength * ( 255 - new_line[xx] ) ) / 100;

            if ( height != 1 )
              new_nextline[xx] -= ( new_nextline[xx] * strength ) / 300;
          }
        }
      }
    }
    FT_Bitmap_Copy( library, &new_bitmap, bitmap);
    FT_Bitmap_Done( library, &new_bitmap );
  }


  static void
  _ft_lcd_darken_x  ( FT_Bitmap*      bitmap,
                      FT_Render_Mode  mode,
                      FT_UInt         strength,
                      FT_Library      library )
  {

    FT_UInt   width   = (FT_UInt)bitmap->width;
    FT_UInt   height  = (FT_UInt)bitmap->rows;
    FT_Byte*  new_line;
    FT_Byte*  line = bitmap->buffer;
    FT_Bitmap new_bitmap;
    int       factor1, factor2;
    int       bias = 0;

    FT_Bitmap_New( &new_bitmap );

    FT_Bitmap_Copy( library, bitmap, &new_bitmap );
    new_line = (&new_bitmap)->buffer;

    if ( strength > 0 )
      for ( height = (FT_UInt)bitmap->rows;
            height > 0;
            height--, line += bitmap->pitch, new_line += bitmap->pitch )
    {
      FT_UInt   xx;
      FT_Byte*  prevline = line - bitmap->pitch;
      FT_Byte*  nextline = line + bitmap->pitch;

      for ( xx = 1; xx < width - 1; xx += 1 )
      {
        /* subpixel grid       sp11 sp21 sp31   */
        /* where sp22 is       sp12 sp22 sp32   */
        /* current subpixel.   sp13 sp23 sp33   */

        FT_Int sp21, sp12, sp22, sp32, sp23;

        sp12 = line [xx-1];
        sp22 = line [xx];
        sp32 = line [xx+1];

        if ( height == bitmap->rows )
          sp21 = 0;
        else
          sp21 = prevline [xx];

        if ( height == 1 )
          sp23 = 0;
        else
          sp23 = nextline [xx];

        /* darken subpixel if neighbor above and below are much less than */
        /* safer but less effective */
        factor1 = 5;
        factor2 = 5;

        /* make matches in the middle of glyph slightly darker */
        /*if (height > 1 && height < (FT_UInt)bitmap->rows) bias = 1;*/

        if ( sp22 > factor1 * sp21  &&
             sp22  > factor1 * sp23 &&
             sp22 > factor2         &&
             sp12 > 16              &&
             sp32 > 16              )
          if ( new_line[xx] < ( strength * 255 ) / 100 )
            new_line[xx] = (strength * 255 ) / 100
                             + bias * ( 255 - ( strength * 255 ) / 100 ) / 3;

      }
    }
    FT_Bitmap_Copy( library, &new_bitmap, bitmap );
    FT_Bitmap_Done( library, &new_bitmap );
  }


  static void
  _ft_lcd_darken_y  ( FT_Bitmap*      bitmap,
                      FT_Render_Mode  mode,
                      FT_UInt         strength,
                      FT_Library      library )
  {

    FT_UInt   width   = (FT_UInt)bitmap->width;
    FT_UInt   height  = (FT_UInt)bitmap->rows;
    FT_Byte*  new_line;
    FT_Byte*  line = bitmap->buffer;
    FT_Bitmap   new_bitmap;


    FT_Bitmap_New( &new_bitmap );
    FT_Bitmap_Copy( library, bitmap, &new_bitmap );
    new_line = (&new_bitmap)->buffer;

    if ( strength > 0 )
      for ( height = (FT_UInt)bitmap->rows;
            height > 0;
            height--, line += bitmap->pitch, new_line += bitmap->pitch )
    {
      FT_UInt  xx;


      for ( xx = 1; xx < width - 1; xx += 1 )
      {
        if ( line[xx] > line[xx-1] && line[xx] > line[xx+1] )
        {
           if (new_line[xx] > 0)
             new_line[xx] += ( strength * ( 255 - new_line[xx] ) ) / 100;
           new_line[xx-1] += ( strength * ( 255 - line[xx-1] ) ) / 100;
           new_line[xx+1] += ( strength * ( 255 - line[xx+1] ) ) / 100;
        }
      }
    }
    FT_Bitmap_Copy( library, &new_bitmap, bitmap );
    FT_Bitmap_Done( library, &new_bitmap );
  }


  static void
  _ft_bitmap_cap  ( FT_Bitmap*      bitmap,
                    FT_UInt         strength,
                    FT_Library      library )
  {

    FT_UInt   width   = (FT_UInt)bitmap->width;
    FT_UInt   height  = (FT_UInt)bitmap->rows;
    FT_Byte*  new_line;
    FT_Byte*  line = bitmap->buffer;
    FT_UInt   cur_value = 0;
    FT_Bitmap new_bitmap;


    FT_Bitmap_New( &new_bitmap );
    FT_Bitmap_Copy( library, bitmap, &new_bitmap );
    new_line = (&new_bitmap)->buffer;

    if ( strength > 0 )
      for ( height = (FT_UInt)bitmap->rows;
            height > 0;
            height--, line += bitmap->pitch, new_line += bitmap->pitch )
    {
      FT_UInt  xx;


      for ( xx = 1; xx < width - 1; xx += 1 )
      {
        cur_value = ( new_line[xx-1] + new_line[xx] + new_line[xx+1] ) / 3;
        if ( cur_value > ( strength * 255 ) / 100 )
        {
          FT_UInt new_factor = ( strength * 255 ) / 100;
          new_line[xx] = ( new_line[xx] * new_factor ) / cur_value;
          new_line[xx+1] = ( new_line[xx+1] * new_factor ) / cur_value;
          new_line[xx-1] = ( new_line[xx-1] * new_factor ) / cur_value;
        }
      }
    }
    FT_Bitmap_Copy( library, &new_bitmap, bitmap );
    FT_Bitmap_Done( library, &new_bitmap );
  }


  int
  pseudo_gamma ( int val, float value )
  {
    return 256 * ( 1.0 - pow( ( 1.0 - (float)val / 256.0 ), 1.0 / value ) );
  }



  static void
  _ft_bitmap_embolden  ( FT_Bitmap*      bitmap,
                         FT_UInt         strength,
                         FT_Library      library )
  {

    FT_UInt   width   = (FT_UInt)bitmap->width;
    FT_UInt   height  = (FT_UInt)bitmap->rows;
    FT_Byte*  new_line;
    FT_Byte*  line = bitmap->buffer;
    FT_Bitmap new_bitmap;
    FT_UInt   xx;


    FT_Bitmap_New(&new_bitmap);
    FT_Bitmap_Copy(library, bitmap, &new_bitmap);
    new_line = (&new_bitmap)->buffer;

    if ( strength > 0 )
      for ( height = (FT_UInt)bitmap->rows;
            height > 0;
            height--, line += bitmap->pitch, new_line += bitmap->pitch )
    {
      for ( xx = 1; xx < width - 1; xx += 1 )
      {
        FT_Int new_value = 0;


        new_value = ( strength * line [xx-1] ) / 100
                      + pseudo_gamma( line [xx], .75 )
                      + (strength * line [xx+1] ) / 100;
        if ( new_value > 255 )
          new_value = 255;

        new_line[xx] = new_value;
      }
    }
    FT_Bitmap_Copy( library, &new_bitmap, bitmap );
    FT_Bitmap_Done( library, &new_bitmap );
  }



  static void
  _ft_bitmap_gamma  ( FT_Bitmap*    bitmap,
                      float         strength )
  {

    FT_UInt   width   = (FT_UInt)bitmap->width;
    FT_UInt   height  = (FT_UInt)bitmap->rows;
    FT_Byte*  line = bitmap->buffer;
    FT_UInt   xx;


    if ( strength > 0 )
      for ( height = (FT_UInt)bitmap->rows;
            height > 0;
            height--, line += bitmap->pitch )
    {

      for ( xx = 1; xx < width - 1; xx += 1 )
      {
        if ( abs( line[xx-1] - line[xx] ) < 20 ||
             abs( line[xx+1] - line[xx] ) < 20 )
        line [xx] = pseudo_gamma( line [xx], strength ) ;
      }
    }
  }


  /* Fringe filter */
  static void
  _ft_lcd_fringe_filter ( FT_Bitmap*      bitmap,
                          FT_Render_Mode  mode,
                          FT_UInt         strength,
                          FT_Library      library )
  {

    FT_UInt   width   = (FT_UInt)bitmap->width;
    FT_UInt   height  = (FT_UInt)bitmap->rows;
    FT_Byte*  new_line;
    FT_Byte*  line = bitmap->buffer;
    FT_Bitmap   new_bitmap;


    FT_Bitmap_New(&new_bitmap);

    line = bitmap->buffer;
    FT_Bitmap_Copy( library, bitmap, &new_bitmap );
    new_line = (&new_bitmap)->buffer;

    for ( height = (FT_UInt)bitmap->rows;
          height > 0;
          height--, line += bitmap->pitch, new_line += bitmap->pitch )
    {
      /* Threshold set to 1/2 pixel intensity */
      FT_UInt  xx, threshold = 128;

      /* Hack to make this work when bitmap is at first or last line */
      FT_Int   fudge = bitmap->pitch * (height == (FT_UInt)bitmap->rows);

      FT_Byte*  prevline = line - bitmap->pitch + fudge;
      FT_Byte*  nextline = line + bitmap->pitch;


      for ( xx = 1; xx < width - 1; xx += 1 )
      {
        /* subpixel grid       sp11 sp21 sp31   */
        /* where sp22 is       sp12 sp22 sp32   */
        /* current subpixel.   sp13 sp23 sp33   */

        FT_Int prevtotal, nexttotal, lefttotal, righttotal, sidesdiff,
          leftdiff, rightdiff, prevdiff, nextdiff, sp11, sp21, sp31,
          sp12, sp22, sp32, sp13, sp23, sp33;

        sp12 = line [xx-1];
        sp22 = line [xx];
        sp32 = line [xx+1];

        /* if at max height fake out some values */
        if ( height == (FT_UInt)bitmap->rows )
        {
          prevtotal = sp11 = sp21 = sp31 = 0;
          prevdiff = sp22;
          lefttotal = sp12 + sp13;
          righttotal = sp32 + sp33;
        }
        else
        {
          prevtotal = prevline[xx-1] + prevline[xx] + prevline[xx+1];
          sp11 = prevline [xx-1];
          sp21 = prevline [xx];
          sp31 = prevline [xx+1];
          prevdiff = sp22 - sp21;
          lefttotal = sp11 + sp12 + sp13;
          righttotal = sp31 + sp32 + sp33;
        }

        /* if at min height fake out some values */
        if ( height == 1 )
        {
          nexttotal = sp13 = sp23 = sp33 = 0;
          nextdiff = sp22;
          lefttotal = sp11 + sp12;
          righttotal = sp31 + sp32;
        }
        else
        {
          nexttotal = nextline[xx-1] + nextline[xx] + nextline[xx+1];
          sp13 = nextline [xx-1];
          sp23 = nextline [xx];
          sp33 = nextline [xx+1];
          nextdiff = sp23 - sp22;
          lefttotal = sp11 + sp12 + sp13;
          righttotal = sp31 + sp32 + sp33;
        }

        sidesdiff = lefttotal - righttotal;
        leftdiff = sp22 - sp12;
        rightdiff = sp32 - sp22;

        if ( sidesdiff < 0 )
          sidesdiff *= -1;

        if ( prevdiff < 0 )
          prevdiff *= -1;

        if ( nextdiff < 0 )
          nextdiff *= -1;

        if ( leftdiff < 0 )
          leftdiff *= -1;

        if ( rightdiff < 0 )
          rightdiff *= -1;

        /* if the current subpixel is less than threshold, and varies only
          slightly to left or right, lighten it */
        if ( sp22 <= threshold && sp22 > 0       &&
             ( leftdiff < 10 || rightdiff < 10 ) )
        {
          /* A pixel is horizontally isolated if: */
          /* 1: All upper adjecent subpixels are >= threshold and all lower
             adjacent ones are essentially white */
          if ( prevtotal >= nexttotal &&
               sp11 >= threshold      &&
               sp21 >= threshold      &&
               sp31 >= threshold      &&
               sp13 < 2               &&
               sp23 < 2               &&
               sp33 < 2               )

          {
            new_line[xx] -= ( new_line[xx] * strength ) / 100;

            if ( leftdiff < 10 )
              /* OPPORTUNITY FOR IMPROVEMENT  - keep going left until 255? */
              new_line[xx-1] -= ( new_line[xx-1] * strength ) / 200;

            if ( rightdiff < 10 )
              /* OPPORTUNITY FOR IMPROVEMENT */
              new_line[xx+1] -= ( new_line[xx+1] * strength ) / 200;
          }
          else if ( nexttotal > prevtotal &&
                    /* 2: the inverse of above */
                    sp13 >= threshold     &&
                    sp23 >= threshold     &&
                    sp33 >= threshold     &&
                    sp11 < 2              &&
                    sp21 < 2              &&
                    sp31 < 2              )
          {
            new_line[xx] -= ( new_line[xx] * strength ) / 100;

            if ( leftdiff < 10 )
              /* OPPORTUNITY FOR IMPROVEMENT - keep going left until 255?  */
              new_line[xx-1] -= ( new_line[xx-1] * strength ) / 200;

            if ( rightdiff < 10 )
              /* OPPORTUNITY FOR IMPROVEMENT */
              new_line[xx+1] -= ( new_line[xx+1] * strength ) / 200;
          }
        }
        /* otherwise if the current subpixel is more than threshold, and varies
          slightly to left or right, darken it */
        else if ( sp22 > threshold    &&
                  sp22 < 255          &&
                  ( leftdiff < 10  ||
                    rightdiff < 10 )  )
        {
          if ( sp11 <= 2             &&
               sp21 <= 2             &&
               sp31 <= 2             &&
               sp13 >= threshold     &&
               sp23 >= threshold     &&
               sp33 >= threshold     &&
               prevtotal < nexttotal )
            new_line[xx] += ( ( 255 - new_line[xx] ) * strength ) / 100;

          else if ( sp13 <= 2             &&
                    sp23 <= 2             &&
                    sp33 <= 2             &&
                    nexttotal < prevtotal &&
                    sp11 >= threshold     &&
                    sp21 >= threshold     &&
                    sp31 >= threshold     )
            new_line[xx] += ( ( 255 - new_line[xx] ) * strength ) / 100;

        }
      }
    }
    FT_Bitmap_Copy( library, &new_bitmap, bitmap );
    FT_Bitmap_Done( library, &new_bitmap );
  }


  /* Grayscale filter */
  static void
  _ft_lcd_grayscale_filter ( FT_Bitmap*      bitmap,
                             FT_Render_Mode  mode,
                             FT_UInt         strength,
                             FT_Library      library )
  {

    FT_UInt   width   = (FT_UInt)bitmap->width;
    FT_UInt   height  = (FT_UInt)bitmap->rows;
    FT_Byte*  line    = bitmap->buffer;


    for ( height = (FT_UInt)bitmap->rows;
          height > 0;
          height--, line += bitmap->pitch )
    {
      FT_UInt xx;


      for ( xx = 0; xx < width - 1; xx += 3 )
      {
        FT_UInt total = line [xx] + line [xx + 1] + line [xx + 2];
        line[xx] =   ( ( 100 - strength ) * line[xx]
                       + strength * ( total / 3 ) ) / 100;
        line[xx+1] = ( ( 100 - strength ) * line[xx+1]
                       + strength * ( total / 3 ) ) / 100;
        line[xx+2] = ( ( 100 - strength ) * line[xx+2]
                       + strength * ( total / 3 ) ) / 100;
      }
    }
  }



  /*************************************************************************/
  /*                                                                       */
  /*                                                                       */
  /*                                                                       */
  /*                                                                       */
  /*                                                                       */
  /*                                                                       */


  typedef struct  SA_Rule_
  {
    const char  family[32];
    const int   ppem[5];

  } SA_Rule;

#define STEM_WIDTH_2_PPEM 18
#define MAX_PPEM 100



/* "Font name", {ppem where stem width becomes 1,
 *               ppem where stem width becomes 2... etc.} */
/* 100 means auto-calculate */
#define SNAPPING_STEM_WIDTHS_RULES_SIZE 21
  SA_Rule  SNAPPING_STEM_WIDTHS_Rules
    [SNAPPING_STEM_WIDTHS_RULES_SIZE] =
    {
      { "Andale Mono",          {10, 21, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Arial Narrow",         {10, 21, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Calibri",              {10, 19, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Cantarell",            {10, 22, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Century Gothic",       {10, 22, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Comfortaa",            {10, 19, 22, MAX_PPEM, MAX_PPEM} },
      { "Consolas",             {10, 20, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Corbel",               {10, 21, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Futura",               {10, 14, STEM_WIDTH_2_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Gill Sans",            {10, 17, STEM_WIDTH_2_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Helvetica CY",         {10, 23, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Inconsolata",          {10, 23, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Liberation Sans Narrow", {10, 22, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Liberation Sans",      {10, 19, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Lucida Grande",        {10, 16, STEM_WIDTH_2_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Lucida Sans Unicode",  {10, 16, STEM_WIDTH_2_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Luxi Sans",            {10, 17, STEM_WIDTH_2_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Open Sans",            {10, 20, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Rokkitt",              {10, 21, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Segoe UI",             {10, 23, MAX_PPEM, MAX_PPEM, MAX_PPEM} },
      { "Trebuchet MS",         {10, 17, STEM_WIDTH_2_PPEM, MAX_PPEM, MAX_PPEM} },
    };


/* "Font name", {ppem, scale_up=1|scale_down=0} */
#define SNAPPING_STEM_SCALING_RULES_SIZE 31
  SA_Rule  SNAPPING_STEM_SCALING_Rules
    [SNAPPING_STEM_SCALING_RULES_SIZE] =
    {
      { "Andale Mono", {11, 1,} },
      { "Bitstream Vera Sans", {12, 1,} },
      { "Calibri", {15, 1,} },
      { "Calibri", {17, 1,} },
      { "Calibri", {18, 1,} },
      { "Candara", {14, 1,} },
      { "Candara", {17, 1,} },
      { "Canwell", {13, 0,} },
      { "Comfortaa", {11, 0,} },
      { "Consolas", {11, 1,} },
      { "DejaVu Sans", {12, 1,} },
      { "Freesans", {16, 0,} },
      { "Freeserif", {13, 1,} },
      { "Freeserif", {17, 1,} },
      { "Inconsolata", {12, 1,} },
      { "Inconsolata", {15, 1,} },
      { "Lucida Grande", {13, 1,} },
      { "Myriad Pro", {14, 1,} },
      { "Myriad Pro", {17, 1,} },
      { "Nina", {11, 0,} },
      { "Nina", {12, 0,} },
      { "Nina", {13, 0,} },
      { "Optima", {17, 1,} },
      { "Raleway", {15, 0,} },
      { "Samba", {11, 0,} },
      { "Times New Roman", {17, 1,} },
      { "Trebuchet MS", {17, 0,} },
      { "Trebuchet MS", {13, 0,} },
      { "Trebuchet MS", {20, 1,} },
      { "Verdana", {12, 1,} },
      { "Verdana", {15, 1,} },
    };


/* "Font name", {ppem, scale_up=1|scale_down=0} */
#define SNAPPING_M_RULES_SIZE 9
  SA_Rule  SNAPPING_M_Rules
    [SNAPPING_M_RULES_SIZE] =
    {
      { "Courier New", {13, 1,} },
      { "Courier New", {14, 1,} },
      { "Courier", {13, 1,} },
      { "Courier", {14, 1,} },
      { "Droid Sans Mono", {12, 0,} },
      { "Bitstream Vera Sans", {12, 0,} },
      { "DejaVu Sans", {12, 0,} },
      { "Essential PragmataPro", {13, 0,} },
      { "Essential PragmataPro", {14, 0,} },
    };


/* "Font name", {ppem, ppem} */
#define SNAPPING_SYNTHESIZE_STEMS_RULES_SIZE 1
  SA_Rule  SNAPPING_SYNTHESIZE_STEMS_Rules
    [SNAPPING_SYNTHESIZE_STEMS_RULES_SIZE] =
    {
      { "---", {13, 13,} },
    };


/* "Font name", {ppem, ppem} */
#define SNAPPING_NO_BEARING_CORRECTION_RULES_SIZE 1
  SA_Rule  SNAPPING_NO_BEARING_CORRECTION_Rules
    [SNAPPING_NO_BEARING_CORRECTION_RULES_SIZE] =
    {
      { "Times New Roman", {0, 100,} },
    };


/* "Font name", {ppem, ppem} */
#define SNAPPING_EDGE_DETECTION_RULES_SIZE 8
  SA_Rule  SNAPPING_EDGE_DETECTION_Rules
    [SNAPPING_EDGE_DETECTION_RULES_SIZE] =
    {
      { "Tahoma", {11, 11,} },
      { "Courier New", {10, 12,} },
      { "Arial", {11, 11,} },
      { "Arial", {13, 13,} },
      { "Liberation Sans", {11, 11,} },
      { "FreeSans", {11, 11,} },
      { "FreeSans", {13, 13,} },
      { "Palatino Linotype", {0, 100,} },
    };

/* "Font name", {ppem, translate_value} */
#define SNAPPING_STEM_TRANSLATING_RULES_SIZE 6
  SA_Rule  SNAPPING_STEM_TRANSLATING_Rules
    [SNAPPING_STEM_TRANSLATING_RULES_SIZE] =
    {
      { "Arial", {11, 32,} },
      { "Arial Unicode MS", {11, 32,} },
      { "FreeSans", {11, 32,} },
      { "Arimo", {11, 32,} },
      { "Liberation Sans", {11, 32,} },
      { "Tahoma", {11, 32,} },
    };

/* "Font name", {ppem, translate_value} */
#define SNAPPING_STEM_TRANSLATING_ONLY_RULES_SIZE 74
  SA_Rule  SNAPPING_STEM_TRANSLATING_ONLY_Rules
    [SNAPPING_STEM_TRANSLATING_ONLY_RULES_SIZE] =
    {
      { "Arial Unicode MS", {10, 16,} },
      { "Arial Unicode MS", {8, 32,} },
      { "Arial Unicode MS", {9, 32,} },
      { "Arial", {10, 16,} },
      { "Arial", {8, 32,} },
      { "Arial", {9, 32,} },
      { "Arial", {16, -24,} },
      { "Arimo", {10, 8,} },
      { "Arimo", {8, 32,} },
      { "Arimo", {9, 32,} },
      { "Bitstream Vera Sans", {8, 16,} },
      { "Calibri", {10, 16,} },
      { "Calibri", {15, 0,} },
      { "Candara", {10, 16,} },
      { "Cantarell", {11, 0} },
      { "Cantarell", {12, 0} },
      { "Consolas", {8, 32,} },
      { "Consolas", {9, 32,} },
      { "Corbel", {10, 16,} },
      { "Courier", {13, 16,} },
      { "Courier", {15, 0,} },
      { "Dejavu Sans Mono", {7, 16,} },
      { "Dejavu Sans Mono", {8, 32,} },
      { "Dejavu Sans Mono", {9, 16,} },
      { "Dejavu Sans", {8, 16,} },
      { "Dejavu Sans", {15, -20,} },
      { "Droid Sans", {8, 16,} },
      { "Droid Sans", {9, 16,} },
      { "Freesans", {10, 16,} },
      { "Freesans", {9, 8,} },
      { "Georgia", {13, 16,} },
      { "Georgia", {14, 16,} },
      { "Georgia", {15, 0,} },
      { "Inconsolata", {10, 24,} },
      { "Inconsolata", {9, 32,} },
      { "Liberation Sans", {10, 8,} },
      { "Liberation Sans", {8, 32,} },
      { "Liberation Sans", {9, 32,} },
      { "Lucida Grande", {13, 24,} },
      { "Lucida Grande", {14, 24,} },
      { "Lucida Grande", {8, 16,} },
      { "Lucida Grande", {9, 16,} },
      { "Lucida Sans Unicode", {13, 24,} },
      { "Lucida Sans Unicode", {14, 24,} },
      { "Lucida Sans Unicode", {8, 16,} },
      { "Lucida Sans Unicode", {9, 16,} },
      { "Microsoft Sans Serif", {10, 16,} },
      { "Microsoft Sans Serif", {8, 32,} },
      { "Microsoft Sans Serif", {9, 32,} },
      { "Myriad Pro", {10, 16,} },
      { "Myriad Pro", {11, 0,} },
      { "Myriad Pro", {9, 16,} },
      { "Open Sans", {10, 16,} },
      { "Open Sans", {9, 16,} },
      { "Optima", {10, 0} },
      { "Optima", {11, 0} },
      { "Optima", {12, 0} },
      { "Segoe UI", {10, 0,} },
      { "Segoe UI", {7, 32,} },
      { "Segoe UI", {8, 16,} },
      { "Segoe UI", {9, 24,} },
      { "Tahoma", {7, 32,} },
      { "Tahoma", {8, 32,} },
      { "Tahoma", {9, 32,} },
      { "Times New Roman", {17, 8,} },
      { "Trebuchet MS", {10, 16,} },
      { "Trebuchet MS", {11, 0,} },
      { "Trebuchet MS", {8, 32,} },
      { "Trebuchet MS", {9, 32,} },
      { "Verdana", {8, 16,} },
      { "Verdana", {15, 16,} },
      { "Verdana", {14, 32,} },
      { "Verdana", {18, 32,} },
      { "Verdana", {19, 24,} },
    };


/* "Font name", {start ppem, end ppem} */
#define ALWAYS_USE_100_RULES_SIZE 46
  SA_Rule  ALWAYS_USE_100_Rules
    [ALWAYS_USE_100_RULES_SIZE] =
    {
      { "Andale Mono", {0, MAX_PPEM,} },
      { "Arial Unicode MS", {0, MAX_PPEM,} },
      { "Arial", {0, MAX_PPEM,} },
      { "Arimo", {0, MAX_PPEM,} },
      { "Bitstream Vera Sans Mono", {0, MAX_PPEM,} },
      { "Bitstream Vera Sans", {10, 14,} },
      { "Bitstream Vera Sans", {16, 17,} },
      { "Calibri", {23, MAX_PPEM,} },
      { "Consolas", {0, MAX_PPEM,} },
      { "Courier New", {12, 12,} },
      { "Courier", {0, MAX_PPEM,} },
      { "Cousine", {0, MAX_PPEM,} },
      { "DejaVu Sans Mono", {0, MAX_PPEM,} },
      { "DejaVu Sans", {10, 14,} },
      { "DejaVu Sans", {16, 17,} },
      { "Droid Sans", {12, 12,} },
      { "Droid Sans", {15, 15,} },
      { "FreeMono", {0, MAX_PPEM,} },
      { "FreeSans", {0, MAX_PPEM,} },
      { "Liberation Mono", {0, MAX_PPEM,} },
      { "Lucida Console", {0, MAX_PPEM,} },
      { "Luxi Sans", {13, 13,} },
      { "Microsoft Sans Serif", {0, MAX_PPEM,} },
      { "Monaco", {0, MAX_PPEM,} },
      { "Segoe UI", {11, 12,} },
      { "Segoe UI", {14, 14,} },
      { "Tahoma", {11, 11,} },
      { "Tahoma", {14, MAX_PPEM,} },
      { "Times New Roman", {14, 14,} },
      { "Times New Roman", {16, 16,} },
      { "Trebuchet MS", {13, 13,} },
      { "Ubuntu", {12, 13,} },
      { "Ubuntu", {15, 15,} },
      { "Verdana", {0, 14,} },
      { "Verdana", {16, MAX_PPEM,} },
      { "Pragmata", {0, MAX_PPEM,} },
      { "Essential PragmataPro", {0, MAX_PPEM,} },
    };




#define AUTOHINT_BRIGHTNESS_RULES_SIZE 3
  SA_Rule  BRIGHTNESS_Rules
    [AUTOHINT_BRIGHTNESS_RULES_SIZE] =
    {
      { "Baskerville", {0, -20,} },
      { "Garamond", {0, -20,} },
      { "Optima", {0, -20,} },
    };

#define AUTOHINT_CONTRAST_RULES_SIZE 3
  SA_Rule  CONTRAST_Rules
    [AUTOHINT_CONTRAST_RULES_SIZE] =
    {
      { "Baskerville", {0, 25,} },
      { "Garamond", {0, 25,} },
      { "Optima", {0, 25,} },
    };

#if 0
#define STEM_SPACING_RULES_SIZE 3
  SA_Rule  STEM_SPACING_Rules
    [STEM_SPACING_RULES_SIZE] =
    {
      { "Tahoma", {10, 12, 18, 18, 30} },
      { "Arial", {10, 11, 23, 25, 30} },
      { "Freesans", {10, 12, 18, 18, 30} },
    };

#define STEM_START_RULES_SIZE 3
  SA_Rule  STEM_START_Rules
    [STEM_START_RULES_SIZE] =
    {
      { "Tahoma", {14, 17, 30, 100, 100} },
      { "Arial", {11, 18, 23, 30, 30} },
      { "Freesans", {10, 18, 18, 25, 30} },
    };
#endif

  typedef struct  Stem_Data_
  {
    FT_Int       stem_width;
    FT_Int       stem_spacing;
    FT_Int       stem_start;
    FT_Int       stem_scaling;
    FT_Int       stem_translating_only;
    FT_Int       stem_translating;
    FT_Int       brightness;
    FT_Int       contrast;
    FT_Bool      use_100;
    FT_Bool      synth_stems;
    FT_Bool      edge_detection;
    FT_Bool      bearing_correction;
    FT_Int       m;
  } Stem_Data;


  typedef struct  Stem_Segment_
  {
    FT_Long       x1;
    FT_Long       x2;
    FT_Int        y;
  } Stem_Segment;

  typedef struct  Stem_Center_
  {
    FT_Long       x;
    FT_Long       y;
    FT_Long       w;
    FT_Long       x1;
    FT_Long       x2;
  } Stem_Center;

  typedef struct  Stem_
  {
    FT_Long       center;
    FT_Long       count;
    FT_Long       rcount; /* used to count within a range in possible stems */
    FT_Long       width;
    FT_Long       height;
    FT_Short      zone;  /* 1 2 or 3 */
    FT_Bool       generated;
  } Stem;


  static void
  swap_stem ( Stem* s1, Stem* s2 )
  {
    Stem s;
    s.center = s1->center;
    s.count  = s1->count;
    s.rcount = s1->rcount;
    s.width  = s1->width;
    s.zone   = s1->zone;
    s.generated = s1->generated;

    s1->center = s2->center;
    s1->count  = s2->count;
    s1->rcount = s2->rcount;
    s1->width  = s2->width;
    s1->zone   = s2->zone;
    s1->generated = s2->generated;

    s2->center = s.center;
    s2->count  = s.count;
    s2->rcount = s.rcount;
    s2->width  = s.width;
    s2->zone   = s.zone;
    s2->generated = s.generated;
  }


  FT_LOCAL_DEF( void )
  sa_fill_known_stem_values (
                  FT_String*      family,
                  int             ppem,
                  FT_String*      style,
                  FT_UInt         num_stems,
                  Stem_Data*      known_stem_values )
  {
    FT_Int  i, j;
    if (verbose) printf("%s ", family);

    i = 0;
    while ( i < SNAPPING_STEM_WIDTHS_RULES_SIZE )
    {
      if ( family                                    &&
           ( strcasecmp( SNAPPING_STEM_WIDTHS_Rules[i].family,
                         family ) == 0 ) )
      {
        j = 0;
        known_stem_values->stem_width = 1;

        while (j < 4)
        {
          if ( SNAPPING_STEM_WIDTHS_Rules[i].ppem[j] == MAX_PPEM )
          {
            known_stem_values->stem_width = -1;  /* use default */
            j = 5;
            i = SNAPPING_STEM_WIDTHS_RULES_SIZE;
          }
          else if ( ppem < SNAPPING_STEM_WIDTHS_Rules[i].ppem[j] )
          {
            known_stem_values->stem_width = j;
            j = 5;
            i = SNAPPING_STEM_WIDTHS_RULES_SIZE;
          }
          j++;
        }
      }
      i++;
    }

    i = 0;
    while ( i < SNAPPING_STEM_SCALING_RULES_SIZE )
    {
      if ( family                                    &&
           ( strcasecmp( SNAPPING_STEM_SCALING_Rules[i].family,
                         family ) == 0 ) )
      {
        known_stem_values->stem_scaling = -1;  /* default */

        if ( ppem == SNAPPING_STEM_SCALING_Rules[i].ppem[0] )
        {
          known_stem_values->stem_scaling
            = SNAPPING_STEM_SCALING_Rules[i].ppem[1];
          i = SNAPPING_STEM_SCALING_RULES_SIZE;
        }
      }
      i++;
    }


    i = 0;
    while ( i < SNAPPING_M_RULES_SIZE )
    {
      if ( family                                                    &&
           ( strcasecmp( SNAPPING_M_Rules[i].family, family ) == 0 ) )
      {
        known_stem_values->m = -1;  /* default */

        if ( ppem == SNAPPING_M_Rules[i].ppem[0] )
        {
          known_stem_values->m = SNAPPING_M_Rules[i].ppem[1];
          i = SNAPPING_M_RULES_SIZE;
        }
      }
      i++;
    }

    i = 0;
    while ( i < SNAPPING_STEM_TRANSLATING_ONLY_RULES_SIZE )
    {
      if ( family                                                        &&
           ( strcasecmp( SNAPPING_STEM_TRANSLATING_ONLY_Rules[i].family,
                         family ) == 0 )                                 )
      {
        known_stem_values->stem_translating_only = -1024;  /* default */

        if ( ppem == SNAPPING_STEM_TRANSLATING_ONLY_Rules[i].ppem[0] ||
               SNAPPING_STEM_TRANSLATING_ONLY_Rules[i].ppem[0] == 0  )
        {
          known_stem_values->stem_translating_only
            = SNAPPING_STEM_TRANSLATING_ONLY_Rules[i].ppem[1];
          i = SNAPPING_STEM_TRANSLATING_ONLY_RULES_SIZE;
        }
      }
      i++;
    }

    i = 0;
    while ( i < SNAPPING_STEM_TRANSLATING_RULES_SIZE )
    {
      if ( family                                                   &&
           ( strcasecmp( SNAPPING_STEM_TRANSLATING_Rules[i].family,
                         family ) == 0 )                            )
      {
        known_stem_values->stem_translating = 0;  /* default */

        if ( ppem == SNAPPING_STEM_TRANSLATING_Rules[i].ppem[0] ||
               SNAPPING_STEM_TRANSLATING_Rules[i].ppem[0] == 0  )
        {
          known_stem_values->stem_translating
            = SNAPPING_STEM_TRANSLATING_Rules[i].ppem[1];
          i = SNAPPING_STEM_TRANSLATING_RULES_SIZE;
        }
      }
      i++;
    }


    i = 0;
    while ( i < ALWAYS_USE_100_RULES_SIZE )
    {
      if ( family                                    &&
           ( strcasecmp( ALWAYS_USE_100_Rules[i].family, family ) == 0 ) )
      {
        known_stem_values->use_100 = FALSE;  /* default */

        if ( ppem >= ALWAYS_USE_100_Rules[i].ppem[0] &&
             ppem <= ALWAYS_USE_100_Rules[i].ppem[1] )
        {
          known_stem_values->use_100 = TRUE;
          i = ALWAYS_USE_100_RULES_SIZE;
        }
      }
      i++;
    }


    i = 0;
    while ( i < SNAPPING_SYNTHESIZE_STEMS_RULES_SIZE )
    {
      if ( family                                                   &&
           ( strcasecmp( SNAPPING_SYNTHESIZE_STEMS_Rules[i].family,
                         family ) == 0 )                            )
      {
        known_stem_values->synth_stems = FALSE;  /* default */

        if ( ppem >= SNAPPING_SYNTHESIZE_STEMS_Rules[i].ppem[0] &&
             ppem <= SNAPPING_SYNTHESIZE_STEMS_Rules[i].ppem[1] )
        {
          known_stem_values->synth_stems = TRUE;
          i = SNAPPING_SYNTHESIZE_STEMS_RULES_SIZE;
        }
      }
      i++;
    }


    i = 0;
    while ( i < SNAPPING_EDGE_DETECTION_RULES_SIZE )
    {
      if ( family                                                 &&
           ( strcasecmp( SNAPPING_EDGE_DETECTION_Rules[i].family,
                         family ) == 0 )                          )
      {
        known_stem_values->edge_detection = FALSE;  /* default */

        if ( ppem >= SNAPPING_EDGE_DETECTION_Rules[i].ppem[0] &&
             ppem <= SNAPPING_EDGE_DETECTION_Rules[i].ppem[1] )
        {
          known_stem_values->edge_detection = TRUE;
          i = SNAPPING_EDGE_DETECTION_RULES_SIZE;
        }
      }
      i++;
    }


    i = 0;
    while ( i < SNAPPING_NO_BEARING_CORRECTION_RULES_SIZE )
    {
      if ( family                                                        &&
           ( strcasecmp( SNAPPING_NO_BEARING_CORRECTION_Rules[i].family,
                         family ) == 0 )                                 )
      {
        known_stem_values->bearing_correction = TRUE;  /* default */

        if ( ppem >= SNAPPING_NO_BEARING_CORRECTION_Rules[i].ppem[0] &&
             ppem <= SNAPPING_NO_BEARING_CORRECTION_Rules[i].ppem[1] )
        {
          known_stem_values->bearing_correction = FALSE;
          i = SNAPPING_NO_BEARING_CORRECTION_RULES_SIZE;
        }
      }
      i++;
    }


#if 0
    i = 0;
    while ( i < AUTOHINT_BRIGHTNESS_RULES_SIZE )
    {
      if ( family                                    &&
           ( strcasecmp( BRIGHTNESS_Rules[i].family, family ) == 0 ) )
      {
        known_stem_values->brightness = 0.0;

        if ( ppem == BRIGHTNESS_Rules[i].ppem[0] ||
             BRIGHTNESS_Rules[i].ppem[0] == 0    )
        {
          known_stem_values->brightness = BRIGHTNESS_Rules[i].ppem[1];
          i = AUTOHINT_BRIGHTNESS_RULES_SIZE;
        }
      }
      i++;
    }

    i = 0;
    while ( i < AUTOHINT_CONTRAST_RULES_SIZE )
    {
      if ( family                                    &&
           ( strcasecmp( CONTRAST_Rules[i].family, family ) == 0 ) )
      {
        known_stem_values->contrast = 0.0;

        if ( ppem == CONTRAST_Rules[i].ppem[0] ||
             CONTRAST_Rules[i].ppem[0] == 0    )
        {
          known_stem_values->contrast = CONTRAST_Rules[i].ppem[1];
          i = AUTOHINT_CONTRAST_RULES_SIZE;
        }
      }
      i++;
    }

    for ( i = 0; i <= STEM_SPACING_RULES_SIZE; i++ )
    {
      if ( family                                    &&
           ( strcasecmp( STEM_SPACING_Rules[i].family, family ) == 0 ) )
      {
        j = 0;
        known_stem_values->stem_spacing = 2;  /* default */

        while (j < 4)
        {
          if ( ppem < STEM_SPACING_Rules[i].ppem[j] )
          {
            known_stem_values->stem_spacing = j;
            j = 5;
          }
          j++;
        }
      }
    }


    for ( i = 0; i <= STEM_START_RULES_SIZE; i++ )
    {
      if ( family                                    &&
           ( strcasecmp( STEM_START_Rules[i].family, family ) == 0 ) )
      {
        j = 0;
        known_stem_values->stem_start = 1;  /* default */

        while (j < 4)
        {
          if ( ppem < STEM_START_Rules[i].ppem[j] )
          {
            known_stem_values->stem_start = j;
            j = 5;
          }
          j++;
        }
      }
    }
#endif
  }


  FT_LOCAL_DEF( FT_Int )
  get_contrast ( FT_String*  family,
                 int         ppem )
  {
    FT_Int  i;


    if ( verbose )
      printf( "%s ", family );

    i = 0;
    while ( i < AUTOHINT_CONTRAST_RULES_SIZE )
    {
      if ( family                                    &&
           ( strcasecmp( CONTRAST_Rules[i].family, family ) == 0 ) )
      {
        if ( ppem == CONTRAST_Rules[i].ppem[0] ||
             CONTRAST_Rules[i].ppem[0] == 0    )
          return CONTRAST_Rules[i].ppem[1];
      }
      i++;
    }
    return 0;
  }


  FT_LOCAL_DEF( FT_Int )
  get_brightness ( FT_String*  family,
                   int         ppem )
  {
    FT_Int  i;


    if ( verbose )
      printf("%s ", family);

    i = 0;
    while ( i < AUTOHINT_BRIGHTNESS_RULES_SIZE )
    {
      if ( family                                    &&
           ( strcasecmp( BRIGHTNESS_Rules[i].family, family ) == 0 ) )
      {
        if ( ppem == BRIGHTNESS_Rules[i].ppem[0] ||
             BRIGHTNESS_Rules[i].ppem[0] == 0    )
          return BRIGHTNESS_Rules[i].ppem[1];
      }
      i++;
    }
    return 0;
  }


  /* Stem alignment for bitmaps;  A hack with very nice results */
  /* Ideally this could be implemented on the outline, prior to
   * rasterization.  Possible future enhancement is to use the
   * warper code to achieve this */
  static void
  _lcd_stem_align ( FT_Bitmap*      bitmap,
                    FT_Render_Mode  mode,
                    FT_GlyphSlot    slot,
                    FT_Long*        translate_value,
                    float*          scale_value,
                    FT_UInt         alignment_strength,
                    FT_UInt         fitting_strength,
                    float*          embolden_value
                  )
  {
    FT_UInt         width   = (FT_UInt)bitmap->width;
    FT_UInt         height  = (FT_UInt)bitmap->rows;

    Stem_Segment*   segments;
    Stem_Segment*   leftmost_segment;
    Stem_Segment*   rightmost_segment;
    Stem_Segment*   leftmost_segment_not_extrema;
    Stem_Segment*   rightmost_segment_not_extrema;
    Stem*           stems;
    Stem*           possible_stems;
    Stem*           leftmost_stem;
    Stem*           rightmost_stem;
    Stem_Data*      known_stem_values;
    Stem_Center*    centers;
    FT_Long         leftmost_point = width * 256;
    FT_Long         rightmost_point = 0;
    FT_Long         leftmost_point_not_extrema = width * 256;
    FT_Long         rightmost_point_not_extrema = 0;
    FT_Long         num_segments = 0;
    FT_Long         num_centers = 0;
    FT_Long         stem_centers[width * 256];
    FT_UInt         h;
    FT_ULong        valid_stems = 0, valid_possible_stems = 0;
    FT_Long         center, stem_matches, stem_matches_ledge;
    FT_Long         stem_matches_redge, next_center, last_matching_center;
    FT_Long         last_matching_ledge, last_matching_redge, this_center;
    FT_Int          max_strength;
    FT_Byte*        line = bitmap->buffer;
    FT_UInt         current_value = 0;
    FT_UInt         xx;
    FT_Long         linearHoriAdvance = slot->linearHoriAdvance >> 10;

    FT_Int          m_horiBearingX = slot->metrics.horiBearingX;
    FT_Int          m_horiAdvance = slot->metrics.horiAdvance;
    FT_Int          m_width = slot->metrics.width;
    FT_Pos          one_pixel = 768;
    FT_Pos          one_third_pixel = 256;
    FT_Int          columns_per_pixel = 3;
    /*FT_Int          extra_columns = 6;*/

    /* on / off flags for testing different features */
    FT_Bool         strategy_translate_using_closest_stem = TRUE;
    FT_Bool         strategy_scale_to_closest_centers = FALSE;
    FT_Bool         strategy_scale_to_closest_centers_up_only = FALSE;
    FT_Bool         strategy_always_use_distance_ceiling = FALSE;
    FT_Bool         strategy_auto_change_center_offset = TRUE;
    FT_Bool         strategy_use_m_control = FALSE;
    FT_Bool         strategy_correct_out_of_bounds_outlines = FALSE;
    FT_Bool         strategy_also_use_edge_detection_for_stems = FALSE;
    FT_Bool         strategy_use_strengths = TRUE;
    FT_Bool         strategy_synthesize_stems = FALSE;
    FT_Bool         strategy_bearing_correction = TRUE;
    FT_Bool         strategy_use_d_correction = TRUE;
    FT_Bool         strategy_fit_to_width = FALSE;
    /*FT_Bool         strategy_center_glyph = FALSE;*/

    FT_Bool         has_serifs = FALSE;
    FT_Bool         autohinted = FALSE;

    const FT_Int    MIN_PPEM = 7;
    /*const FT_Int    MAX_PPEM = 100;*/
    const FT_Int    MAX_STEMS = 3;
    FT_Int          ppem = 0;

    FT_Bool         checked_use_known_settings_on_selected_fonts_env = FALSE;
    FT_Bool         use_known_settings_on_selected_fonts = FALSE;

    int cur_width;
    char *cur_width_env = getenv( "CUR_WIDTH" );



    if ( cur_width_env != NULL )
    {
      sscanf ( cur_width_env, "%d", &cur_width );
      if ( cur_width != 0 )
        autohinted = TRUE;
    }

    /* reset to default */
    *scale_value = 1.0;

    if ( !checked_use_known_settings_on_selected_fonts_env )
    {
      char *use_known_settings_on_selected_fonts_env =
        getenv( "INFINALITY_FT_USE_KNOWN_SETTINGS_ON_SELECTED_FONTS" );
      if ( use_known_settings_on_selected_fonts_env != NULL )
      {
        if ( strcasecmp( use_known_settings_on_selected_fonts_env,
                         "default" ) != 0 )
        {
          if ( strcasecmp( use_known_settings_on_selected_fonts_env,
                           "true") == 0 )
            use_known_settings_on_selected_fonts = TRUE;
          else if ( strcasecmp( use_known_settings_on_selected_fonts_env,
                                "1") == 0 )
            use_known_settings_on_selected_fonts = TRUE;
          else if ( strcasecmp( use_known_settings_on_selected_fonts_env,
                                "on") == 0 )
            use_known_settings_on_selected_fonts = TRUE;
          else if ( strcasecmp( use_known_settings_on_selected_fonts_env,
                                "yes") == 0 )
            use_known_settings_on_selected_fonts = TRUE;
        }
      }
      checked_use_known_settings_on_selected_fonts_env = TRUE;
    }


    /* Simply return in odd cases where these don't seem to be set */
    /* Flash and some pdf viewers will crash otherwise */
    if ( !slot->face                       ||
         !slot->face->size                 ||
         !slot->face->size->metrics.x_ppem )
      return;

    if ( slot->face->size->metrics.x_ppem > MAX_PPEM )
      return;

    if ( slot->face->size->metrics.x_ppem < MIN_PPEM )
      return;

    if ( !FT_IS_SCALABLE( slot->face ) )
      return;

    ppem = slot->face->size->metrics.x_ppem;


    /* only perform alignment on styles we know, that aren't bold or italic */
    /* perhaps detection could be added on those that are not set? */
    /* Require certain ppems for narrow and light fonts */
    if( slot->face->style_name )
    {
      if ( strcasestr( slot->face->style_name, "Italic" )            ||
           strcasestr( slot->face->style_name, "Oblique" )           ||
           strcasestr( slot->face->style_name, "Script" )            ||
           strcasestr( slot->face->style_name, "Handwriting" )       ||
           strcasestr( slot->face->style_name, "Bold" )              ||
           strcasestr( slot->face->style_name, "Black" )             ||
           ( ( strcasestr( slot->face->style_name, "Extra Thin" )  ||
               strcasestr( slot->face->style_name, "Extra Light" ) ) &&
             ppem < 10 )                                             ||
           ( strcasestr( slot->face->style_name, "Thin" )
               && ppem < 10 )                                        ||
           ( strcasestr( slot->face->style_name, "Light" )
               && ppem < 10 )                                        ||
           ( strcasestr( slot->face->style_name, "Narrow" )
               && ppem < 15 )                                        ||
           ( strcasestr( slot->face->style_name, "Condensed" )
               && ppem < 20 )                                        )
            return;
    }

    if( slot->face->family_name )
    {
      if ( strcasestr( slot->face->family_name, "Italic" )            ||
           strcasestr( slot->face->family_name, "Oblique" )           ||
           strcasestr( slot->face->family_name, "Script" )            ||
           strcasestr( slot->face->family_name, "Handwriting" )       ||
           strcasestr( slot->face->family_name, "Bold" )              ||
           strcasestr( slot->face->family_name, "Black" )             ||
           ( ( strcasestr( slot->face->family_name, "Extra Thin" )  ||
               strcasestr( slot->face->family_name, "Extra Light" ) ) &&
             ppem < 10 )                                              ||
           ( strcasestr( slot->face->family_name, "Thin" )
               && ppem < 10 )                                         ||
           ( strcasestr( slot->face->family_name, "Light" )
               && ppem < 10 )                                         ||
           ( strcasestr( slot->face->family_name, "Narrow" )
               && ppem < 15 )                                         ||
           ( strcasestr( slot->face->family_name, "Condensed" )
               && ppem < 20 )                                         )
            return;
    }
    else if ( slot->face->style_flags )
    {
      if ( slot->face->style_flags & FT_STYLE_FLAG_ITALIC ||
           slot->face->style_flags & FT_STYLE_FLAG_BOLD   ||
           FT_IS_TRICKY( slot->face )                     )
        return;
    }
    else return;

    if ( slot->face->family_name )
    {
      if ( strcasestr(slot->face->family_name, "Courier" ) ||
           strcasestr(slot->face->family_name, "Serif" )   ||
           strcasestr(slot->face->family_name, "Times" )   )
        has_serifs = TRUE;
    }

    if ( mode != FT_RENDER_MODE_LCD )
    {
      columns_per_pixel = 1;
      one_pixel = 256;
      one_third_pixel = 85;
      /*extra_columns = 0;*/
      /* until this can be figured out just return */
      /* There are issues with missing glyphs */
      return;
    }
    /* only look at top 3 for now */
    known_stem_values
      = (Stem_Data*) malloc ( columns_per_pixel * sizeof ( Stem_Data ) );
    known_stem_values->stem_spacing = -1;
    known_stem_values->stem_width = -1;
    known_stem_values->stem_start = -1;
    known_stem_values->stem_scaling = -1;
    known_stem_values->stem_translating_only = -1024;
    known_stem_values->stem_translating = 0;
    known_stem_values->brightness = 0;
    known_stem_values->contrast = 0;
    known_stem_values->use_100 = FALSE;
    known_stem_values->m = -1;
    known_stem_values->synth_stems = FALSE;
    known_stem_values->bearing_correction = TRUE;

    if ( use_known_settings_on_selected_fonts )
    {
      sa_fill_known_stem_values ( slot->face->family_name,
                                  ppem, slot->face->style_name,
                                  valid_stems, known_stem_values );
      if ( verbose )
        printf ( "width:%d,spacing:%d,start:%d,scaling:%d,translate:%d ",
                 known_stem_values->stem_width,
                 known_stem_values->stem_spacing,
                 known_stem_values->stem_start,
                 known_stem_values->stem_scaling,
                 known_stem_values->stem_translating_only );
    }

    /* translate value may be set for < 10 */
    if ( use_known_settings_on_selected_fonts             &&
         known_stem_values->stem_translating_only > -1024 )
    {
      *translate_value = known_stem_values->stem_translating_only;
      return;
    }

    if ( use_known_settings_on_selected_fonts           &&
         known_stem_values->bearing_correction == FALSE )
      strategy_bearing_correction = FALSE;


    if ( known_stem_values->use_100 ||
         known_stem_values->m >= 0  )
    {
      alignment_strength = fitting_strength = 100;
      strategy_use_m_control = TRUE;
    }

    if ( known_stem_values->edge_detection )
      strategy_also_use_edge_detection_for_stems = TRUE;

    if ( ppem < 9 )
      return;
    if ( ppem > 20 )
      strategy_use_m_control = TRUE;

    /* Allocate */
    segments
      = (Stem_Segment*) malloc( (1) * sizeof ( Stem_Segment ) );
    leftmost_segment
      = (Stem_Segment*) malloc( sizeof ( Stem_Segment ) );
    leftmost_segment_not_extrema
      = (Stem_Segment*) malloc( sizeof ( Stem_Segment ) );
    rightmost_segment
      = (Stem_Segment*) malloc( sizeof ( Stem_Segment ) );
    rightmost_segment_not_extrema
      = (Stem_Segment*) malloc( sizeof ( Stem_Segment ) );

    stems          = (Stem*) malloc ( MAX_STEMS * sizeof ( Stem ) );
    possible_stems = (Stem*) malloc ( MAX_STEMS * sizeof ( Stem ) );
    leftmost_stem  = (Stem*) malloc ( sizeof (Stem));
    rightmost_stem = (Stem*) malloc ( sizeof(Stem));
    centers        = (Stem_Center*) malloc ( (1) * sizeof ( Stem_Center ) );

    if ( verbose )
      printf("\n");

    /* Initialize */
    for ( xx = 0; xx < width * 256; xx += 1 )
      stem_centers[xx] = 0;

    for ( xx = 0; xx < num_segments; xx += 1 )
    {
      segments[xx].x1 = 0;
      segments[xx].x2 = 0;
      segments[xx].y = 0;
    }

    rightmost_segment->x1 = 0;
    rightmost_segment->x2 = 0;
    rightmost_segment->y  = 0;
    leftmost_segment->x1  = 99999999;
    leftmost_segment->x2  = 0;
    leftmost_segment->y   = 0;

    rightmost_segment_not_extrema->x1 = 0;
    rightmost_segment_not_extrema->x2 = 0;
    rightmost_segment_not_extrema->y  = 0;
    leftmost_segment_not_extrema->x1  = 99999999;
    leftmost_segment_not_extrema->x2  = 0;
    leftmost_segment_not_extrema->y   = 0;

    /* Locate stem centers for later processing */
    for ( h = (FT_UInt)bitmap->rows; h > 0; h--, line += bitmap->pitch )
    {
      current_value = 0;
      /* Calculate various sums and stem widths of glyph */
      for ( xx = 0; xx < width; xx += 1 )
      {
        /* Reallocate */
        segments = (Stem_Segment*) realloc
          ( segments, ( num_segments + 1 ) * sizeof ( Stem_Segment ) );

        /* if line is white, and now has color, it's the start of a stem */
        if ( current_value == 0 && line[xx] > 0 )
        {
          /* start of stem */
          segments[num_segments].x1 = 256 * xx + ( 255 - line[xx] );
          segments[num_segments].y = h;
        }

        /* otherwise, if it's currently black and the new value is 0,
           it's the end of a stem */
        else if ( ( current_value > 0 && line[xx] == 0 )   ||
                  ( current_value > 0 && xx == width - 1 ) )
        {
          FT_Long stem_center_x;
          segments[num_segments].x2 = 256 * ( xx - 1 ) + line[xx-1];

          if ( xx == width - 1 )
            segments[num_segments].x2 += line[xx];

          /*stem center is average of start and end of stem */
          stem_center_x = ( segments[num_segments].x2
                            + segments[num_segments].x1 ) / 2;

          /* Reallocate */
          centers = (Stem_Center*) realloc
            ( centers, ( num_centers + 1 ) * sizeof ( Stem_Center ) );
          centers[num_centers].x = stem_center_x;
          centers[num_centers].y = h;
          centers[num_centers].x1 = segments[num_segments].x1;
          centers[num_centers].x2 = segments[num_segments].x2;

          num_centers++;

          stem_centers[stem_center_x] += 1;

          /* Find left and rightmost points for later calculations */
          /* OR - Favor ones that aren't on the top or bottom if   */
          /* possible to prevent v and w from getting caught later */
          if ( segments[num_segments].x1 < leftmost_segment->x1      ||
               ( segments[num_segments].y > 1                      &&
                 segments[num_segments].y < height                 &&
                 segments[num_segments].x1 == leftmost_segment->x1 ) )
          {
            leftmost_segment->x1 = segments[num_segments].x1;
            leftmost_segment->x2 = segments[num_segments].x2;
            leftmost_segment->y = h;
          }
          if ( segments[num_segments].x2 > rightmost_segment->x2      ||
               ( segments[num_segments].y > 1                       &&
                 segments[num_segments].y < height                  &&
                 segments[num_segments].x1 == rightmost_segment->x1 ) )
          {
            rightmost_segment->x1 = segments[num_segments].x1;
            rightmost_segment->x2 = segments[num_segments].x2;
            rightmost_segment->y = h;
          }

          if ( segments[num_segments].x1
                 < leftmost_segment_not_extrema->x1      ||
               ( segments[num_segments].y > 1          &&
                 segments[num_segments].y < height     &&
                 segments[num_segments].x1
                   == leftmost_segment_not_extrema->x1 &&
                 h < (FT_UInt)bitmap->rows && h > 0    ) )
          {
            leftmost_segment_not_extrema->x1 = segments[num_segments].x1;
            leftmost_segment_not_extrema->x2 = segments[num_segments].x2;
            leftmost_segment_not_extrema->y = h;
          }
          if ( segments[num_segments].x2
                 > rightmost_segment_not_extrema->x2      ||
               ( segments[num_segments].y > 1           &&
                 segments[num_segments].y < height      &&
                 segments[num_segments].x1
                   == rightmost_segment_not_extrema->x1 &&
                 h < (FT_UInt)bitmap->rows && h > 0     ) )
          {
            rightmost_segment_not_extrema->x1 = segments[num_segments].x1;
            rightmost_segment_not_extrema->x2 = segments[num_segments].x2;
            rightmost_segment_not_extrema->y = h;
          }

          if ( segments[num_segments].x1 < leftmost_point )
            leftmost_point = segments[num_segments].x1;

          if ( segments[num_segments].x2 > rightmost_point )
            rightmost_point = segments[num_segments].x2;

          if ( segments[num_segments].x1 < leftmost_point_not_extrema &&
               h < (FT_UInt)bitmap->rows && h > 0                     )
            leftmost_point_not_extrema = segments[num_segments].x1;

          if ( segments[num_segments].x2 > rightmost_point_not_extrema &&
               h < (FT_UInt)bitmap->rows && h > 0                      )
            rightmost_point_not_extrema = segments[num_segments].x2;

          num_segments++;
        }
        /* else - other conditions - need some error checking here */
        current_value = line[xx];
      }
    }

    /* initialize */
    for ( xx = 0; xx < MAX_STEMS; xx +=1 )
    {
      stems[xx].center = 0;
      stems[xx].count = 0;
      stems[xx].width = 0;
      stems[xx].height = 0;
      possible_stems[xx].center = 0;
      possible_stems[xx].count = 0;
      possible_stems[xx].width = 0;
      possible_stems[xx].height = 0;
    }

    valid_stems = 0;
    valid_possible_stems = 0;

    /* Determine which centers belong to stems */
    center = 0;

    while ( center < num_centers )
    {
      /* slope at within which to consider a point part of a stem */
      /*const FT_UInt slope = 1;
      const FT_UInt topslope = (256 * 3) / 10; */

      /* 10 to 20 with 4 matches seems good,                   */
      /* but 1 or 2 with 3 stems needs to somehow get included */
      FT_Int deviation1 = 5;
      FT_Int deviation2=-1, requirement1 = 4, stem_match_requirement = 3;
      FT_Int best_height = 0, center_difference_in_height;
      FT_Int center_difference_in_width, valid_center_average;
      FT_Int smallest_width_ledge, smallest_width_redge;
      FT_Int x1_difference_in_width, x2_difference_in_width;
      FT_Bool large_gap_found = FALSE, no_gap_found = FALSE;
      FT_Bool large_gap_found_ledge = FALSE, no_gap_found_ledge = FALSE;
      FT_Bool large_gap_found_redge = FALSE, no_gap_found_redge = FALSE;
      FT_Bool stem_detected = FALSE;
      FT_Int set_width_to, set_center_to;

      /* seems to not do damage */
      /* May not be effective */
      requirement1 = height / 4;
      if ( requirement1 < 5 )
        requirement1 = 5;
      deviation1 = 20;
      deviation2 = 20;

      if ( columns_per_pixel == 1 )
        deviation1 = deviation2 = 10;

      if ( (FT_Int)bitmap->rows <= 6 )
        deviation1 = 25;

      if ( (FT_Int)bitmap->rows <= 6 )
        deviation2 = 25;

      if ( columns_per_pixel == 1    &&
           (FT_Int)bitmap->rows <= 6 )
        deviation1 = deviation2 = 12;

      valid_center_average = 0;

      large_gap_found = large_gap_found_ledge = large_gap_found_redge = FALSE;
      no_gap_found = no_gap_found_ledge = no_gap_found_redge = FALSE;
      stem_detected = FALSE;

      if ( ppem < 11 )
        requirement1 = 4;

      if ( ppem > 18 )
      {
        stem_match_requirement = height / 4;
        if ( stem_match_requirement < 3 )
          stem_match_requirement = 3;
      }

      smallest_width_ledge = smallest_width_redge = width * 256;
      stem_matches = 0;
      stem_matches_ledge = 0;
      stem_matches_redge = 0;
      last_matching_center = -1;
      last_matching_ledge = -1;
      last_matching_redge = -1;

      /* set currently looked at center to center value */
      this_center = center;
      next_center = 0;

      /* For each center, compare with all other centers to see if others */
      /* match the properties of this one                                 */
      while ( next_center < num_centers )
      {

        /* calculate differences */
        center_difference_in_width = abs ( centers[this_center].x
                                             - centers[next_center].x );
        center_difference_in_height = abs ( centers[this_center].y
                                              - centers[next_center].y );
        x1_difference_in_width = abs ( centers[this_center].x1
                                         - centers[next_center].x1 );
        x2_difference_in_width = abs ( centers[this_center].x2
                                         - centers[next_center].x2 );


        /* property - stem center points that align                        */
        /* if the center is within range, the center is less than          */
        /* 1/2 the height away, and at least one edge is also within range */
        if ( center_difference_in_width
               < center_difference_in_height * deviation1     &&
             center_difference_in_height
               <= (FT_Int)bitmap->rows / 2                    &&
             /* prevents w from getting caught ---- but also kills m */
             ( x1_difference_in_width
                 < center_difference_in_height * deviation2 ||
               x2_difference_in_width
                 < center_difference_in_height * deviation2 ) )
        {
          stem_matches += 1;
          valid_center_average += centers[next_center].x;

          /* try to find where the matching centers are far apart */
          if ( last_matching_center >= 0 &&
               abs( centers[last_matching_center].y
                      - centers[next_center].y ) >= (FT_Int)bitmap->rows / 2 )
            large_gap_found = TRUE;

          /* try to find where matching centers are next to each other */
          if ( last_matching_center >= 0 &&
               abs( centers[last_matching_center].y
                      - centers[next_center].y ) == 1 )
            no_gap_found = TRUE;

          last_matching_center = next_center;
        }

        if ( strategy_also_use_edge_detection_for_stems )
        {
          /* property - stem left edge points that align */
          /* if the center is within range,              */
          /* the center is less than 1/2 the height away */
          if ( x1_difference_in_width
                 < center_difference_in_height * deviation1            &&
               center_difference_in_height <= (FT_Int)bitmap->rows / 2 )
          {
            stem_matches_ledge += 1;
            /* may not need for edges */
            /*valid_center_average += centers[next_center].x;  */

            if ( centers[next_center].x2 - centers[next_center].x1
                   < smallest_width_ledge )
              smallest_width_ledge = centers[next_center].x2
                                       - centers[next_center].x1;

            /* try to find where the matching centers are far apart */
            if ( last_matching_ledge >= 0            &&
                 abs( centers[last_matching_ledge].y
                        - centers[next_center].y)
                   >= (FT_Int)bitmap->rows / 2       )
              large_gap_found_ledge = TRUE;

            /* try to find where matching centers are next to each other */
            if ( last_matching_ledge >= 0               &&
                 abs( centers[last_matching_ledge].y
                        - centers[next_center].y ) == 1 )
              no_gap_found_ledge = TRUE;
            last_matching_ledge = next_center;
          }
        }

        if ( strategy_also_use_edge_detection_for_stems )
        {
          /* property - stem right edge points that align               */
          /* if the center is within range, the center is less than 1/2 */
          /* the height away                                            */
          if ( x2_difference_in_width
                 < center_difference_in_height * deviation1 &&
               center_difference_in_height
                 <= (FT_Int)bitmap->rows / 2                )
          {
            stem_matches_redge += 1;
            /* may not need for edges */
            /*valid_center_average += centers[next_center].x; */

            if ( centers[next_center].x2 - centers[next_center].x1
                   < smallest_width_redge )
              smallest_width_redge = centers[next_center].x2
                                       - centers[next_center].x1;

            /* try to find where the matching centers are far apart */
            if ( last_matching_redge >= 0 &&
                 abs( centers[last_matching_redge].y
                       - centers[next_center].y ) >= (FT_Int)bitmap->rows / 2 )
              large_gap_found_redge = TRUE;

            /* try to find where matching centers are next to each other */
            if ( last_matching_redge >= 0 &&
                 abs( centers[last_matching_redge].y
                        - centers[next_center].y ) == 1 )
              no_gap_found_redge = TRUE;

            last_matching_redge = next_center;
          }
        }

        next_center++;
      }

      if ( stem_matches > 0 )
        valid_center_average /= stem_matches;

      best_height = stem_matches;


      if ( ( stem_matches >= stem_match_requirement             ||
             ( ( (FT_Int)bitmap->rows <= 6 || ppem < 11 )   &&
                 stem_matches >= 2                          &&
                 abs ( valid_center_average
                       - centers[center].x) < deviation1 /2 ) ||
            /* try to catch tightly aligned stuff where the matching centers */
            /* are next to each other only                                   */
             ( stem_matches == 2                            &&
                 abs( valid_center_average
                      - centers[center].x) <= deviation1 /2 &&
                 no_gap_found                               &&
                 ppem < 18 )                                    )     &&
            /* catches things like times 16 u but gets a lot of w's too */
            /* stem width is less than 1/3 of the bitmap width,         */
            /* or bitmap_width is small                                 */
            ( centers[center].x2 - centers[center].x1
                   < (m_horiAdvance * 12) / 2                       ||
                m_horiAdvance * 12 <= columns_per_pixel * one_pixel ) )
      {
        stem_detected = TRUE;
        set_width_to  = centers[center].x2 - centers[center].x1;
        best_height   = stem_matches;
        set_center_to = centers[center].x;
      }

      /* see if edges found anything */
      if ( strategy_also_use_edge_detection_for_stems && !stem_detected )
      {
        /* Require no gap for edges */
        /* stem width less than 1/3 bitmap width, or bitmap_width is small */
        /* The stem occurs on the left side of glyph only */
        if ( ( stem_matches_ledge >= stem_match_requirement &&
               no_gap_found_ledge                           )        &&
             ( centers[center].x2 - centers[center].x1
                 < ( m_horiAdvance * 12 ) / 2 ||
               m_horiAdvance * 12 <= columns_per_pixel * one_pixel ) &&
             centers[center].x < ( m_horiAdvance * 12 ) / 2          )
        {
          stem_detected = TRUE;
          set_width_to  = smallest_width_ledge;
          best_height   = stem_matches_ledge;
          set_center_to = centers[center].x1 + set_width_to / 2;
          stem_matches  = stem_matches_ledge;
        }
        /* Require no gap for edges                                           */
        /* stem width is less than 1/3 bitmap width, or bitmap_width is small */
        /* The stem occurs on the right side of glyph only                    */
        else if ( ( stem_matches_redge >= stem_match_requirement  &&
                    no_gap_found_redge                            )       &&
                  ( centers[center].x2 - centers[center].x1
                      < ( m_horiAdvance * 12 ) / 2 ||
                    m_horiAdvance * 12 <= columns_per_pixel * one_pixel ) &&
                  centers[center].x > (m_horiAdvance * 12) / 2            )
        {
          stem_detected = TRUE;
          set_width_to  = smallest_width_redge;
          best_height   = stem_matches_redge;
          set_center_to = centers[center].x2 - set_width_to / 2;
          stem_matches  = stem_matches_redge;
        }
      }


      /*store and/or replace highest occurrences with 3 or more centers */
      /* because this matched, it will become the top dog regardless */
      if ( stem_detected ) {
				if ( stem_matches > possible_stems[0].height )
				{
					/* if this is the first stem just go ahead */
					if ( valid_possible_stems == 0 )
					{
						valid_possible_stems = 1;
						possible_stems[0].center = set_center_to;
						possible_stems[0].count  = stem_matches;
						possible_stems[0].width  = set_width_to;
						possible_stems[0].height = stem_matches;
					}

					/* otherwise, if there is already a stem */
					else if ( valid_possible_stems == 1 )
					{
						/* if stem is within range of existing one, replace existing one */

						/* if the stem isn't within the range of this one swap it with   */
						/* next one first                                                */
						if ( abs ( set_center_to - possible_stems[0].center )
									 >= one_pixel * 2 )
						{
							swap_stem ( &possible_stems[0], &possible_stems[1] );
							valid_possible_stems = 2;
						}
						possible_stems[0].center = set_center_to;
						possible_stems[0].count  = stem_matches;
						possible_stems[0].width  = set_width_to;
						possible_stems[0].height = stem_matches;
					}

					/* otherwise if there are already 2 stems */
					else if ( valid_possible_stems >= 2 )
					{
						/* if the stem is within the range of existing one, replace     */
						/* existing one                                                 */
						if ( abs ( set_center_to - possible_stems[0].center )
									 <= one_pixel * 2 )
						{
							possible_stems[0].center = set_center_to;
							possible_stems[0].count  = stem_matches;
							possible_stems[0].width  = set_width_to;
							possible_stems[0].height = stem_matches;
						}
						/* if the stem isn't within the range of this one */
						else
						{
							/* see if within range of next one and swap if so and proceed */
							/* overwriting it                                             */
							if ( abs ( set_center_to - possible_stems[1].center )
										 <= one_pixel * 2 )
								swap_stem ( &possible_stems[0], &possible_stems[1] );

							/* otherwise see if in range of third one */
							else if ( abs ( set_center_to - possible_stems[2].center )
													<= one_pixel * 2 )
								swap_stem ( &possible_stems[0], &possible_stems[2] );

							/* otherwise this is the new top dog, so demote everything */
							else
							{
								swap_stem ( &possible_stems[1], &possible_stems[2] );
								swap_stem ( &possible_stems[0], &possible_stems[1] );
								valid_possible_stems += 1;
							}
							possible_stems[0].center = set_center_to;
							possible_stems[0].count  = stem_matches;
							possible_stems[0].width  = set_width_to;
							possible_stems[0].height = stem_matches;
						}
					}
				}
				else if ( (stem_matches > possible_stems[1].height) && set_center_to != 0 )
				{

					/* make sure it doesn't match the first stem */
					if ( abs ( set_center_to - possible_stems[0].center ) >= one_pixel * 2 )
					{

						/* if this is the second stem */
						if ( valid_possible_stems == 1 )
							valid_possible_stems = 2;

						/* otherwise if there is already a stem here */
						else if ( valid_possible_stems >= 2 )
						{
							/* if it doesn't match the second stem, proceed to swap out    */
							/* with the third.  if it does, replace it                     */
							if ( abs ( set_center_to - possible_stems[1].center )
										 >= one_pixel * 2 )
							{
								swap_stem ( &possible_stems[1], &possible_stems[2] );
								valid_possible_stems +=1;
							}
						}
						possible_stems[1].center = set_center_to;
						possible_stems[1].count  = stem_matches;
						possible_stems[1].width  = set_width_to;
						possible_stems[1].height = stem_matches;
					}
				}

				else if ( stem_matches > possible_stems[2].height &&
									set_center_to != 0                      )
				{
					/* if it doesn't match the first or second one */
					if ( abs( set_center_to - possible_stems[0].center) >= one_pixel * 2 &&
							 abs( set_center_to - possible_stems[1].center) >= one_pixel * 2 )
					{
						if ( valid_possible_stems == 2 )
							valid_possible_stems += 1;

						possible_stems[2].center = set_center_to;
						possible_stems[2].count  = stem_matches;
						possible_stems[2].width  = set_width_to;
						possible_stems[1].height = stem_matches;
					}
				}
			}
      if ( valid_possible_stems > 3 )
        valid_possible_stems = 3;

      center++;
    }

    /* promote to stem */
    if ( valid_possible_stems > 0 )
    {
      stems[0].center    = possible_stems[0].center;
      stems[0].count     = possible_stems[0].count;
      stems[0].width     = possible_stems[0].width;
      stems[0].height    = possible_stems[0].height;
      stems[0].generated = FALSE;
      valid_stems++;
    }

    if ( valid_stems == 1         &&
         valid_possible_stems > 1 )
    {
      stems[1].center    = possible_stems[1].center;
      stems[1].count     = possible_stems[1].count;
      stems[1].width     = possible_stems[1].width;
      stems[1].height    = possible_stems[1].height;
      stems[1].generated = FALSE;
      valid_stems++;
    }

    if ( valid_stems == 2              &&
         valid_possible_stems > 2      &&
         possible_stems[2].center != 0 )
    {
      stems[2].center    = possible_stems[2].center;
      stems[2].count     = possible_stems[2].count;
      stems[2].width     = possible_stems[2].width;
      stems[2].height    = possible_stems[2].height;
      stems[2].generated = FALSE;
      valid_stems++;
    }

    /* sort stems in x direction */
    if ( valid_stems == 3 )
    {
      if ( stems[0].center > stems[1].center )
        swap_stem ( &stems[0], &stems[1] );

      if ( stems[0].center > stems[2].center )
        swap_stem ( &stems[1], &stems[2] );

      if ( stems[1].center > stems[2].center )
        swap_stem ( &stems[1], &stems[2] );

      if ( stems[0].center > stems[1].center )
        swap_stem ( &stems[0], &stems[1] );

      /* only look at first and last stem for now */
      swap_stem ( &stems[1], &stems[2] );
    }

   /* synthesize stems - Works, but needs work */
   if ( ( strategy_synthesize_stems      ||
          known_stem_values->synth_stems ) &&
          valid_stems  == 0                &&
          ppem > 10                        )
    {
      /* if the leftmost segment's leftmost point is the same as the glyph's */
      /* leftmost point, and it is of reasonable width, and is not on the    */
      /* top or bottom of the bitmap                                         */
      if ( leftmost_segment_not_extrema->x1
             == leftmost_point_not_extrema             &&
           abs ( leftmost_segment_not_extrema->x2
                   - leftmost_segment_not_extrema->x1 )
             < ( rightmost_point_not_extrema
                   - leftmost_point_not_extrema ) / 3  &&
           leftmost_segment_not_extrema->y < height    &&
           leftmost_segment_not_extrema->y > 1         )
      {
        stems[valid_stems].center = ( leftmost_segment_not_extrema->x2
                                        + leftmost_segment_not_extrema->x1 ) / 2;
        stems[valid_stems].width = leftmost_segment_not_extrema->x2
                                        - leftmost_segment_not_extrema->x1;
        stems[valid_stems].generated = TRUE;
        valid_stems += 1;
      }


      if ( rightmost_segment_not_extrema->x2
             == rightmost_point_not_extrema             &&
           abs ( rightmost_segment_not_extrema->x2
                   - rightmost_segment_not_extrema->x1 )
             < ( rightmost_point_not_extrema
                   - leftmost_point_not_extrema ) / 3   &&
           rightmost_segment_not_extrema->y < height    &&
           rightmost_segment_not_extrema->y > 1         )
      {
        stems[valid_stems].center = ( rightmost_segment_not_extrema->x2
                                      + rightmost_segment_not_extrema->x1 ) / 2;
        stems[valid_stems].width = rightmost_segment_not_extrema->x2
                                      - rightmost_segment_not_extrema->x1;
        stems[valid_stems].generated = TRUE;
        valid_stems += 1;
      }

    }

    /* sort stems in x direction */
    if ( valid_stems > 1 && stems[0].center > stems[1].center )
      swap_stem ( &stems[0], &stems[1] );

    if ( valid_stems == 0 && known_stem_values->stem_translating != 0 )
    {
      *translate_value += known_stem_values->stem_translating;

      if ( strategy_use_strengths )
      {
        /* consider 1/2 pixel the max when strength is at 100%,
           unless translate is already greater than that */
        FT_Int strength_cutoff = 32;


        if ( abs ( *translate_value ) > strength_cutoff)
          strength_cutoff = *translate_value;

        max_strength = ( strength_cutoff * alignment_strength ) / 100;

        if ( *translate_value < -max_strength )
          *translate_value = -max_strength;
        else if  ( *translate_value > max_strength )
          *translate_value = max_strength;
      }
    }
    else
    /* Start snapping */
    {
      FT_Int  center_offset;
      FT_Int  modulus;
      FT_Int  delta, delta2;
      FT_Long stem_distance = 1, new_distance = 1;
      FT_Int  distance_floor, distance_ceiling;
      FT_Int  translate_value2 = 0;
      FT_Int  main_stem = 0;
      FT_Int  lbearing = m_horiBearingX * 12;
      FT_Int  bitmap_stem_location = stems[0].center;
      FT_Int  advance_stem_location = bitmap_stem_location
                                        + lbearing - one_pixel;
      FT_Int  advance_width = m_horiAdvance * 12;
      FT_Int  original_advance_width = 12 * ( slot->linearHoriAdvance >> 10 );
      FT_Int  glyph_width = rightmost_point - leftmost_point;
      FT_Int  stem_width = stems[0].width;
      FT_Int  advance_leftmost_location = leftmost_point
                                            + lbearing - one_pixel;
      FT_Int  advance_rightmost_location = rightmost_point
                                             + lbearing - one_pixel;

#define proposed_transformed_point(point) \
  point * (float)(new_distance) / (float)(stem_distance) \
  + *translate_value * 12 - ( stems[main_stem].center * (float)(new_distance) \
  / (float)(stem_distance) - stems[main_stem].center)

#define proposed_translated_point(point) point + *translate_value * 12

      center_offset = one_pixel / 2;   /* half pixel */
      modulus = one_pixel;            /* whole pixel */

      /* Determine center_offset via known values */
      if ( known_stem_values->stem_width >= 0 )
      {
        if ( known_stem_values->stem_width % 2 == 0 )
          center_offset = 0;
        else
          center_offset = one_pixel / 2;
      }
      /* otherwise do intelligent guessing, if set */
      else if ( strategy_auto_change_center_offset &&
                ppem >= STEM_WIDTH_2_PPEM          &&
                stems[0].width < one_pixel * 1.45  )
        center_offset = one_pixel / 2;
      else if ( strategy_auto_change_center_offset &&
                ppem >= STEM_WIDTH_2_PPEM          &&
                stems[0].width >= one_pixel * 1.45 &&
                stems[0].width < one_pixel * 2.6   )
        center_offset = 0;
      else if ( strategy_auto_change_center_offset &&
                ppem >= STEM_WIDTH_2_PPEM          &&
                stems[0].width >= one_pixel * 2.6  &&
                stems[0].width < one_pixel * 3.6   )
        center_offset = one_pixel / 2;
      else if ( strategy_auto_change_center_offset &&
                ppem >= STEM_WIDTH_2_PPEM          )
        center_offset =
          ( one_pixel
             * ( ( ( (int)( stems[0].width + one_pixel / 2 ) )
                             / one_pixel ) % 2 ) ) / 2;

      /* Snap to closest translate and scale values by default */
      if ( valid_stems >= 1 )
      {
        /* closest snapping point for stem 0 */
        delta = ( stems[0].center  + center_offset ) % modulus;

        if ( delta < modulus / 2 )
          /* snap left */
          *translate_value = -delta / ( columns_per_pixel * 4 );
        else
           /* snap right */
          *translate_value = ( modulus - delta ) / ( columns_per_pixel * 4 );
      }

      if ( strategy_use_d_correction )
      {
        /* if the only stem is in the last 1/3 of glyph width, the advance */
        /* is 6 pixels, the ppem 11, and doing so doesn't violate bitmap , */
        /* boundaries force it to snap right                               */
        if ( valid_stems == 1                                  &&
             advance_stem_location > (advance_width * 2) / 3   &&
             advance_width == 6 * one_pixel                    &&
             rightmost_point + modulus - delta
               <= ( width - (columns_per_pixel * 2) / 3) * 256 &&
             ppem == 11                                        )
          *translate_value = ( modulus - delta ) / ( columns_per_pixel * 4 );
      }

      if ( strategy_use_strengths )
      {
        /* consider 1/2 pixel the max when strength is at 100%,
           unless translate is already greater than that */
        FT_Int strength_cutoff = 32;
        if ( abs ( *translate_value ) > strength_cutoff )
          strength_cutoff = *translate_value;

        max_strength = ( strength_cutoff * alignment_strength ) / 100;

        if ( *translate_value < -max_strength )
          *translate_value = -max_strength;
        else if  ( *translate_value > max_strength )
          *translate_value = max_strength;
      }

      /* If 2 stems is detected, scale distance
         between in order to land on pixels */
      if ( valid_stems >= 2 )
      {
        stem_distance = abs ( stems[1].center - stems[0].center );

        delta = stem_distance % modulus;
        new_distance = stem_distance - delta;

        distance_floor = stem_distance - delta;
        distance_ceiling = stem_distance + ( modulus - delta );

        if ( delta < modulus / 2 )
          new_distance = distance_floor;
        else
          new_distance = distance_ceiling;

        if ( columns_per_pixel == 3                                    &&
             valid_stems == 3                                          &&
             strategy_use_m_control                                    &&
             ( width - 2 * columns_per_pixel ) > 6 * columns_per_pixel &&
             ppem > 8                                                  &&
             ( advance_stem_location - advance_leftmost_location )
               < stems[main_stem].width * 2                            )
        {
          /* Possibly use 2 only when compatible widths is on? */
          FT_Int mod_factor = 2;  

          if ( verbose )
            printf ( "USING M CONTROL ");

          distance_floor = stem_distance
                             - stem_distance % ( modulus * mod_factor ) ;
          distance_ceiling = distance_floor + modulus * mod_factor;

          new_distance = distance_ceiling;

          /* force certain ideal situations */
          /* these 2 are mostly safe to do */
          if ( distance_ceiling
                 + one_pixel * columns_per_pixel == advance_width &&
               stem_width < one_pixel * 1.25                      )
            new_distance = distance_ceiling;
          /* NEED TO FIGURE OUT A WAY TO DETERMINE WHETHER
             THAT NUDGE IS UP OR DOWN */
          else if ( stem_distance + one_pixel * 2.6 >= advance_width && 
            stem_width < one_pixel * 1.25                            )
            new_distance = distance_ceiling;

          if ( proposed_transformed_point ( leftmost_point )
                 < one_third_pixel * 2                       ||
               proposed_transformed_point ( rightmost_point )
                 > ( width -2 ) * one_third_pixel            )
            new_distance = distance_floor;

          /* NEED TO IGNORE SERIF Ms HERE */
          /* perhaps check bitmap boundaries instead??? */
          if ( strategy_bearing_correction && new_distance == distance_ceiling )
          {
            /* Correct if bearings are made substantially worse
               (more than 1/3 a pixel beyond advance) */
            if ( proposed_transformed_point( advance_rightmost_location )
                   > advance_width + one_third_pixel                     &&
                 proposed_transformed_point( advance_rightmost_location )
                   > advance_rightmost_location                          &&
                -proposed_transformed_point( advance_leftmost_location )
                   < advance_rightmost_location - advance_width          )
              new_distance = distance_floor;
          }

          if ( known_stem_values->m >= 0 )
          {
            if ( known_stem_values->m == 0 )
              new_distance = distance_floor;
            else
              new_distance = distance_ceiling;
          }

          if ( ( rightmost_point - leftmost_point) -
                ( ( rightmost_point * *scale_value)
                  - ( leftmost_point * *scale_value ) ) >= one_pixel * 1.5 )
          {
            *scale_value = 1.0;
            *translate_value = 0;
            goto Exit;
          }

        }
        else if ( columns_per_pixel == 1                                &&
                  valid_stems == 3 &&
                  strategy_use_m_control && valid_stems == 3            &&
                  width >= 6 * columns_per_pixel                        &&
                  ppem > 8                                              &&
                  ( advance_stem_location - advance_leftmost_location )
                    < stems[main_stem].width * 2                        )
        {
          /* Possibly use 2 only when compatible widths is on? */
          FT_Int mod_factor = 2;   

          if ( verbose )
            printf ("USING M CONTROL ");
          distance_floor = stem_distance - stem_distance
                                             % ( modulus * mod_factor) ;
          distance_ceiling = distance_floor + modulus * mod_factor;

          new_distance = distance_ceiling;

          /* force certain ideal situations */
          /* these 2 are mostly safe to do */
          if ( distance_ceiling
                 + one_pixel * columns_per_pixel == advance_width &&
               stem_width < one_pixel * 1.25                      )
            new_distance = distance_ceiling;
          /* NEED TO FIGURE OUT A WAY TO DETERMINE WHETHER
            THAT NUDGE IS UP OR DOWN */
          else if ( stem_distance + one_pixel * 2.6 >= advance_width &&
                    stem_width < one_pixel * 1.25                    )
            new_distance = distance_ceiling;

          if ( proposed_transformed_point( leftmost_point ) < 0 ||
               proposed_transformed_point( rightmost_point )
                 > width * one_pixel - 2 * one_third_pixel      )
            new_distance = distance_floor;

          /* NEED TO IGNORE SERIF Ms HERE */
          /* perhaps check bitmap boundaries instead??? */
          if ( strategy_bearing_correction && new_distance == distance_ceiling )
          {
            /* Correct if bearings are made substantially worse
               (more than 1/3 a pixel beyond advance) */
            if ( proposed_transformed_point( advance_rightmost_location )
                   > advance_width + one_third_pixel                      &&
                proposed_transformed_point( advance_rightmost_location )
                   > advance_rightmost_location                           &&
                -proposed_transformed_point( advance_leftmost_location )
                   < advance_rightmost_location - advance_width           )
              new_distance = distance_floor;
          }

          if ( known_stem_values->m >= 0 )
          {
            if ( known_stem_values->m == 0 )
              new_distance = distance_floor;
            else
              new_distance = distance_ceiling;
          }


          if ( ( rightmost_point - leftmost_point )
                 - ( ( rightmost_point * *scale_value )
                      - ( leftmost_point * *scale_value ) ) >= one_pixel * 1.5 )
          {
            *scale_value = 1.0;
            *translate_value = 0;
            goto Exit;
          }

        }
        else
        {
          if ( strategy_fit_to_width )
            new_distance = advance_width - 3 * one_pixel;
          else if ( known_stem_values->stem_scaling >= 0 )
          {
            if ( known_stem_values->stem_scaling > 0 )
              new_distance = distance_ceiling;
            else
              new_distance = distance_floor;

            /* enforce advance width boundaries */
            /* TOO RESTRICTIVE ON SERIF FONTS */
            if ( proposed_transformed_point( advance_rightmost_location )
                   >= advance_width                                      ||
                 proposed_transformed_point( advance_leftmost_location )
                   <= 0                                                  )
              new_distance = distance_floor;

            /* enforce literal bitmap boundaries if no translate room */
            if ( ( proposed_transformed_point(rightmost_point) >= width * 256
                || proposed_transformed_point(leftmost_point ) <= one_pixel )
              && new_distance + one_pixel * 3 > advance_width )
              new_distance = distance_floor;

          }
          else if ( strategy_translate_using_closest_stem )
          {
            /* closest snapping point for stem 1 */
            delta2 = ( stems[1].center  + center_offset ) % modulus;

            if ( delta2 < modulus / 2 )
              /* snap left */
              translate_value2 = -delta2 / ( columns_per_pixel * 4 );
            else
               /* snap right */
              translate_value2 = ( modulus - delta2 )
                                     / ( columns_per_pixel * 4 );

            if ( abs ( translate_value2 ) < abs ( *translate_value ) )
            {
              *translate_value = translate_value2;
              main_stem = 1;
            }

          }
          else if ( strategy_scale_to_closest_centers )
          {
            /* closest snapping point for stem 0 */
            delta  = ( stems[0].center + center_offset ) % modulus;
            delta2 = ( stems[1].center + center_offset ) % modulus;

            if ( delta < modulus / 2 )
              /* stretch left */
              new_distance = delta + stem_distance;
            else
              /* stretch right */
              new_distance = delta - modulus + stem_distance;

            if ( delta2 < modulus / 2 )
              new_distance -= delta2;  /* stretch left */
            else
              new_distance += modulus - delta2; /* stretch right */

          }
          else if ( strategy_scale_to_closest_centers_up_only )
          {
            FT_Int net_change = 0;

            /* closest snapping point for stem 0 */
            delta  = ( stems[0].center + center_offset ) % modulus;
            delta2 = ( stems[1].center + center_offset ) % modulus;

            if ( delta < modulus / 2 )
              net_change = delta;  /* stretch left */
            else
              net_change = -( modulus - delta );      /* stretch right */

            if ( delta2 < modulus / 2 )
              net_change -= delta2;  /* stretch left */
            else
              net_change += modulus - delta2;      /* stretch right */

            if ( net_change > 0                                              &&
                 proposed_transformed_point( advance_rightmost_location )
                   < advance_width                                           &&
                 proposed_transformed_point( advance_leftmost_location ) > 0 )
              new_distance = distance_ceiling;
          }

          else if ( strategy_always_use_distance_ceiling )
          {
            if ( proposed_transformed_point( advance_rightmost_location )
                   < advance_width                                           &&
                 proposed_transformed_point( advance_leftmost_location ) > 0 )
            new_distance = distance_ceiling;
          }
        }

        if ( strategy_use_strengths )
        {
          FT_Int strength_cutoff = center_offset;


          delta2 = new_distance - stem_distance;

          if ( abs ( delta2 ) > strength_cutoff )
            strength_cutoff = delta2;

          max_strength = ( strength_cutoff * fitting_strength ) / 100;

          if ( delta2 < -max_strength )
            new_distance = stem_distance - max_strength;
          else if ( delta2 > max_strength )
            new_distance = stem_distance + max_strength;
        }

        *scale_value = (float)( new_distance ) / (float)( stem_distance );
        *translate_value = *translate_value
           - ( (float)( stems[main_stem].center * (float)new_distance )
                      / (float)stem_distance - stems[main_stem].center ) / 12;

        if ( valid_stems == 2 )
          *embolden_value = ( 64.0 / *scale_value - 64.0 );

        if ( valid_stems == 3 )
          *embolden_value = ( 64.0 / *scale_value - 64.0 ) / 1.5;
      }

      if ( verbose )
        printf ( "%lu stems:", valid_stems );

      if ( valid_stems == 1 && verbose )
        printf ( "1 stem:    bitmapwidth:%d glyphwidth:%f glyph_width:%f center:%f bearing:%f advance:%f lhadvance:%f stemwidth:%f %d %d",
                (width - 6) / columns_per_pixel,
                (float)m_width / 64.0,
                (float)glyph_width / (float)one_pixel,
                (float)( (float)advance_stem_location ) / (float)one_pixel,
                (float)m_horiBearingX / 64.0,
                (float)m_horiAdvance / 64.0,
                (float)linearHoriAdvance / 64.0,
                (float)stems[0].width / (float)one_pixel,
                advance_width, original_advance_width );
      else if ( valid_stems >= 2 && verbose )
        printf ( "%lu stems: bitmapwidth:%d center1:%f center2:%f difference:%f bearing:%f advance:%f advstemloc:%f ",
                valid_stems,
                (width - 6) / columns_per_pixel,
                ( (float)advance_stem_location ) / (float)one_pixel,
                ( (float)advance_stem_location
                    + (float)abs ( stems[1].center
                                     - stems[0].center) ) / (float)one_pixel,
                ( (float)abs ( stems[1].center
                                 - stems[0].center ) ) / (float)one_pixel,
                (float)m_horiBearingX / 64.0,
                (float)m_horiAdvance / 64.0,
                (float)advance_stem_location / (float)one_pixel );

      if ( strategy_bearing_correction )
      {
        /* Correct if negative bearings are made substantially worse */
        /* (more than 1/3 a pixel)                                   */
        if ( proposed_transformed_point( advance_rightmost_location )
               > advance_width                                       &&
             proposed_transformed_point( advance_rightmost_location )
               > advance_rightmost_location                          &&
             -proposed_transformed_point( advance_leftmost_location )
               < advance_rightmost_location - advance_width          &&
             *translate_value
               > one_third_pixel / ( columns_per_pixel * 4 )         )
        {
          *translate_value -=64 ;
          if ( verbose )
            printf ( "TRANSLATING -64 " );
        }
      }
      goto Exit;
    }

  Exit:

#define transformed_point( point ) point * *scale_value + *translate_value * 12

    if ( strategy_correct_out_of_bounds_outlines )
    {
      /* Correct if outside bitmap */
      if ( transformed_point( rightmost_point )
             >= width * 256 - 2 * one_third_pixel &&
           transformed_point( leftmost_point )
             > one_pixel + 2 * one_third_pixel    )
        *translate_value -=64 ;
      else if ( transformed_point( leftmost_point )
                  <= one_pixel / 2                                &&
                transformed_point( rightmost_point )
                  <= width * 256 - ( one_pixel +  one_pixel / 2 ) )
        *translate_value += 64;
    }

    STVALUES

    free ( segments );
    free ( leftmost_segment );
    free ( rightmost_segment );
    free ( known_stem_values );
    free ( stems );
    free ( possible_stems );
    free ( leftmost_stem );
    free ( rightmost_stem );
    free ( centers );
  }


  /* Gamma correction */
  static void
  _ft_lcd_gamma_correction_correction ( FT_Bitmap*      bitmap,
                                        FT_Render_Mode  mode,
                                        FT_GlyphSlot    slot,
                                        float           gamma_correction_lt,
                                        float           gamma_correction_value )
  {
    if ( gamma_correction_value != 1.0 )
    {
      FT_UInt   width  = (FT_UInt)bitmap->width;
      FT_UInt   height = (FT_UInt)bitmap->rows;
      FT_Byte*  line   = bitmap->buffer;
      float     ppem   = (float)slot->face->size->metrics.x_ppem;


      if ( !slot->face || !slot->face->size ) return;

      if ( ppem >= 5 )
        for ( height = (FT_UInt)bitmap->rows;
              height > 0;
              height--, line += bitmap->pitch )
        {
          FT_UInt  xx;


          for ( xx = 0; xx < width; xx += 1 )
          {
            /*normal*/
            /*line[xx] = pseudo_gamma ( line[xx], gamma_correction_value );*/

            /* sloped */
            /*line[xx] = pseudo_gamma ( line[xx], gamma_correction_value - 5
            * (1-gamma_correction_value)/(gamma_correction_lt -5)
            + ((1-gamma_correction_value)/(gamma_correction_lt -5)) * ppem );*/

            /* 1/3-sloped */
            line[xx] = pseudo_gamma ( line[xx], gamma_correction_value - 5
            * ( ( 1 - gamma_correction_value )
                / ( 3 * ( gamma_correction_lt -5 ) ) )
            + ( ( 1 - gamma_correction_value )
                / ( 3 * ( gamma_correction_lt -5) ) ) * ppem );
          }
        }
    }
  }

#endif

  /* convert a slot's glyph image into a bitmap */
  static FT_Error
  ft_smooth_render_generic( FT_Renderer       render,
                            FT_GlyphSlot      slot,
                            FT_Render_Mode    mode,
                            const FT_Vector*  origin,
                            FT_Render_Mode    required_mode )
  {
    FT_Error     error;
    FT_Outline*  outline = NULL;
    FT_Outline*  outline_orig = NULL;
    FT_BBox      cbox;
    FT_Pos       width, height, pitch, ppem;
#ifndef FT_CONFIG_OPTION_SUBPIXEL_RENDERING
    FT_Pos       height_org, width_org;
#endif
    FT_Bitmap*   bitmap;
    FT_Memory    memory;
    FT_Int       hmul = mode == FT_RENDER_MODE_LCD;
    FT_Int       vmul = mode == FT_RENDER_MODE_LCD_V;
    FT_Pos       x_shift, y_shift, x_left, y_top;

    FT_Raster_Params  params;

    FT_Bool  have_translated_origin = FALSE;
    FT_Bool  have_outline_shifted   = FALSE;
    FT_Bool  have_buffer            = FALSE;

#ifdef FT_CONFIG_OPTION_INFINALITY_PATCHSET
    FT_Matrix    scaleMat;
    FT_Long      translate_value = 0;
    float        scale_value = 1.0;
    FT_Int       align_called = 0;


    int          chromeos_style_sharpening_strength = 0;
    int          checked_chromeos_style_sharpening_strength = 0;
    int          alignment_strength = 0;
    int          fitting_strength = 0;
    FT_UInt      checked_alignment_strength = 0;
    FT_UInt      checked_fitting_strength = 0;
    FT_UInt      checked_fringe_filter_strength = 0;
    int          fringe_filter_strength = 0;
    FT_UInt      checked_grayscale_filter_strength = 0;
    int          grayscale_filter_strength = 0;

    FT_UInt      checked_autohint_horizontal_stem_darken_strength = 0;
    int          autohint_horizontal_stem_darken_strength = 0;

    FT_UInt      checked_autohint_vertical_stem_darken_strength = 0;
    int          autohint_vertical_stem_darken_strength = 0;

    int          windows_style_sharpening_strength = 0;
    FT_UInt      checked_windows_style_sharpening_strength = 0;
    float        gamma_correction_value = 1;
    float        gamma_correction_lt = 0;
    FT_UInt      checked_gamma_correction_value = 0;

    FT_Int       brightness_value = 0.0;
    FT_UInt      checked_brightness_value = 0;

    FT_Int       contrast_value = 0.0;
    FT_UInt      checked_contrast_value = 0;

    FT_Int       snapping_sliding_scale_value = 0;
    FT_UInt      checked_snapping_sliding_scale_value = 0;

    FT_Int       global_embolden_x_value = 0;
    FT_UInt      checked_global_embolden_x_value = 0;

    FT_Int       global_embolden_y_value = 0;
    FT_UInt      checked_global_embolden_y_value = 0;

    FT_Int       bold_embolden_x_value = 0;
    FT_UInt      checked_bold_embolden_x_value = 0;

    FT_Int       bold_embolden_y_value = 0;
    FT_UInt      checked_bold_embolden_y_value = 0;

    FT_Byte      chromeos_cutoff;
    double       chromeos_gamma_value;

    float        embolden_value = 0.0;
    FT_Bool      autohinted = FALSE;

    FT_UInt      autohint_minimum_stem_height = 0;
    FT_UInt      checked_autohint_minimum_stem_height = 0;

    int          checked_use_various_tweaks_env = 0;
    FT_Bool      use_various_tweaks = FALSE;

    int          cur_width;
    char         *cur_width_env = getenv( "CUR_WIDTH" );

    const FT_Int MIN_PPEM = 1;
    /*const FT_Int    MAX_PPEM = 100;    */

    int checked_use_known_settings_on_selected_fonts_env = 0;
    FT_Bool use_known_settings_on_selected_fonts = FALSE;

    if ( slot->face                       &&
         slot->face->size                 &&
         slot->face->size->metrics.x_ppem )
      ppem = slot->face->size->metrics.x_ppem;
    else
      ppem = 0;

    if ( cur_width_env != NULL )
    {
      sscanf ( cur_width_env, "%d", &cur_width );

      if ( cur_width != 0 )
        autohinted = TRUE;
    }

    if ( checked_use_known_settings_on_selected_fonts_env == 0 )
    {
      char *use_known_settings_on_selected_fonts_env =
        getenv( "INFINALITY_FT_USE_KNOWN_SETTINGS_ON_SELECTED_FONTS" );
      if ( use_known_settings_on_selected_fonts_env != NULL )
      {
        if ( strcasecmp( use_known_settings_on_selected_fonts_env,
                         "default" ) != 0 )
        {
          if ( strcasecmp( use_known_settings_on_selected_fonts_env,
                           "true" ) == 0 )
            use_known_settings_on_selected_fonts = TRUE;
          else if ( strcasecmp( use_known_settings_on_selected_fonts_env,
                                "1" ) == 0 )
            use_known_settings_on_selected_fonts = TRUE;
          else if ( strcasecmp( use_known_settings_on_selected_fonts_env,
                                "on" ) == 0 )
            use_known_settings_on_selected_fonts = TRUE;
          else if ( strcasecmp( use_known_settings_on_selected_fonts_env,
                                "yes" ) == 0 )
            use_known_settings_on_selected_fonts = TRUE;
        }
      }
      checked_use_known_settings_on_selected_fonts_env = 1;
    }

    if ( checked_use_various_tweaks_env == 0 )
    {
      char *use_various_tweaks_env
        = getenv( "INFINALITY_FT_USE_VARIOUS_TWEAKS" );

      if ( use_various_tweaks_env != NULL )
      {
        if ( strcasecmp( use_various_tweaks_env, "default" ) != 0 )
        {
          if ( strcasecmp( use_various_tweaks_env, "true") == 0)
            use_various_tweaks = TRUE;
          else if ( strcasecmp( use_various_tweaks_env, "1") == 0)
            use_various_tweaks = TRUE;
          else if ( strcasecmp( use_various_tweaks_env, "on") == 0)
            use_various_tweaks = TRUE;
          else if ( strcasecmp( use_various_tweaks_env, "yes") == 0)
            use_various_tweaks = TRUE;
        }
      }
      checked_use_various_tweaks_env = 1;
    }

    if ( checked_autohint_minimum_stem_height == 0 )
    {
      char *autohint_minimum_stem_height_env =
        getenv( "INFINALITY_FT_AUTOHINT_MINIMUM_STEM_WIDTH" );

        if ( autohint_minimum_stem_height_env != NULL )
      {
        sscanf ( autohint_minimum_stem_height_env, "%u",
                 &autohint_minimum_stem_height );

        if ( autohint_minimum_stem_height > 100 )
          autohint_minimum_stem_height = 100;
#ifndef __EMSCRIPTEN__
        else if ( autohint_minimum_stem_height < 0 )
          autohint_minimum_stem_height = 0;
#endif
      }
      checked_autohint_minimum_stem_height = 1;
    }

    if ( checked_snapping_sliding_scale_value == 0 )
    {
      char *snapping_sliding_scale_env =
        getenv ( "INFINALITY_FT_STEM_SNAPPING_SLIDING_SCALE" );

      if ( snapping_sliding_scale_env != NULL )
      {
        sscanf ( snapping_sliding_scale_env, "%d",
                 &snapping_sliding_scale_value );

        if ( snapping_sliding_scale_value > MAX_PPEM )
          snapping_sliding_scale_value = 0;
        else if ( snapping_sliding_scale_value < 0 )
          snapping_sliding_scale_value = 0;

        if (snapping_sliding_scale_value < 11 &&
            snapping_sliding_scale_value > 0  )
          snapping_sliding_scale_value = 11;
      }
      checked_snapping_sliding_scale_value = 1;
    }

    if ( checked_alignment_strength == 0)
    {
      char *alignment_strength_env =
        getenv ( "INFINALITY_FT_STEM_ALIGNMENT_STRENGTH" );

      if ( alignment_strength_env != NULL )
      {
        sscanf ( alignment_strength_env, "%d", &alignment_strength );

        if ( alignment_strength > 100 )
          alignment_strength = 100;
        else if ( alignment_strength < 0 )
          alignment_strength = 0;
      }

      if ( alignment_strength > 100 )
        alignment_strength = 100;
      checked_alignment_strength = 1;

      if ( snapping_sliding_scale_value != 0 )
        alignment_strength = sliding_scale
          ( 10, snapping_sliding_scale_value, alignment_strength, 100, ppem );
    }

    if ( checked_fitting_strength == 0 )
    {
      char *fitting_strength_env =
        getenv( "INFINALITY_FT_STEM_FITTING_STRENGTH" );

        if ( fitting_strength_env != NULL )
      {
        sscanf ( fitting_strength_env, "%d", &fitting_strength );

        if ( fitting_strength > 100 )
          fitting_strength = 100;
        else if ( fitting_strength < 0 )
          fitting_strength = 0;
      }

      if ( fitting_strength > 100 )
        fitting_strength = 100;

      checked_fitting_strength = 1;

      if ( snapping_sliding_scale_value != 0 )
        fitting_strength = sliding_scale
          ( 10, snapping_sliding_scale_value, fitting_strength, 100, ppem );
    }

    if ( checked_chromeos_style_sharpening_strength == 0 )
    {
      char *chromeos_style_sharpening_strength_env =
        getenv( "INFINALITY_FT_CHROMEOS_STYLE_SHARPENING_STRENGTH" );
      if ( chromeos_style_sharpening_strength_env != NULL )
      {
        sscanf ( chromeos_style_sharpening_strength_env, "%d",
                 &chromeos_style_sharpening_strength );

        if ( chromeos_style_sharpening_strength > 100 )
          chromeos_style_sharpening_strength = 100;
        else if ( chromeos_style_sharpening_strength < 0 )
          chromeos_style_sharpening_strength = 0;
      }

      if ( ppem > 10 )
        chromeos_style_sharpening_strength =
          ( chromeos_style_sharpening_strength * ppem ) / 10;

      if ( chromeos_style_sharpening_strength > 100 )
        chromeos_style_sharpening_strength = 100;
      checked_chromeos_style_sharpening_strength = 1;
    }


    if ( checked_brightness_value == 0)
    {
      char *brightness_env = getenv( "INFINALITY_FT_BRIGHTNESS" );
      if ( brightness_env != NULL )
      {
        sscanf ( brightness_env, "%d", &brightness_value );
        if (brightness_value > 100 )
          brightness_value = 100;
        else if (brightness_value < -100 )
          brightness_value = 0;
      }
      checked_brightness_value = 1;
    }

    if ( checked_contrast_value == 0)
    {
      char *contrast_env = getenv( "INFINALITY_FT_CONTRAST" );
      if ( contrast_env != NULL )
      {
        sscanf ( contrast_env, "%d", &contrast_value );
        if (contrast_value > 100 )
          contrast_value = 100;
        else if (contrast_value < -100 )
          contrast_value = 100;
      }
      checked_contrast_value = 1;
    }

    if ( checked_windows_style_sharpening_strength == 0)
    {
      char *windows_style_sharpening_strength_env =
        getenv( "INFINALITY_FT_WINDOWS_STYLE_SHARPENING_STRENGTH" );

      if ( windows_style_sharpening_strength_env != NULL )
      {
        sscanf ( windows_style_sharpening_strength_env, "%d",
                 &windows_style_sharpening_strength );

        if ( windows_style_sharpening_strength > 100 )
          windows_style_sharpening_strength = 100;
        else if ( windows_style_sharpening_strength < 0 )
          windows_style_sharpening_strength = 0;
      }
      /* Decrease effect slightly to have a more linear increase in sharpness */
      windows_style_sharpening_strength =
        ( ( windows_style_sharpening_strength
            * windows_style_sharpening_strength ) / 100
          + windows_style_sharpening_strength ) / 2;
      checked_windows_style_sharpening_strength = 1;
    }

    if ( checked_gamma_correction_value == 0 )
    {
      char *gamma_correction_value_env =
        getenv( "INFINALITY_FT_GAMMA_CORRECTION" );

        if ( gamma_correction_value_env != NULL )
      {
        float f1, f2;

        if ( strcasecmp( gamma_correction_value_env, "default" ) != 0 )
        {
          sscanf ( gamma_correction_value_env, "%f %f", &f1, &f2 );
          gamma_correction_lt = f1;
          gamma_correction_value = f2 / 100.0;
        }
        if ( gamma_correction_value < .01 ) gamma_correction_value = 1.0;
      }
      checked_gamma_correction_value = 1;
    }

    /* set gamma value to 1 if out of range */
    if ( slot->face                       &&
         slot->face->size                 &&
         slot->face->size->metrics.x_ppem )
    {
      if ( slot->face->size->metrics.x_ppem >= gamma_correction_lt )
        gamma_correction_value = 1;
    }
    else
      gamma_correction_value = 1;


    if ( checked_fringe_filter_strength == 0 )
    {
      char *fringe_filter_strength_env =
        getenv( "INFINALITY_FT_FRINGE_FILTER_STRENGTH" );
      if ( fringe_filter_strength_env != NULL )
      {
        sscanf ( fringe_filter_strength_env, "%d", &fringe_filter_strength );

        if ( fringe_filter_strength > 100 )
          fringe_filter_strength = 100;
        else if ( fringe_filter_strength < 0 )
          fringe_filter_strength = 0;
      }
      checked_fringe_filter_strength = 1;
    }


    if ( checked_grayscale_filter_strength == 0)
    {
      char *grayscale_filter_strength_env =
        getenv( "INFINALITY_FT_GRAYSCALE_FILTER_STRENGTH" );
      if ( grayscale_filter_strength_env != NULL )
      {
        sscanf ( grayscale_filter_strength_env, "%d",
                 &grayscale_filter_strength );
        if ( grayscale_filter_strength > 100 ) grayscale_filter_strength = 100;
        else if (grayscale_filter_strength < 0 ) grayscale_filter_strength = 0;
      }
      checked_grayscale_filter_strength = 1;
    }


    if ( checked_autohint_horizontal_stem_darken_strength == 0)
    {
      char *autohint_horizontal_stem_darken_strength_env =
        getenv( "INFINALITY_FT_AUTOHINT_HORIZONTAL_STEM_DARKEN_STRENGTH" );
      if ( autohint_horizontal_stem_darken_strength_env != NULL )
      {
        sscanf ( autohint_horizontal_stem_darken_strength_env, "%d",
                 &autohint_horizontal_stem_darken_strength );

        if ( autohint_horizontal_stem_darken_strength > 100 )
          autohint_horizontal_stem_darken_strength = 100;
        else if ( autohint_horizontal_stem_darken_strength < 0 )
          autohint_horizontal_stem_darken_strength = 0;
      }
      checked_autohint_horizontal_stem_darken_strength = 1;
    }

    if ( checked_autohint_vertical_stem_darken_strength == 0)
    {
      char *autohint_vertical_stem_darken_strength_env =
        getenv( "INFINALITY_FT_AUTOHINT_VERTICAL_STEM_DARKEN_STRENGTH" );
      if ( autohint_vertical_stem_darken_strength_env != NULL )
      {
        sscanf ( autohint_vertical_stem_darken_strength_env, "%d",
                 &autohint_vertical_stem_darken_strength );

        if ( autohint_vertical_stem_darken_strength > 100 )
          autohint_vertical_stem_darken_strength = 100;
        else if ( autohint_horizontal_stem_darken_strength < 0 )
          autohint_vertical_stem_darken_strength = 0;
      }
      checked_autohint_vertical_stem_darken_strength = 1;
    }

    if ( checked_global_embolden_x_value == 0)
    {
      char *global_embolden_x_env =
        getenv ( "INFINALITY_FT_GLOBAL_EMBOLDEN_X_VALUE" );
      if ( global_embolden_x_env != NULL )
      {
        sscanf ( global_embolden_x_env, "%d", &global_embolden_x_value );

        if ( global_embolden_x_value > 128 )
          global_embolden_x_value = 128;
        else if ( global_embolden_x_value < -128 )
          global_embolden_x_value = -128;
      }
      checked_global_embolden_x_value = 1;
    }

    if ( checked_global_embolden_y_value == 0)
    {
      char *global_embolden_y_env =
        getenv ( "INFINALITY_FT_GLOBAL_EMBOLDEN_Y_VALUE" );
      if ( global_embolden_y_env != NULL )
      {
        sscanf ( global_embolden_y_env, "%d", &global_embolden_y_value );
        if ( global_embolden_y_value > 128 )
          global_embolden_y_value = 128;
        else if ( global_embolden_y_value < -128 )
          global_embolden_y_value = -128;
      }
      checked_global_embolden_y_value = 1;
    }


    if ( checked_bold_embolden_x_value == 0)
    {
      char *bold_embolden_x_env =
        getenv ( "INFINALITY_FT_BOLD_EMBOLDEN_X_VALUE" );

        if ( bold_embolden_x_env != NULL )
      {
        sscanf ( bold_embolden_x_env, "%d", &bold_embolden_x_value );
        if (bold_embolden_x_value > 128 )
          bold_embolden_x_value = 128;
        else if (bold_embolden_x_value < -128 )
          bold_embolden_x_value = -128;
      }
      checked_bold_embolden_x_value = 1;
    }

    if ( checked_bold_embolden_y_value == 0)
    {
      char *bold_embolden_y_env = getenv ( "INFINALITY_FT_BOLD_EMBOLDEN_Y_VALUE" );

      if ( bold_embolden_y_env != NULL )
      {
        sscanf ( bold_embolden_y_env, "%d", &bold_embolden_y_value );
        if (bold_embolden_y_value > 128 )
          bold_embolden_y_value = 128;
        else if (bold_embolden_y_value < -128 )
          bold_embolden_y_value = -128;
      }
      checked_bold_embolden_y_value = 1;
    }

    if( use_various_tweaks     &&
        slot->face             &&
        slot->face->style_name )
    {
      /* needs to also check for artifical italics */
      if ( strcasestr(slot->face->style_name, "Italic" )  ||
           strcasestr(slot->face->style_name, "Oblique" ) )
      {
        windows_style_sharpening_strength = 0;
        chromeos_style_sharpening_strength = 0;
      }
    }

    /*if (fitting_strength == 100) scale_value = 1.1;*/

#endif

    /* check glyph image format */
    if ( slot->format != render->glyph_format )
    {
      error = Smooth_Err_Invalid_Argument;
      goto Exit;
    }

    /* check mode */
    if ( mode != required_mode )
    {
      error = Smooth_Err_Cannot_Render_Glyph;
      goto Exit;
    }

#ifdef FT_CONFIG_OPTION_INFINALITY_PATCHSET
RERENDER:
    if ( align_called == 1 )
    {
      scaleMat.xx = FT_FixedFromFloat(scale_value);
      scaleMat.xy = 0;
      scaleMat.yx = 0;
      scaleMat.yy = ( 1 << 16 );

      FT_Outline_Copy(outline_orig, outline);

      if ( scale_value != 1.0 )
        FT_Outline_Transform( outline, &scaleMat );

      FT_Outline_Translate( outline, translate_value, 0 );

      FT_Outline_EmboldenXY( outline, embolden_value, 0 );
    }
    else
    {
#endif
    outline = &slot->outline;
#ifdef FT_CONFIG_OPTION_INFINALITY_PATCHSET
      /* Need to get this PRIOR to embolden, otherwise bad things happen */
      FT_Outline_Get_CBox( outline, &cbox );

      /* Various hacks that need to be turned into a new rule set */
      /*if ( !autohinted
        && use_known_settings_on_selected_fonts
        && mode == FT_RENDER_MODE_LCD
        && slot->face->family_name
        && slot->face->style_name
        && ( strcasestr(slot->face->family_name, "Courier New" )
          && ( strcasestr(slot->face->style_name, "Regular" )
            || strcasestr(slot->face->style_name, "Italic" ) ) ) )
        FT_Outline_Embolden( outline, 24 );*/

      if ( !autohinted                                              &&
           use_known_settings_on_selected_fonts                     &&
           mode == FT_RENDER_MODE_LCD                               &&
           slot->face->family_name                                  &&
           slot->face->style_name                                   &&
           strcasestr( slot->face->family_name, "Times New Roman" ) &&
           strcasestr( slot->face->style_name, "Italic" )           )
        FT_Outline_EmboldenXY( outline, 12, 0 );

      if ( use_known_settings_on_selected_fonts              &&
           autohinted                                        &&
           mode == FT_RENDER_MODE_LCD                        &&
           slot->face->family_name                           &&
           slot->face->style_name                            &&
           strcasestr(slot->face->family_name, "FreeSerif" ) &&
           strcasestr(slot->face->style_name, "Italic" )     )
        FT_Outline_EmboldenXY( outline, 8, 0 );

      if ( global_embolden_x_value != 0 || global_embolden_y_value != 0 )
            FT_Outline_EmboldenXY( outline,
                                   global_embolden_x_value,
                                   global_embolden_y_value );

      if ( ( bold_embolden_x_value != 0 || bold_embolden_y_value != 0 ) &&
         ( slot->face->style_name                            &&
         ( strcasestr(slot->face->style_name, "Bold" ) ||
            strcasestr(slot->face->style_name, "Black" )     ||
            ( slot->face->style_flags                      &&
              slot->face->style_flags & FT_STYLE_FLAG_BOLD ) ) )        )
            FT_Outline_EmboldenXY( outline,
                                   bold_embolden_x_value,
                                   bold_embolden_y_value );

      FT_Outline_Copy( outline, outline_orig );
    }

    /* translate the outline to the new origin if needed */
    if ( align_called == 0 )
    {
      FT_Pos enlarge_cbox = 0;

      /* enlarge for grayscale rendering */
      if ( mode == FT_RENDER_MODE_NORMAL )
        enlarge_cbox = 64;

      if ( origin )
      {
        FT_Outline_Translate( outline, origin->x, origin->y );
        have_translated_origin = TRUE;
      }

      /* compute the control box, and grid fit it */
      /*FT_Outline_Get_CBox( outline, &cbox );*/

      cbox.xMin = FT_PIX_FLOOR( cbox.xMin - enlarge_cbox );
      cbox.yMin = FT_PIX_FLOOR( cbox.yMin );
      cbox.xMax = FT_PIX_CEIL( cbox.xMax + enlarge_cbox );
      cbox.yMax = FT_PIX_CEIL( cbox.yMax );
#else
    if ( origin )
    {
      FT_Outline_Translate( outline, origin->x, origin->y );
      have_translated_origin = TRUE;
    }

    /* compute the control box, and grid fit it */
    FT_Outline_Get_CBox( outline, &cbox );

    cbox.xMin = FT_PIX_FLOOR( cbox.xMin );
    cbox.yMin = FT_PIX_FLOOR( cbox.yMin );
    cbox.xMax = FT_PIX_CEIL( cbox.xMax );
    cbox.yMax = FT_PIX_CEIL( cbox.yMax );
#endif

    if ( cbox.xMin < 0 && cbox.xMax > FT_INT_MAX + cbox.xMin )
    {
      FT_ERROR(( "ft_smooth_render_generic: glyph too large:"
                 " xMin = %d, xMax = %d\n",
                 cbox.xMin >> 6, cbox.xMax >> 6 ));
      error = Smooth_Err_Raster_Overflow;
      goto Exit;
    }
    else
      width = ( cbox.xMax - cbox.xMin ) >> 6;

    if ( cbox.yMin < 0 && cbox.yMax > FT_INT_MAX + cbox.yMin )
    {
      FT_ERROR(( "ft_smooth_render_generic: glyph too large:"
                 " yMin = %d, yMax = %d\n",
                 cbox.yMin >> 6, cbox.yMax >> 6 ));
      error = Smooth_Err_Raster_Overflow;
      goto Exit;
    }
    else
      height = ( cbox.yMax - cbox.yMin ) >> 6;

    bitmap = &slot->bitmap;
    memory = render->root.memory;

#ifndef FT_CONFIG_OPTION_SUBPIXEL_RENDERING
    width_org  = width;
    height_org = height;
#endif

    /* release old bitmap buffer */
    if ( slot->internal->flags & FT_GLYPH_OWN_BITMAP )
    {
      FT_FREE( bitmap->buffer );
      slot->internal->flags &= ~FT_GLYPH_OWN_BITMAP;
    }

    /* allocate new one */
    pitch = width;
    if ( hmul )
    {
      width = width * 3;
      pitch = FT_PAD_CEIL( width, 4 );
    }

    if ( vmul )
      height *= 3;

    x_shift = (FT_Int) cbox.xMin;
    y_shift = (FT_Int) cbox.yMin;
    x_left  = (FT_Int)( cbox.xMin >> 6 );
    y_top   = (FT_Int)( cbox.yMax >> 6 );

#ifdef FT_CONFIG_OPTION_SUBPIXEL_RENDERING

    if ( slot->library->lcd_filter_func )
    {
      FT_Int  extra = slot->library->lcd_extra;


      if ( hmul )
      {
        x_shift -= 64 * ( extra >> 1 );
        width   += 3 * extra;
        pitch    = FT_PAD_CEIL( width, 4 );
        x_left  -= extra >> 1;
      }

      if ( vmul )
      {
        y_shift -= 64 * ( extra >> 1 );
        height  += 3 * extra;
        y_top   += extra >> 1;
      }
    }
#endif
#ifdef FT_CONFIG_OPTION_INFINALITY_PATCHSET
    }

#endif

#if FT_UINT_MAX > 0xFFFFU

    /* Required check is (pitch * height < FT_ULONG_MAX),        */
    /* but we care realistic cases only.  Always pitch <= width. */
    if ( width > 0x7FFF || height > 0x7FFF )
    {
      FT_ERROR(( "ft_smooth_render_generic: glyph too large: %u x %u\n",
                 width, height ));
      error = Smooth_Err_Raster_Overflow;
      goto Exit;
    }

#endif

    bitmap->pixel_mode = FT_PIXEL_MODE_GRAY;
    bitmap->num_grays  = 256;
    bitmap->width      = width;
    bitmap->rows       = height;
    bitmap->pitch      = pitch;

    /* translate outline to render it into the bitmap */
#ifdef FT_CONFIG_OPTION_INFINALITY_PATCHSET
    if ( align_called == 0 )
#endif
    FT_Outline_Translate( outline, -x_shift, -y_shift );
    have_outline_shifted = TRUE;

    if ( FT_ALLOC( bitmap->buffer, (FT_ULong)pitch * height ) )
      goto Exit;
    else
      have_buffer = TRUE;

    slot->internal->flags |= FT_GLYPH_OWN_BITMAP;

    /* set up parameters */
    params.target = bitmap;
    params.source = outline;
    params.flags  = FT_RASTER_FLAG_AA;

#ifdef FT_CONFIG_OPTION_SUBPIXEL_RENDERING

    /* implode outline if needed */
    {
      FT_Vector*  points     = outline->points;
      FT_Vector*  points_end = points + outline->n_points;
      FT_Vector*  vec;


      if ( hmul )
        for ( vec = points; vec < points_end; vec++ )
          vec->x *= 3;

      if ( vmul )
        for ( vec = points; vec < points_end; vec++ )
          vec->y *= 3;
    }

    /* render outline into the bitmap */
    error = render->raster_render( render->raster, &params );

    /* deflate outline if needed */
    {
      FT_Vector*  points     = outline->points;
      FT_Vector*  points_end = points + outline->n_points;
      FT_Vector*  vec;


      if ( hmul )
        for ( vec = points; vec < points_end; vec++ )
          vec->x /= 3;

      if ( vmul )
        for ( vec = points; vec < points_end; vec++ )
          vec->y /= 3;
    }

    if ( error )
      goto Exit;

#ifdef FT_CONFIG_OPTION_INFINALITY_PATCHSET
    if ( ppem <= MAX_PPEM && ppem >= MIN_PPEM )
    {
      if ( align_called == 0                                  &&  cur_width / ppem < 10 &&
           ( alignment_strength > 0 || fitting_strength > 0 ) )
        _lcd_stem_align ( bitmap,
                          mode,
                          slot,
                          &translate_value,
                          &scale_value,
                          alignment_strength,
                          fitting_strength,
                          &embolden_value );

      if ( align_called == 0                              &&
           ( translate_value != 0 || scale_value != 1.0 ) )
      {
        align_called = 1;
        goto RERENDER;
      }

      if ( mode == FT_RENDER_MODE_LCD )
      {

        if ( fringe_filter_strength > 0 /*&& autohinted*/ )
          _ft_lcd_fringe_filter( bitmap,
                                 mode,
                                 fringe_filter_strength,
                                 slot->library );

        /*if ( autohinted)
          _ft_lcd_stem_end_filter( bitmap, mode, 100, slot->library );*/

        if ( gamma_correction_lt > 0 && gamma_correction_value != 1.0 )
          _ft_lcd_gamma_correction_correction( bitmap,
                                               mode,
                                               slot,
                                               gamma_correction_lt,
                                               gamma_correction_value );

        chromeos_cutoff = (FT_Byte)( 0.5 * 255.0 )
                            * ( chromeos_style_sharpening_strength / 100.0 );
        chromeos_gamma_value = 1;

        if ( chromeos_style_sharpening_strength > 0 )
          _ft_lcd_chromeos_sharpen( bitmap,
                                    mode,
                                    chromeos_cutoff,
                                    chromeos_gamma_value );

        if ( ppem > 8 )
          if ( windows_style_sharpening_strength > 0 )
            _ft_lcd_windows_sharpen( bitmap,
                                     mode,
                                     windows_style_sharpening_strength,
                                     slot->library );

        if ( autohinted                                    &&
             ( cur_width * 100 ) / 64
               > autohint_horizontal_stem_darken_strength  &&
             autohint_horizontal_stem_darken_strength != 0 )
          autohint_horizontal_stem_darken_strength = ( cur_width * 100 ) / 64;

        if ( autohint_horizontal_stem_darken_strength > 100)
          autohint_horizontal_stem_darken_strength = 100;

        /* only do on autohinted fonts */
        /* Necessary to do on some non-thin fonts, which is why it is outside */
        /* of the below conditional */
        if ( autohint_horizontal_stem_darken_strength > 0 && autohinted )
          _ft_lcd_darken_x ( bitmap,
                             mode,
                             autohint_horizontal_stem_darken_strength,
                             slot->library );

        /* Enhance thin fonts */
        if ( autohinted )
        {
          /* if forcibly set use that, otherwise make a good estimate */
          if ( !_ft_bitmap_bc ( bitmap,
               (float)get_brightness( slot->face->family_name, ppem ) / 300.0,
               (float)get_contrast( slot->face->family_name, ppem ) / 300.0 ) )
          {
            FT_Bool is_fixed_name = FALSE;

            if ( slot->face->family_name                      &&
                 strcasestr(slot->face->family_name, "Mono" ) )
              is_fixed_name = TRUE;

            /* Darken vertical stems */
            _ft_lcd_darken_y ( bitmap,
                               mode,
                               autohint_vertical_stem_darken_strength,
                               slot->library );

            /* Adjust brightness / contrast automatically based on stem width */
            if ( cur_width != 0 && cur_width < 30 )
              cur_width = 30;
 
            if ( cur_width >= 30 && cur_width <= 60 )
            {
              float ppem_factor       = sliding_scale ( 5, 11, 0.0, 1.0, ppem );
              float brightness_factor = sliding_scale ( 30, 52, -.3, 0.0,
                                                        cur_width );
              float contrast_factor   = sliding_scale ( 30, 52, .45, 0.0,
                                                        cur_width );
              _ft_bitmap_bc ( bitmap,
                              ppem_factor * brightness_factor,
                              ppem_factor * contrast_factor );

              /* Only cap variable width thin-stemmed fonts */
              if ( !FT_IS_FIXED_WIDTH( slot->face ) && !is_fixed_name )
                _ft_bitmap_cap ( bitmap,
                                 ( cur_width * 150 ) / 64,
                                 slot->library );
            }
          }
        }


        if ( slot->library->lcd_filter_func )
          slot->library->lcd_filter_func( bitmap, mode, slot->library );

        if ( grayscale_filter_strength > 0 )
          _ft_lcd_grayscale_filter( bitmap,
                                    mode,
                                    grayscale_filter_strength,
                                    slot->library );

      }

      /* Global values */
      if ( brightness_value != 0 || contrast_value != 0 )
        _ft_bitmap_bc ( bitmap,
                        (float)brightness_value / 300.0,
                        (float)contrast_value / 300.0);

      FT_Outline_Done( slot->library, outline_orig );
    }
    else if ( mode == FT_RENDER_MODE_LCD     &&
              slot->library->lcd_filter_func )
          slot->library->lcd_filter_func( bitmap, mode, slot->library );
#else
    if ( slot->library->lcd_filter_func )
      slot->library->lcd_filter_func( bitmap, mode, slot->library );

#endif /* FT_CONFIG_OPTION_INFINALITY_PATCHSET */
#else /* !FT_CONFIG_OPTION_SUBPIXEL_RENDERING */

    /* render outline into bitmap */
    error = render->raster_render( render->raster, &params );
    if ( error )
      goto Exit;

    /* expand it horizontally */
    if ( hmul )
    {
      FT_Byte*  line = bitmap->buffer;
      FT_UInt   hh;


      for ( hh = height_org; hh > 0; hh--, line += pitch )
      {
        FT_UInt   xx;
        FT_Byte*  end = line + width;


        for ( xx = width_org; xx > 0; xx-- )
        {
          FT_UInt  pixel = line[xx-1];


          end[-3] = (FT_Byte)pixel;
          end[-2] = (FT_Byte)pixel;
          end[-1] = (FT_Byte)pixel;
          end    -= 3;
        }
      }
    }

    /* expand it vertically */
    if ( vmul )
    {
      FT_Byte*  read  = bitmap->buffer + ( height - height_org ) * pitch;
      FT_Byte*  write = bitmap->buffer;
      FT_UInt   hh;


      for ( hh = height_org; hh > 0; hh-- )
      {
        ft_memcpy( write, read, pitch );
        write += pitch;

        ft_memcpy( write, read, pitch );
        write += pitch;

        ft_memcpy( write, read, pitch );
        write += pitch;
        read  += pitch;
      }
    }

#endif /* !FT_CONFIG_OPTION_SUBPIXEL_RENDERING */

    /*
     * XXX: on 16bit system, we return an error for huge bitmap
     * to prevent an overflow.
     */
    if ( x_left > FT_INT_MAX || y_top > FT_INT_MAX )
    {
      error = Smooth_Err_Invalid_Pixel_Size;
      goto Exit;
    }

    slot->format      = FT_GLYPH_FORMAT_BITMAP;
    slot->bitmap_left = (FT_Int)x_left;
    slot->bitmap_top  = (FT_Int)y_top;

    /* everything is fine; don't deallocate buffer */
    have_buffer = FALSE;

    error = Smooth_Err_Ok;

  Exit:
    if ( have_outline_shifted )
      FT_Outline_Translate( outline, x_shift, y_shift );
    if ( have_translated_origin )
      FT_Outline_Translate( outline, -origin->x, -origin->y );
    if ( have_buffer )
    {
      FT_FREE( bitmap->buffer );
      slot->internal->flags &= ~FT_GLYPH_OWN_BITMAP;
    }

    return error;
  }


  /* convert a slot's glyph image into a bitmap */
  static FT_Error
  ft_smooth_render( FT_Renderer       render,
                    FT_GlyphSlot      slot,
                    FT_Render_Mode    mode,
                    const FT_Vector*  origin )
  {
    if ( mode == FT_RENDER_MODE_LIGHT )
      mode = FT_RENDER_MODE_NORMAL;

    return ft_smooth_render_generic( render, slot, mode, origin,
                                     FT_RENDER_MODE_NORMAL );
  }


  /* convert a slot's glyph image into a horizontal LCD bitmap */
  static FT_Error
  ft_smooth_render_lcd( FT_Renderer       render,
                        FT_GlyphSlot      slot,
                        FT_Render_Mode    mode,
                        const FT_Vector*  origin )
  {
    FT_Error  error;

    error = ft_smooth_render_generic( render, slot, mode, origin,
                                      FT_RENDER_MODE_LCD );
    if ( !error )
      slot->bitmap.pixel_mode = FT_PIXEL_MODE_LCD;

    return error;
  }


  /* convert a slot's glyph image into a vertical LCD bitmap */
  static FT_Error
  ft_smooth_render_lcd_v( FT_Renderer       render,
                          FT_GlyphSlot      slot,
                          FT_Render_Mode    mode,
                          const FT_Vector*  origin )
  {
    FT_Error  error;

    error = ft_smooth_render_generic( render, slot, mode, origin,
                                      FT_RENDER_MODE_LCD_V );
    if ( !error )
      slot->bitmap.pixel_mode = FT_PIXEL_MODE_LCD_V;

    return error;
  }


  FT_DEFINE_RENDERER( ft_smooth_renderer_class,

      FT_MODULE_RENDERER,
      sizeof ( FT_RendererRec ),

      "smooth",
      0x10000L,
      0x20000L,

      0,    /* module specific interface */

      (FT_Module_Constructor)ft_smooth_init,
      (FT_Module_Destructor) 0,
      (FT_Module_Requester)  0
    ,

    FT_GLYPH_FORMAT_OUTLINE,

    (FT_Renderer_RenderFunc)   ft_smooth_render,
    (FT_Renderer_TransformFunc)ft_smooth_transform,
    (FT_Renderer_GetCBoxFunc)  ft_smooth_get_cbox,
    (FT_Renderer_SetModeFunc)  ft_smooth_set_mode,

    (FT_Raster_Funcs*)    &FT_GRAYS_RASTER_GET
  )


  FT_DEFINE_RENDERER( ft_smooth_lcd_renderer_class,

      FT_MODULE_RENDERER,
      sizeof ( FT_RendererRec ),

      "smooth-lcd",
      0x10000L,
      0x20000L,

      0,    /* module specific interface */

      (FT_Module_Constructor)ft_smooth_init,
      (FT_Module_Destructor) 0,
      (FT_Module_Requester)  0
    ,

    FT_GLYPH_FORMAT_OUTLINE,

    (FT_Renderer_RenderFunc)   ft_smooth_render_lcd,
    (FT_Renderer_TransformFunc)ft_smooth_transform,
    (FT_Renderer_GetCBoxFunc)  ft_smooth_get_cbox,
    (FT_Renderer_SetModeFunc)  ft_smooth_set_mode,

    (FT_Raster_Funcs*)    &FT_GRAYS_RASTER_GET
  )

  FT_DEFINE_RENDERER( ft_smooth_lcdv_renderer_class,

      FT_MODULE_RENDERER,
      sizeof ( FT_RendererRec ),

      "smooth-lcdv",
      0x10000L,
      0x20000L,

      0,    /* module specific interface */

      (FT_Module_Constructor)ft_smooth_init,
      (FT_Module_Destructor) 0,
      (FT_Module_Requester)  0
    ,

    FT_GLYPH_FORMAT_OUTLINE,

    (FT_Renderer_RenderFunc)   ft_smooth_render_lcd_v,
    (FT_Renderer_TransformFunc)ft_smooth_transform,
    (FT_Renderer_GetCBoxFunc)  ft_smooth_get_cbox,
    (FT_Renderer_SetModeFunc)  ft_smooth_set_mode,

    (FT_Raster_Funcs*)    &FT_GRAYS_RASTER_GET
  )


/* END */
