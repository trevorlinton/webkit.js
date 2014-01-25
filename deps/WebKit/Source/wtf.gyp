{
  'includes': [
    '../../../build/features.gypi',
    'WTF/wtf/wtf.gypi',
  ],
  'targets': [
    {
      # This target sets up defines and includes that are required by WTF and
      # its dependents.
      'target_name': 'wtf_config',
      'type': 'none',
      'direct_dependent_settings': {
        'defines': [
          # Import features_defines from features.gypi
          '<@(feature_defines)',
        ],
        'conditions': [
          ['OS=="win"', {
            'defines': [
              '__STD_C',
              '_CRT_SECURE_NO_DEPRECATE',
              '_SCL_SECURE_NO_DEPRECATE',
              'CRASH=__debugbreak',
            ],
            'include_dirs': [
              'os-win32',
            ],
          }],
          # FIXME: This should go in a header, not in the GYP file.
          ['OS=="mac"', {
            'defines': [
              'WTF_USE_NEW_THEME=1',
            ],
          }],
        ],
      },
    },
    {
      'target_name': 'wtf',
      'type': '<(component)',
      'include_dirs': [
        'WTF',
      ],
      'dependencies': [
          'wtf_config',
          #'<(DEPTH)/deps/icu/icu.gyp:icui18n',
          #'<(DEPTH)/deps/icu/icu.gyp:icuuc',
      ],
      'sources': [
        '<@(wtf_files)',
      ],
      'defines': [
        'WTF_IMPLEMENTATION=1',
      ],
      'direct_dependent_settings': {
        'include_dirs': [
          'WTF',
        ],
      },
      'export_dependent_settings': [
        'wtf_config',
        #'<(DEPTH)/deps/icu/icu.gyp:icui18n',
        #'<(DEPTH)/deps/icu/icu.gyp:icuuc',
      ],
      'sources/': [
        ['exclude', 'Mac\\.mm$'],
        # mac is the only OS that uses WebKit's copy of TCMalloc.
        ['exclude', 'TC.*\\.(cpp|h)$'],
      ]
    },
  ]
}
