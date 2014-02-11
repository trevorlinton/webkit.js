/*
 * Copyright © 2010 Red Hat Inc.
 *
 * Permission to use, copy, modify, distribute, and sell this software
 * and its documentation for any purpose is hereby granted without
 * fee, provided that the above copyright notice appear in all copies
 * and that both that copyright notice and this permission notice
 * appear in supporting documentation, and that the name of
 * Red Hat, Inc. not be used in advertising or publicity pertaining to
 * distribution of the software without specific, written prior
 * permission. Red Hat, Inc. makes no representations about the
 * suitability of this software for any purpose.  It is provided "as
 * is" without express or implied warranty.
 *
 * RED HAT, INC. DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS
 * SOFTWARE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS, IN NO EVENT SHALL RED HAT, INC. BE LIABLE FOR ANY SPECIAL,
 * INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
 * IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * Author: Benjamin Otte <otte@redhat.com>
 */

/*
 * WHAT THIS TEST DOES
 *
 * This test tests that for all public APIs Cairo behaves correct, consistent
 * and most of all doesn't crash. It does this by calling all APIs that take
 * surfaces and calling them on specially prepared surfaces that should fail 
 * when called on this function.
 *
 * ADDING NEW FUNCTIONS
 *
 * You need (for adding the function cairo_surface_foo):
 * 1) A surface_test_func_t named test_cairo_surface_foo that gets passed the
 *    prepared surface and has the job of calling the function and checking
 *    the return value (if one exists) for correctness. The top of this file
 *    contains all these shim functions.
 * 2) Knowledge if the function behaves like a setter or like a getter. A 
 *    setter should set an error status on the surface, a getter does not
 *    modify the function.
 * 3) Knowledge if the function only works for a specific surface type and for
 *    which one.
 * 4) An entry in the tests array using the TEST() macro. It takes as arguments:
 *    - The function name
 *    - TRUE if the function modifies the surface, FALSE otherwise
 *    - the surface type for which the function is valid or -1 if it is valid
 *      for all surface types.
 *
 * FIXING FAILURES
 *
 * The test will dump failures notices into the api-special-cases.log file (when 
 * it doesn't crash). These should be pretty self-explanatory. Usually it is 
 * enough to just add a new check to the function it complained about.
 */

#ifdef HAVE_CONFIG_H
#include "config.h"
#endif

#include <assert.h>
#include <limits.h>

#include "cairo-test.h"

#if CAIRO_HAS_GL_SURFACE
#include <cairo-gl.h>
#endif
#if CAIRO_HAS_OS2_SURFACE
#include <cairo-os2.h>
#endif
#if CAIRO_HAS_PDF_SURFACE
#include <cairo-pdf.h>
#endif
#if CAIRO_HAS_PS_SURFACE
#include <cairo-ps.h>
#endif
#if CAIRO_HAS_QUARTZ_SURFACE
#define Cursor QuartzCursor
#include <cairo-quartz.h>
#undef Cursor
#endif
#if CAIRO_HAS_SVG_SURFACE
#include <cairo-svg.h>
#endif
#if CAIRO_HAS_TEE_SURFACE
#include <cairo-tee.h>
#endif
#if CAIRO_HAS_XCB_SURFACE
#include <cairo-xcb.h>
#endif
#if CAIRO_HAS_XLIB_SURFACE
#define Cursor XCursor
#include <cairo-xlib.h>
#undef Cursor
#endif

#define surface_has_type(surface,type) (cairo_surface_get_type (surface) == (type))

typedef cairo_test_status_t (* surface_test_func_t) (cairo_surface_t *surface);

