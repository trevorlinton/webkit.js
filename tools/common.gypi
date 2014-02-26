{
	'variables':{
		#'perl_exe':'/usr/bin/perl',
		#'bison_exe':'/usr/bin/bison',
		#'os_include':'$(EMSCRIPTEN_ROOT)',

    #'libjpeg_gyp_path':'<(DEPTH)/deps/libjpeg_turbo/libjpeg.gyp',
		#'yasm_path':'<(DEPTH)/deps/yasm/',


		# Skia Settings
		#'skia_include_path':'<(DEPTH)/deps/skia/include',
		#'skia_src_path':'<(DEPTH)/deps/skia/src',
		#'skia_run_pdfviewer_in_gm':0,
		#'skia_shared_lib':0,
		#'skia_poppler_enabled':0,
		#'skia_arch_type':'no_arch_defined',
		#'skia_win_debuggers_path':' ',
		#'skia_arch_width':32,
		#'skia_os':'no_os_defined',
		#'skia_gpu':0,
		#'skia_opencl':0,
		#'skia_angle':0,

		# Prevent undefined variable.
		'qt_moc':0,
		'qt_libs':0,
		'qt_includes':0,
		'arm_neon':0,
		'os_bsd':0,
		'os_posix':0,
    'os_mac':0,
    'os_ios':0,
		'target_arch':'no_arch_defined',
		'disable_sse2':1,
		'OS':'JS',
		'clang':1,
		'component':'static_library',
		'use_icu':0,
		'arm_version':0,

    # Emscripten settings.
    'emscripten_cc':'<!(echo $EMSCRIPTEN_ROOT)/emcc',
    'emscripten_cxx':'<!(echo $EMSCRIPTEN_ROOT)/em++',
    'emscripten_ldflags':'-O2 -s FULL_ES2=1 -s EXPORTED_FUNCTIONS="[`cat <(DEPTH)/webcore_bindings/Symbols.exports`]"',
    'emscripten_sysroot':'<!(echo $EMSCRIPTEN_ROOT)/system/',
    'emscripten_cflags':'-Wno-warn-absolute-paths -DTARGET_EMSCRIPTEN -DCAIRO_HAS_FT_FONT -include <(DEPTH)/deps/WebKit/Source/WebCore/WebCorePrefix.h -O2 -isysroot <(emscripten_sysroot)',
    'emscripten_cxxflags':'-std=c++0x',
    'emscripten_ld':'<!(echo $EMSCRIPTEN_ROOT)/emcc',
	},

## Default Targets & Configurations ##
  'target_defaults': {
    'default_configuration': 'Release',
    'configurations': {
      'Release': {
        'defines': ['NDEBUG'],
      }
    }  
  }
}
