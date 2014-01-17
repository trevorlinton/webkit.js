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
      'target_name': 'inspector_protocol_sources',
      'type': 'none',
      'dependencies': [
        'generate_inspector_protocol_version'
      ],
      'actions': [
        {
          'action_name': 'generateInspectorProtocolBackendSources',
          'inputs': [
             The python script in action below.
            '../JavaScriptCore/inspector/CodeGeneratorInspector.py',
             The helper script imported by CodeGeneratorInspector.py.
            '../JavaScriptCore/inspector/CodeGeneratorInspectorStrings.py',
             Input file for the script.
            '../devtools/protocol.json',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorBackendDispatcher.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorBackendDispatcher.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorFrontend.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorFrontend.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorTypeBuilder.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorTypeBuilder.h',
          ],
          'variables': {
            'generator_include_dirs': [
            ],
          },
          'action': [
            'python',
            'inspector/CodeGeneratorInspector.py',
            '../devtools/protocol.json',
            '--output_dir', '<(SHARED_INTERMEDIATE_DIR)/blink',
          ],
          'message': 'Generating Inspector protocol backend sources from protocol.json',
          'msvs_cygwin_shell': 1,
        },
      ]
    },
    {
      'target_name': 'inspector_instrumentation_sources',
      'type': 'none',
      'dependencies': [],
      'actions': [
        {
          'action_name': 'generateInspectorInstrumentation',
          'inputs': [
            # The python script in action below.
            'inspector/CodeGeneratorInstrumentation.py',
            # Input file for the script.
            'inspector/InspectorInstrumentation.idl',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorCanvasInstrumentationInl.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorConsoleInstrumentationInl.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorDatabaseInstrumentationInl.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorInstrumentationInl.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorOverridesInl.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InstrumentingAgentsInl.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorInstrumentationImpl.cpp',
          ],
          'action': [
            'python',
            'inspector/CodeGeneratorInstrumentation.py',
            'inspector/InspectorInstrumentation.idl',
            '--output_dir', '<(SHARED_INTERMEDIATE_DIR)/blink',
          ],
          'message': 'Generating Inspector instrumentation code from InspectorInstrumentation.idl',
          'msvs_cygwin_shell': 1,
        }
      ]
    },
    {
      'target_name': 'generate_inspector_protocol_version',
      'type': 'none',
      'actions': [
         {
          'action_name': 'generateInspectorProtocolVersion',
          'inputs': [
            'inspector/generate-inspector-protocol-version',
            '../devtools/protocol.json',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorProtocolVersion.h',
          ],
          'variables': {
            'generator_include_dirs': [
            ],
          },
          'action': [
            'python',
            'inspector/generate-inspector-protocol-version',
            '-o',
            '<@(_outputs)',
            '<@(_inputs)'
          ],
          'message': 'Validate inspector protocol for backwards compatibility and generate version file',
        }
      ]
    },
    {
      'target_name': 'inspector_overlay_page',
      'type': 'none',
      'variables': {
        'input_file_path': 'inspector/InspectorOverlayPage.html',
        'output_file_path': '<(SHARED_INTERMEDIATE_DIR)/blink/InspectorOverlayPage.h',
        'character_array_name': 'InspectorOverlayPage_html',
      },
      'includes': [ 'ConvertFileToHeaderWithCharacterArray.gypi' ],
    },
    {
      'target_name': 'injected_canvas_script_source',
      'type': 'none',
      'variables': {
        'input_file_path': 'inspector/InjectedScriptCanvasModuleSource.js',
        'output_file_path': '<(SHARED_INTERMEDIATE_DIR)/blink/InjectedScriptCanvasModuleSource.h',
        'character_array_name': 'InjectedScriptCanvasModuleSource_js',
      },
      'includes': [ 'ConvertFileToHeaderWithCharacterArray.gypi' ],
    },
    {
      'target_name': 'injected_script_source',
      'type': 'none',
      'variables': {
        'input_file_path': 'inspector/InjectedScriptSource.js',
        'output_file_path': '<(SHARED_INTERMEDIATE_DIR)/blink/InjectedScriptSource.h',
        'character_array_name': 'InjectedScriptSource_js',
      },
      'includes': [ 'ConvertFileToHeaderWithCharacterArray.gypi' ],
    },
    {
      'target_name': 'debugger_script_source',
      'type': 'none',
      'variables': {
        'input_file_path': '<(bindings_dir)/v8/DebuggerScript.js',
        'output_file_path': '<(SHARED_INTERMEDIATE_DIR)/blink/DebuggerScriptSource.h',
        'character_array_name': 'DebuggerScriptSource_js',
      },
      'includes': [ 'ConvertFileToHeaderWithCharacterArray.gypi' ],
    },
  ],
}