static cairo_test_status_t
test_cairo_surface_create_similar (cairo_surface_t *surface)
{
    cairo_surface_t *similar;
    
    similar = cairo_surface_create_similar (surface, CAIRO_CONTENT_ALPHA, 100, 100);
    
    cairo_surface_destroy (similar);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_create_for_rectangle (cairo_surface_t *surface)
{
    cairo_surface_t *similar;
    
    similar = cairo_surface_create_for_rectangle (surface, 1, 1, 8, 8);
    
    cairo_surface_destroy (similar);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_reference (cairo_surface_t *surface)
{
    cairo_surface_destroy (cairo_surface_reference (surface));
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_finish (cairo_surface_t *surface)
{
    cairo_surface_finish (surface);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_get_device (cairo_surface_t *surface)
{
    /* cairo_device_t *device = */cairo_surface_get_device (surface);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_get_reference_count (cairo_surface_t *surface)
{
    unsigned int refcount = cairo_surface_get_reference_count (surface);
    if (refcount > 0)
        return CAIRO_TEST_SUCCESS;
    /* inert error surfaces have a refcount of 0 */
    return cairo_surface_status (surface) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_surface_status (cairo_surface_t *surface)
{
    cairo_status_t status = cairo_surface_status (surface);
    return status < CAIRO_STATUS_LAST_STATUS ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_surface_get_type (cairo_surface_t *surface)
{
    /* cairo_surface_type_t type = */cairo_surface_get_type (surface);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_get_content (cairo_surface_t *surface)
{
    cairo_content_t content = cairo_surface_get_content (surface);

    switch (content) {
    case CAIRO_CONTENT_COLOR:
    case CAIRO_CONTENT_ALPHA:
    case CAIRO_CONTENT_COLOR_ALPHA:
        return CAIRO_TEST_SUCCESS;
    default:
        return CAIRO_TEST_ERROR;
    }
}

static cairo_test_status_t
test_cairo_surface_set_user_data (cairo_surface_t *surface)
{
    static cairo_user_data_key_t key;
    cairo_status_t status;

    status = cairo_surface_set_user_data (surface, &key, &key, NULL);
    if (status == CAIRO_STATUS_NO_MEMORY)
        return CAIRO_TEST_NO_MEMORY;
    else if (status)
        return CAIRO_TEST_SUCCESS;

    if (cairo_surface_get_user_data (surface, &key) != &key)
        return CAIRO_TEST_ERROR;

    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_set_mime_data (cairo_surface_t *surface)
{
    const char *mimetype = "text/x-uri";
    const char *data = "http://www.cairographics.org";
    cairo_status_t status;

    status = cairo_surface_set_mime_data (surface,
                                          mimetype,
                                          (const unsigned char *) data,
					  strlen (data),
                                          NULL, NULL);
    return status ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_surface_get_mime_data (cairo_surface_t *surface)
{
    const char *mimetype = "text/x-uri";
    const unsigned char *data;
    unsigned long length;

    cairo_surface_get_mime_data (surface, mimetype, &data, &length);
    return data == NULL && length == 0 ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_surface_get_font_options (cairo_surface_t *surface)
{
    cairo_font_options_t *options;
    cairo_status_t status;

    options = cairo_font_options_create ();
    if (likely (!cairo_font_options_status (options)))
        cairo_surface_get_font_options (surface, options);
    status = cairo_font_options_status (options);
    cairo_font_options_destroy (options);
    return status ? CAIRO_TEST_ERROR : CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_flush (cairo_surface_t *surface)
{
    cairo_surface_flush (surface);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_mark_dirty (cairo_surface_t *surface)
{
    cairo_surface_mark_dirty (surface);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_mark_dirty_rectangle (cairo_surface_t *surface)
{
    cairo_surface_mark_dirty_rectangle (surface, 1, 1, 8, 8);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_set_device_offset (cairo_surface_t *surface)
{
    cairo_surface_set_device_offset (surface, 5, 5);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_get_device_offset (cairo_surface_t *surface)
{
    double x, y;

    cairo_surface_get_device_offset (surface, &x, &y);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_set_fallback_resolution (cairo_surface_t *surface)
{
    cairo_surface_set_fallback_resolution (surface, 42, 42);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_get_fallback_resolution (cairo_surface_t *surface)
{
    double x, y;

    cairo_surface_get_fallback_resolution (surface, &x, &y);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_copy_page (cairo_surface_t *surface)
{
    cairo_surface_copy_page (surface);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_show_page (cairo_surface_t *surface)
{
    cairo_surface_show_page (surface);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_surface_has_show_text_glyphs (cairo_surface_t *surface)
{
    cairo_surface_has_show_text_glyphs (surface);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_image_surface_get_data (cairo_surface_t *surface)
{
    unsigned char *data = cairo_image_surface_get_data (surface);
    return data == NULL || surface_has_type (surface, CAIRO_SURFACE_TYPE_IMAGE) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_image_surface_get_format (cairo_surface_t *surface)
{
    cairo_format_t format = cairo_image_surface_get_format (surface);
    return format == CAIRO_FORMAT_INVALID || surface_has_type (surface, CAIRO_SURFACE_TYPE_IMAGE) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_image_surface_get_width (cairo_surface_t *surface)
{
    unsigned int width = cairo_image_surface_get_width (surface);
    return width == 0 || surface_has_type (surface, CAIRO_SURFACE_TYPE_IMAGE) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_image_surface_get_height (cairo_surface_t *surface)
{
    unsigned int height = cairo_image_surface_get_height (surface);
    return height == 0 || surface_has_type (surface, CAIRO_SURFACE_TYPE_IMAGE) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_image_surface_get_stride (cairo_surface_t *surface)
{
    unsigned int stride = cairo_image_surface_get_stride (surface);
    return stride == 0 || surface_has_type (surface, CAIRO_SURFACE_TYPE_IMAGE) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

#if CAIRO_HAS_PNG_FUNCTIONS

static cairo_test_status_t
test_cairo_surface_write_to_png (cairo_surface_t *surface)
{
    cairo_status_t status;

    status = cairo_surface_write_to_png (surface, "/this/file/will/definitely/not/exist.png");
    
    return status ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_status_t
write_func_that_always_fails (void *closure, const unsigned char *data, unsigned int length)
{
    return CAIRO_STATUS_WRITE_ERROR;
}

static cairo_test_status_t
test_cairo_surface_write_to_png_stream (cairo_surface_t *surface)
{
    cairo_status_t status;

    status = cairo_surface_write_to_png_stream (surface,
                                                write_func_that_always_fails,
                                                NULL);
    
    return status && status != CAIRO_STATUS_WRITE_ERROR ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

#endif /* CAIRO_HAS_PNG_FUNCTIONS */

static cairo_test_status_t
test_cairo_recording_surface_ink_extents (cairo_surface_t *surface)
{
    double x, y, w, h;

    cairo_recording_surface_ink_extents (surface, &x, &y, &w, &h);
    return x == 0 && y == 0 && w == 0 && h == 0 ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

#if CAIRO_HAS_TEE_SURFACE

static cairo_test_status_t
test_cairo_tee_surface_add (cairo_surface_t *surface)
{
    cairo_surface_t *image = cairo_image_surface_create (CAIRO_FORMAT_A8, 10, 10);

    cairo_tee_surface_add (surface, image);
    cairo_surface_destroy (image);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_tee_surface_remove (cairo_surface_t *surface)
{
    cairo_surface_t *image = cairo_image_surface_create (CAIRO_FORMAT_A8, 10, 10);

    cairo_tee_surface_remove (surface, image);
    cairo_surface_destroy (image);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_tee_surface_index (cairo_surface_t *surface)
{
    cairo_surface_t *master;
    cairo_status_t status;

    master = cairo_tee_surface_index (surface, 0);
    status = cairo_surface_status (master);
    cairo_surface_destroy (master);
    return status ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

#endif /* CAIRO_HAS_TEE_SURFACE */

#if CAIRO_HAS_GL_SURFACE

static cairo_test_status_t
test_cairo_gl_surface_set_size (cairo_surface_t *surface)
{
    cairo_gl_surface_set_size (surface, 5, 5);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_gl_surface_get_width (cairo_surface_t *surface)
{
    unsigned int width = cairo_gl_surface_get_width (surface);
    return width == 0 || surface_has_type (surface, CAIRO_SURFACE_TYPE_GL) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_gl_surface_get_height (cairo_surface_t *surface)
{
    unsigned int height = cairo_gl_surface_get_height (surface);
    return height == 0 || surface_has_type (surface, CAIRO_SURFACE_TYPE_GL) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_gl_surface_swapbuffers (cairo_surface_t *surface)
{
    cairo_gl_surface_swapbuffers (surface);
    return CAIRO_TEST_SUCCESS;
}

#endif /* CAIRO_HAS_GL_SURFACE */

#if CAIRO_HAS_PDF_SURFACE

static cairo_test_status_t
test_cairo_pdf_surface_restrict_to_version (cairo_surface_t *surface)
{
    cairo_pdf_surface_restrict_to_version (surface, CAIRO_PDF_VERSION_1_4);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_pdf_surface_set_size (cairo_surface_t *surface)
{
    cairo_pdf_surface_set_size (surface, 5, 5);
    return CAIRO_TEST_SUCCESS;
}

#endif /* CAIRO_HAS_PDF_SURFACE */

#if CAIRO_HAS_PS_SURFACE

static cairo_test_status_t
test_cairo_ps_surface_restrict_to_level (cairo_surface_t *surface)
{
    cairo_ps_surface_restrict_to_level (surface, CAIRO_PS_LEVEL_2);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_ps_surface_set_eps (cairo_surface_t *surface)
{
    cairo_ps_surface_set_eps (surface, TRUE);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_ps_surface_get_eps (cairo_surface_t *surface)
{
    cairo_bool_t eps = cairo_ps_surface_get_eps (surface);
    return eps ? CAIRO_TEST_ERROR : CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_ps_surface_set_size (cairo_surface_t *surface)
{
    cairo_ps_surface_set_size (surface, 5, 5);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_ps_surface_dsc_comment (cairo_surface_t *surface)
{
    cairo_ps_surface_dsc_comment (surface, "54, 74, 90, 2010");
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_ps_surface_dsc_begin_setup (cairo_surface_t *surface)
{
    cairo_ps_surface_dsc_begin_setup (surface);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_ps_surface_dsc_begin_page_setup (cairo_surface_t *surface)
{
    cairo_ps_surface_dsc_begin_page_setup (surface);
    return CAIRO_TEST_SUCCESS;
}

#endif /* CAIRO_HAS_PS_SURFACE */

#if CAIRO_HAS_QUARTZ_SURFACE

static cairo_test_status_t
test_cairo_quartz_surface_get_cg_context (cairo_surface_t *surface)
{
    CGContextRef context = cairo_quartz_surface_get_cg_context (surface);
    return context == NULL || surface_has_type (surface, CAIRO_SURFACE_TYPE_QUARTZ) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

#endif /* CAIRO_HAS_QUARTZ_SURFACE */

#if CAIRO_HAS_SVG_SURFACE

static cairo_test_status_t
test_cairo_svg_surface_restrict_to_version (cairo_surface_t *surface)
{
    cairo_svg_surface_restrict_to_version (surface, CAIRO_SVG_VERSION_1_1);
    return CAIRO_TEST_SUCCESS;
}

#endif /* CAIRO_HAS_SVG_SURFACE */

#if CAIRO_HAS_XCB_SURFACE

static cairo_test_status_t
test_cairo_xcb_surface_set_size (cairo_surface_t *surface)
{
    cairo_xcb_surface_set_size (surface, 5, 5);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_xcb_surface_set_drawable (cairo_surface_t *surface)
{
    cairo_xcb_surface_set_drawable (surface, 0, 5, 5);
    return CAIRO_TEST_SUCCESS;
}

#endif

#if CAIRO_HAS_XLIB_SURFACE

static cairo_test_status_t
test_cairo_xlib_surface_set_size (cairo_surface_t *surface)
{
    cairo_xlib_surface_set_size (surface, 5, 5);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_xlib_surface_set_drawable (cairo_surface_t *surface)
{
    cairo_xlib_surface_set_drawable (surface, 0, 5, 5);
    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
test_cairo_xlib_surface_get_display (cairo_surface_t *surface)
{
    Display *display = cairo_xlib_surface_get_display (surface);
    return display == NULL || surface_has_type (surface, CAIRO_SURFACE_TYPE_XLIB) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_xlib_surface_get_screen (cairo_surface_t *surface)
{
    Screen *screen = cairo_xlib_surface_get_screen (surface);
    return screen == NULL || surface_has_type (surface, CAIRO_SURFACE_TYPE_XLIB) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_xlib_surface_get_visual (cairo_surface_t *surface)
{
    Visual *visual = cairo_xlib_surface_get_visual (surface);
    return visual == NULL || surface_has_type (surface, CAIRO_SURFACE_TYPE_XLIB) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_xlib_surface_get_drawable (cairo_surface_t *surface)
{
    Drawable drawable = cairo_xlib_surface_get_drawable (surface);
    return drawable == 0 || surface_has_type (surface, CAIRO_SURFACE_TYPE_XLIB) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_xlib_surface_get_depth (cairo_surface_t *surface)
{
    int depth = cairo_xlib_surface_get_depth (surface);
    return depth == 0 || surface_has_type (surface, CAIRO_SURFACE_TYPE_XLIB) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_xlib_surface_get_width (cairo_surface_t *surface)
{
    int width = cairo_xlib_surface_get_width (surface);
    return width == 0 || surface_has_type (surface, CAIRO_SURFACE_TYPE_XLIB) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

static cairo_test_status_t
test_cairo_xlib_surface_get_height (cairo_surface_t *surface)
{
    int height = cairo_xlib_surface_get_height (surface);
    return height == 0 || surface_has_type (surface, CAIRO_SURFACE_TYPE_XLIB) ? CAIRO_TEST_SUCCESS : CAIRO_TEST_ERROR;
}

#endif


#define TEST(name, surface_type, sets_status) { #name, test_ ## name, surface_type, sets_status }

struct {
    const char *name;
    surface_test_func_t func;
    int surface_type; /* cairo_surface_type_t or -1 */
    cairo_bool_t modifies_surface;
} tests[] = {
    TEST (cairo_surface_create_similar, -1, FALSE),
    TEST (cairo_surface_create_for_rectangle, -1, FALSE),
    TEST (cairo_surface_reference, -1, FALSE),
    TEST (cairo_surface_finish, -1, TRUE),
    TEST (cairo_surface_get_device, -1, FALSE),
    TEST (cairo_surface_get_reference_count, -1, FALSE),
    TEST (cairo_surface_status, -1, FALSE),
    TEST (cairo_surface_get_type, -1, FALSE),
    TEST (cairo_surface_get_content, -1, FALSE),
    TEST (cairo_surface_set_user_data, -1, FALSE),
    TEST (cairo_surface_set_mime_data, -1, TRUE),
    TEST (cairo_surface_get_mime_data, -1, FALSE),
    TEST (cairo_surface_get_font_options, -1, FALSE),
    TEST (cairo_surface_flush, -1, TRUE),
    TEST (cairo_surface_mark_dirty, -1, TRUE),
    TEST (cairo_surface_mark_dirty_rectangle, -1, TRUE),
    TEST (cairo_surface_set_device_offset, -1, TRUE),
    TEST (cairo_surface_get_device_offset, -1, FALSE),
    TEST (cairo_surface_set_fallback_resolution, -1, TRUE),
    TEST (cairo_surface_get_fallback_resolution, -1, FALSE),
    TEST (cairo_surface_copy_page, -1, TRUE),
    TEST (cairo_surface_show_page, -1, TRUE),
    TEST (cairo_surface_has_show_text_glyphs, -1, FALSE),
    TEST (cairo_image_surface_get_data, CAIRO_SURFACE_TYPE_IMAGE, FALSE),
    TEST (cairo_image_surface_get_format, CAIRO_SURFACE_TYPE_IMAGE, FALSE),
    TEST (cairo_image_surface_get_width, CAIRO_SURFACE_TYPE_IMAGE, FALSE),
    TEST (cairo_image_surface_get_height, CAIRO_SURFACE_TYPE_IMAGE, FALSE),
    TEST (cairo_image_surface_get_stride, CAIRO_SURFACE_TYPE_IMAGE, FALSE),
#if CAIRO_HAS_PNG_FUNCTIONS
    TEST (cairo_surface_write_to_png, -1, FALSE),
    TEST (cairo_surface_write_to_png_stream, -1, FALSE),
#endif
    TEST (cairo_recording_surface_ink_extents, CAIRO_SURFACE_TYPE_RECORDING, FALSE),
#if CAIRO_HAS_TEE_SURFACE
    TEST (cairo_tee_surface_add, CAIRO_SURFACE_TYPE_TEE, TRUE),
    TEST (cairo_tee_surface_remove, CAIRO_SURFACE_TYPE_TEE, TRUE),
    TEST (cairo_tee_surface_index, CAIRO_SURFACE_TYPE_TEE, FALSE),
#endif
#if CAIRO_HAS_GL_SURFACE
    TEST (cairo_gl_surface_set_size, CAIRO_SURFACE_TYPE_GL, TRUE),
    TEST (cairo_gl_surface_get_width, CAIRO_SURFACE_TYPE_GL, FALSE),
    TEST (cairo_gl_surface_get_height, CAIRO_SURFACE_TYPE_GL, FALSE),
    TEST (cairo_gl_surface_swapbuffers, CAIRO_SURFACE_TYPE_GL, TRUE),
#endif
#if CAIRO_HAS_PDF_SURFACE
    TEST (cairo_pdf_surface_restrict_to_version, CAIRO_SURFACE_TYPE_PDF, TRUE),
    TEST (cairo_pdf_surface_set_size, CAIRO_SURFACE_TYPE_PDF, TRUE),
#endif
#if CAIRO_HAS_PS_SURFACE
    TEST (cairo_ps_surface_restrict_to_level, CAIRO_SURFACE_TYPE_PS, TRUE),
    TEST (cairo_ps_surface_set_eps, CAIRO_SURFACE_TYPE_PS, TRUE),
    TEST (cairo_ps_surface_get_eps, CAIRO_SURFACE_TYPE_PS, FALSE),
    TEST (cairo_ps_surface_set_size, CAIRO_SURFACE_TYPE_PS, TRUE),
    TEST (cairo_ps_surface_dsc_comment, CAIRO_SURFACE_TYPE_PS, TRUE),
    TEST (cairo_ps_surface_dsc_begin_setup, CAIRO_SURFACE_TYPE_PS, TRUE),
    TEST (cairo_ps_surface_dsc_begin_page_setup, CAIRO_SURFACE_TYPE_PS, TRUE),
#endif
#if CAIRO_HAS_QUARTZ_SURFACE
    TEST (cairo_quartz_surface_get_cg_context, CAIRO_SURFACE_TYPE_QUARTZ, FALSE),
#endif
#if CAIRO_HAS_SVG_SURFACE
    TEST (cairo_svg_surface_restrict_to_version, CAIRO_SURFACE_TYPE_SVG, TRUE),
#endif
#if CAIRO_HAS_XCB_SURFACE
    TEST (cairo_xcb_surface_set_size, CAIRO_SURFACE_TYPE_XCB, TRUE),
    TEST (cairo_xcb_surface_set_drawable, CAIRO_SURFACE_TYPE_XCB, TRUE),
#endif
#if CAIRO_HAS_XLIB_SURFACE
    TEST (cairo_xlib_surface_set_size, CAIRO_SURFACE_TYPE_XLIB, TRUE),
    TEST (cairo_xlib_surface_set_drawable, CAIRO_SURFACE_TYPE_XLIB, TRUE),
    TEST (cairo_xlib_surface_get_display, CAIRO_SURFACE_TYPE_XLIB, FALSE),
    TEST (cairo_xlib_surface_get_drawable, CAIRO_SURFACE_TYPE_XLIB, FALSE),
    TEST (cairo_xlib_surface_get_screen, CAIRO_SURFACE_TYPE_XLIB, FALSE),
    TEST (cairo_xlib_surface_get_visual, CAIRO_SURFACE_TYPE_XLIB, FALSE),
    TEST (cairo_xlib_surface_get_depth, CAIRO_SURFACE_TYPE_XLIB, FALSE),
    TEST (cairo_xlib_surface_get_width, CAIRO_SURFACE_TYPE_XLIB, FALSE),
    TEST (cairo_xlib_surface_get_height, CAIRO_SURFACE_TYPE_XLIB, FALSE),
#endif
};

static cairo_test_status_t
preamble (cairo_test_context_t *ctx)
{
    cairo_surface_t *surface;
    cairo_test_status_t test_status;
    cairo_status_t status_before, status_after;
    unsigned int i;

    /* Test an error surface */
    for (i = 0; i < ARRAY_LENGTH (tests); i++) {
        surface = cairo_image_surface_create (CAIRO_FORMAT_ARGB32, INT_MAX, INT_MAX);
        status_before = cairo_surface_status (surface);
        assert (status_before);

        test_status = tests[i].func (surface);

        status_after = cairo_surface_status (surface);
        cairo_surface_destroy (surface);

        if (test_status != CAIRO_TEST_SUCCESS) {
            cairo_test_log (ctx,
                            "Failed test %s with %d\n",
                            tests[i].name, (int) test_status);
            return test_status;
        }

        if (status_before != status_after) {
            cairo_test_log (ctx,
                            "Failed test %s: Modified surface status from %u (%s) to %u (%s)\n",
                            tests[i].name,
                            status_before, cairo_status_to_string (status_before),
                            status_after, cairo_status_to_string (status_after));
            return CAIRO_TEST_ERROR;
        }
    }

    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
draw (cairo_t *cr, int width, int height)
{
    const cairo_test_context_t *ctx = cairo_test_get_context (cr);
    cairo_surface_t *similar, *target;
    cairo_test_status_t test_status;
    cairo_status_t status;
    unsigned int i;

    target = cairo_get_target (cr);

    /* Test a finished similar surface */
    for (i = 0; i < ARRAY_LENGTH (tests); i++) {
        similar = cairo_surface_create_similar (target,
                                                cairo_surface_get_content (target),
                                                10, 10);
        cairo_surface_finish (similar);
        test_status = tests[i].func (similar);
        status = cairo_surface_status (similar);
        cairo_surface_destroy (similar);

        if (test_status != CAIRO_TEST_SUCCESS) {
            cairo_test_log (ctx,
                            "Failed test %s with %d\n",
                            tests[i].name, (int) test_status);
            return test_status;
        }

        if (tests[i].modifies_surface &&
            strcmp (tests[i].name, "cairo_surface_finish") &&
            strcmp (tests[i].name, "cairo_surface_flush") &&
            status != CAIRO_STATUS_SURFACE_FINISHED) {
            cairo_test_log (ctx,
                            "Failed test %s: Finished surface not set into error state\n",
                            tests[i].name);
            return CAIRO_TEST_ERROR;
        }
    }

    /* Test a normal surface for functions that have the wrong type */
    for (i = 0; i < ARRAY_LENGTH (tests); i++) {
        cairo_status_t desired_status;

        if (tests[i].surface_type == -1)
            continue;
        similar = cairo_surface_create_similar (target,
                                                cairo_surface_get_content (target),
                                                10, 10);
        if (cairo_surface_get_type (similar) == (cairo_surface_type_t) tests[i].surface_type) {
            cairo_surface_destroy (similar);
            continue;
        }

        test_status = tests[i].func (similar);
        status = cairo_surface_status (similar);
        cairo_surface_destroy (similar);

        if (test_status != CAIRO_TEST_SUCCESS) {
            cairo_test_log (ctx,
                            "Failed test %s with %d\n",
                            tests[i].name, (int) test_status);
            return test_status;
        }

        desired_status = tests[i].modifies_surface ? CAIRO_STATUS_SURFACE_TYPE_MISMATCH : CAIRO_STATUS_SUCCESS;
        if (status != desired_status) {
            cairo_test_log (ctx,
                            "Failed test %s: Surface status should be %u (%s), but is %u (%s)\n",
                            tests[i].name,
                            desired_status, cairo_status_to_string (desired_status),
                            status, cairo_status_to_string (status));
            return CAIRO_TEST_ERROR;
        }
    }

    /* 565-compatible gray background */
    cairo_set_source_rgb (cr, 0.51613, 0.55555, 0.51613);
    cairo_paint (cr);

    return CAIRO_TEST_SUCCESS;
}

CAIRO_TEST (api_special_cases,
	    "Check surface functions properly handle wrong surface arguments",
	    "api", /* keywords */
	    NULL, /* requirements */
	    10, 10,
	    preamble, draw)
