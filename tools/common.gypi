{
	'variables':{
		'perl_exe':'/usr/bin/perl',
		'emscripten_libtype':'static_library', # shared_library produces duplicate symbols.
		'emscripten_cc':'<!(echo $EMSCRIPTEN_ROOT)/emcc',
		'emscripten_cxx':'<!(echo $EMSCRIPTEN_ROOT)/em++',
		'emscripten_sysroot':'<!(echo $EMSCRIPTEN_ROOT)/system/',
		'emscripten_ld':'<!(echo $EMSCRIPTEN_ROOT)/emcc',
		# see configuration Release and Debug below for specific optimizations
		# by release types. Optimizations or debug switches shouldn't be added here.
		# --memory-init-file 1, for some reason this causes a llvm trap on emscripten 1.13.0
		# -s NO_EXIT_RUNTIME=1, for some reason this causes a llvm trap on emscripten 1.13.0
		# -s OUTLINING_LIMIT=5000, outlining never worked, i'm unsure why, emscripten 1.13.0
		# -s LINKABLE=1, adding this removes the warning:unresolved symbols to odd emscripten_gl<func> but
		# -s EXPORTED_FUNCTIONS=@../src/Symbols.exports
		'emscripten_linktojs':'-s EXPORTED_FUNCTIONS="[\'_main\',\'_scalefactor\',\'_createWebKit\',\'_setHtml\',\'_setTransparent\',\'_scrollBy\',\'_resize\']" --embed-files ../src/assets/fontconfig/fonts@/usr/share/fonts --embed-files ../src/assets/fontconfig/config/fonts.conf@/etc/fonts/fonts.conf --embed-files ../src/assets/fontconfig/cache@/usr/local/var/cache/fontconfig -s FULL_ES2=1 -o webkit.html',
		#--post-js ../src/webkit.post.js --pre-js ../src/webkit.pre.js --proxy-to-worker --proxy-to-worker -o webkit.js
		# Ensure that Apple, and Win32 builds do not interfere with the compile, we'll assume we're linux since
		# emscripten has a very posix unix compile interface, should be the most compatible with existing code.
		# -fshort-wchar is needed, emscripten uses a 4, not 8 wchar (32 vs. 64 bit). 
		'cflags':'-U__APPLE__ -U__WIN32__ -Ulinux -Wno-warn-absolute-paths -Werror -fshort-wchar -isysroot <(emscripten_sysroot)',
		'cflags_c':'',
		'cflags_cc':'-std=c++0x',
		'ldflags':'',
		'webcore_excludes':'(curl/|SSLHandle\\.cpp$|leveldb/|skia|glx/|cg/|ca/|avfoundation/|wince/|Modules/|soup/|ios/|nix/|plugin/|plugins/|blackberry/|WinCE|Gtk|storage/|win/|linux/|glib/|cocoa/|gtk/|cf/|mac/|efl/|appcache/|ExportFileGenerator\\.cpp$|CF\\.cpp$|IOS\\.|Mac\\.|Win\\.|XMLHttpRequest|ThemeSafari|PlugInElement|PlugInImageElement|JSAbstractView|InspectorWebBackend|AllInOne|OpenTypeUtilities|HarfBuzzFaceCoreText|graphics/FontPlatformData\\.cpp$|GraphicsContext3DOpenGL\\.cpp$|platform/sql/|ICU\\.cpp$|enchant/|ExportFileGenerator\\.cpp$|SmartReplaceICU\\.cpp$|HTMLObjectElement\\.cpp$|RenderEmbeddedObject\\.cpp$|Extensions3DOpenGL\\.cpp$|DragController\\.cpp$|JSDOMPlugin\\.cpp$|WebCoreDerived/JS|posix/|debug.cpp$|ANGLE/src/common/|_win.cpp$|BlobResourceHandle\\.cpp$|BlobRegistryImpl\\.cpp$|BlobRegistry\\.cpp$|GraphicsContext3DOpenGL\\.cpp$|javascript/OpenGLES)',
		# svg/InitializeParseContext|ossource_posix.cpp$|coordinated/
		# cairo use: ANGLE/|angle/|cairo/ 
	},
	'target_defaults': {
		'default_configuration': 'Release',
		'type':'<(emscripten_libtype)',
		'cc':'<(emscripten_cc)',
		'cxx':'<(emscripten_cxx)',
		'ld':'<(emscripten_ld)',
		'configurations': {
			'Release': {
				'defines+': ['NDEBUG','TARGET_EMSCRIPTEN','__EMSCRIPTEN__'],
				'cflags+':['<(cflags) -Oz'], # -g0 - do not add this, it causes huge memory allocations on compile
				'cflags_cc+':['<(cflags_cc)'],
				'ldflags+':['<(ldflags)'],
				# do not use optimizations: -s AGGRESSIVE_VARIABLE_ELIMINATION=1,
				#		this produces "unknown number" runtime bad JS syntax errors. Never use.
				# known unsafe optimizations: --closure 1 -s CLOSURE_ANNOTATIONS=1 --llvm-lto 3
				#		unsure why the closure opts / llvm-lto are unsafe. for now we'll leave it off
				#		although it doesn't seem to do damage from limited tests, it can buy us a 3MB savings
				#		it should also be known that adding closure compilations takes an additional 30 minutes
				#		of compile time and only saves us space, if used, do it only for a to production release.
				# does not make sense but: optmizations on the final LLVM BYTE CODE to JS shouldn't use -Oz/-Os
				#		but should use -O3. -Oz/-Os supposadly (from the docs) map to -O2, so we actually get
				#		better(?) optimization but using -O3. We may want to gut check this, as it doesn't
				#		seem accurate.
				### -- not applicable as of 1.16 emscripten -- for some bizzare reason adding -g0 onto this causes the compiler to slow to a crawl and
				### -- not applicable as of 1.16 emscripten --	take up gigabytes (13+) of memory. Don't do it.
				### Using ASM_JS=0 is necessary at the moment since browsers limit the amount of local vars.
				# Using -Oz instead of -O3 here creates larger file sizes (?..) its unclear the optimal settings but
				#		this should be close.
				#
				'jsflags+':['<(emscripten_linktojs) -s ASM_JS=1 -s OUTLINING_LIMIT=100000 -s TOTAL_MEMORY=100663296 -O3 --llvm-opts 3 --llvm-lto 3 -g0'], # -s INLINING_LIMIT=1 -s FORCE_ALIGNED_MEMORY=1
			},
			'Debug': {
				'defines+': ['DEBUG','TARGET_EMSCRIPTEN','__EMSCRIPTEN__'],
				'cflags+':['<(cflags) -O2'], # -g4 do not add this, it causes huge memory allocations on compile
				'cflags_cc+':['<(cflags_cc)'],
				'ldflags+':['<(ldflags)'],
				# -s LABEL_DEBUG=1 is not supported in 1.13.0+ of emscripten.
				#		It's supposed to be, but.. hell.
				# Building with -s ASSERTIONS=1 may help for some reason? why?
				#		this was kicked out of a Debug run that hit an
				#		llvm-trap however it already had a full stacktrace.
				# -s NAMED_GLOBALS=0 should prevent too many local variable errors.
				#		i'm not sure if this is true as Firefox routinely complains of local variable erros
				#		not global variable errors, we will see.
				# For some reason adding -g4 to this causes the compiler to slow to a crawl and take up
				#		gigabytes of memory, don't do it.
				# We add -O2 to get rid of dead functions, -g2 preserves the symbol names for a fairly
				#		decent stack trace on an abort or heap/stack violation.  Using js-opts 0 disables any
				#		mangaling of the javascript, this is the optimal way of debugging.
				'jsflags+':['<(emscripten_linktojs) -s WARN_UNALIGNED=1 -s CHECK_HEAP_ALIGN=1 -s ALLOW_MEMORY_GROWTH=1 -s ASSERTIONS=2 -O2 -g2 --js-opts 0 -s SAFE_HEAP=1 -s ALIASING_FUNCTION_POINTERS=0'],
			},
		},
	},
}
# |TextCodecUTF8\\.cpp$|TextEncodingRegistry\\.cpp$)'
#
#  --llvm-opts 0 --llvm-lto 0
