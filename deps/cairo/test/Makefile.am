include $(top_srcdir)/build/Makefile.am.common

include $(top_srcdir)/test/Makefile.sources

SUBDIRS=pdiff .

# Then we have a collection of tests that are only run if certain
# features are compiled into cairo
if HAVE_REAL_PTHREAD
test_sources += $(pthread_test_sources)
endif

if CAIRO_HAS_FT_FONT
if CAIRO_HAS_FC_FONT
test_sources += $(ft_font_test_sources)
endif
endif

if CAIRO_HAS_GL_SURFACE
test_sources += $(gl_surface_test_sources)
endif

# Need to add quartz-surface-source
if CAIRO_HAS_QUARTZ_SURFACE
test_sources += $(quartz_surface_test_sources)
endif

if CAIRO_HAS_PDF_SURFACE
test_sources += $(pdf_surface_test_sources)
endif

if CAIRO_HAS_PS_SURFACE
test_sources += $(ps_surface_test_sources)
endif

if CAIRO_HAS_SVG_SURFACE
test_sources += $(svg_surface_test_sources)
endif

if CAIRO_HAS_TEST_SURFACES
test_sources += $(test_fallback16_surface_test_sources)
endif

if CAIRO_HAS_XCB_SURFACE
test_sources += $(xcb_surface_test_sources)
endif

if CAIRO_HAS_XLIB_SURFACE
test_sources += $(xlib_surface_test_sources)
endif

if CAIRO_HAS_XLIB_XRENDER_SURFACE
test_sources += $(xlib_xrender_surface_test_sources)
endif

if CAIRO_HAS_MULTI_PAGE_SURFACES
test_sources += $(multi_page_surface_test_sources)
endif

# Include fallback-resolution (once!) if we have any of the vector surfaces
if BUILD_ANY2PPM
if CAIRO_HAS_SVG_SURFACE
test = $(fallback_resolution_test_sources)
endif
if CAIRO_HAS_PDF_SURFACE
test = $(fallback_resolution_test_sources)
endif
if CAIRO_HAS_PS_SURFACE
test = $(fallback_resolution_test_sources)
endif
endif
test_sources += $(test)

noinst_PROGRAMS = cairo-test-suite$(EXEEXT) # always build
noinst_SCRIPTS = check-refs.sh

TESTS += cairo-test-suite$(EXEEXT)

cairo-test-constructors.c: Makefile $(test_sources) make-cairo-test-constructors.sh
	(cd $(srcdir) && sh ./make-cairo-test-constructors.sh $(test_sources)) > $@

cairo_test_suite_SOURCES = 		\
	$(cairo_test_suite_sources)	\
	$(cairo_test_suite_headers)	\
	$(test_sources)			\
	cairo-test-constructors.c
cairo_test_suite_CFLAGS = $(AM_CFLAGS) $(real_pthread_CFLAGS) 
cairo_test_suite_LDADD = 					\
	$(real_pthread_LIBS)					\
	$(top_builddir)/test/pdiff/libpdiff.la 			\
        $(top_builddir)/boilerplate/libcairoboilerplate.la	\
	$(top_builddir)/src/libcairo.la 			\
	$(CAIRO_LDADD)
cairo_test_suite_DEPENDENCIES = \
	$(top_builddir)/test/pdiff/libpdiff.la 			\
        $(top_builddir)/boilerplate/libcairoboilerplate.la	\
	$(top_builddir)/src/libcairo.la
if BUILD_ANY2PPM
cairo_test_suite_DEPENDENCIES += \
	any2ppm$(EXEEXT)
endif

if HAVE_SHM
EXTRA_PROGRAMS += cairo-test-trace
cairo_test_trace_SOURCES =		\
	cairo-test-trace.c		\
	buffer-diff.c			\
	buffer-diff.h
cairo_test_trace_CFLAGS = $(AM_CFLAGS) $(real_pthread_CFLAGS) 
cairo_test_trace_LDADD =		\
	$(real_pthread_LIBS)					\
	$(top_builddir)/test/pdiff/libpdiff.la 			\
	$(top_builddir)/util/cairo-script/libcairo-script-interpreter.la \
        $(top_builddir)/boilerplate/libcairoboilerplate.la	\
	$(top_builddir)/src/libcairo.la 			\
	$(top_builddir)/util/cairo-missing/libcairo-missing.la  \
	$(CAIRO_LDADD) \
	$(SHM_LIBS)
