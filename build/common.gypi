{
	'variables':{
		'perl_exe':'/usr/bin/perl',
		'bison_exe':'/usr/bin/bison',
		'os_include':'/User/tlinton/Library/Emscripten/1.8.2/system',

		'libjpeg_gyp_path':'<(DEPTH)/deps/libjpeg_turbo/libjpeg.gyp',
		'yasm_path':'<(DEPTH)/deps/yasm/',


		# Skia Settings
		'skia_include_path':'<(DEPTH)/deps/skia/include',
		'skia_src_path':'<(DEPTH)/deps/skia/src',
		'skia_run_pdfviewer_in_gm':0,
		'skia_shared_lib':0,
		'skia_poppler_enabled':0,
		'skia_arch_type':'no_arch_defined',
		'skia_win_debuggers_path':' ',
		'skia_arch_width':32,
		'skia_os':'no_os_defined',
		'skia_gpu':0,
		'skia_opencl':0,
		'skia_angle':0,

		# Prevent undefined variable.
		'qt_moc':0,
		'qt_libs':0,
		'qt_includes':0,
		'arm_neon':0,
		'os_bsd':0,
		'os_posix':0,
		'target_arch':'no_arch_defined',
		'disable_sse2':1,
		'OS':'JS',
		'clang':1,
		'component':'static_library',
		'use_icu':0,
		'arm_version':0,
	},

## Default Targets & Configurations ##
  'target_defaults': {
    'default_configuration': 'Release',
    'configurations': {
      'Debug': {
        'defines': [ 'DEBUG', '_DEBUG' ],
        'msvs_settings': {
          'VCCLCompilerTool': {
            'RuntimeLibrary': 1, 
          },
          'VCLinkerTool': {
            'LinkTimeCodeGeneration': 1,
            'OptimizeReferences': 2,
            'EnableCOMDATFolding': 2,
            'LinkIncremental': 1,
            'GenerateDebugInformation': 'true',
            'AdditionalLibraryDirectories': [
            ]
          }          
        },
        'xcode_settings': {
          'GCC_GENERATE_DEBUGGING_SYMBOLS':'NO',
          'GCC_DONT_INCLUDE_ARCH':'YES',
          'OTHER_LDFLAGS': [
          ],
          'OTHER_CFLAGS': [
            '-std=c++0x -include <(DEPTH)/deps/WebKit/Source/WebCore/WebCorePrefix.h -DTARGET_EMSCRIPTEN',
          ]
        }
      },
      'Release': {
        'defines': [ 'NDEBUG'],
        'msvs_settings': {
          'VCCLCompilerTool': {
            'RuntimeLibrary': 0,
            'Optimization': 2,
            'FavorSizeOrSpeed': 1,
            'InlineFunctionExpansion': 2,
            'WholeProgramOptimization': 'true',
            'OmitFramePointers': 'true',
            'EnableFunctionLevelLinking': 'true',
            'EnableIntrinsicFunctions': 'true'            
          },
          'VCLinkerTool': {
            'LinkTimeCodeGeneration': 1,
            'OptimizeReferences': 2,
            'EnableCOMDATFolding': 2,
            'LinkIncremental': 1,
            'AdditionalLibraryDirectories': [
            ]            
          }          
        },
        'xcode_settings': {
          'GCC_GENERATE_DEBUGGING_SYMBOLS':'NO',
          'GCC_DONT_INCLUDE_ARCH':'YES',
          'OTHER_LDFLAGS': [
          ],
          'OTHER_CFLAGS': [
            '-std=c++0x -include <(DEPTH)/deps/WebKit/Source/WebCore/WebCorePrefix.h -DTARGET_EMSCRIPTEN',
          ]
        }
      }
    }  
  }
}
