/*
 * Copyright © 2012 Igalia S.L.
 * Copyright © 2009 Eric Anholt
 * Copyright © 2009 Chris Wilson
 * Copyright © 2005 Red Hat, Inc
 *
 * Permission to use, copy, modify, distribute, and sell this software
 * and its documentation for any purpose is hereby granted without
 * fee, provided that the above copyright notice appear in all copies
 * and that both that copyright notice and this permission notice
 * appear in supporting documentation, and that the name of
 * Chris Wilson not be used in advertising or publicity pertaining to
 * distribution of the software without specific, written prior
 * permission. Chris Wilson makes no representations about the
 * suitability of this software for any purpose.  It is provided "as
 * is" without express or implied warranty.
 *
 * IGALIA S.L. DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS
 * SOFTWARE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS, IN NO EVENT SHALL CHRIS WILSON BE LIABLE FOR ANY SPECIAL,
 * INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
 * IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * Author: Martin Robinson <mrobinson@igalia.com>
 */

#include "cairo-test.h"
#include <cairo-gl.h>
#include <assert.h>
#include <limits.h>

static cairo_test_status_t
preamble (cairo_test_context_t *test_ctx)
{
    int rgba_attribs[] = {
	GLX_RGBA,
	GLX_RED_SIZE, 1,
	GLX_GREEN_SIZE, 1,
	GLX_BLUE_SIZE, 1,
	GLX_ALPHA_SIZE, 1,
	GLX_DOUBLEBUFFER,
	None
    };

    Display *display;
    XVisualInfo *visual_info;
    GLXContext glx_context;
    cairo_device_t *device;
    cairo_surface_t *oversized_surface;
    cairo_test_status_t test_status = CAIRO_TEST_SUCCESS;

    display = XOpenDisplay (NULL);
    if (display == NULL)
	return CAIRO_TEST_UNTESTED;

    visual_info = glXChooseVisual (display, DefaultScreen (display), rgba_attribs);
    if (visual_info == NULL) {
	XCloseDisplay (display);
	return CAIRO_TEST_UNTESTED;
    }

    glx_context = glXCreateContext (display, visual_info, NULL, True);
    if (glx_context == NULL) {
	XCloseDisplay (display);
	return CAIRO_TEST_UNTESTED;
    }

    device = cairo_glx_device_create (display, glx_context);

    oversized_surface = cairo_gl_surface_create (device, CAIRO_CONTENT_COLOR_ALPHA, INT_MAX, INT_MAX);
    if (cairo_surface_status (oversized_surface) != CAIRO_STATUS_INVALID_SIZE)
        test_status = CAIRO_TEST_FAILURE;

    cairo_device_destroy (device);
    glXDestroyContext(display, glx_context);
    XCloseDisplay (display);

    return test_status;
}

CAIRO_TEST (gl_oversized_surface,
	    "Test that creating a surface beyond texture limits results in an error surface",
	    "gl", /* keywords */
	    NULL, /* requirements */
	    0, 0,
	    preamble, NULL)
