#!/bin/sh
# ./gyplist.sh deprecated_perl_core_idl_files ../deps/WebKit/Source/WebCore/ '.idl'
# ./gyplist.sh python_core_idl_files 
echo "{"
echo "    'variables': {"
./gyplist.sh webcore_dom_files .. '/deps/WebKit/Source/WebCore/dom/'
./gyplist.sh webcore_html_files .. '/deps/WebKit/Source/WebCore/html/'
./gyplist.sh webcore_platform_files .. '/deps/WebKit/Source/WebCore/platform/'
./gyplist.sh webcore_svg_files .. '/deps/WebKit/Source/WebCore/svg/'
./gyplist.sh webcore_wtf_files .. '/deps/WebKit/Source/WTF/wtf/'
./gyplist.sh webcore_rendering_files .. '/deps/WebKit/Source/WebCore/rendering/'
./gyplist.sh webcore_xml_files .. '/deps/WebKit/Source/WebCore/xml/'
./gyplist.sh webcore_storage_files .. '/deps/WebKit/Source/WebCore/storage/'
./gyplist.sh webcore_style_files .. '/deps/WebKit/Source/WebCore/style/'
./gyplist.sh webcore_page_files .. '/deps/WebKit/Source/WebCore/page/'
./gyplist.sh webcore_loader_files .. '/deps/WebKit/Source/WebCore/loader/'
./gyplist.sh webcore_css_files .. '/deps/WebKit/Source/WebCore/css/'
./gyplist.sh webcore_platform_geometry_files .. '/deps/WebKit/Source/WebCore/platform/geometry/'
./gyplist.sh webcore_derived_files .. '/webcore_bindings/'
# ./gyplist.sh ffmpeg .. '/deps/ffmpeg/'
./gyplist.sh freetype2 .. '/deps/freetype2'
./gyplist.sh libjpeg_turbo .. '/deps/libjpeg_turbo'
./gyplist.sh libxml2 .. '/deps/libxml2'
./gyplist.sh libxslt .. '/deps/libxslt'
echo "    },"
echo "}"
