
{
  'includes': [
    #'../build/win/precompile.gypi',
    '../webcorejs.gypi',
    '../Modules/modules.gypi',
    'bindings.gypi',
  ],

  'variables': {
    'deprecated_perl_idl_files': [
      '<@(deprecated_perl_core_idl_files)',
      '<@(deprecated_perl_modules_idl_files)',
      '<@(deprecated_perl_svg_idl_files)',
    ],
    'python_idl_files': [
      '<@(python_core_idl_files)',
      '<@(python_modules_idl_files)',
      '<@(python_svg_idl_files)',
    ],
    'perl_and_python_idl_files': [
        '<@(deprecated_perl_idl_files)',
        '<@(python_idl_files)',
    ],
    'webcore_test_support_idl_files': [
        '<@(deprecated_perl_webcore_test_support_idl_files)',
        '<@(python_webcore_test_support_idl_files)',
    ],
    'code_generator_template_files': [
        'templates/callback_interface.cpp',
        'templates/callback_interface.h',
        'templates/interface.cpp',
        'templates/interface.h',
    ],

    'bindings_output_dir': '<(SHARED_INTERMEDIATE_DIR)/WebCore/bindings',
    'generated_global_constructors_idl_files': [
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/WindowConstructors.idl',
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/WorkerGlobalScopeConstructors.idl',
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/SharedWorkerGlobalScopeConstructors.idl',
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/DedicatedWorkerGlobalScopeConstructors.idl',
    ],

    'conditions': [
      # The bindings generator can not write generated files if they are identical
      # to the already existing file – that way they don't need to be recompiled.
      # However, a reverse dependency having a newer timestamp than a
      # generated binding can confuse some build systems, so only use this on
      # ninja which explicitly supports this use case (gyp turns all actions into
      # ninja restat rules).
      ['"<(GENERATOR)"=="ninja"', {
        'write_file_only_if_changed': '--write-file-only-if-changed 1',
      },{
        'write_file_only_if_changed': '--write-file-only-if-changed 0',
      }],
    ],
  },

  'target_defaults': {
    'variables': {
      'optimize': 'max',
    },
  },

  'targets': [{
    'target_name': 'interface_dependencies',
    'type': 'none',
    'actions': [{
      'action_name': 'compute_interface_dependencies',
      'variables': {
        # Write sources into a file, so that the action command line won't
        # exceed OS limits.
        'idl_files_list': '<|(idl_files_list.tmp <@(perl_and_python_idl_files))',
      },
      'inputs': [
        'scripts/compute_dependencies.py',
        '<(idl_files_list)',
        '<!@(cat <(idl_files_list))',
       ],
       'outputs': [
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/InterfaceDependencies.txt',
         '<@(generated_global_constructors_idl_files)',
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/EventInterfaces.in',
       ],
       'msvs_cygwin_shell': 0,
       'action': [
         'python',
         'scripts/compute_dependencies.py',
         '--idl-files-list',
         '<(idl_files_list)',
         '--interface-dependencies-file',
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/InterfaceDependencies.txt',
         '--window-constructors-file',
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/WindowConstructors.idl',
         '--workerglobalscope-constructors-file',
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/WorkerGlobalScopeConstructors.idl',
         '--sharedworkerglobalscope-constructors-file',
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/SharedWorkerGlobalScopeConstructors.idl',
         '--dedicatedworkerglobalscope-constructors-file',
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/DedicatedWorkerGlobalScopeConstructors.idl',
         '--event-names-file',
         '<(SHARED_INTERMEDIATE_DIR)/WebCore/EventInterfaces.in',
         '<@(write_file_only_if_changed)',
       ],
       'message': 'Resolving partial interfaces dependencies in all IDL files',
      }]
    },
    {
      'target_name': 'python_bindings_sources',
      'type': 'none',
      # The 'binding' rule generates .h files, so mark as hard_dependency, per:
      # https://code.google.com/p/gyp/wiki/InputFormatReference#Linking_Dependencies
      'hard_dependency': 1,
      'dependencies': [
        'interface_dependencies',
        '../../webcorejs_derived_sources.gyp:generate_test_support_idls',
      ],
      'sources': [
        '<@(python_idl_files)',
        '<@(python_webcore_test_support_idl_files)',
      ],
      'rules': [{
        'rule_name': 'python_binding',
        'extension': 'idl',
        'msvs_external_rule': 1,
        'inputs': [
          'scripts/idl_compiler.py',
          '<(DEPTH)/third_party/ply/lex.py',
          '<(DEPTH)/third_party/ply/yacc.py',
          '<(DEPTH)/tools/idl_parser/idl_lexer.py',
          '<(DEPTH)/tools/idl_parser/idl_node.py',
          '<(DEPTH)/tools/idl_parser/idl_parser.py',
          'scripts/blink_idl_lexer.py',
          'scripts/blink_idl_parser.py',
          'scripts/code_generator_v8.py',
          'scripts/idl_definitions.py',
          'scripts/idl_definitions_builder.py',
          'scripts/idl_reader.py',
          'scripts/idl_validator.py',
          'scripts/interface_dependency_resolver.py',
          'scripts/IDLAttributes.txt',
          '<@(code_generator_template_files)',
          # FIXME: If the dependency structure changes, we rebuild all files,
          # since we're not computing dependencies file-by-file in the build.
          '<(SHARED_INTERMEDIATE_DIR)/WebCore/InterfaceDependencies.txt',
          # FIXME: Similarly, if any partial interface changes, rebuild
          # everything, since every IDL potentially depends on them, because
          # we're not computing dependencies file-by-file.
         # '<!@pymod_do_main(list_idl_files_with_partial_interface <@(perl_and_python_idl_files))',
          # Generated IDLs are all partial interfaces, hence everything
          # potentially depends on them.
          #'<@(generated_global_constructors_idl_files)',
        ],
        'outputs': [
          '<(bindings_output_dir)/V8<(RULE_INPUT_ROOT).cpp',
          '<(bindings_output_dir)/V8<(RULE_INPUT_ROOT).h',
        ],
        'variables': {
          # IDL include paths. The generator will search recursively for IDL
          # files under these locations.
          'generator_include_dirs': [
            '--include', '../core',
            '--include', '../modules',
            '--include', '<(SHARED_INTERMEDIATE_DIR)/WebCore',
          ],
          # Hook for embedders to specify extra directories to find IDL files.
          'extra_blink_generator_include_dirs%': [],
        },
        'msvs_cygwin_shell': 0,
        # sanitize-win-build-log.sed uses a regex which matches this command
        # line (Python script + .idl file being processed).
        # Update that regex if command line changes (other than changing flags)
        'action': [
          'python',
          'scripts/idl_compiler.py',
          '--output-dir',
          '<(bindings_output_dir)',
          '--idl-attributes-file',
          'scripts/IDLAttributes.txt',
          '<@(generator_include_dirs)',
          '<@(extra_blink_generator_include_dirs)',
          '--interface-dependencies-file',
          '<(SHARED_INTERMEDIATE_DIR)/blink/InterfaceDependencies.txt',
          '--additional-idl-files',
          '<(webcore_test_support_idl_files)',
          '<@(write_file_only_if_changed)',
          '<(RULE_INPUT_PATH)',
        ],
        'message': 'Generating binding from <(RULE_INPUT_PATH)',
      }],
    },
    {
      'target_name': 'bindings_derived_sources',
      'type': 'none',
      'dependencies': [
        'interface_dependencies',
        #'deprecated_perl_bindings_sources',
        'python_bindings_sources',
      ],
      'actions': [{
        'action_name': 'derived_sources_all_in_one',
        'inputs': [
          '../core/scripts/action_derivedsourcesallinone.py',
          '<(SHARED_INTERMEDIATE_DIR)/WebCore/InterfaceDependencies.txt',
        ],
        'outputs': [
          #'<@(derived_sources_aggregate_files)',
        ],
        'action': [
          'python',
          '../core/scripts/action_derivedsourcesallinone.py',
          '<(SHARED_INTERMEDIATE_DIR)/WebCore/InterfaceDependencies.txt',
          '--',
          #'<@(derived_sources_aggregate_files)',
        ],
        'message': 'Generating bindings derived sources',
      }],
    },
  ],
}
