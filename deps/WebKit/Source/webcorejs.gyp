{
  'includes': [
    'features.gypi',
    #'WebCore/Modules/modules.gypi',
    #'WebCore/bindings/bindings.gypi',
    'WebCore/sources.gypi'
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
        '<@(webcore_rendering_files)',
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
    #{
    #  'target_name': 'webcore_remaining',
    #  'type': 'static_library',
    #  'dependencies': [
    #    'webcore_prerequisites',
    #  ],
    #  'sources': [
    #    '<@(webcore_files)',
    #  ],
    #  'sources/': [
    #    ['exclude', 'rendering/'],

        # FIXME: Figure out how to store these patterns in a variable.
        #   ['exclude', '(cf|cg|mac|opentype|svg|win)/'],
        #['exclude', '(?<!Chromium)(CF|CG|Mac|OpenType|Win)\\.(cpp|mm?)$'],
        #],
        #},
    {
      'target_name': 'webcore',
      'type': 'none',
      'dependencies': [
        'webcore_dom',
        'webcore_html',
        #'webcore_platform',
        'webcore_platform_geometry',
        #'webcore_remaining',
        'webcore_rendering',
        'webcore_svg',
        # Exported.
        'webcore_derived',
        'wtf.gyp:wtf',
        #'<(DEPTH)/deps/skia/gyp/skia_lib.gyp:skia_lib',
        #'<(DEPTH)/deps/qcms/qcms.gyp:qcms',
        #'<(DEPTH)/url/url.gyp:url_lib',
        #'<(DEPTH)/v8/tools/gyp/v8.gyp:v8',
      ],
      'export_dependent_settings': [
        'wtf.gyp:wtf',
        #'webcore_derived',
        #'<(DEPTH)/deps/skia/gyp/skia_lib.gyp:skia_lib',
        #'<(DEPTH)/deps/qcms/qcms.gyp:qcms',
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
