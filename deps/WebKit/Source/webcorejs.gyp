{
  'includes': [
    '../../../build/features.gypi',
    'WebCore/Modules/modules.gypi',
    #'WebCore/bindings/bindings.gypi',
    'WebCore/webcorejs.gypi'
    #'core.gypi',
  ],

  'variables': {
    'enable_wexit_time_destructors': 1,
    'webcore_include_dirs': [
      #'../..',
      #'..',
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
        #'WebCore/bindings/derived_sources.gyp:bindings_derived_sources',
        'webcorejs_derived_sources.gyp:make_derived_sources',
        'wtf.gyp:wtf',
        '<(DEPTH)/deps/skia/gyp/skia_lib.gyp:skia_lib',
        '<(DEPTH)/deps/iccjpeg/iccjpeg.gyp:iccjpeg',
        '<(DEPTH)/deps/libpng/libpng.gyp:libpng',
        # No support for decoding new image formats.
        ##'<(DEPTH)/deps/libwebp/libwebp.gyp:libwebp',
        '<(DEPTH)/deps/libxml2/libxml.gyp:libxml',
        '<(DEPTH)/deps/libxslt/libxslt.gyp:libxslt',
        '<(DEPTH)/deps/qcms/qcms.gyp:qcms',
        # No SQL support, not sure on the URL bindings and use turbo jpeg.
        #'<(DEPTH)/deps/sqlite/sqlite.gyp:sqlite',
        #'<(DEPTH)/deps/url/url.gyp:url_lib',
        '<(DEPTH)/deps/libjpeg_turbo/libjpeg.gyp:libjpeg',
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
        #'<@(derived_sources_aggregate_files)',
        #'<@(bindings_files)',

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
        #'WebCore/bindings/derived_sources.gyp:bindings_derived_sources',
        #'webcorejs_derived_sources.gyp:make_derived_sources',
        'wtf.gyp:wtf',
        #'../config.gyp:config',
        #'../weborigin/weborigin.gyp:weborigin',
        #'<(DEPTH)/gpu/gpu.gyp:gles2_c_lib',
        '<(DEPTH)/deps/skia/gyp/skia_lib.gyp:skia_lib',
        '<(DEPTH)/deps/iccjpeg/iccjpeg.gyp:iccjpeg',
        '<(DEPTH)/deps/libpng/libpng.gyp:libpng',
        #'<(DEPTH)/deps/libwebp/libwebp.gyp:libwebp',
        '<(DEPTH)/deps/libxml2/libxml.gyp:libxml',
        '<(DEPTH)/deps/libxslt/libxslt.gyp:libxslt',
        '<(DEPTH)/deps/qcms/qcms.gyp:qcms',
        #'<(DEPTH)/deps/sqlite/sqlite.gyp:sqlite',
        '<(DEPTH)/deps/zlib/zlib.gyp:zlib',
        # not really sure if we should add this or not.
        #'<(DEPTH)/deps/url/url.gyp:url_lib',
        # ---- WE MAY BE MISSING IMPORTANT JSTYPES HERE ----
        '<(DEPTH)/deps/libjpeg_turbo/libjpeg.gyp:libjpeg',
      ],
      'export_dependent_settings': [
        'wtf.gyp:wtf',
        #'../config.gyp:config',
        #'<(DEPTH)/gpu/gpu.gyp:gles2_c_lib',
        '<(DEPTH)/deps/skia/gyp/skia_lib.gyp:skia_lib',
        '<(DEPTH)/deps/iccjpeg/iccjpeg.gyp:iccjpeg',
        '<(DEPTH)/deps/libpng/libpng.gyp:libpng',
        #'<(DEPTH)/deps/libwebp/libwebp.gyp:libwebp',
        '<(DEPTH)/deps/libxml2/libxml.gyp:libxml',
        '<(DEPTH)/deps/libxslt/libxslt.gyp:libxslt',
        #'<(DEPTH)/deps/npapi/npapi.gyp:npapi',
        #'<(DEPTH)/deps/ots/ots.gyp:ots',
        '<(DEPTH)/deps/qcms/qcms.gyp:qcms',
        #'<(DEPTH)/deps/sqlite/sqlite.gyp:sqlite',
        '<(DEPTH)/deps/zlib/zlib.gyp:zlib',
        #'<(DEPTH)/deps/url/url.gyp:url_lib',
        # ---- WE MAY BE MISSING IMPORTANT JSTYPES HERE ----
        '<(DEPTH)/deps/libjpeg_turbo/libjpeg.gyp:libjpeg',
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
      },
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
        'wtf.gyp:wtf',
        '<(DEPTH)/deps/skia/gyp/skia_lib.gyp:skia_lib',
        '<(DEPTH)/deps/qcms/qcms.gyp:qcms',
        #'<(DEPTH)/url/url.gyp:url_lib',
        #'<(DEPTH)/v8/tools/gyp/v8.gyp:v8',
      ],
      'export_dependent_settings': [
        'wtf.gyp:wtf',
        'webcore_derived',
        '<(DEPTH)/deps/skia/gyp/skia_lib.gyp:skia_lib',
        '<(DEPTH)/deps/qcms/qcms.gyp:qcms',
        #'<(DEPTH)/url/url.gyp:url_lib',
        #'<(DEPTH)/v8/tools/gyp/v8.gyp:v8',
      ],
      'direct_dependent_settings': {
        'include_dirs': [
          '<@(webcore_include_dirs)',
        ],
      },
    },
  ],  # targets
}
