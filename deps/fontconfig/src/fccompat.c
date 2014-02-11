/*
 * fontconfig/src/fccompat.c
 *
 * Copyright © 2012 Red Hat, Inc.
 *
 * Author(s):
 *  Akira TAGOH
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
#include "config.h"
#endif

#include "fcint.h"

#if HAVE_FCNTL_H
#include <fcntl.h>
#endif
#include <stdarg.h>
#include <stdlib.h>

#ifdef O_CLOEXEC
#define FC_O_CLOEXEC O_CLOEXEC
#else
#define FC_O_CLOEXEC 0
#endif
#ifdef O_LARGEFILE
#define FC_O_LARGEFILE O_LARGEFILE
#else
#define FC_O_LARGEFILE 0
#endif

int
FcOpen(const char *pathname, int flags, ...)
{
    int fd = -1;

    if (flags & O_CREAT)
    {
	va_list ap;
	mode_t mode;

	va_start(ap, flags);
	mode = (mode_t) va_arg(ap, int);
	va_end(ap);

	fd = open(pathname, flags | FC_O_CLOEXEC | FC_O_LARGEFILE, mode);
    }
    else
    {
	fd = open(pathname, flags | FC_O_CLOEXEC | FC_O_LARGEFILE);
    }

    return fd;
}

int
FcMakeTempfile (char *template)
{
    int fd = -1;

#if HAVE_MKOSTEMP
    fd = mkostemp (template, FC_O_CLOEXEC);
#elif HAVE_MKSTEMP
    fd = mkstemp (template);
#  ifdef F_DUPFD_CLOEXEC
    if (fd != -1)
    {
	int newfd = fcntl(fd, F_DUPFD_CLOEXEC);

	close(fd);
	fd = newfd;
    }
#  elif defined(FD_CLOEXEC)
    if (fd != -1)
    {
	fcntl(fd, F_SETFD, fcntl(fd, F_GETFD) | FD_CLOEXEC);
    }
#  endif
#elif HAVE__MKTEMP_S
   if (_mktemp_s(template, strlen(template) + 1) != 0)
       return -1;
   fd = FcOpen(template, O_RDWR | O_EXCL | O_CREAT, 0600);
#else
#error no secure functions to create a temporary file
#endif

    return fd;
}
