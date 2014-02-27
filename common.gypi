{
	'variables':{
		'perl_exe':'/usr/bin/perl',
		'emscripten_libtype':'shared_library',
		'emscripten_cc':'<!(echo $EMSCRIPTEN_ROOT)/emcc',
		'emscripten_cxx':'<!(echo $EMSCRIPTEN_ROOT)/em++',
		'emscripten_sysroot':'<!(echo $EMSCRIPTEN_ROOT)/system/',
		'emscripten_ld':'<!(echo $EMSCRIPTEN_ROOT)/emcc',
		'cflags':'-Wno-warn-absolute-paths -isysroot <(emscripten_sysroot)',
		'cflags_cc':'-std=c++0x',
		'ldflags':'',
		'webcore_excludes':'(SSLHandle\\.cpp$|leveldb/|skia|glx/|cg/|ca/|avfoundation/|wince/|Modules/|soup/|ios/|nix/|plugin/|plugins/|blackberry/|WinCE|Gtk|storage/|win/|linux/|glib/|cocoa/|gtk/|cf/|mac/|efl/|appcache/|ExportFileGenerator\\.cpp$|loader/EmptyClients.cpp$|CF\\.cpp$|IOS\\.|Mac\\.|Win\\.|XMLHttpRequest|ThemeSafari|PlugInElement|PlugInImageElement|JSAbstractView|InspectorWebBackend|AllInOne|OpenTypeUtilities|HarfBuzzFaceCoreText|graphics/FontPlatformData\\.cpp$|GraphicsContext3DOpenGL\\.cpp$|platform/sql/|ICU\\.cpp$|enchant/|ExportFileGenerator\\.cpp$|SmartReplaceICU\\.cpp$|HTMLObjectElement\\.cpp$|RenderEmbeddedObject\\.cpp$|Extensions3DOpenGL\\.cpp$|DragController\\.cpp$|JSDOMPlugin\\.cpp$|derived/JS)',
	},
	'target_defaults': {
		'default_configuration': 'Release',
		'type':'<(emscripten_libtype)',
		'cc':'<(emscripten_cc)',
		'cxx':'<(emscripten_cxx)',
		'ld':'<(emscripten_ld)',
		'configurations': {
			'Release': {
				'defines+': ['NDEBUG','TARGET_EMSCRIPTEN'],
				'cflags+':['<(cflags) -O2'], #-g0
				'cflags_cc+':['<(cflags_cc) -std=c++0x'],
				'ldflags+':['<(ldflags) -O2'], # --closure 1 --llvm-opts 2 --llvm-lto 1  -g0
			},
			'Debug': {
				'defines+': ['DEBUG','TARGET_EMSCRIPTEN'],
				'cflags+':['<(cflags) -O0'],
				'cflags_cc+':['<(cflags_cc)'],
				'ldflags+':['<(ldflags) -O0'], #  --llvm-opts 0 --llvm-lto 0  -g4
			},
		},
	},
}
# |TextCodecUTF8\\.cpp$|TextEncodingRegistry\\.cpp$)'