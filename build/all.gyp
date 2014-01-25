{
  'includes': [
    'features.gypi',
    'sources.gypi',
    'common.gypi',
  ],

  'variables': {
    'enable_wexit_time_destructors': 1,
    'webcore_include_dirs': [
      '<(SHARED_INTERMEDIATE_DIR)/WebCore',
      '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings',
      '<(DEPTH)/deps/WebKit/Source/WebCore/dom',
      '<(DEPTH)/deps/WebKit/Source/WebCore/css',
      '<(DEPTH)/deps/WebKit/Source/WebCore/icu',
      '<(DEPTH)/deps/WebKit/Source/WebCore/html',
      '<(DEPTH)/deps/WebKit/Source/WebCore/html/parser',
      '<(DEPTH)/deps/WebKit/Source/WebCore/loader',
      '<(DEPTH)/deps/WebKit/Source/WebCore/loader/cache',
      '<(DEPTH)/deps/WebKit/Source/WebCore/editing',
      '<(DEPTH)/deps/WebKit/Source/WebCore/inspector',
      '<(DEPTH)/deps/WebKit/Source/WebCore/style',
      '<(DEPTH)/deps/WebKit/Source/WebCore/storage',
      '<(DEPTH)/deps/WebKit/Source/WebCore/page',
      '<(DEPTH)/deps/WebKit/Source/WebCore/fileapi',
      '<(DEPTH)/deps/WebKit/Source/WebCore/platform',
      '<(DEPTH)/deps/WebKit/Source/WebCore/platform/animation',
      '<(DEPTH)/deps/WebKit/Source/WebCore/platform/network',
      '<(DEPTH)/deps/WebKit/Source/WebCore/platform/network/curl',
      '<(DEPTH)/deps/WebKit/Source/WebCore/platform/graphics',
      '<(DEPTH)/deps/WebKit/Source/WebCore/platform/graphics/transforms',
      '<(DEPTH)/deps/WebKit/Source/WebCore/platform/text',
      '<(DEPTH)/deps/WebKit/Source/WebCore/rendering',
      '<(DEPTH)/deps/WebKit/Source/WebCore/rendering/style',
      '<(DEPTH)/deps/WebKit/Source/WebCore/svg',
      '<(DEPTH)/deps/WebKit/Source/WebCore/svg/animation',
      '<(DEPTH)/deps/WebKit/Source/WebCore/svg/properties',
      '<(DEPTH)/deps/WebKit/Source/WebCore/svg/graphics',
      '<(DEPTH)/deps/WebKit/Source/WebCore',
      '<(DEPTH)/deps/WebKit/Source/WebCore/xml',
      '<(DEPTH)/deps/WebKit/Source/WebCore/Modules/websockets/',
      '<(DEPTH)/webcore_bindings',
      '<(DEPTH)/webcore_bindings/derived',
      '<(DEPTH)/webcore_bindings/js',
    ],
  },

  'target_defaults': {
    'variables': {
      'optimize': '2',
    },
  },

  'targets': [
    {
      'target_name': 'webkitjs',
      'type': 'static_library',
      'dependencies': [
      ],
      'sources': [
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'export_dependent_settings': [
      ],
      'direct_dependent_settings': {
        'defines': [
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
          'INSIDE_WEBKIT',
        ],
      }
    },
    {
      'target_name': 'build_tools',
      'type': 'none',
      'sources': [
        '<(DEPTH)/deps/WebKit/Source/WebCore/make-export-file-generator',
        '<(DEPTH)/deps/WebKit/Source/WebCore/WebCore.exp.in',
      ]
    },
    {
      'target_name': 'webcore_xml',
      'type': 'static_library',
      'defines': [
        'CC=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/emcc',
        'CXX=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/em++',
        '<@(feature_defines)',
      ],
      'dependencies': [
      ],
      'sources': [
        '<@(webcore_xml_files)'
      ],
      'include_dirs': [
        '<(DEPTH)/deps/libxml2/include',
        '<@(webcore_include_dirs)',
      ],
      'sources!': [
      ],
      'sources/': [
      ],
      'export_dependent_settings': [
      ],
      'direct_dependent_settings': {
        'defines': [
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
          'INSIDE_WEBKIT',
        ],
      },
    },
    {
      'target_name': 'webcore_wtf',
      'type': 'static_library',
      'defines': [
        'CC=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/emcc',
        'CXX=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/em++',
      ],
      'dependencies': [
      ],
      'sources': [
        '<@(webcore_wtf_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'sources!': [
      ],
      'sources/': [
      ],
      'export_dependent_settings': [
      ],
      'direct_dependent_settings': {
        'defines': [
          '<@(feature_defines)',
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
        ],
      },
    },
    {
      'target_name': 'webcore_svg',
      'type': 'static_library',
      'defines': [
        'CC=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/emcc',
        'CXX=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/em++',
      ],
      'dependencies': [
      ],
      'sources': [
        '<@(webcore_svg_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'sources!': [
      ],
      'sources/': [
      ],
      'export_dependent_settings': [
      ],
      'direct_dependent_settings': {
        'defines': [
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
        'INSIDE_WEBKIT',
        ],
      },
    },
    {
      'target_name': 'webcore_loader',
      'type': 'static_library',
      'defines': [
        'CC=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/emcc',
        'CXX=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/em++',
      ],
      'dependencies': [
      ],
      'sources': [
        '<@(webcore_loader_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'sources!': [
      ],
      'sources/': [
      ],
      'export_dependent_settings': [
      ],
      'direct_dependent_settings': {
        'defines': [
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
        ],
      },
    },
    {
      'target_name': 'webcore_html',
      'type': 'static_library',
      'defines': [
        'CC=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/emcc',
        'CXX=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/em++',
      ],
      'dependencies': [
      ],
      'sources': [
        '<@(webcore_html_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'sources!': [
      ],
      'sources/': [
      ],
      'export_dependent_settings': [
      ],
      'direct_dependent_settings': {
        'defines': [
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
        ],
      },
    },
    {
      'target_name': 'webcore_dom',
      'type': 'static_library',
      'defines': [
        'CC=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/emcc',
        'CXX=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/em++',
      ],
      'dependencies': [
      ],
      'sources': [
        '<@(webcore_dom_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'sources!': [
      ],
      'sources/': [
      ],
      'export_dependent_settings': [
      ],
      'direct_dependent_settings': {
        'defines': [
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
        ],
      },
    },
    {
      'target_name': 'webcore_css',
      'type': 'static_library',
      'defines': [
        'CC=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/emcc',
        'CXX=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/em++',
      ],
      'dependencies': [
      ],
      'sources': [
        '<@(webcore_css_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'sources!': [
      ],
      'sources/': [
      ],
      'export_dependent_settings': [
      ],
      'direct_dependent_settings': {
        'defines': [
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
        ],
      },
    },
    {
      'target_name': 'webcore_rendering',
      'type': 'static_library',
      'defines': [
        'CC=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/emcc',
        'CXX=/Users/tlinton/Library/Emscripten/emscripten/1.8.2/em++',
      ],
      'dependencies': [
      ],
      'sources': [
        '<@(webcore_rendering_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'sources!': [
      # exclusions? or forced inclusions? probably exclusions...
      ],
      'sources/': [
      #['exclude', '.*'],
      #['include', 'rendering/'],

      # FIXME: Figure out how to store these patterns in a variable.
      ['exclude', '(cf|cg|mac|opentype|svg|win)/'],
      ['exclude', '(?<!Chromium)(CF|CG|Mac|OpenType|Win)\\.(cpp|mm?)$'],
      # Previous rule excludes things like ChromiumFooWin, include those.
      #['include', 'rendering/.*Chromium.*\\.(cpp|mm?)$'],
      ],
      'export_dependent_settings': [
      ],
      'direct_dependent_settings': {
        'defines': [
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
          'INSIDE_WEBKIT',
        ],
      },
    },
  ],  # targets
}
