REM Generate libxslt/xsltconfig.h.
REM We don't need config.h on windows, so we delete that file.

cd %~dp0\..\win32
cscript //E:jscript configure.js compiler=msvc
del ..\config.h