cairo_test_trace_DEPENDENCIES = \
	$(top_builddir)/test/pdiff/libpdiff.la 			\
	$(top_builddir)/util/cairo-script/libcairo-script-interpreter.la \
        $(top_builddir)/boilerplate/libcairoboilerplate.la	\
	$(top_builddir)/src/libcairo.la                         \
	$(top_builddir)/util/cairo-missing/libcairo-missing.la  \
	$(NULL)
endif

BUILT_SOURCES += cairo-test-constructors.c
EXTRA_DIST += $(BUILT_SOURCES) $(noinst_SCRIPTS) COPYING make-cairo-test-constructors.sh run-cairo-test-suite.sh generate_refs.sh tiger.inc
CLEANFILES += $(BUILT_SOURCES)

EXTRA_DIST +=		\
6x13.pcf		\
index.html		\
jp2.jp2			\
jpeg.jpg		\
png.png			\
romedalen.jpg		\
romedalen.png		\
scarab.jpg		\
surface-source.c	\
testtable.js		\
reference

# Any test for which the code committed to CVS is expected to fail
# should be listed here.
#
# This way, we can avoid being bothered by reports of bugs we are
# aware of, but users can still report when tests start behaving in
# unexpected ways on their system.
#
# Of course, before any "release" of cairo we should eliminate
# everything from this list by fixing the bugs. (We don't necessarily
# have to be that strict for "snapshots" though.)
#
# Analysis of XFAIL errors:
# alpha-similar         - discrepancy between backends in applying color
#                         components of a pure alpha surface
# big-line              - range overflow of fixed-point
# big-trap              - range overflow of fixed-point
# degenerate-dash       - needs path editing in PS to convert degenerate
#                         end-caps into the shapes as expected by cairo
#                         (Or maybe PS is the correct behaviour?)
# degenerate-path       - undefined behaviour in PS, needs path editing to
#                         convert degenerate segments into circles/rectangles
#                         as expected by cairo
# device-offset-scale   - complication of pre-multiplying device_offset
#                         into the pattern_matrix and then requiring further
#                         manipulation for SVG
# extend-pad            - lacks implementation in pixman and consequently used
#                         as an excuse for lack of support in other backends
# fallback-resolution   - The essential problem here is that the recording-surface
#                         has recorded a sequence of operations with one device
#                         transformation, and we attempt to replay it with
#                         another (basically a scale-factor for the falback
#                         resolution). Carl begun to look at this with his
#                         chain-of-bugs, but the can of worms is much bigger.
#                         It appears to be a design flaw in the recording-surface
#                         that may spread further...
#                         My solution would be to lock Behad and Adrian in a
#                         room, with Carl as a moderator and not let them out
#                         until they have come up with an interface and
#                         semantics that actually work. :-)
# in-fill-empty-trapezoid The cairo_in_fill () function can sometimes
#                         produce false positives when the tessellator
#                         produces empty trapezoids and the query
#                         point lands exactly on a trapezoid edge.
# long-lines            - range overflow of fixed-point
# scale-offset-image    - loss of precision converting a cairo matrix to
# scale-offset-similar    pixman's fixed point format.
# self-copy-overlap     - vector surfaces take snapshot of patterns in contrast
#                         to the raster backends which don't. One solution
#                         would be to clone overlapping areas of dst/source, so
#                         patterns were effectively snapshotted across all
#                         backends.
# self-intersecting     - incremental trapezoidation of strokes can generate
#                         overlapping traps. Needs self-intersection analysis
#                         on cairo_traps_t after strokes.
#                         Test case should also be expanded to hit special-case
#                         tessellators as well.
# surface-pattern-big...- Strange, unexplained results for SVG/PS.
XFAIL_TESTS =					\
alpha-similar$(EXEEXT)				\
big-line$(EXEEXT)				\
big-trap$(EXEEXT)				\
degenerate-dash$(EXEEXT)			\
degenerate-path$(EXEEXT)			\
device-offset-scale$(EXEEXT)			\
extend-pad$(EXEEXT)				\
fallback-resolution$(EXEEXT)			\
in-fill-empty-trapezoid$(EXEEXT)		\
long-lines$(EXEEXT)				\
self-copy-overlap$(EXEEXT)			\
self-intersecting$(EXEEXT)			\
surface-pattern-big-scale-down$(EXEEXT)		\
$(NULL)

