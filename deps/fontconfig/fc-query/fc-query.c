/*
 * fontconfig/fc-query/fc-query.c
 *
 * Copyright © 2003 Keith Packard
 * Copyright © 2008 Red Hat, Inc.
 * Red Hat Author(s): Behdad Esfahbod
 *
 * Permission to use, copy, modify, distribute, and sell this software and its
 * documentation for any purpose is hereby granted without fee, provided that
 * the above copyright notice appear in all copies and that both that
 * copyright notice and this permission notice appear in supporting
 * documentation, and that the name of the author(s) not be used in
 * advertising or publicity pertaining to distribution of the software without
 * specific, written prior permission.  The authors make no
 * representations about the suitability of this software for any purpose.  It
 * is provided "as is" without express or implied warranty.
 *
 * THE AUTHOR(S) DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE,
 * INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS, IN NO
 * EVENT SHALL THE AUTHOR(S) BE LIABLE FOR ANY SPECIAL, INDIRECT OR
 * CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
 * DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
 * TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

#ifdef HAVE_CONFIG_H
#include <config.h>
#else
#ifdef linux
#define HAVE_GETOPT_LONG 1
#endif
#define HAVE_GETOPT 1
#endif

#include <fontconfig/fontconfig.h>
#include <fontconfig/fcfreetype.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

#ifndef HAVE_GETOPT
#define HAVE_GETOPT 0
#endif
#ifndef HAVE_GETOPT_LONG
#define HAVE_GETOPT_LONG 0
#endif

#if HAVE_GETOPT_LONG
#undef  _GNU_SOURCE
#define _GNU_SOURCE
#include <getopt.h>
static const struct option longopts[] = {
    {"index", 1, 0, 'i'},
    {"format", 1, 0, 'f'},
    {"version", 0, 0, 'V'},
    {"help", 0, 0, 'h'},
    {NULL,0,0,0},
};
#else
#if HAVE_GETOPT
extern char *optarg;
extern int optind, opterr, optopt;
#endif
#endif

static void
usage (char *program, int error)
{
    FILE *file = error ? stderr : stdout;
#if HAVE_GETOPT_LONG
    fprintf (file, "usage: %s [-Vh] [-i index] [-f FORMAT] [--index index] [--format FORMAT] [--version] [--help] font-file...\n",
	     program);
#else
    fprintf (file, "usage: %s [-Vh] [-i index] [-f FORMAT] font-file...\n",
	     program);
#endif
    fprintf (file, "Query font files and print resulting pattern(s)\n");
    fprintf (file, "\n");
#if HAVE_GETOPT_LONG
    fprintf (file, "  -i, --index INDEX    display the INDEX face of each font file only\n");
    fprintf (file, "  -f, --format=FORMAT  use the given output format\n");
    fprintf (file, "  -V, --version        display font config version and exit\n");
    fprintf (file, "  -h, --help           display this help and exit\n");
#else
    fprintf (file, "  -i INDEX   (index)   display the INDEX face of each font file only\n");
    fprintf (file, "  -f FORMAT  (format)  use the given output format\n");
    fprintf (file, "  -V         (version) display font config version and exit\n");
    fprintf (file, "  -h         (help)    display this help and exit\n");
#endif
    exit (error);
}

int
main (int argc, char **argv)
{
    int		index_set = 0;
    int		set_index = 0;
    FcChar8     *format = NULL;
    int		err = 0;
    int		i;
#if HAVE_GETOPT_LONG || HAVE_GETOPT
    int		c;

#if HAVE_GETOPT_LONG
    while ((c = getopt_long (argc, argv, "i:f:Vh", longopts, NULL)) != -1)
#else
    while ((c = getopt (argc, argv, "i:f:Vh")) != -1)
#endif
    {
	switch (c) {
	case 'i':
	    index_set = 1;
	    set_index = atoi (optarg);
	    break;
	case 'f':
	    format = (FcChar8 *) strdup (optarg);
	    break;
	case 'V':
	    fprintf (stderr, "fontconfig version %d.%d.%d\n",
		     FC_MAJOR, FC_MINOR, FC_REVISION);
	    exit (0);
	case 'h':
	    usage (argv[0], 0);
	default:
	    usage (argv[0], 1);
	}
    }
    i = optind;
#else
    i = 1;
#endif

    if (i == argc)
	usage (argv[0], 1);

    for (; i < argc; i++)
    {
	int index;
	int count = 0;

	index = set_index;

	do {
	    FcPattern *pat;

	    pat = FcFreeTypeQuery ((FcChar8 *) argv[i], index, NULL, &count);
	    if (pat)
	    {
		if (format)
		{
		    FcChar8 *s;

		    s = FcPatternFormat (pat, format);
		    if (s)
		    {
			printf ("%s", s);
			FcStrFree (s);
		    }
		}
		else
		{
		    FcPatternPrint (pat);
		}

		FcPatternDestroy (pat);
	    }
	    else
	    {
		fprintf (stderr, "Can't query face %d of font file %s\n",
			 index, argv[i]);
		err = 1;
	    }

	    index++;
	} while (!index_set && index < count);
    }

    FcFini ();
    return err;
}
