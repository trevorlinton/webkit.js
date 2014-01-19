#
# Copyright (C) 2013 Google Inc. All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are
# met:
#
#     * Redistributions of source code must retain the above copyright
# notice, this list of conditions and the following disclaimer.
#     * Redistributions in binary form must reproduce the above
# copyright notice, this list of conditions and the following disclaimer
# in the documentation and/or other materials provided with the
# distribution.
#     * Neither the name of Google Inc. nor the names of its
# contributors may be used to endorse or promote products derived from
# this software without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
# "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
# LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
# A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
# OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
# LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
# DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
# THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
# (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
#

{
  'includes': [
    'WebCore/webcorejs.gypi',
    'WebCore/bindings/bindings.gypi',
    '../../../build/features.gypi',
  ],

  'targets': [
    {
      'target_name': 'generate_test_support_idls',
      'type': 'none',
      'actions': [
        {
          'action_name': 'Settings',
          'inputs': [
            'page/make_settings.pl',
            'page/Settings.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/SettingsMacros.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InternalSettingsGenerated.idl',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InternalSettingsGenerated.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InternalSettingsGenerated.h',
          ],
          'action': [
            'python',
            'scripts/action_makenames.py',
            '<@(_outputs)',
            '--',
            '<@(_inputs)',
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'InternalRuntimeFlags',
          'inputs': [
            '<@(scripts_for_in_files)',
            'scripts/make_internal_runtime_flags.py',
            'page/RuntimeEnabledFeatures.in',
            'scripts/templates/InternalRuntimeFlags.h.tmpl',
            'scripts/templates/InternalRuntimeFlags.idl.tmpl',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/InternalRuntimeFlags.idl',
            '<(SHARED_INTERMEDIATE_DIR)/blink/InternalRuntimeFlags.h',
          ],
          'action': [
            'python',
            'scripts/make_internal_runtime_flags.py',
            'page/RuntimeEnabledFeatures.in',
            '--output_dir',
            '<(SHARED_INTERMEDIATE_DIR)/blink',
          ],
        },
      ]
    },
    {
      'target_name': 'make_derived_sources',
      'type': 'none',
      'hard_dependency': 1,
      'dependencies': [
        'generate_test_support_idls',
      ],
      'sources': [
        # bison rule
        '<(SHARED_INTERMEDIATE_DIR)/blink/CSSGrammar.y',
        'xml/XPathGrammar.y',

        # gperf rule
        'platform/ColorData.gperf',
      ],
      'actions': [
      #  {
      #    'action_name': 'generateV8ArrayBufferViewCustomScript',
      #    'inputs': [
      #      '<(bindings_dir)/v8/custom/V8ArrayBufferViewCustomScript.js',
      #    ],
      #    'outputs': [
      #      '<(SHARED_INTERMEDIATE_DIR)/blink/V8ArrayBufferViewCustomScript.h',
      #    ],
      #    'msvs_cygwin_shell': 0,
      #    'action': [
      #      '<(perl_exe)',
      #      'inspector/xxd.pl',
      #      'V8ArrayBufferViewCustomScript_js',
      #      '<@(_inputs)',
      #      '<@(_outputs)'
      #    ],
      #    'message': 'Generating V8ArrayBufferViewCustomScript.h from V8ArrayBufferViewCustomScript.js',
      #  },
        {
          'action_name': 'generateXMLViewerCSS',
          'inputs': [
            'xml/XMLViewer.css',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/XMLViewerCSS.h',
          ],
          'msvs_cygwin_shell': 0,
          'action': [
            '<(perl_exe)',
            'inspector/xxd.pl',
            'XMLViewer_css',
            '<@(_inputs)',
            '<@(_outputs)'
          ],
        },
        {
          'action_name': 'generateXMLViewerJS',
          'inputs': [
            'xml/XMLViewer.js',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/XMLViewerJS.h',
          ],
          'msvs_cygwin_shell': 0,
          'action': [
            '<(perl_exe)',
            'inspector/xxd.pl',
            'XMLViewer_js',
            '<@(_inputs)',
            '<@(_outputs)'
          ],
        },
        {
          'action_name': 'HTMLEntityTable',
          'inputs': [
            'html/parser/create-html-entity-table',
            'html/parser/HTMLEntityNames.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/HTMLEntityTable.cpp'
          ],
          'action': [
            'python',
            'html/parser/create-html-entity-table',
            '-o',
            '<@(_outputs)',
            '<@(_inputs)'
          ],
        },
        {
          'action_name': 'RuntimeEnabledFeatures',
          'inputs': [
            '<@(scripts_for_in_files)',
            'scripts/make_runtime_features.py',
            'page/RuntimeEnabledFeatures.in',
            'scripts/templates/RuntimeEnabledFeatures.cpp.tmpl',
            'scripts/templates/RuntimeEnabledFeatures.h.tmpl',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/RuntimeEnabledFeatures.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/RuntimeEnabledFeatures.h',
          ],
          'action': [
            'python',
            'scripts/make_runtime_features.py',
            'page/RuntimeEnabledFeatures.in',
            '--output_dir',
            '<(SHARED_INTERMEDIATE_DIR)/blink',
          ],
        },
        {
          'action_name': 'CSSPropertyNames',
          'variables': {
            'in_files': [
              'css/CSSPropertyNames.in',
              'css/SVGCSSPropertyNames.in',
            ],
          },
          'inputs': [
            '<@(scripts_for_in_files)',
            'scripts/make_css_property_names.py',
            '<@(in_files)'
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/CSSPropertyNames.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/CSSPropertyNames.h',
          ],
          'action': [
            'python',
            'scripts/make_css_property_names.py',
            '<@(in_files)',
            '--output_dir',
            '<(SHARED_INTERMEDIATE_DIR)/blink',
            '--defines', '<(feature_defines)',
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'StylePropertyShorthand',
          'inputs': [
            '<@(scripts_for_in_files)',
            'scripts/make_style_shorthands.py',
            'css/CSSShorthands.in',
            'scripts/templates/StylePropertyShorthand.h.tmpl',
            'scripts/templates/StylePropertyShorthand.cpp.tmpl',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/StylePropertyShorthand.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/StylePropertyShorthand.h',
          ],
          'action': [
            'python',
            'scripts/make_style_shorthands.py',
            'css/CSSShorthands.in',
            '--output_dir',
            '<(SHARED_INTERMEDIATE_DIR)/blink',
          ],
        },
        {
          'action_name': 'StyleBuilder',
          'inputs': [
            '<@(scripts_for_in_files)',
            'scripts/make_style_builder.py',
            'css/CSSProperties.in',
            'scripts/templates/StyleBuilder.cpp.tmpl',
            'scripts/templates/StyleBuilderFunctions.h.tmpl',
            'scripts/templates/StyleBuilderFunctions.cpp.tmpl',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/StyleBuilder.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/StyleBuilderFunctions.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/StyleBuilderFunctions.cpp',
          ],
          'action': [
            'python',
            'scripts/make_style_builder.py',
            'css/CSSProperties.in',
            '--output_dir',
            '<(SHARED_INTERMEDIATE_DIR)/blink',
          ],
        },
        {
          'action_name': 'CSSValueKeywords',
          'variables': {
            'in_files': [
              'css/CSSValueKeywords.in',
              'css/SVGCSSValueKeywords.in',
            ],
          },
          'inputs': [
            '<@(scripts_for_in_files)',
            'scripts/make_css_value_keywords.py',
            '<@(in_files)'
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/CSSValueKeywords.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/CSSValueKeywords.h',
          ],
          'action': [
             'scripts/make_css_value_keywords.py',
             '<@(in_files)',
             '--output_dir',
             '<(SHARED_INTERMEDIATE_DIR)/blink',
            '--defines', '<(feature_defines)',
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'HTMLNames',
          'inputs': [
            'scripts/Hasher.pm',
            'scripts/StaticString.pm',
            'scripts/make_names.pl',
            'html/HTMLTagNames.in',
            'html/HTMLAttributeNames.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/HTMLNames.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/HTMLNames.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/HTMLElementFactory.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/V8HTMLElementWrapperFactory.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/V8HTMLElementWrapperFactory.h',
          ],
          'action': [
            'python',
            'scripts/action_makenames.py',
            '<@(_outputs)',
            '--',
            '<@(_inputs)',
            '--',
            '--factory',
            '--extraDefines', '<(feature_defines)'
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'FontFamilyNames',
          'inputs': [
            'scripts/Hasher.pm',
            'scripts/StaticString.pm',
            'scripts/make_names.pl',
            'css/FontFamilyNames.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/FontFamilyNames.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/FontFamilyNames.h',
          ],
          'action': [
            'python',
            'scripts/action_makenames.py',
            '<@(_outputs)',
            '--',
            '<@(_inputs)',
            '--',
            '--fonts',
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'SVGNames',
          'inputs': [
            'scripts/Hasher.pm',
            'scripts/StaticString.pm',
            'scripts/make_names.pl',
            'svg/svgtags.in',
            'svg/svgattrs.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/SVGNames.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/SVGNames.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/SVGElementFactory.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/SVGElementFactory.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/V8SVGElementWrapperFactory.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/V8SVGElementWrapperFactory.h',
          ],
          'action': [
            'python',
            'scripts/action_makenames.py',
            '<@(_outputs)',
            '--',
            '<@(_inputs)',
            '--',
            '--factory',
            '--extraDefines', '<(feature_defines)'
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'EventFactory',
          'inputs': [
            '<@(scripts_for_in_files)',
            'scripts/make_event_factory.py',
            '<(SHARED_INTERMEDIATE_DIR)/blink/EventInterfaces.in',
            'dom/EventAliases.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/Event.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/EventHeaders.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/EventInterfaces.h',
          ],
          'action': [
            'python',
            'scripts/make_event_factory.py',
            '<(SHARED_INTERMEDIATE_DIR)/blink/EventInterfaces.in',
            'dom/EventAliases.in',
            '--output_dir',
            '<(SHARED_INTERMEDIATE_DIR)/blink',
          ],
        },
        {
          'action_name': 'EventTargetFactory',
          'inputs': [
            '<@(scripts_for_in_files)',
            'scripts/make_event_factory.py',
            'dom/EventTargetFactory.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/EventTargetHeaders.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/EventTargetInterfaces.h',
          ],
          'action': [
            'python',
            'scripts/make_event_factory.py',
            'dom/EventTargetFactory.in',
            '--output_dir',
            '<(SHARED_INTERMEDIATE_DIR)/blink',
          ],
        },
        {
          'action_name': 'MathMLNames',
          'inputs': [
            'scripts/Hasher.pm',
            'scripts/StaticString.pm',
            'scripts/make_names.pl',
            'mathml/mathtags.in',
            'mathml/mathattrs.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/MathMLNames.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/MathMLNames.h',
          ],
          'action': [
            'python',
            'scripts/action_makenames.py',
            '<@(_outputs)',
            '--',
            '<@(_inputs)',
            '--',
            '--extraDefines', '<(feature_defines)'
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'UserAgentStyleSheets',
          'variables': {
            'scripts': [
              'css/make-css-file-arrays.pl',
              'scripts/preprocessor.pm',
            ],
            'stylesheets': [
              'css/html.css',
              'css/quirks.css',
              'css/view-source.css',
              'css/themeChromium.css',
              'css/themeChromiumAndroid.css',
              'css/themeChromiumLinux.css',
              'css/themeChromiumSkia.css',
              'css/themeWin.css',
              'css/themeWinQuirks.css',
              'css/svg.css',
              'css/mediaControls.css',
              'css/mediaControlsAndroid.css',
              'css/fullscreen.css',
            ],
          },
          'inputs': [
            '<@(scripts)',
            '<@(stylesheets)'
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/UserAgentStyleSheets.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/UserAgentStyleSheetsData.cpp',
          ],
          'action': [
            'python',
            'scripts/action_useragentstylesheets.py',
            '<@(_outputs)',
            '<@(stylesheets)',
            '--',
            '<@(scripts)',
            '--',
            '--defines', '<(feature_defines)',
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'FetchInitiatorTypeNames',
          'inputs': [
            'scripts/Hasher.pm',
            'scripts/StaticString.pm',
            'scripts/make_names.pl',
            'loader/cache/FetchInitiatorTypeNames.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/FetchInitiatorTypeNames.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/FetchInitiatorTypeNames.h',
          ],
          'action': [
            'python',
            'scripts/action_makenames.py',
            '<@(_outputs)',
            '--',
            '<@(_inputs)',
            '--',
            '--resourceTypes',
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'PickerCommon',
          'inputs': [
            'Resources/pagepopups/pickerCommon.css',
            'Resources/pagepopups/pickerCommon.js',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/PickerCommon.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/PickerCommon.cpp',
          ],
          'action': [
            'python',
            'scripts/make-file-arrays.py',
            '--out-h=<(SHARED_INTERMEDIATE_DIR)/blink/PickerCommon.h',
            '--out-cpp=<(SHARED_INTERMEDIATE_DIR)/blink/PickerCommon.cpp',
            '<@(_inputs)',
          ],
        },
        {
          'action_name': 'CalendarPicker',
          'inputs': [
            'Resources/pagepopups/calendarPicker.css',
            'Resources/pagepopups/calendarPicker.js',
            'Resources/pagepopups/chromium/calendarPickerChromium.css',
            'Resources/pagepopups/chromium/pickerCommonChromium.css',
            'Resources/pagepopups/suggestionPicker.css',
            'Resources/pagepopups/suggestionPicker.js',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/CalendarPicker.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/CalendarPicker.cpp',
          ],
          'action': [
            'python',
            'scripts/make-file-arrays.py',
            '--condition=ENABLE(CALENDAR_PICKER)',
            '--out-h=<(SHARED_INTERMEDIATE_DIR)/blink/CalendarPicker.h',
            '--out-cpp=<(SHARED_INTERMEDIATE_DIR)/blink/CalendarPicker.cpp',
            '<@(_inputs)',
          ],
        },
        {
          'action_name': 'ColorSuggestionPicker',
          'inputs': [
            'Resources/pagepopups/colorSuggestionPicker.css',
            'Resources/pagepopups/colorSuggestionPicker.js',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/ColorSuggestionPicker.h',
            '<(SHARED_INTERMEDIATE_DIR)/blink/ColorSuggestionPicker.cpp',
          ],
          'action': [
            'python',
            'scripts/make-file-arrays.py',
            '--out-h=<(SHARED_INTERMEDIATE_DIR)/blink/ColorSuggestionPicker.h',
            '--out-cpp=<(SHARED_INTERMEDIATE_DIR)/blink/ColorSuggestionPicker.cpp',
            '<@(_inputs)',
          ],
        },
        {
          'action_name': 'XLinkNames',
          'inputs': [
            'scripts/Hasher.pm',
            'scripts/StaticString.pm',
            'scripts/make_names.pl',
            'svg/xlinkattrs.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/XLinkNames.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/XLinkNames.h',
          ],
          'action': [
            'python',
            'scripts/action_makenames.py',
            '<@(_outputs)',
            '--',
            '<@(_inputs)',
            '--',
            '--extraDefines', '<(feature_defines)'
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'XMLNSNames',
          'inputs': [
            'scripts/Hasher.pm',
            'scripts/StaticString.pm',
            'scripts/make_names.pl',
            'xml/xmlnsattrs.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/XMLNSNames.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/XMLNSNames.h',
          ],
          'action': [
            'python',
            'scripts/action_makenames.py',
            '<@(_outputs)',
            '--',
            '<@(_inputs)',
            '--',
            '--extraDefines', '<(feature_defines)'
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'XMLNames',
          'inputs': [
            'scripts/Hasher.pm',
            'scripts/StaticString.pm',
            'scripts/make_names.pl',
            'xml/xmlattrs.in',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/XMLNames.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/XMLNames.h',
          ],
          'action': [
            'python',
            'scripts/action_makenames.py',
            '<@(_outputs)',
            '--',
            '<@(_inputs)',
            '--',
            '--extraDefines', '<(feature_defines)'
          ],
          'msvs_cygwin_shell': 1,
        },
        {
          'action_name': 'preprocess_grammar',
          'inputs': [
            'css/CSSGrammar.y.in',
            'css/CSSGrammar.y.includes',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/CSSGrammar.y',
          ],
          'action': [
            '<(perl_exe)',
            '-Iscripts',
            'css/makegrammar.pl',
            '--outputDir',
            '<(SHARED_INTERMEDIATE_DIR)/blink',
            '<@(_inputs)',
          ],
        },
        {
          'action_name': 'MakeTokenMatcher',
          'inputs': [
            '<@(scripts_for_in_files)',
            '../core/scripts/make_token_matcher.py',
            '../core/css/CSSParser-in.cpp',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/CSSParser.cpp',
          ],
          'action': [
            'python',
            '../core/scripts/make_token_matcher.py',
            '../core/css/CSSParser-in.cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/CSSParser.cpp',
          ],
        },
      ],
      'rules': [
        {
          'rule_name': 'bison',
          'extension': 'y',
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/blink/<(RULE_INPUT_ROOT).cpp',
            '<(SHARED_INTERMEDIATE_DIR)/blink/<(RULE_INPUT_ROOT).h'
          ],
          'action': [
            'python',
            'scripts/rule_bison.py',
            '<(RULE_INPUT_PATH)',
            '<(SHARED_INTERMEDIATE_DIR)/blink',
            '<(bison_exe)',
          ],
          'msvs_cygwin_shell': 1,
        },
      
      ],
    },
  ],
}
