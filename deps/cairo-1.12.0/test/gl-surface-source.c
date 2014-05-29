/*
 * Copyright © 2008 Chris Wilson
 * Copyright © 2010 Intel Corporation
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
 * CHRIS WILSON DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS
 * SOFTWARE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS, IN NO EVENT SHALL CHRIS WILSON BE LIABLE FOR ANY SPECIAL,
 * INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
 * IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * Author: Chris Wilson <chris@chris-wilson.co.uk>
 */

#include "cairo-test.h"
#include <cairo-gl.h>

#include "surface-source.c"

struct closure {
    Display *dpy;
    GLXContext ctx;
};

static void
cleanup (void *data)
{
    struct closure *arg = data;

    glXDestroyContext (arg->dpy, arg->ctx);
    XCloseDisplay (arg->dpy);

    free (arg);
}

static cairo_surface_t *
create_source_surface (int size)
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
    XVisualInfo *visinfo;
    GLXContext ctx;
    struct closure *arg;
    cairo_device_t *device;
    cairo_surface_t *surface;
    Display *dpy;

    dpy = XOpenDisplay (NULL);
    if (dpy == NULL)
	return NULL;

    visinfo = glXChooseVisual (dpy, DefaultScreen (dpy), rgba_attribs);
    if (visinfo == NULL) {
	XCloseDisplay (dpy);
	return NULL;
    }

    ctx = glXCreateContext (dpy, visinfo, NULL, True);
    XFree (visinfo);

    if (ctx == NULL) {
	XCloseDisplay (dpy);
	return NULL;
    }

    arg = xmalloc (sizeof (struct closure));
    arg->dpy = dpy;
    arg->ctx = ctx;
    device = cairo_glx_device_create (dpy, ctx);
    if (cairo_device_set_user_data (device,
				    (cairo_user_data_key_t *) cleanup,
				    arg,
				    cleanup))
    {
	cleanup (arg);
	return NULL;
    }

    surface = cairo_gl_surface_create (device,
				       CAIRO_CONTENT_COLOR_ALPHA,
				       size, size);
    cairo_device_destroy (device);

    return surface;
}

CAIRO_TEST (gl_surface_source,
	    "Test using a GL surface as the source",
	    "source", /* keywords */
	    NULL, /* requirements */
	    SIZE, SIZE,
	    preamble, draw)
