{
    {
      'target_name': 'webcore_platform',
      'type': 'static_library',
      'defines': [
        '<@(feature_defines)',
        '<@(emscripten_defines)',
      ],
      'sources': [
        '<@(webcore_platform_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
        '<(DEPTH)/deps/WebKit/Source/WTF/wtf'
      ],
      'cc':'<(emscripten_cc)',
      'cxx':'<(emscripten_cxx)',
      'cflags':['<(emscripten_cflags)'],
    },
    {
      'target_name': 'webcore_svg',
      'type': 'static_library',
      'defines': [
        '<@(feature_defines)',
        '<@(emscripten_defines)',
      ],
      'sources': [
        '<@(webcore_svg_files)'
      ],
      'include_dirs': [
        '<(DEPTH)/deps/libxml2/include',
        '<@(webcore_include_dirs)',
      ],
      'cc':'<(emscripten_cc)',
      'cxx':'<(emscripten_cxx)',
      'cflags':['<(emscripten_cflags)'],
    },
    {
      'target_name': 'webcore_loader',
      'type': 'static_library',
      'defines': [
        '<@(feature_defines)',
        '<@(emscripten_defines)',
      ],
      'sources': [
        '<@(webcore_loader_files)'
      ],
      'include_dirs': [
        '<(DEPTH)/deps/libxml2/include',
        '<@(webcore_include_dirs)',
      ],
      'cc':'<(emscripten_cc)',
      'cxx':'<(emscripten_cxx)',
      'cflags':['<(emscripten_cflags)'],
    },
    {
      'target_name': 'webcore_html',
      'type': 'static_library',
      'defines': [
        '<@(feature_defines)',
        '<@(emscripten_defines)',
      ],
      'sources': [
        '<@(webcore_html_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'cc':'<(emscripten_cc)',
      'cxx':'<(emscripten_cxx)',
      'cflags':['<(emscripten_cflags)'],
    },
    {
      'target_name': 'webcore_dom',
      'type': 'static_library',
      'defines': [
        '<@(feature_defines)',
        '<@(emscripten_defines)',
      ],
      'sources': [
        '<@(webcore_dom_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
        '<(DEPTH)/deps/libxml2/include'
      ],
      'cc':'<(emscripten_cc)',
      'cxx':'<(emscripten_cxx)',
      'cflags':['<(emscripten_cflags)'],
    },
    {
      'target_name': 'webcore_css',
      'type': 'static_library',
      'defines': [
        '<@(feature_defines)',
        '<@(emscripten_defines)',
      ],
      'sources': [
        '<@(webcore_css_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'cc':'<(emscripten_cc)',
      'cxx':'<(emscripten_cxx)',
      'cflags':['<(emscripten_cflags)'],
    },
    {
      'target_name': 'webcore_page',
      'type': 'static_library',
      'defines': [
        '<@(feature_defines)',
        '<@(emscripten_defines)',
      ],
      'sources': [
        '<@(webcore_page_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'cc':'<(emscripten_cc)',
      'cxx':'<(emscripten_cxx)',
      'cflags':['<(emscripten_cflags)'],
    },
    {
      'target_name': 'webcore_style',
      'type': 'static_library',
      'defines': [
        '<@(feature_defines)',
        '<@(emscripten_defines)',
      ],
      'sources': [
        '<@(webcore_style_files)'
      ],
      'include_dirs': [
        '<@(webcore_include_dirs)',
      ],
      'cc':'<(emscripten_cc)',
      'cxx':'<(emscripten_cxx)',
      'cflags':['<(emscripten_cflags)'],
    },
    {
      'target_name': 'webcore_rendering',
      'type': 'static_library',
      'defines': [
        '<@(feature_defines)',
        '<@(emscripten_defines)',
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
          '<@(feature_defines)',
          'WEBCORE_NAVIGATOR_VENDOR="True Interactions."',
          'WEBKIT_IMPLEMENTATION=1',
          'INSIDE_WEBKIT',
        ],
      },
      'cc':'<(emscripten_cc)',
      'cxx':'<(emscripten_cxx)',
      'cflags':['<(emscripten_cflags)'],
    },
    {
      'target_name': 'webcore_xml',
      'type': 'static_library',
      'defines': [
        '<@(feature_defines)',
        '<@(emscripten_defines)',
      ],
      'sources': [
        '<@(webcore_xml_files)'
      ],
      'include_dirs': [
        '<(DEPTH)/deps/libxml2/include',
        '<@(webcore_include_dirs)',
      ],
      'cc':'<(emscripten_cc)',
      'cxx':'<(emscripten_cxx)',
      'cflags':['<(emscripten_cflags)'],
    },
}