# Any test that doesn't generate a log file goes here
NOLOG_TESTS =			\
fallback-resolution		\
font-options			\
multi-page			\
pdf-features			\
png				\
ps-eps                          \
ps-features			\
svg-clip			\
svg-surface			\
toy-font-face			\
user-data

# A target to summarise the failures
check-summary:
	@FAILED_TESTS=""; \
	for t in output/*.log; do \
	    if grep -e '\<FAIL\>' $$t >/dev/null 2>&1; then \
		FAILED_TESTS="$$FAILED_TESTS $$t"; \
	    fi; \
	done; \
	if test -n "$$FAILED_TESTS"; then \
	    echo "Failed tests:"; \
	    surfaces=""; \
	    for t in $$FAILED_TESTS; do \
	    	name="$${t##output/}"; name="$${name%.log}"; \
		echo -n "     $$name: "; \
		grep -e '\<FAIL\>' $$t | sed -e 's/.*TARGET: \([^ ]*\).*/\1/' | sort | uniq | tr '\n' ' '; \
		echo; \
		for s in `grep -e '\<FAIL\>' $$t | sed -e 's/.*TARGET: \([^ ]*\).*/\1/' | sort | uniq`; do \
		    ss=`echo $$s | tr '-' '_'`; \
		    tt=`echo $$name | tr '-' '_'`; \
		    eval $$ss=\""$${!ss} $$tt"\"; \
		    echo $$surfaces | grep $$ss >/dev/null || surfaces="$$surfaces $$ss"; \
		done; \
	    done; \
	    echo -n "Failures per surface - "; \
	    first=""; \
	    for s in $$surfaces; do \
	        ss=`echo $$s | tr '_' '-'`; \
		test -n "$$first" && echo -n ", "; \
		cnt=`echo $${!s} | wc -w`; \
	        echo -n "$$ss: $$cnt"; \
		first="false"; \
	    done; \
	    echo "."; \
	    for s in $$surfaces; do \
	        ss=`echo $$s | tr '_' '-'`; \
		cnt=`echo $${!s} | wc -w`; \
	        echo -n "	$$ss [$$cnt]: "; \
		echo $${!s} | tr '_' '-'; \
	    done; \
	fi

AM_CPPFLAGS =					\
	-I$(srcdir)				\
	-I$(srcdir)/pdiff			\
	-I$(top_srcdir)/boilerplate		\
	-I$(top_srcdir)/util/cairo-missing	\
	-I$(top_srcdir)/util/cairo-script	\
	-I$(top_srcdir)/src			\
	-I$(top_builddir)/src			\
	$(CAIRO_CFLAGS)
AM_LDFLAGS = $(CAIRO_LDFLAGS)

$(top_builddir)/boilerplate/libcairoboilerplate.la: $(top_builddir)/src/libcairo.la
	cd $(top_builddir)/boilerplate && $(MAKE) $(AM_MAKEFLAGS) libcairoboilerplate.la

$(top_builddir)/src/libcairo.la:
	cd $(top_builddir)/src && $(MAKE) $(AM_MAKEFLAGS) libcairo.la

$(top_builddir)/test/pdiff/libpdiff.la:
	cd $(top_builddir)/test/pdiff && $(MAKE) $(AM_MAKEFLAGS) libpdiff.la

$(top_builddir)/test/pdiff/perceptualdiff:
	cd $(top_builddir)/test/pdiff && $(MAKE) $(AM_MAKEFLAGS) perceptualdiff

$(top_builddir)/util/cairo-script/libcairo-script-interpreter.la: $(top_builddir)/src/libcairo.la
	cd $(top_builddir)/util/cairo-script && $(MAKE) $(AM_MAKEFLAGS) libcairo-script-interpreter.la

EXTRA_PROGRAMS += imagediff png-flatten

imagediff_SOURCES = \
	imagediff.c	\
	buffer-diff.c	\
	buffer-diff.h
imagediff_LDADD = \
	$(top_builddir)/test/pdiff/libpdiff.la \
	$(top_builddir)/src/libcairo.la

