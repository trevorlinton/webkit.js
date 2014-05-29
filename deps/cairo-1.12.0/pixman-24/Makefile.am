include $(top_srcdir)/pixman/Makefile.sources

lib_LTLIBRARIES = libpixman-1.la

libpixman_1_la_LDFLAGS = -version-info $(LT_VERSION_INFO) -no-undefined @PTHREAD_LDFLAGS@ 
libpixman_1_la_LIBADD = @PTHREAD_LIBS@ @DEP_LIBS@ -lm
libpixman_1_la_SOURCES = $(libpixman_sources) $(libpixman_headers)

libpixmanincludedir = $(includedir)/pixman-1
libpixmaninclude_HEADERS = pixman.h pixman-version.h
noinst_LTLIBRARIES = 

EXTRA_DIST =				\
	Makefile.win32			\
	make-combine.pl			\
	pixman-combine.c.template	\
	pixman-combine.h.template	\
	pixman-region.c			\
	solaris-hwcap.mapfile		\
	$(NULL)

DISTCLEANFILES = $(BUILT_SOURCES)

# mmx code
if USE_X86_MMX
noinst_LTLIBRARIES += libpixman-mmx.la
libpixman_mmx_la_SOURCES = \
	pixman-mmx.c
libpixman_mmx_la_CFLAGS = $(DEP_CFLAGS) $(MMX_CFLAGS)
libpixman_mmx_la_LIBADD = $(DEP_LIBS)
libpixman_1_la_LDFLAGS += $(MMX_LDFLAGS)
libpixman_1_la_LIBADD += libpixman-mmx.la

ASM_CFLAGS_mmx=$(MMX_CFLAGS)
endif

# vmx code
if USE_VMX
noinst_LTLIBRARIES += libpixman-vmx.la
libpixman_vmx_la_SOURCES = \
	pixman-vmx.c \
	pixman-combine32.h
libpixman_vmx_la_CFLAGS = $(DEP_CFLAGS) $(VMX_CFLAGS)
libpixman_vmx_la_LIBADD = $(DEP_LIBS)
libpixman_1_la_LIBADD += libpixman-vmx.la

ASM_CFLAGS_vmx=$(VMX_CFLAGS)
endif

# sse2 code
if USE_SSE2
noinst_LTLIBRARIES += libpixman-sse2.la
libpixman_sse2_la_SOURCES = \
	pixman-sse2.c
libpixman_sse2_la_CFLAGS = $(DEP_CFLAGS) $(SSE2_CFLAGS)
libpixman_sse2_la_LIBADD = $(DEP_LIBS)
libpixman_1_la_LDFLAGS += $(SSE2_LDFLAGS)
libpixman_1_la_LIBADD += libpixman-sse2.la

ASM_CFLAGS_sse2=$(SSE2_CFLAGS)
endif

# arm simd code
if USE_ARM_SIMD
noinst_LTLIBRARIES += libpixman-arm-simd.la
libpixman_arm_simd_la_SOURCES = \
	pixman-arm-simd.c	\
	pixman-arm-common.h	\
	pixman-arm-simd-asm.S
libpixman_arm_simd_la_CFLAGS = $(DEP_CFLAGS)
libpixman_arm_simd_la_LIBADD = $(DEP_LIBS)
libpixman_1_la_LIBADD += libpixman-arm-simd.la

ASM_CFLAGS_arm_simd=
endif

# arm neon code
if USE_ARM_NEON
noinst_LTLIBRARIES += libpixman-arm-neon.la
libpixman_arm_neon_la_SOURCES = \
        pixman-arm-neon.c	\
        pixman-arm-common.h	\
        pixman-arm-neon-asm.S	\
		pixman-arm-neon-asm-bilinear.S \
        pixman-arm-neon-asm.h
libpixman_arm_neon_la_CFLAGS = $(DEP_CFLAGS)
libpixman_arm_neon_la_LIBADD = $(DEP_LIBS)
libpixman_1_la_LIBADD += libpixman-arm-neon.la

ASM_CFLAGS_arm_neon=
endif

# iwmmxt code
if USE_ARM_IWMMXT
noinst_LTLIBRARIES += libpixman-iwmmxt.la
libpixman_iwmmxt_la_SOURCES = pixman-mmx.c
libpixman_iwmmxt_la_CFLAGS = $(DEP_CFLAGS) $(IWMMXT_CFLAGS)
libpixman_iwmmxt_la_LIBADD = $(DEP_LIBS)
libpixman_1_la_LDFLAGS += $(IWMMXT_LDFLAGS)
libpixman_1_la_LIBADD += libpixman-iwmmxt.la

ASM_CFLAGS_IWMMXT=$(IWMMXT_CFLAGS)
endif

.c.s : $(libpixmaninclude_HEADERS) $(BUILT_SOURCES)
	$(CC) $(CFLAGS) $(ASM_CFLAGS_$(@:pixman-%.s=%)) $(ASM_CFLAGS_$(@:pixman-arm-%.s=arm_%)) -DHAVE_CONFIG_H -I$(srcdir) -I$(builddir) -I$(top_builddir) -S -o $@ $<
