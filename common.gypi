{
	'variables':{
		'perl_exe':'/usr/bin/perl',
		'emscripten_libtype':'static_library', # shared_library produces duplicate symbols.
		'emscripten_cc':'<!(echo $EMSCRIPTEN_ROOT)/emcc',
		'emscripten_cxx':'<!(echo $EMSCRIPTEN_ROOT)/em++',
		'emscripten_sysroot':'<!(echo $EMSCRIPTEN_ROOT)/system/',
		'emscripten_ld':'<!(echo $EMSCRIPTEN_ROOT)/emcc',
		'emscripten_linktojs':'-s EXPORTED_FUNCTIONS="[\'_main\']" --embed-files ../src/assets/fontconfig/fonts@/usr/share/fonts --embed-files ../src/assets/fontconfig/config/fonts.conf@/etc/fonts/fonts.conf --embed-files ../src/assets/fontconfig/cache@/usr/local/var/cache/fontconfig -s FULL_ES2=1 -s TOTAL_MEMORY=50331648 -s OUTLINING_LIMIT=120000',
		'cflags':'-Wno-warn-absolute-paths -isysroot <(emscripten_sysroot)',
		'cflags_cc':'-std=c++0x',
		'ldflags':'',
		'webcore_excludes':'(SSLHandle\\.cpp$|leveldb/|skia|glx/|cg/|ca/|avfoundation/|wince/|Modules/|soup/|ios/|nix/|plugin/|plugins/|blackberry/|WinCE|Gtk|storage/|win/|linux/|glib/|cocoa/|gtk/|cf/|mac/|efl/|appcache/|ExportFileGenerator\\.cpp$|CF\\.cpp$|IOS\\.|Mac\\.|Win\\.|XMLHttpRequest|ThemeSafari|PlugInElement|PlugInImageElement|JSAbstractView|InspectorWebBackend|AllInOne|OpenTypeUtilities|HarfBuzzFaceCoreText|graphics/FontPlatformData\\.cpp$|GraphicsContext3DOpenGL\\.cpp$|platform/sql/|ICU\\.cpp$|enchant/|ExportFileGenerator\\.cpp$|SmartReplaceICU\\.cpp$|HTMLObjectElement\\.cpp$|RenderEmbeddedObject\\.cpp$|Extensions3DOpenGL\\.cpp$|DragController\\.cpp$|JSDOMPlugin\\.cpp$|WebCoreDerived/JS|posix/|debug.cpp$|ANGLE/src/common/|_win.cpp$|BlobResourceHandle\\.cpp$|BlobRegistryImpl\\.cpp$|BlobRegistry\\.cpp$)', #InitializeParseContext|ossource_posix.cpp$
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
				'cflags+':['<(cflags) -Oz'], # -g0
				'cflags_cc+':['<(cflags_cc)'],
				'ldflags+':['<(ldflags)'],
				'jsflags+':['<(emscripten_linktojs) -O3 --llvm-opts 3 --llvm-lto 1'],
			},
			'Debug': {
				'defines+': ['DEBUG','TARGET_EMSCRIPTEN'],
				'cflags+':['<(cflags) -O1'], # -g4
				'cflags_cc+':['<(cflags_cc)'],
				'ldflags+':['<(ldflags)'],
				'jsflags+':['<(emscripten_linktojs) -O1'],
			},
		},
	},
}
# |TextCodecUTF8\\.cpp$|TextEncodingRegistry\\.cpp$)'
#
#  --llvm-opts 0 --llvm-lto 0