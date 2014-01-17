# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

{
  'targets': [
    {
      'target_name': 'qcms',
      'product_name': 'qcms',
      'type': 'static_library',
      'sources': [
        'src/chain.c',
        'src/chain.h',
        'src/iccread.c',
        'src/matrix.c',
        'src/matrix.h',
        'src/qcms.h',
        'src/qcmsint.h',
        'src/qcmstypes.h',
        'src/transform.c',
        'src/transform_util.c',
        'src/transform_util.h',
      ],
      'direct_dependent_settings': {
        'include_dirs': [
          './src',
        ],
      },
      # Warning (sign-conversion) fixed upstream by large refactoring. Can be
      # removed on next roll.
      'msvs_disabled_warnings': [ 4018 ],

      'variables': {
        'conditions': [
          # For x86, turn off SSE2 for non-CrOS *nix Chrome builds.
          # TODO(jschuh): Get MMX enabled on Win64. crbug.com/179657
          ['disable_sse2==1 or \
            (branding=="Chrome" and target_arch=="ia32" and \
             os_posix==1 and OS!="mac" and chromeos==0) or \
            (OS=="win" and target_arch=="x64")', {
            'qcms_use_sse': 0,
          }, {
            'qcms_use_sse': 1,
          }],
        ],
      },

      'conditions': [
        [ 'qcms_use_sse==1', {
          'defines': [
            'SSE2_ENABLE',
          ],
          'sources': [
            'src/transform-sse1.c',
            'src/transform-sse2.c',
          ],
        }],
      ],
    },
  ],
}

# Local Variables:
# tab-width:2
# indent-tabs-mode:nil
# End:
# vim: set expandtab tabstop=2 shiftwidth=2:
