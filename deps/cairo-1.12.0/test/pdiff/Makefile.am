include $(top_srcdir)/build/Makefile.am.common

EXTRA_PROGRAMS += perceptualdiff
EXTRA_DIST += gpl.txt

noinst_LTLIBRARIES = libpdiff.la
libpdiff_la_SOURCES = 		\
	pdiff.h			\
	lpyramid.c		\
	lpyramid.h		\
	pdiff.c

perceptualdiff_SOURCES =	\
	args.c			\
	args.h			\
	perceptualdiff.c

AM_CPPFLAGS = -I$(top_srcdir)/src -I$(top_builddir)/src $(CAIRO_CFLAGS)
LDADD = libpdiff.la $(top_builddir)/src/libcairo.la
