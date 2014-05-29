/*
 * Copyright © 2005 Red Hat, Inc.
 * Copyright © 2005 Emmanuel Pacaud <emmanuel.pacaud@free.fr>
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
 * Author: Kristian Høgsberg <krh@redhat.com>
 *	   Emmanuel Pacaud <emmanuel.pacaud@free.fr>
 */

#include <stdlib.h>
#include <stdio.h>
#include <gdk/gdk.h>
#include <gdk/gdkpixbuf.h>
#include <librsvg/rsvg.h>

#define FAIL(msg)							\
    do { fprintf (stderr, "FAIL: %s\n", msg); exit (-1); } while (0)

int main (int argc, char *argv[])
{
    GError *error = NULL;
    GdkPixbuf *pixbuf;
    const char *filename = argv[1];
    const char *output_filename = argv[2];

    if (argc != 3)
	FAIL ("usage: svg2png input_file.svg output_file.png");

    g_type_init ();

    error = NULL;

    rsvg_set_default_dpi (72.0);
    pixbuf = rsvg_pixbuf_from_file (filename, &error);
    if (error != NULL)
	FAIL (error->message);

    gdk_pixbuf_save (pixbuf, output_filename, "png", &error, NULL);
    if (error != NULL)
	FAIL (error->message);

    g_object_unref (pixbuf);
    return 0;
}
