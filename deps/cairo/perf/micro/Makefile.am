include $(top_srcdir)/build/Makefile.am.common

include $(top_srcdir)/perf/micro/Makefile.sources

noinst_LTLIBRARIES = libcairo-perf-micro.la
libcairo_perf_micro_la_SOURCES = \
	$(libcairo_perf_micro_sources)	\
	$(libcairo_perf_micro_headers)

AM_CPPFLAGS =				\
	-I$(srcdir)			\
	-I$(top_srcdir)/boilerplate	\
	-I$(top_srcdir)/src		\
	-I$(top_srcdir)/perf		\
	-I$(top_builddir)/src		\
	$(CAIRO_CFLAGS)
