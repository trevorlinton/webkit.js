{
  'includes': [
    'features.gypi',
    'sources.gypi'
  ],

  'variables': {
    'enable_wexit_time_destructors': 1,
    'webcore_include_dirs': [
      '<(SHARED_INTERMEDIATE_DIR)/WebCore',
      '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings',
    ],
  },

  'target_defaults': {
    'variables': {
      'optimize': '2',
    },
  },

  'targets': [
    {
      'target_name': 'webcore_css',
      'type': 'static_library',
      'dependencies': [
      ],
      'sources': [
        '<@(webcore_css_files)'
      ],
      'sources!': [
        # exclusions? or forced inclusions? probably exclusions...
      ],
      'sources/': [
        #['exclude', '.*'],
        #['include', 'rendering/'],

        # FIXME: Figure out how to store these patterns in a variable.
        #['exclude', '(cf|cg|mac|opentype|svg|win)/'],
        #['exclude', '(?<!Chromium)(CF|CG|Mac|OpenType|Win)\\.(cpp|mm?)$'],
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
        'include_dirs': [
          'deps/WebKit/Source/WebCore/css/',
        ],
      },
    },
  ],  # targets
}
