{
  'includes': [
    'features.gypi',
    'modules/modules.gypi',
    'bindings/bindings.gypi',
    'core.gypi',
  ],

  'variables': {
    'enable_wexit_time_destructors': 1,

    'webcore_include_dirs': [
      '../..',
      '..',
      '<(SHARED_INTERMEDIATE_DIR)/WebCore',
      '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings',
    ],
  },  # variables

  'target_defaults': {
    'variables': {
      'optimize': '2',
    },
  },

  'targets': [
    {
      'target_name': 'webcore_derived',
      'type': 'static_library',
      'hard_dependency': 1,
      'dependencies': [
        'webcore_prerequisites',
        '../bindings/derived_sources.gyp:bindings_derived_sources',
        'core_derived_sources.gyp:make_derived_sources',
        '../wtf/wtf.gyp:wtf',
        '<(DEPTH)/deps/skia/skia.gyp:skia',
        '<(DEPTH)/deps/iccjpeg/iccjpeg.gyp:iccjpeg',
        '<(DEPTH)/deps/libpng/libpng.gyp:libpng',
        # No support for decoding new image formats.
        ##'<(DEPTH)/deps/libwebp/libwebp.gyp:libwebp',
        '<(DEPTH)/deps/libxml/libxml.gyp:libxml',
        '<(DEPTH)/deps/libxslt/libxslt.gyp:libxslt',
        '<(DEPTH)/third_party/qcms/qcms.gyp:qcms',
        # No SQL support, not sure on the URL bindings and use turbo jpeg.
        #'<(DEPTH)/third_party/sqlite/sqlite.gyp:sqlite',
        #'<(DEPTH)/url/url.gyp:url_lib',
        '<(DEPTH)/deps/libjpeg_turbo/libjpeg_turbo.gyp:libjpeg',
      ],
      'include_dirs': [
        '<(SHARED_INTERMEDIATE_DIR)/WebCore',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings',
        '<@(webcore_include_dirs)',
        # ---- POSSIBLE MISSING BRIDGE CODE TO JSTYPES ----
        #'modules/mediastream',
        #'modules/speech',
        'dom',
        'html',
        'html/shadow',
        #'inspector',
        'page',
        'svg',
      ],
      'sources': [
        # These files include all the .cpp files generated from the .idl files
        # in webcore_files.
        '<@(derived_sources_aggregate_files)',
        '<@(bindings_files)',

        # Additional .cpp files for HashTools.h
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/ColorData.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/CSSPropertyNames.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/CSSValueKeywords.cpp',

        # Additional .cpp files from make_derived_sources actions.
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/HTMLElementFactory.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/HTMLNames.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/FetchInitiatorTypeNames.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/CalendarPicker.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/ColorSuggestionPicker.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/Event.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/EventHeaders.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/EventInterfaces.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/EventTargetHeaders.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/EventTargetInterfaces.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/PickerCommon.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/UserAgentStyleSheetsData.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/XLinkNames.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/XMLNSNames.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/XMLNames.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/SVGNames.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/MathMLNames.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/FontFamilyNames.cpp',

        # Generated from HTMLEntityNames.in
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/HTMLEntityTable.cpp',

        # Generated from RuntimeEnabledFeatures.in
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/RuntimeEnabledFeatures.cpp',

        # Generated from CSSParser-in.cpp
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/CSSParser.cpp',

        # Additional .cpp files from the make_derived_sources rules.
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/CSSGrammar.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/XPathGrammar.cpp',

        # Additional .cpp files from the inspector_protocol_sources list.
        #'<(SHARED_INTERMEDIATE_DIR)/WebCore/InspectorFrontend.cpp',
        #'<(SHARED_INTERMEDIATE_DIR)/WebCore/InspectorBackendDispatcher.cpp',
        #'<(SHARED_INTERMEDIATE_DIR)/WebCore/InspectorTypeBuilder.cpp',

        # Additional .cpp files from the inspector_instrumentation_sources list.
        #'<(SHARED_INTERMEDIATE_DIR)/WebCore/InspectorCanvasInstrumentationInl.h',
        #'<(SHARED_INTERMEDIATE_DIR)/WebCore/InspectorConsoleInstrumentationInl.h',
        #'<(SHARED_INTERMEDIATE_DIR)/WebCore/InspectorDatabaseInstrumentationInl.h',
        #'<(SHARED_INTERMEDIATE_DIR)/WebCore/InspectorInstrumentationInl.h',
        #'<(SHARED_INTERMEDIATE_DIR)/WebCore/InspectorOverridesInl.h',
        #'<(SHARED_INTERMEDIATE_DIR)/WebCore/InstrumentingAgentsInl.h',
        #'<(SHARED_INTERMEDIATE_DIR)/WebCore/InspectorInstrumentationImpl.cpp',

        # Additional .cpp files for SVG.
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/SVGElementFactory.cpp',
        
        # Generated from make_style_shorthands.py
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/StylePropertyShorthand.cpp',

        # Generated from make_style_builder.py
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/StyleBuilder.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/StyleBuilderFunctions.cpp',
      ],
    },
    {
      # We'll soon split libwebcore in multiple smaller libraries.
      # webcore_prerequisites will be the 'base' target of every sub-target.
      'target_name': 'webcore_prerequisites',
      'type': 'none',
      'dependencies': [
        #'debugger_script_source',
        #'injected_canvas_script_source',
        #'injected_script_source',
        #'inspector_overlay_page',
        #'inspector_protocol_sources',
        #'inspector_instrumentation_sources',
        '../bindings/derived_sources.gyp:bindings_derived_sources',
        'core_derived_sources.gyp:make_derived_sources',
        '../wtf/wtf.gyp:wtf',
        '../config.gyp:config',
        '../weborigin/weborigin.gyp:weborigin',
        '<(DEPTH)/gpu/gpu.gyp:gles2_c_lib',
        '<(DEPTH)/deps/skia/skia.gyp:skia',
        '<(DEPTH)/deps/iccjpeg/iccjpeg.gyp:iccjpeg',
        '<(DEPTH)/deps/libpng/libpng.gyp:libpng',
        #'<(DEPTH)/deps/libwebp/libwebp.gyp:libwebp',
        '<(DEPTH)/deps/libxml/libxml.gyp:libxml',
        '<(DEPTH)/deps/libxslt/libxslt.gyp:libxslt',
        '<(DEPTH)/deps/qcms/qcms.gyp:qcms',
        #'<(DEPTH)/deps/sqlite/sqlite.gyp:sqlite',
        '<(DEPTH)/deps/zlib/zlib.gyp:zlib',
        # not really sure if we should add this or not.
        #'<(DEPTH)/deps/url/url.gyp:url_lib',
        # ---- WE MAY BE MISSING IMPORTANT JSTYPES HERE ----
        '<(DEPTH)/deps/libjpeg_turbo/libjpeg_turbo.gyp:libjpeg',
      ],
      'export_dependent_settings': [
        '../wtf/wtf.gyp:wtf',
        '../config.gyp:config',
        '<(DEPTH)/gpu/gpu.gyp:gles2_c_lib',
        '<(DEPTH)/deps/skia/skia.gyp:skia',
        '<(DEPTH)/deps/iccjpeg/iccjpeg.gyp:iccjpeg',
        '<(DEPTH)/deps/libpng/libpng.gyp:libpng',
        '<(DEPTH)/deps/libwebp/libwebp.gyp:libwebp',
        '<(DEPTH)/deps/libxml/libxml.gyp:libxml',
        '<(DEPTH)/deps/libxslt/libxslt.gyp:libxslt',
        '<(DEPTH)/deps/npapi/npapi.gyp:npapi',
        #'<(DEPTH)/deps/ots/ots.gyp:ots',
        '<(DEPTH)/deps/qcms/qcms.gyp:qcms',
        #'<(DEPTH)/deps/sqlite/sqlite.gyp:sqlite',
        '<(DEPTH)/deps/zlib/zlib.gyp:zlib',
        #'<(DEPTH)/deps/url/url.gyp:url_lib',
        # ---- WE MAY BE MISSING IMPORTANT JSTYPES HERE ----
        '<(DEPTH)/deps/libjpeg_turbo/libjpeg_turbo.gyp:libjpeg',
      ],
      'direct_dependent_settings': {
        'defines': [
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
          'INSIDE_WEBKIT',
        ],
        'include_dirs': [
          '<@(webcore_include_dirs)',
          '<(DEPTH)/gpu',
        ],
        'msvs_disabled_warnings': [
          4138, 4244, 4291, 4305, 4344, 4355, 4521, 4099,
        ],
        'scons_line_length' : 1,
        'xcode_settings': {
          # Some Mac-specific parts of WebKit won't compile without having this
          # prefix header injected.
          # FIXME: make this a first-class setting.
          'GCC_PREFIX_HEADER': 'WebCorePrefixMac.h',
        },
      },
      'conditions': [
        ['OS=="mac"', {
          'direct_dependent_settings': {
            'defines': [
              # Match Safari and Mozilla on Mac x86.
              'WEBCORE_NAVIGATOR_PLATFORM="MacIntel"',
            ],
          },
        }],
        ['OS=="win"', {
          'direct_dependent_settings': {
            'defines': [
              # Match Safari and Mozilla on Windows.
              'WEBCORE_NAVIGATOR_PLATFORM="Win32"',
              '__PRETTY_FUNCTION__=__FUNCTION__',
            ],
          },
        }],
        ['OS in ("linux", "android") and "WTF_USE_WEBAUDIO_IPP=1" in feature_defines', {
          'direct_dependent_settings': {
            'cflags': [
              '<!@(pkg-config --cflags-only-I ipp)',
            ],
          },
        }],
        ['"WTF_USE_WEBAUDIO_FFMPEG=1" in feature_defines', {
          # This directory needs to be on the include path for multiple sub-targets of webcore.
          'direct_dependent_settings': {
            'include_dirs': [
              '<(DEPTH)/deps/ffmpeg',
            ],
          },
          'dependencies': [
            '<(DEPTH)/deps/ffmpeg/ffmpeg.gyp:ffmpeg',
          ],
        }],
       #['"WTF_USE_WEBAUDIO_OPENMAX_DL_FFT=1" in feature_defines', {
       #  'direct_dependent_settings': {
       #    'include_dirs': [
       #      '<(DEPTH)/deps/openmax_dl',
       #    ],
       #  },
       #  'dependencies': [
       #    '<(DEPTH)/deps/openmax_dl/dl/dl.gyp:openmax_dl',
       #  ],
       #}],
        # Windows shared builder needs extra help for linkage
        ["WTF_USE_WEBAUDIO_FFMPEG=1" in feature_defines', {
          'export_dependent_settings': [
            '<(DEPTH)/deps/ffmpeg/ffmpeg.gyp:ffmpeg',
          ],
        }],
      ],
    },
    {
      'target_name': 'webcore_dom',
      'type': 'static_library',
      'dependencies': [
        'webcore_prerequisites',
      ],
      'sources': [
        '<@(webcore_dom_files)',
      ],
      'sources!': [
        'dom/default/PlatformMessagePortChannel.cpp',
        'dom/default/PlatformMessagePortChannel.h',
      ],
    },
    {
      'target_name': 'webcore_html',
      'type': 'static_library',
      'dependencies': [
        'webcore_prerequisites',
      ],
      'sources': [
        '<@(webcore_html_files)',
      ],
    },
    {
      'target_name': 'webcore_svg',
      'type': 'static_library',
      'dependencies': [
        'webcore_prerequisites',
      ],
      'sources': [
        '<@(webcore_svg_files)',
      ],
    },
    {
      'target_name': 'webcore_platform',
      'type': 'static_library',
      'dependencies': [
        'webcore_prerequisites',
      ],
      'sources': [
        '<@(webcore_platform_files)',
      ],
      'sources/': [
        # FIXME: Figure out how to store these patterns in a variable.
        ['exclude', '(cf|cg|harfbuzz|mac|opentype|svg|win)/'],
        ['exclude', '(?<!Chromium)(CF|CG|Mac|OpenType|Win)\\.(cpp|mm?)$'],

        # Used only by mac.
        ['exclude', 'platform/Theme\\.cpp$'],

        # *NEON.cpp files need special compile options.
        # They are moved to the webcore_arm_neon target.
        ['exclude', 'platform/graphics/cpu/arm/filters/.*NEON\\.(cpp|h)'],
      ],
      'conditions': [
        ['OS=="browser"', {}],

        ['OS=="linux" or OS=="android"', {
          'sources/': [
            # Cherry-pick files excluded by the broader regular expressions above.
            ['include', 'platform/graphics/harfbuzz/FontHarfBuzz\\.cpp$'],
            ['include', 'platform/graphics/harfbuzz/FontPlatformDataHarfBuzz\\.cpp$'],
            ['include', 'platform/graphics/harfbuzz/HarfBuzzFace\\.(cpp|h)$'],
            ['include', 'platform/graphics/harfbuzz/HarfBuzzFaceSkia\\.cpp$'],
            ['include', 'platform/graphics/harfbuzz/HarfBuzzShaper\\.(cpp|h)$'],
            ['include', 'platform/graphics/harfbuzz/HarfBuzzShaperBase\\.(cpp|h)$'],
            ['include', 'platform/graphics/opentype/OpenTypeTypes\\.h$'],
            ['include', 'platform/graphics/opentype/OpenTypeVerticalData\\.(cpp|h)$'],
            ['include', 'platform/graphics/skia/SimpleFontDataSkia\\.cpp$'],
          ],
          'dependencies': [
            #'<(DEPTH)/dep/harfbuzz-ng/harfbuzz.gyp:harfbuzz-ng',
          ],
        }, { # OS!="linux" and OS!="android"
          'sources/': [
            ['exclude', 'Harfbuzz[^/]+\\.(cpp|h)$'],
          ],
        }],
        ['OS!="linux"', {
          'sources/': [
            ['exclude', 'Linux\\.cpp$'],
          ],
        }],
        ['toolkit_uses_gtk == 1', {
          'sources/': [
            # Cherry-pick files excluded by the broader regular expressions above.
            ['include', 'platform/chromium/KeyCodeConversionGtk\\.cpp$'],
          ],
        }, { # toolkit_uses_gtk==0
          'sources/': [
            ['exclude', 'Gtk\\.cpp$'],
          ],
        }],
        ['OS=="mac"', {
          'dependencies': [
            #'<(DEPTH)/dep/harfbuzz-ng/harfbuzz.gyp:harfbuzz-ng',
          ],
          'sources': [
            'editing/SmartReplaceCF.cpp',
          ],
          'sources/': [
            # Additional files from the WebCore Mac build that are presently
            # used in the WebCore Chromium Mac build too.

            # The Mac build is USE(CF).
            ['include', 'CF\\.cpp$'],

            # Use native Mac font code from core.
            ['include', 'platform/(graphics/)?mac/[^/]*Font[^/]*\\.(cpp|mm?)$'],
            ['include', 'platform/graphics/mac/ComplexText[^/]*\\.(cpp|h)$'],

            # We can use this for the fast Accelerate.framework FFT.
            ['include', 'platform/audio/mac/FFTFrameMac\\.cpp$'],

            # Cherry-pick some files that can't be included by broader regexps.
            # Some of these are used instead of Chromium platform files, see
            # the specific exclusions in the "exclude" list below.
            ['include', 'platform/graphics/mac/ColorMac\\.mm$'],
            ['include', 'platform/graphics/mac/ComplexTextControllerCoreText\\.mm$'],
            ['include', 'platform/graphics/mac/FloatPointMac\\.mm$'],
            ['include', 'platform/graphics/mac/FloatRectMac\\.mm$'],
            ['include', 'platform/graphics/mac/FloatSizeMac\\.mm$'],
            ['include', 'platform/graphics/mac/GlyphPageTreeNodeMac\\.cpp$'],
            ['include', 'platform/graphics/mac/IntPointMac\\.mm$'],
            ['include', 'platform/graphics/mac/IntRectMac\\.mm$'],
            ['include', 'platform/mac/BlockExceptions\\.mm$'],
            ['include', 'platform/mac/KillRingMac\\.mm$'],
            ['include', 'platform/mac/LocalCurrentGraphicsContext\\.mm$'],
            ['include', 'platform/mac/NSScrollerImpDetails\\.mm$'],
            ['include', 'platform/mac/ScrollbarThemeMac\\.mm$'],
            ['include', 'platform/mac/ScrollbarThemeMacNonOverlayAPI\\.mm$'],
            ['include', 'platform/mac/ScrollbarThemeMacOverlayAPI\\.mm$'],
            ['include', 'platform/mac/ScrollAnimatorMac\\.mm$'],
            ['include', 'platform/mac/ScrollElasticityController\\.mm$'],
            ['include', 'platform/mac/ThemeMac\\.h$'],
            ['include', 'platform/mac/ThemeMac\\.mm$'],
            ['include', 'platform/mac/WebCoreSystemInterface\\.h$'],
            ['include', 'platform/mac/WebCoreTextRenderer\\.mm$'],
            ['include', 'platform/text/mac/ShapeArabic\\.c$'],
            ['include', 'platform/text/mac/String(Impl)?Mac\\.mm$'],
            # Use USE_NEW_THEME on Mac.
            ['include', 'platform/Theme\\.cpp$'],

            # We use LocaleMac.mm instead of LocaleICU.cpp in order to
            # apply system locales.
            ['exclude', 'platform/text/LocaleICU\\.cpp$'],
            ['exclude', 'platform/text/LocaleICU\\.h$'],
            ['include', 'platform/text/mac/LocaleMac\\.mm$'],

            # The Mac uses platform/mac/KillRingMac.mm instead of the dummy
            # implementation.
            ['exclude', 'platform/KillRingNone\\.cpp$'],

            # The Mac currently uses FontCustomPlatformDataMac.cpp,
            # included by regex above, instead.
            ['exclude', 'platform/graphics/skia/FontCustomPlatformDataSkia\\.cpp$'],

            # The Mac currently uses ScrollbarThemeChromiumMac.mm, which is not
            # related to ScrollbarThemeChromium.cpp.
            ['exclude', 'platform/chromium/ScrollbarThemeChromium\\.cpp$'],

            # Mac uses only ScrollAnimatorMac.
            ['exclude', 'platform/ScrollAnimatorNone\\.cpp$'],
            ['exclude', 'platform/ScrollAnimatorNone\\.h$'],

            ['include', 'platform/graphics/cg/FloatPointCG\\.cpp$'],
            ['include', 'platform/graphics/cg/FloatRectCG\\.cpp$'],
            ['include', 'platform/graphics/cg/FloatSizeCG\\.cpp$'],
            ['include', 'platform/graphics/cg/IntPointCG\\.cpp$'],
            ['include', 'platform/graphics/cg/IntRectCG\\.cpp$'],
            ['include', 'platform/graphics/cg/IntSizeCG\\.cpp$'],
            ['exclude', 'platform/graphics/skia/FontCacheSkia\\.cpp$'],
            ['exclude', 'platform/graphics/skia/GlyphPageTreeNodeSkia\\.cpp$'],
            ['exclude', 'platform/graphics/skia/SimpleFontDataSkia\\.cpp$'],

            # Mac uses Harfbuzz.
            ['include', 'platform/graphics/harfbuzz/HarfBuzzFaceCoreText\\.cpp$'],
            ['include', 'platform/graphics/harfbuzz/HarfBuzzFace\\.(cpp|h)$'],
            ['include', 'platform/graphics/harfbuzz/HarfBuzzShaper\\.(cpp|h)$'],
            ['include', 'platform/graphics/harfbuzz/HarfBuzzShaperBase\\.(cpp|h)$'],
          ],
        },{ # OS!="mac"
          'sources/': [
            ['exclude', 'Mac\\.(cpp|mm?)$'],

            # FIXME: We will eventually compile this too, but for now it's
            # only used on mac.
            ['exclude', 'platform/graphics/FontPlatformData\\.cpp$'],
          ],
        }],
        ['OS != "linux" and OS != "mac" and (OS != "win" or (OS == "win" and "ENABLE_GDI_FONTS_ON_WINDOWS=1" in feature_defines))', {
          'sources/': [
            ['exclude', 'VDMX[^/]+\\.(cpp|h)$'],
          ],
        }],
        ['OS=="win"', {
          'sources/': [
            ['exclude', 'Posix\\.cpp$'],

            ['include', '/opentype/'],
            ['include', '/SkiaFontWin\\.cpp$'],
            ['include', '/TransparencyWin\\.cpp$'],

            ['exclude', 'platform/graphics/skia/FontCacheSkia\\.cpp$'],

            # Windows currently uses FontCustomPlatformDataWin.cpp instead.
            ['exclude', 'platform/graphics/skia/FontCustomPlatformDataSkia\\.cpp$'],
            ['include', 'platform/graphics/win/FontCustomPlatformDataWin\\.cpp$'],

            # SystemInfo.cpp is useful and we don't want to copy it.
            ['include', 'platform/win/SystemInfo\\.cpp$'],

            ['exclude', 'platform/text/LocaleICU\\.cpp$'],
            ['exclude', 'platform/text/LocaleICU\\.h$'],
            ['include', 'platform/text/win/LocaleWin\.cpp$'],
            ['include', 'platform/text/win/LocaleWin\.h$'],
          ],
          'conditions': [
            ['"ENABLE_GDI_FONTS_ON_WINDOWS=1" in feature_defines', {
              'sources/': [
                ['exclude', 'platform/graphics/skia/SimpleFontDataSkia\\.cpp$'],
                ['exclude', 'platform/graphics/skia/GlyphPageTreeNodeSkia\\.cpp$'],
              ],
            },{ # ENABLE_GDI_FONTS_ON_WINDOWS!=1
              'sources/': [
                ['exclude', 'platform/graphics/chromium/SimpleFontDataChromiumWin\\.cpp$'],
                ['include', 'platform/graphics/skia/SimpleFontDataSkia\\.cpp$'],
                ['include', 'platform/graphics/skia/GlyphPageTreeNodeSkia\\.cpp$'],
                ['exclude', 'platform/graphics/chromium/GlyphPageTreeNodeChromiumWin\\.cpp$'],
              ],
            }],
          ],
        },{ # OS!="win"
          'sources/': [
            ['exclude', 'Win\\.cpp$'],
            ['exclude', '/(Windows|Uniscribe)[^/]*\\.cpp$'],
            ['include', 'platform/graphics/opentype/OpenTypeSanitizer\\.cpp$'],
          ],
        }],
        ['OS=="win" and chromium_win_pch==1', {
          'sources/': [
            ['include', '<(DEPTH)/third_party/WebKit/Source/build/win/Precompile.cpp'],
          ],
        }],
        ['OS=="android"', {
          'sources/': [
            ['include', 'platform/chromium/ClipboardChromiumLinux\\.cpp$'],
            ['include', 'platform/chromium/FileSystemChromiumLinux\\.cpp$'],
            ['include', 'platform/graphics/chromium/GlyphPageTreeNodeLinux\\.cpp$'],
            ['include', 'platform/graphics/chromium/VDMXParser\\.cpp$'],
            ['exclude', 'platform/graphics/skia/FontCacheSkia\\.cpp$'],
          ],
        }, { # OS!="android"
          'sources/': [
            ['exclude', 'Android\\.cpp$'],
          ],
        }],
      ],
    },
    {
      'target_name': 'webcore_platform_geometry',
      'type': 'static_library',
      'dependencies': [
        'webcore_prerequisites',
      ],
      'sources': [
        '<@(webcore_platform_geometry_files)',
      ],
    },
    # The *NEON.cpp files fail to compile when -mthumb is passed. Force
    # them to build in ARM mode.
    # See https://bugs.webkit.org/show_bug.cgi?id=62916.
    {
      'target_name': 'webcore_arm_neon',
      'conditions': [
        ['target_arch=="arm"', {
          'type': 'static_library',
          'dependencies': [
            'webcore_prerequisites',
          ],
          'hard_dependency': 1,
          'sources': [
            '<@(webcore_files)',
          ],
          'sources/': [
            ['exclude', '.*'],
            ['include', 'platform/graphics/cpu/arm/filters/.*NEON\\.(cpp|h)'],
          ],
          'cflags': ['-marm'],
          'conditions': [
            ['OS=="android"', {
              'cflags!': ['-mthumb'],
            }],
          ],
        },{  # target_arch!="arm"
          'type': 'none',
        }],
      ],
    },
    {
      'target_name': 'webcore_rendering',
      'type': 'static_library',
      'dependencies': [
        'webcore_prerequisites',
      ],
      'sources': [
        '<@(webcore_files)',
      ],
      'sources/': [
        ['exclude', '.*'],
        ['include', 'rendering/'],

        # FIXME: Figure out how to store these patterns in a variable.
        ['exclude', '(cf|cg|mac|opentype|svg|win)/'],
        ['exclude', '(?<!Chromium)(CF|CG|Mac|OpenType|Win)\\.(cpp|mm?)$'],
        # Previous rule excludes things like ChromiumFooWin, include those.
        ['include', 'rendering/.*Chromium.*\\.(cpp|mm?)$'],
      ],
      'conditions': [
        # Shard this taret into parts to work around linker limitations.
        # on link time code generation builds.
        ['OS=="win" and buildtype=="Official"', {
          'msvs_shard': 5,
        }],
        ['use_default_render_theme==0', {
          'sources/': [
            ['exclude', 'rendering/RenderThemeChromiumDefault.*'],
          ],
        }],
        ['use_default_render_theme==1', {
          'sources/': [
            ['exclude', 'RenderThemeChromiumWin.*'],
          ],
        }],
        ['OS=="win"', {
          'sources/': [
            ['exclude', 'Posix\\.cpp$'],
          ],
        },{ # OS!="win"
          'sources/': [
            ['exclude', 'Win\\.cpp$'],
          ],
        }],
        ['OS=="win" and chromium_win_pch==1', {
          'sources/': [
            ['include', '<(DEPTH)/third_party/WebKit/Source/build/win/Precompile.cpp'],
          ],
        }],
        ['OS=="mac"', {
          'sources/': [
            # RenderThemeChromiumSkia is not used on mac since RenderThemeChromiumMac
            # does not reference the Skia code that is used by Windows, Linux and Android.
            ['exclude', 'rendering/RenderThemeChromiumSkia\\.cpp$'],
            # RenderThemeChromiumFontProvider is used by RenderThemeChromiumSkia.
            ['exclude', 'rendering/RenderThemeChromiumFontProvider\\.cpp'],
            ['exclude', 'rendering/RenderThemeChromiumFontProvider\\.h'],
          ],
        },{ # OS!="mac"
          'sources/': [['exclude', 'Mac\\.(cpp|mm?)$']]
        }],
        ['OS == "android" and target_arch == "ia32" and gcc_version == 46', {
          # Due to a bug in gcc 4.6 in android NDK, we get warnings about uninitialized variable.
          'cflags': ['-Wno-uninitialized'],
        }],
        ['OS != "linux"', {
          'sources/': [
            ['exclude', 'Linux\\.cpp$'],
          ],
        }],
        ['toolkit_uses_gtk == 0', {
          'sources/': [
            ['exclude', 'Gtk\\.cpp$'],
          ],
        }],
        ['OS=="android"', {
          'sources/': [
            ['include', 'rendering/RenderThemeChromiumFontProviderLinux\\.cpp$'],
            ['include', 'rendering/RenderThemeChromiumDefault\\.cpp$'],
          ],
        },{ # OS!="android"
          'sources/': [
            ['exclude', 'Android\\.cpp$'],
          ],
        }],
      ],
    },
    {
      'target_name': 'webcore_remaining',
      'type': 'static_library',
      'dependencies': [
        'webcore_prerequisites',
      ],
      'sources': [
        '<@(webcore_files)',
      ],
      'sources/': [
        ['exclude', 'rendering/'],

        # FIXME: Figure out how to store these patterns in a variable.
        ['exclude', '(cf|cg|mac|opentype|svg|win)/'],
        ['exclude', '(?<!Chromium)(CF|CG|Mac|OpenType|Win)\\.(cpp|mm?)$'],
      ],
      'conditions': [
        # Shard this taret into parts to work around linker limitations.
        # on link time code generation builds.
        ['OS=="win" and buildtype=="Official"', {
          'msvs_shard': 19,
        }],
        ['OS != "linux"', {
          'sources/': [
            ['exclude', 'Linux\\.cpp$'],
          ],
        }],
        ['toolkit_uses_gtk == 0', {
          'sources/': [
            ['exclude', 'Gtk\\.cpp$'],
          ],
        }],
        ['OS=="android"', {
          'cflags': [
            # WebCore does not work with strict aliasing enabled.
            # https://bugs.webkit.org/show_bug.cgi?id=25864
            '-fno-strict-aliasing',
          ],
        }, { # OS!="android"
          'sources/': [['exclude', 'Android\\.cpp$']]
        }],
        ['OS!="mac"', {
          'sources/': [['exclude', 'Mac\\.(cpp|mm?)$']]
        }],
        ['OS=="win" and chromium_win_pch==1', {
          'sources/': [
            ['include', '<(DEPTH)/third_party/WebKit/Source/build/win/Precompile.cpp'],
          ],
        }],
      ],
      # Disable c4267 warnings until we fix size_t to int truncations.
      'msvs_disabled_warnings': [ 4267, 4334, ],
    },
    {
      'target_name': 'webcore',
      'type': 'none',
      'dependencies': [
        'webcore_dom',
        'webcore_html',
        'webcore_platform',
        'webcore_platform_geometry',
        'webcore_remaining',
        'webcore_rendering',
        'webcore_svg',
        # Exported.
        'webcore_derived',
        '../wtf/wtf.gyp:wtf',
        '<(DEPTH)/skia/skia.gyp:skia',
        '<(DEPTH)/third_party/npapi/npapi.gyp:npapi',
        '<(DEPTH)/third_party/qcms/qcms.gyp:qcms',
        '<(DEPTH)/url/url.gyp:url_lib',
        '<(DEPTH)/v8/tools/gyp/v8.gyp:v8',
      ],
      'export_dependent_settings': [
        '../wtf/wtf.gyp:wtf',
        'webcore_derived',
        '<(DEPTH)/skia/skia.gyp:skia',
        '<(DEPTH)/third_party/npapi/npapi.gyp:npapi',
        '<(DEPTH)/third_party/qcms/qcms.gyp:qcms',
        '<(DEPTH)/url/url.gyp:url_lib',
        '<(DEPTH)/v8/tools/gyp/v8.gyp:v8',
      ],
      'direct_dependent_settings': {
        'include_dirs': [
          '<@(webcore_include_dirs)',
        ],
      },
      'conditions': [
        ['target_arch=="arm"', {
          'dependencies': [
            'webcore_arm_neon',
          ],
        }],
        ['OS=="mac"', {
          'direct_dependent_settings': {
            'include_dirs': [
              '../WebKit/mac/WebCoreSupport',
            ],
          },
        }],
        ['OS=="linux" and "WTF_USE_WEBAUDIO_IPP=1" in feature_defines', {
          'link_settings': {
            'ldflags': [
              '<!@(pkg-config --libs-only-L ipp)',
            ],
            'libraries': [
              '-lipps -lippcore',
            ],
          },
        }],
        # Use IPP static libraries for x86 Android.
        ['OS=="android" and "WTF_USE_WEBAUDIO_IPP=1" in feature_defines', {
          'link_settings': {
            'libraries': [
               '<!@(pkg-config --libs ipp|sed s/-L//)/libipps_l.a',
               '<!@(pkg-config --libs ipp|sed s/-L//)/libippcore_l.a',
            ]
          },
        }],
      ],
    },
    {
      'target_name': 'webcore_test_support',
      'type': 'static_library',
      'dependencies': [
        '../config.gyp:config',
        'webcore',
      ],
      'defines': [
        'WEBKIT_IMPLEMENTATION=1',
        'INSIDE_WEBKIT',
      ],
      'include_dirs': [
        '<(bindings_dir)/v8',  # FIXME: Remove once http://crbug.com/236119 is fixed.
        'testing',
        'testing/v8',
      ],
      'sources': [
        '<@(webcore_test_support_files)',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8GCObservation.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8GCObservation.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8MallocStatistics.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8MallocStatistics.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8TypeConversions.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8TypeConversions.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8Internals.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8Internals.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8InternalProfilers.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8InternalProfilers.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8InternalSettings.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8InternalSettings.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8InternalSettingsGenerated.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8InternalSettingsGenerated.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8InternalRuntimeFlags.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8InternalRuntimeFlags.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8LayerRect.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8LayerRect.h',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8LayerRectList.cpp',
        '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings/V8LayerRectList.h',
      ],
      'sources/': [
        ['exclude', 'testing/js'],
      ],
    },
  ],  # targets
}