png_flatten_SOURCES = png-flatten.c
png_flatten_LDADD = $(top_builddir)/src/libcairo.la \
		    $(CAIRO_LDADD)

if BUILD_ANY2PPM
check_PROGRAMS += any2ppm
any2ppm_CFLAGS = $(AM_CFLAGS) $(POPPLER_CFLAGS) $(LIBRSVG_CFLAGS) $(LIBSPECTRE_CFLAGS)
# add LDADD, so poppler/librsvg uses "our" cairo
any2ppm_LDFLAGS = $(AM_LDFLAGS) $(CAIRO_TEST_UNDEFINED_LDFLAGS)
any2ppm_LDADD = \
		$(top_builddir)/util/cairo-script/libcairo-script-interpreter.la \
		$(top_builddir)/src/libcairo.la \
		$(CAIRO_LDADD) \
		$(CAIROBOILERPLATE_LIBS) \
		$(POPPLER_LIBS) \
		$(LIBRSVG_LIBS) \
		$(LIBSPECTRE_LIBS)
endif

if CAIRO_CAN_TEST_PDF_SURFACE
check_PROGRAMS += pdf2png
pdf2png_CFLAGS = $(AM_CFLAGS) $(POPPLER_CFLAGS)
# add LDADD, so poppler uses "our" cairo
pdf2png_LDFLAGS = $(AM_LDFLAGS) $(CAIRO_TEST_UNDEFINED_LDFLAGS)
pdf2png_LDADD  = $(top_builddir)/src/libcairo.la \
		 $(CAIRO_LDADD) \
		 $(POPPLER_LIBS)
endif

if CAIRO_CAN_TEST_SVG_SURFACE
check_PROGRAMS += svg2png
svg2png_CFLAGS = $(AM_CFLAGS) $(LIBRSVG_CFLAGS)
# add LDADD, so librsvg uses "our" cairo
svg2png_LDFLAGS = $(AM_LDFLAGS) $(CAIRO_TEST_UNDEFINED_LDFLAGS)
svg2png_LDADD  = $(top_builddir)/src/libcairo.la \
		 $(CAIRO_LDADD) \
		 $(LIBRSVG_LIBS)
endif

if CAIRO_HAS_SPECTRE
check_PROGRAMS += ps2png
ps2png_CFLAGS = $(AM_CFLAGS) $(LIBSPECTRE_CFLAGS)
# add LDADD, so ps2png uses "our" cairo
ps2png_LDFLAGS = $(AM_LDFLAGS) $(CAIRO_TEST_UNDEFINED_LDFLAGS)
ps2png_LDADD  = $(top_builddir)/src/libcairo.la \
		$(CAIRO_LDADD) \
		$(LIBSPECTRE_LIBS)
endif

EXTRA_PROGRAMS += $(TESTS)

# Do a funny transition of CAIRO_TEST_TARGET through TARGETS such that
# one can limit tested targets both through CAIRO_TEST_TARGET env var
# and TARGETS make var on the command line.  Same for the rest.
TARGETS = $(CAIRO_TEST_TARGET)
TARGETS_EXCLUDE = $(CAIRO_TEST_TARGET_EXCLUDE)
NUM_THREADS = $(CAIRO_TEST_NUM_THREADS)
MODE = $(CAIRO_TEST_MODE)

# Same about ENV vs CAIRO_TEST_ENV.  ENV is used with "make run" only
ENV = $(CAIRO_TEST_ENV)

TESTS_ENVIRONMENT = CAIRO_TEST_MODE="$(MODE)" CAIRO_TEST_TARGET="$(TARGETS)" CAIRO_TEST_TARGET_EXCLUDE="$(TARGETS_EXCLUDE)" CAIRO_TEST_NUM_THREADS="$(NUM_THREADS)" $(ENV)

EXTRA_VALGRIND_FLAGS = $(CAIRO_EXTRA_VALGRIND_FLAGS)
VALGRIND_FLAGS = \
	--tool=memcheck --suppressions=$(srcdir)/.valgrind-suppressions \
	--track-origins=yes \
	--leak-check=yes --show-reachable=yes \
	$(EXTRA_VALGRIND_FLAGS)

