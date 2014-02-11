/* Cairo - a vector graphics library with display and print output
 *
 * Copyright © 2009 Chris Wilson
 *
 * This library is free software; you can redistribute it and/or
 * modify it either under the terms of the GNU Lesser General Public
 * License version 2.1 as published by the Free Software Foundation
 * (the "LGPL") or, at your option, under the terms of the Mozilla
 * Public License Version 1.1 (the "MPL"). If you do not alter this
 * notice, a recipient may use your version of this file under either
 * the MPL or the LGPL.
 *
 * You should have received a copy of the LGPL along with this library
 * in the file COPYING-LGPL-2.1; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Suite 500, Boston, MA 02110-1335, USA
 * You should have received a copy of the MPL along with this library
 * in the file COPYING-MPL-1.1
 *
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * This software is distributed on an "AS IS" basis, WITHOUT WARRANTY
 * OF ANY KIND, either express or implied. See the LGPL or the MPL for
 * the specific language governing rights and limitations.
 *
 * The Original Code is the cairo graphics library.
 *
 * The Initial Developer of the Original Code is Chris Wilson.
 */

#include "cairo-boilerplate-private.h"

#include <cairo-cogl.h>
#include <cogl/cogl2-experimental.h>

typedef struct _cogl_closure {
    cairo_device_t *device;
    CoglFramebuffer *fb;
    cairo_surface_t *surface;
} cogl_closure_t;

static const cairo_user_data_key_t cogl_closure_key;

static CoglContext *context = NULL;

static void
_cairo_boilerplate_cogl_cleanup (void *abstract_closure)
{
    cogl_closure_t *closure = abstract_closure;

    cogl_object_unref (closure->fb);

    cairo_device_finish (closure->device);
    cairo_device_destroy (closure->device);

    free (closure);
}

static cairo_surface_t *
_cairo_boilerplate_cogl_create_offscreen_color_surface (const char		*name,
							cairo_content_t		 content,
							double			 width,
							double			 height,
							double			 max_width,
							double			 max_height,
							cairo_boilerplate_mode_t mode,
							void		       **abstract_closure)
{
    cairo_device_t *device;
    CoglTexture *tex;
    CoglHandle offscreen;
    CoglFramebuffer *fb;
    cogl_closure_t *closure;
    cairo_status_t status;

    if (!context)
	context = cogl_context_new (NULL, NULL);

    device = cairo_cogl_device_create (context);
    tex = cogl_texture_new_with_size (width, height,
				      COGL_TEXTURE_NO_SLICING,
				      COGL_PIXEL_FORMAT_BGRA_8888_PRE);
    offscreen = cogl_offscreen_new_to_texture (tex);
    fb = COGL_FRAMEBUFFER (offscreen);

    cogl_framebuffer_allocate (fb, NULL);
    cogl_push_framebuffer (fb);
    cogl_ortho (0, cogl_framebuffer_get_width (fb),
                cogl_framebuffer_get_height (fb), 0,
                -1, 100);
    cogl_pop_framebuffer ();

    closure = malloc (sizeof (cogl_closure_t));
    *abstract_closure = closure;
    closure->device = device;
    closure->fb = fb;
    closure->surface = cairo_cogl_surface_create (device, fb);

    status = cairo_surface_set_user_data (closure->surface,
					  &cogl_closure_key, closure, NULL);
    if (status == CAIRO_STATUS_SUCCESS)
	return closure->surface;

    _cairo_boilerplate_cogl_cleanup (closure);
    return cairo_boilerplate_surface_create_in_error (status);
}

static cairo_surface_t *
_cairo_boilerplate_cogl_create_onscreen_color_surface (const char	       *name,
						       cairo_content_t		content,
						       double			width,
						       double			height,
						       double			max_width,
						       double			max_height,
						       cairo_boilerplate_mode_t mode,
						       void		      **abstract_closure)
{
    cairo_device_t *device;
    CoglOnscreen *onscreen;
    CoglFramebuffer *fb;
    cogl_closure_t *closure;
    cairo_status_t status;

    if (!context)
	context = cogl_context_new (NULL, NULL);

    device = cairo_cogl_device_create (context);
    onscreen = cogl_onscreen_new (context, width, height);
    fb = COGL_FRAMEBUFFER (onscreen);

    cogl_onscreen_show (onscreen);

    cogl_push_framebuffer (fb);
    cogl_ortho (0, cogl_framebuffer_get_width (fb),
                cogl_framebuffer_get_height (fb), 0,
                -1, 100);
    cogl_pop_framebuffer ();

    closure = malloc (sizeof (cogl_closure_t));
    *abstract_closure = closure;
    closure->device = device;
    closure->fb = fb;
    closure->surface = cairo_cogl_surface_create (device, fb);

    status = cairo_surface_set_user_data (closure->surface,
					  &cogl_closure_key, closure, NULL);
    if (status == CAIRO_STATUS_SUCCESS)
	return closure->surface;

    _cairo_boilerplate_cogl_cleanup (closure);
    return cairo_boilerplate_surface_create_in_error (status);
}

static cairo_status_t
_cairo_boilerplate_cogl_finish_onscreen (cairo_surface_t *surface)
{
    cogl_closure_t *closure = cairo_surface_get_user_data (surface, &cogl_closure_key);

    cairo_cogl_surface_end_frame (surface);

    cogl_framebuffer_swap_buffers (closure->fb);

    return CAIRO_STATUS_SUCCESS;
}

static void
_cairo_boilerplate_cogl_synchronize (void *abstract_closure)
{
    cogl_closure_t *closure = abstract_closure;
    cogl_framebuffer_finish (closure->fb);
}

static const cairo_boilerplate_target_t targets[] = {
    {
	"cogl-offscreen-color", "cogl", NULL, NULL,
	CAIRO_SURFACE_TYPE_COGL, CAIRO_CONTENT_COLOR_ALPHA, 1,
	"cairo_cogl_device_create",
	_cairo_boilerplate_cogl_create_offscreen_color_surface,
	cairo_surface_create_similar,
	NULL, NULL,
	_cairo_boilerplate_get_image_surface,
	cairo_surface_write_to_png,
	_cairo_boilerplate_cogl_cleanup,
	_cairo_boilerplate_cogl_synchronize,
        NULL,
	TRUE, FALSE, FALSE
    },
    {
	"cogl-onscreen-color", "cogl", NULL, NULL,
	CAIRO_SURFACE_TYPE_COGL, CAIRO_CONTENT_COLOR_ALPHA, 1,
	"cairo_cogl_device_create",
	_cairo_boilerplate_cogl_create_onscreen_color_surface,
	cairo_surface_create_similar,
	NULL,
	_cairo_boilerplate_cogl_finish_onscreen,
	_cairo_boilerplate_get_image_surface,
	cairo_surface_write_to_png,
	_cairo_boilerplate_cogl_cleanup,
	_cairo_boilerplate_cogl_synchronize,
        NULL,
	TRUE, FALSE, FALSE
    }
};
CAIRO_BOILERPLATE (cogl, targets)
