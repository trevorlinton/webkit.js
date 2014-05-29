/*
 * Copyright 2010 Intel Corporation
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Author: Chris Wilson <chris@chris-wilson.co.uk>
 */

#include "cairo-test.h"

/* Test the fidelity of the rasterisation, because Cairo is my favourite
 * driver test suite.
 */

#define GENERATE_REFERENCE 0

#define WIDTH 256
#define HEIGHT 40

#include "../src/cairo-fixed-type-private.h"
#define PRECISION (1 << CAIRO_FIXED_FRAC_BITS)

/* XXX beware multithreading! */
static uint32_t state;

static uint32_t
hars_petruska_f54_1_random (void)
{
#define rol(x,k) ((x << k) | (x >> (32-k)))
    return state = (state ^ rol (state, 5) ^ rol (state, 24)) + 0x37798849;
#undef rol
}

static double
random_offset (int range, int precise)
{
    double x = hars_petruska_f54_1_random() / (double) UINT32_MAX * range / WIDTH;
    if (precise)
	x = floor (x * PRECISION) / PRECISION;
    return x;
}

static cairo_test_status_t
rectangles (cairo_t *cr, int width, int height)
{
    int x, y, channel;

    state = 0x12345678;

    cairo_set_source_rgb (cr, 0.0, 0.0, 0.0);
    cairo_paint (cr);

#if GENERATE_REFERENCE
    for (x = 0; x < WIDTH; x++) {
	cairo_set_source_rgba (cr, 1, 1, 1, x * x * 1.0 / (WIDTH * WIDTH));
	cairo_rectangle (cr, x, 0, 1, HEIGHT);
	cairo_fill (cr);
    }
#else
    cairo_set_operator (cr, CAIRO_OPERATOR_ADD);
    for (channel = 0; channel < 3; channel++) {
	switch (channel) {
	default:
	case 0: cairo_set_source_rgb (cr, 1.0, 0.0, 0.0); break;
	case 1: cairo_set_source_rgb (cr, 0.0, 1.0, 0.0); break;
	case 2: cairo_set_source_rgb (cr, 0.0, 0.0, 1.0); break;
	}

	for (x = 0; x < WIDTH; x++) {
	    for (y = 0; y < HEIGHT; y++) {
		double dx = random_offset (WIDTH - x, TRUE);
		double dy = random_offset (WIDTH - x, TRUE);
		cairo_rectangle (cr, x + dx, y + dy, x / (double) WIDTH, x / (double) WIDTH);
	    }
	}
	cairo_fill (cr);
    }
#endif

    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
intersecting_quads (cairo_t *cr, int width, int height)
{
    int x, y, channel;

    state = 0x12345678;

    cairo_set_source_rgb (cr, 0.0, 0.0, 0.0);
    cairo_paint (cr);

#if GENERATE_REFERENCE
    for (x = 0; x < WIDTH; x++) {
	cairo_set_source_rgba (cr, 1, 1, 1, x * x * 0.5 / (WIDTH * WIDTH));
	cairo_rectangle (cr, x, 0, 1, HEIGHT);
	cairo_fill (cr);
    }
#else
    cairo_set_operator (cr, CAIRO_OPERATOR_ADD);
    for (channel = 0; channel < 3; channel++) {
	switch (channel) {
	default:
	case 0: cairo_set_source_rgb (cr, 1.0, 0.0, 0.0); break;
	case 1: cairo_set_source_rgb (cr, 0.0, 1.0, 0.0); break;
	case 2: cairo_set_source_rgb (cr, 0.0, 0.0, 1.0); break;
	}

	for (x = 0; x < WIDTH; x++) {
	    double step = x / (double) WIDTH;
	    for (y = 0; y < HEIGHT; y++) {
		double dx = random_offset (WIDTH - x, TRUE);
		double dy = random_offset (WIDTH - x, TRUE);
		cairo_move_to (cr, x + dx, y + dy);
		cairo_rel_line_to (cr, step, step);
		cairo_rel_line_to (cr, 0, -step);
		cairo_rel_line_to (cr, -step, step);
		cairo_close_path (cr);
	    }
	}
	cairo_fill (cr);
    }
#endif

    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
intersecting_triangles (cairo_t *cr, int width, int height)
{
    int x, y, channel;

    state = 0x12345678;

    cairo_set_source_rgb (cr, 0.0, 0.0, 0.0);
    cairo_paint (cr);

#if GENERATE_REFERENCE
    for (x = 0; x < WIDTH; x++) {
	cairo_set_source_rgba (cr, 1, 1, 1, x * 0.75 / WIDTH);
	cairo_rectangle (cr, x, 0, 1, HEIGHT);
	cairo_fill (cr);
    }
#else
    cairo_set_operator (cr, CAIRO_OPERATOR_ADD);
    for (channel = 0; channel < 3; channel++) {
	switch (channel) {
	default:
	case 0: cairo_set_source_rgb (cr, 1.0, 0.0, 0.0); break;
	case 1: cairo_set_source_rgb (cr, 0.0, 1.0, 0.0); break;
	case 2: cairo_set_source_rgb (cr, 0.0, 0.0, 1.0); break;
	}

	for (x = 0; x < WIDTH; x++) {
	    double step = x / (double) WIDTH;
	    for (y = 0; y < HEIGHT; y++) {
		double dx = random_offset (WIDTH - x, TRUE);
		double dy = random_offset (WIDTH - x, TRUE);

		/* left */
		cairo_move_to (cr, x + dx, y + dy);
		cairo_rel_line_to (cr, 0, step);
		cairo_rel_line_to (cr, step, 0);
		cairo_close_path (cr);

		/* right, mirrored */
		cairo_move_to (cr, x + dx + step, y + dy + step);
		cairo_rel_line_to (cr, 0, -step);
		cairo_rel_line_to (cr, -step, step);
		cairo_close_path (cr);
	    }
	}
	cairo_fill (cr);
    }
#endif

    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
triangles (cairo_t *cr, int width, int height)
{
    int x, y, channel;

    state = 0x12345678;

    cairo_set_source_rgb (cr, 0.0, 0.0, 0.0);
    cairo_paint (cr);

#if GENERATE_REFERENCE
    for (x = 0; x < WIDTH; x++) {
	cairo_set_source_rgba (cr, 1, 1, 1, x * x * 0.5 / (WIDTH * WIDTH));
	cairo_rectangle (cr, x, 0, 1, HEIGHT);
	cairo_fill (cr);
    }
#else
    cairo_set_operator (cr, CAIRO_OPERATOR_ADD);
    for (channel = 0; channel < 3; channel++) {
	switch (channel) {
	default:
	case 0: cairo_set_source_rgb (cr, 1.0, 0.0, 0.0); break;
	case 1: cairo_set_source_rgb (cr, 0.0, 1.0, 0.0); break;
	case 2: cairo_set_source_rgb (cr, 0.0, 0.0, 1.0); break;
	}

	for (x = 0; x < WIDTH; x++) {
	    for (y = 0; y < HEIGHT; y++) {
		double dx = random_offset (WIDTH - x, TRUE);
		double dy = random_offset (WIDTH - x, TRUE);
		cairo_move_to (cr, x + dx, y + dy);
		cairo_rel_line_to (cr, x / (double) WIDTH, 0);
		cairo_rel_line_to (cr, 0, x / (double) WIDTH);
		cairo_close_path (cr);
	    }
	}
	cairo_fill (cr);
    }
#endif

    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
column_triangles (cairo_t *cr, int width, int height)
{
    int x, y, i, channel;

    state = 0x12345678;

    cairo_set_source_rgb (cr, 0.0, 0.0, 0.0);
    cairo_paint (cr);

#if GENERATE_REFERENCE
    for (x = 0; x < WIDTH; x++) {
	cairo_set_source_rgba (cr, 1, 1, 1, x * 0.5 / WIDTH);
	cairo_rectangle (cr, x, 0, 1, HEIGHT);
	cairo_fill (cr);
    }
#else
    cairo_set_operator (cr, CAIRO_OPERATOR_ADD);
    for (channel = 0; channel < 3; channel++) {
	switch (channel) {
	default:
	case 0: cairo_set_source_rgb (cr, 1.0, 0.0, 0.0); break;
	case 1: cairo_set_source_rgb (cr, 0.0, 1.0, 0.0); break;
	case 2: cairo_set_source_rgb (cr, 0.0, 0.0, 1.0); break;
	}

	for (x = 0; x < WIDTH; x++) {
	    double step = x / (double) (2 * WIDTH);
	    for (y = 0; y < HEIGHT; y++) {
		for (i = 0; i < PRECISION; i++) {
		    double dy = random_offset (WIDTH - x, FALSE);

		    /*
		     * We want to test some sharing of edges to further
		     * stress the rasterisers, so instead of using one
		     * tall triangle, it is split into two, with vertical
		     * edges on either side that may co-align with their
		     * neighbours:
		     *
		     *  s ---  .      ---
		     *  t  |   |\      |
		     *  e  |   | \     |
		     *  p ---  ....    |  2 * step = x / WIDTH
		     *          \ |    |
		     *           \|    |
		     *            .   ---
		     *        |---|
		     *     1 / PRECISION
		     *
		     * Each column contains two triangles of width one quantum and
		     * total height of (x / WIDTH), thus the total area covered by all
		     * columns in each pixel is .5 * (x / WIDTH).
		     */

		    cairo_move_to (cr, x + i / (double) PRECISION, y + dy);
		    cairo_rel_line_to (cr, 0, step);
		    cairo_rel_line_to (cr, 1 / (double) PRECISION, step);
		    cairo_rel_line_to (cr, 0, -step);
		    cairo_close_path (cr);
		}
		cairo_fill (cr); /* do these per-pixel due to the extra volume of edges */
	    }
	}
    }
#endif

    return CAIRO_TEST_SUCCESS;
}

static cairo_test_status_t
row_triangles (cairo_t *cr, int width, int height)
{
    int x, y, i, channel;

    state = 0x12345678;

    cairo_set_source_rgb (cr, 0.0, 0.0, 0.0);
    cairo_paint (cr);

#if GENERATE_REFERENCE
    for (x = 0; x < WIDTH; x++) {
	cairo_set_source_rgba (cr, 1, 1, 1, x * 0.5 / WIDTH);
	cairo_rectangle (cr, x, 0, 1, HEIGHT);
	cairo_fill (cr);
    }
#else
    cairo_set_operator (cr, CAIRO_OPERATOR_ADD);
    for (channel = 0; channel < 3; channel++) {
	switch (channel) {
	default:
	case 0: cairo_set_source_rgb (cr, 1.0, 0.0, 0.0); break;
	case 1: cairo_set_source_rgb (cr, 0.0, 1.0, 0.0); break;
	case 2: cairo_set_source_rgb (cr, 0.0, 0.0, 1.0); break;
	}

	for (x = 0; x < WIDTH; x++) {
	    double step = x / (double) (2 * WIDTH);
	    for (y = 0; y < HEIGHT; y++) {
		for (i = 0; i < PRECISION; i++) {
		    double dx = random_offset (WIDTH - x, FALSE);

		    /* See column_triangles() for a transposed description
		     * of this geometry.
		     */

		    cairo_move_to (cr, x + dx, y + i / (double) PRECISION);
		    cairo_rel_line_to (cr,  step, 0);
		    cairo_rel_line_to (cr,  step, 1 / (double) PRECISION);
		    cairo_rel_line_to (cr, -step, 0);
		    cairo_close_path (cr);
		}
		cairo_fill (cr); /* do these per-pixel due to the extra volume of edges */
	    }
	}
    }
#endif

    return CAIRO_TEST_SUCCESS;
}

CAIRO_TEST (coverage_rectangles,
	    "Check the fidelity of the rasterisation.",
	    NULL, /* keywords */
	    "target=raster slow", /* requirements */
	    WIDTH, HEIGHT,
	    NULL, rectangles)

CAIRO_TEST (coverage_intersecting_quads,
	    "Check the fidelity of the rasterisation.",
	    NULL, /* keywords */
	    "target=raster slow", /* requirements */
	    WIDTH, HEIGHT,
	    NULL, intersecting_quads)

CAIRO_TEST (coverage_intersecting_triangles,
	    "Check the fidelity of the rasterisation.",
	    NULL, /* keywords */
	    "target=raster slow", /* requirements */
	    WIDTH, HEIGHT,
	    NULL, intersecting_triangles)
CAIRO_TEST (coverage_row_triangles,
	    "Check the fidelity of the rasterisation.",
	    NULL, /* keywords */
	    "target=raster slow", /* requirements */
	    WIDTH, HEIGHT,
	    NULL, row_triangles)
CAIRO_TEST (coverage_column_triangles,
	    "Check the fidelity of the rasterisation.",
	    NULL, /* keywords */
	    "target=raster slow", /* requirements */
	    WIDTH, HEIGHT,
	    NULL, column_triangles)
CAIRO_TEST (coverage_triangles,
	    "Check the fidelity of the rasterisation.",
	    NULL, /* keywords */
	    "target=raster slow", /* requirements */
	    WIDTH, HEIGHT,
	    NULL, triangles)