CLEANFILES +=					\
	valgrind-log				\
	ref.hash				\
	ref.list				\
	png-test.png				\
	png.out.png				\
	create-for-stream.pdf			\
	create-for-stream.ps			\
	create-for-stream.svg			\
	svg-surface-source.out.svg		\
	pdf-surface-source.out.pdf		\
	ps-surface-source.out.ps		\
	pdf-features.pdf			\
	pdf-mime-data.out*			\
	ps-features.ps				\
	svg-clip.svg				\
	svg-surface.svg				\
	multi-page.pdf				\
	multi-page.ps				\
	$(NULL)

# This used to be a simple 'echo ${RM} *.ps *.pdf *.svg *.etc', but
# most systems cannot handle all of our clean files together.
# Then it became a fancy find using many GNU extensions, but then the ugly
# reality of portability was raised and it became....
clean-local:
	rm -rf output
	-${FIND} . -name '*.log'      -print | ${XARGS} ${RM}
	-${FIND} . -name '*.[is]'     -print | ${XARGS} ${RM}
clean-caches:
	-${FIND} output -name '*.fail.*' -print | ${XARGS} ${RM}
	-${FIND} output -name '*.pass.*' -print | ${XARGS} ${RM}

# The following definitions both should work.
#FAILED_TESTS = `grep -l '\<FAIL\>' $(test_sources:.c=.log) 2>/dev/null | sed -e 's/[.]log$$//' | xargs echo`
FAILED_TESTS = `grep -l '\<FAIL\>' $(test_sources:.c=.log) 2>/dev/null | tr '\n' ' ' | sed -e 's/[.]log  */ /g; s/^ //; s/ $$//'`

recheck = check CAIRO_TESTS="$(FAILED_TESTS)"

# Re-checks all failed tests, i.e. tests with a log file that has a failure
recheck:
	@echo Re-checking failed tests
	@$(MAKE) $(AM_MAKEFLAGS) $(recheck)

# Checks tests.
# Target doesn't fail if tests fail.
test:
	@$(MAKE) $(AM_MAKEFLAGS) check

# Re-checks tests.
# Target doesn't fail if tests fail.
retest:
	@CAIRO_TESTS="$(FAILED_TESTS)"; \
	$(MAKE) $(AM_MAKEFLAGS) check

# Run tests under a tool specified by TOOL.  For example, make run TOOL=gdb
run:
	$(MAKE) $(AM_MAKEFLAGS) check TESTS_ENVIRONMENT='$(TESTS_ENVIRONMENT) $(top_builddir)/libtool --mode=execute env $(TOOL)'

# Check tests under valgrind.  Saves log to valgrind-log
check-valgrind:
	$(MAKE) $(AM_MAKEFLAGS) check TESTS_ENVIRONMENT='$(TESTS_ENVIRONMENT) CAIRO_TEST_MODE="$(MODE),foreground CAIRO_TEST_TIMEOUT=0" $(top_builddir)/libtool --mode=execute valgrind $(VALGRIND_FLAGS)' 2>&1 | tee valgrind-log

#%.log: %.c cairo-test-suite
#-./cairo-test-suite $(<:.c=)

NOLOG_TESTS_LOG = $(NOLOG_TESTS:=.log)

$(NOLOG_TESTS_LOG):
	@echo dummy > $@

# Identify identical reference images
check-ref-dups: check-refs.sh $(top_builddir)/test/pdiff/perceptualdiff
	sh $(srcdir)/check-refs.sh $(top_builddir)/test/pdiff/perceptualdiff

# Remove identical reference images (DANGEROUS)
clean-ref-dups: check-refs.sh $(top_builddir)/test/pdiff/perceptualdiff
	sh $(srcdir)/check-refs.sh | cut -d' ' -f2 | while read f; do git rm "reference/$$f"; done

results.tar:
	@tar cf $@ index.html testtable.js *.log output/*.log; \
	for i in output/*.fail.png ; do \
		testname=$${i#output/} ; \
		testname=$${testname%%.*} ; \
		echo tar uf $@ reference/$${testname}*.ref.png $${i%fail.png}out.png $${i%fail.png}diff.png ; \
		tar uf $@ reference/$${testname}*.ref.png $${i%fail.png}out.png $${i%fail.png}diff.png ; \
	done

results.tar.gz: results.tar
	gzip -c $< > $@

release-verify-sane-tests:

.PHONY: check-valgrind test recheck retest check-ref-dups release-verify-sane-tests

EXTRA_DIST += Makefile.win32
