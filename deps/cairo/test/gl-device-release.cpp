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

static Window
create_test_window (Display *display,
		    GLXContext glx_context,
		    XVisualInfo *visual_info)
{
    Colormap colormap;
    XSetWindowAttributes window_attributes;
    Window window = None;

    colormap = XCreateColormap (display,
			    RootWindow (display, visual_info->screen),
			    visual_info->visual,
			    AllocNone);
    window_attributes.colormap = colormap;
    window_attributes.border_pixel = 0;
    window = XCreateWindow (display, RootWindow (display, visual_info->screen),
			    -1, -1, 1, 1, 0,
			    visual_info->depth,
			    InputOutput,
			    visual_info->visual,
			    CWBorderPixel | CWColormap, &window_attributes);
    XFreeColormap (display, colormap);

    XFlush (display);
    return window;
}

static cairo_bool_t
multithread_makecurrent_available (Display *display)
{
    const char *extensions = glXQueryExtensionsString (display,
						       DefaultScreen (display));
    return !! strstr(extensions, "GLX_MESA_multithread_makecurrent");
}

static void
draw_to_surface (cairo_surface_t *surface)
{
    cairo_t *cr = cairo_create (surface);
    cairo_paint (cr);
    cairo_destroy (cr);
}

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

    XVisualInfo *visual_info;
    GLXContext glx_context;
    cairo_device_t *device;
    Display *display;
    Window test_window;
    cairo_surface_t *window_surface;
    cairo_bool_t has_multithread_makecurrent;

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

    test_window = create_test_window (display, glx_context, visual_info);
    XFree (visual_info);
    if (test_window == None) {
	XCloseDisplay (display);
	return CAIRO_TEST_UNTESTED;
    }

    has_multithread_makecurrent = multithread_makecurrent_available (display);

    glXMakeCurrent (display, None, None);

    /* Creating the device should actually change the GL context, because of
     * the creation/activation of a dummy window used for texture surfaces. */
    device = cairo_glx_device_create (display, glx_context);

    /* It's important that when multithread_makecurrent isn't available the
     * Cairo backend clears the current context, so that the dummy texture
     * window is not active while the device is unlocked. */
    if (has_multithread_makecurrent) {
	assert (None != glXGetCurrentDrawable ());
	assert (display == glXGetCurrentDisplay ());
	assert (glx_context == glXGetCurrentContext ());
    } else {
	assert (None == glXGetCurrentDrawable ());
	assert (None == glXGetCurrentDisplay ());
	assert (None == glXGetCurrentContext ());
    }

    window_surface = cairo_gl_surface_create_for_window (device, test_window,
							 1, 1);
    assert (cairo_surface_status (window_surface) == CAIRO_STATUS_SUCCESS);

    draw_to_surface (window_surface);
    if (has_multithread_makecurrent) {
	assert (test_window == glXGetCurrentDrawable ());
	assert (display == glXGetCurrentDisplay ());
	assert (glx_context == glXGetCurrentContext ());
    } else {
	assert (None == glXGetCurrentDrawable ());
	assert (None == glXGetCurrentDisplay ());
	assert (None == glXGetCurrentContext ());
    }

    /* In this case, drawing to the window surface will not change the current
     * GL context, so Cairo setting the current surface and context to none. */
    glXMakeCurrent (display, test_window, glx_context);
    draw_to_surface (window_surface);
    assert (test_window == glXGetCurrentDrawable ());
    assert (display == glXGetCurrentDisplay ());
    assert (glx_context == glXGetCurrentContext ());

    /* There should be no context change when destroying the device. */
    cairo_device_destroy (device);
    assert (test_window == glXGetCurrentDrawable ());
    assert (display == glXGetCurrentDisplay ());
    assert (glx_context == glXGetCurrentContext ());

    glXDestroyContext(display, glx_context);
    XDestroyWindow (display, test_window);
    XCloseDisplay (display);

    return CAIRO_TEST_SUCCESS;
}

CAIRO_TEST (gl_device_creation_changes_context,
	    "Test that using the Cairo GL backend leaves the current GL context in the appropriate state",
	    "gl", /* keywords */
	    NULL, /* requirements */
	    0, 0,
	    preamble, NULL)
