include $(top_srcdir)/build/Makefile.am.common

include $(top_srcdir)/perf/Makefile.sources

AM_CPPFLAGS =					\
	-I$(srcdir)				\
	-I$(top_srcdir)/boilerplate		\
	-I$(top_srcdir)/src			\
	-I$(top_srcdir)/util/cairo-missing	\
	-I$(top_srcdir)/util/cairo-script	\
	-I$(top_builddir)/src			\
	$(CAIRO_CFLAGS)

AM_LDFLAGS = $(CAIRO_LDFLAGS)

SUBDIRS = micro

noinst_PROGRAMS = \
	cairo-analyse-trace \
	cairo-perf-trace \
	cairo-perf-micro \
	$(NULL)

EXTRA_PROGRAMS += \
	cairo-analyse-trace \
	cairo-perf-micro \
	cairo-perf-trace \
	cairo-perf-diff-files \
	cairo-perf-print \
	cairo-perf-chart \
	cairo-perf-compare-backends \
	cairo-perf-graph-files \
	$(NULL)
EXTRA_DIST += cairo-perf-diff COPYING
EXTRA_LTLIBRARIES += libcairoperf.la

LDADD = libcairoperf.la \
	$(top_builddir)/boilerplate/libcairoboilerplate.la \
	$(top_builddir)/src/libcairo.la

cairo_perf_micro_SOURCES = $(cairo_perf_micro_sources)
cairo_perf_micro_LDADD = \
	$(top_builddir)/perf/micro/libcairo-perf-micro.la \
	$(LDADD)
cairo_perf_micro_DEPENDENCIES = \
	$(top_builddir)/perf/micro/libcairo-perf-micro.la \
	$(LDADD)

libcairoperf_la_SOURCES = \
	$(libcairoperf_sources)	\
	$(libcairoperf_external_sources) \
	$(libcairoperf_headers) \
	$(NULL)

cairo_analyse_trace_SOURCES = \
	$(cairo_analyse_trace_sources)	\
	$(cairo_analyse_trace_external_sources)
cairo_analyse_trace_LDADD =		\
	$(top_builddir)/util/cairo-script/libcairo-script-interpreter.la \
	$(top_builddir)/util/cairo-missing/libcairo-missing.la \
	$(LDADD)
cairo_analyse_trace_DEPENDENCIES = \
	$(top_builddir)/util/cairo-script/libcairo-script-interpreter.la \
	$(top_builddir)/util/cairo-missing/libcairo-missing.la \
	$(LDADD)

cairo_perf_trace_SOURCES = \
	$(cairo_perf_trace_sources)	\
	$(cairo_perf_trace_external_sources)
cairo_perf_trace_LDADD =		\
	$(top_builddir)/util/cairo-script/libcairo-script-interpreter.la \
	$(top_builddir)/util/cairo-missing/libcairo-missing.la \
	$(LDADD)
cairo_perf_trace_DEPENDENCIES = \
	$(top_builddir)/util/cairo-script/libcairo-script-interpreter.la \
	$(top_builddir)/util/cairo-missing/libcairo-missing.la \
	$(LDADD)

cairo_perf_diff_files_SOURCES =	$(cairo_perf_diff_files_sources)
cairo_perf_print_SOURCES = $(cairo_perf_print_sources)
cairo_perf_chart_SOURCES = $(cairo_perf_chart_sources)
cairo_perf_compare_backends_SOURCES = $(cairo_perf_compare_backends_sources)

cairo_perf_graph_files_SOURCES = \
	$(cairo_perf_graph_files_sources)	\
	$(cairo_perf_graph_files_headers)
cairo_perf_graph_files_CFLAGS = @gtk_CFLAGS@
cairo_perf_graph_files_LDADD = @gtk_LIBS@ $(LDADD)

# Install rules to rebuild the libraries and add explicit dependencies
$(top_builddir)/perf/micro/libcairo-perf-micro.la:
	cd $(top_builddir)/perf/micro && $(MAKE) $(AM_MAKEFLAGS) libcairo-perf-micro.la

$(top_builddir)/boilerplate/libcairoboilerplate.la: $(top_builddir)/src/libcairo.la
	cd $(top_builddir)/boilerplate && $(MAKE) $(AM_MAKEFLAGS) libcairoboilerplate.la

$(top_builddir)/src/libcairo.la:
	cd $(top_builddir)/src && $(MAKE) $(AM_MAKEFLAGS) libcairo.la

$(top_builddir)/util/cairo-script/libcairo-script-interpreter.la: $(top_builddir)/src/libcairo.la
	cd $(top_builddir)/util/cairo-script && $(MAKE) $(AM_MAKEFLAGS) libcairo-script-interpreter.la


# Do a funny transition of CAIRO_TEST_TARGET through TARGETS such that
# one can limit tested targets both through CAIRO_TEST_TARGET env var
# and TARGETS make var on the command line.  Same for the rest.
TARGETS = $(CAIRO_TEST_TARGET)
TARGETS_EXCLUDE = $(CAIRO_TEST_TARGET_EXCLUDE)
ITERS = $(CAIRO_PERF_ITERATIONS)

CAIRO_PERF_ENVIRONMENT = CAIRO_PERF_ITERATIONS="$(ITERS)" CAIRO_TEST_TARGET="$(TARGETS)" CAIRO_TEST_TARGET_EXCLUDE="$(TARGETS_EXCLUDE)"

perf: cairo-perf-micro$(EXEEXT) cairo-perf-trace$(EXEEXT)
	-$(CAIRO_PERF_ENVIRONMENT) ./cairo-perf-micro$(EXEEXT)
	-$(CAIRO_PERF_ENVIRONMENT) ./cairo-perf-trace$(EXEEXT)

html-local: index.html

perf-tag.html : cairo-perf-micro${EXEEXT}
	$(CAIRO_PERF_ENVIRONMENT) ./cairo-perf-diff -t -h $@ `git describe --abbrev=0` HEAD
perf-commit.html : cairo-perf-micro${EXEEXT}
	$(CAIRO_PERF_ENVIRONMENT) ./cairo-perf-diff -t -h $@ HEAD

# Summarise changes in index.html, with details in links
index.html: perf-tag.html perf-commit.html
	echo "<html><head><title>Performance Changes</title></head><body>Against <a href=\"perf-tag.html\">"`git describe --abbrev=0`"</a><br><a href=\"perf-commit.html\">Latest commit</a></body>" > $@

EXTRA_VALGRIND_FLAGS = $(CAIRO_EXTRA_VALGRIND_FLAGS)
VALGRIND_MEMCHECK_FLAGS = \
	--tool=memcheck \
	--suppressions=$(top_srcdir)/test/.valgrind-suppressions \
	--leak-check=yes --show-reachable=yes
VALGRIND_CALLGRIND_FLAGS = \
	--tool=callgrind
CLEANFILES += \
	valgrind-log \
	callgrind.out.* \
	index.html

perf-valgrind:
	$(MAKE) $(AM_MAKEFLAGS) perf \
	    $(top_builddir)/libtool --mode=execute \
	    valgrind $(VALGRIND_MEMCHECK_FLAGS) $(EXTRA_VALGRIND_FLAGS)' \
	    | tee valgrind-log

perf-callgrind:
	$(MAKE) $(AM_MAKEFLAGS) perf \
	    $(top_builddir)/libtool --mode=execute \
	    valgrind $(VALGRIND_CALLGRIND_FLAGS) $(EXTRA_VALGRIND_FLAGS)'

.PHONY: perf perf-valgrind perf-callgrind

EXTRA_DIST += Makefile.win32
