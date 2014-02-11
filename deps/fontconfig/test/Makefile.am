check_SCRIPTS=run-test.sh
TESTS_ENVIRONMENT=src=${srcdir} EXEEXT=${EXEEXT} sh
TESTS=run-test.sh

TESTDATA=4x6.pcf 8x16.pcf out.expected fonts.conf.in

if HAVE_PTHREAD
check_PROGRAMS = test-pthread
noinst_PROGRAMS = $(check_PROGRAMS)
test_pthread_LDADD = $(top_builddir)/src/libfontconfig.la
# We don't enable this test by default because it will require config and fonts
# to meaningfully test anything, and we are not installed yet.
#TESTS += test-pthread
endif

EXTRA_DIST=$(check_SCRIPTS) $(TESTDATA)

CLEANFILES=

-include $(top_srcdir)/git.mk
