#!/bin/sh
# base
cd $1
# target from base
find . -type fl | grep $2 | egrep $3 |  sed 's/^.\/\(.*\)$/\1/'

# moved into the gyp files... don't do this here.
# grep -v '/doc/' | grep -v 'ICU' | grep -v 'SSLHandle.cpp' | grep -v 'GraphicsContext3DOpenGL.cpp' | grep -v '/leveldb/' | grep -v 'FontPlatformDataFreeType.cpp' | grep -v 'FontCacheFreeType.cpp' | grep -v 'GlyphPageTreeNodeFreeType.cpp' | grep -v '/opentype/' | grep -v -i 'skia' | grep -v '/harfbuzz/' | grep -v 'FontCustomPlatformDataFreeType.cpp' | grep -v 'SimpleFontDataFreeType.cpp' | grep -v '/glx/' | grep -v '/cg/' | grep -v '/ca/' | grep -v 'avfoundation/' | grep -v 'JSAbstractView' | grep -v 'InspectorWebBackendDispatchers' |grep -v 'ExportFileGenerator.cpp' | grep -v 'TCSystemAlloc' | grep -v 'IOS.' | grep -v 'Mac.' | grep -v 'Win.' | grep -v 'wince/' | grep -v 'avfoundation/' | grep -v 'FastMalloc' | grep -v 'ThemeSafari' | grep -v 'PlugInElement' | grep -v 'Modules/' | grep -v 'AllInOne' | grep -v 'loader/EmptyClients.cpp' | grep -v 'soup/' | grep -v 'ios/' | grep -v 'nix/' | grep -v 'WinCE' |  grep -v 'Gtk' | grep -v 'blackberry' | grep -v 'MediaAllInOne.cpp' | grep -v 'win/' | grep -v 'linux/' | grep -v 'glib/' | grep -v 'cocoa/' | grep -v 'cairo/' | grep -v 'gtk/' | grep -v 'cf/' | grep -v 'mac/' | grep -v 'efl/' | grep -v 'cf/' | grep -v 'CF.cpp' |
