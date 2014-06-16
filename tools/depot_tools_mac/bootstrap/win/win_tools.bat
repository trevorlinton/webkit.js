@echo off
:: Copyright (c) 2012 The Chromium Authors. All rights reserved.
:: Use of this source code is governed by a BSD-style license that can be
:: found in the LICENSE file.

:: This script will try to find if svn and python are accessible and it not,
:: it will try to download it and 'install' it in depot_tools.

:: Sadly, we can't use SETLOCAL here otherwise it ERRORLEVEL is not correctly
:: returned.

set WIN_TOOLS_ROOT_URL=https://src.chromium.org/svn/trunk/tools
:: It used to be %~dp0 but ADODB.Stream may fail to write to this directory if
:: the directory DACL is set to elevated integrity level.
set ZIP_DIR=%TEMP%

:: Get absolute root directory (.js scripts don't handle relative paths well).
pushd %~dp0..\..
set WIN_TOOLS_ROOT_DIR=%CD%
popd

if "%1" == "force" (
  set WIN_TOOLS_FORCE=1
  shift /1
)


:PYTHON_CHECK
if not exist "%WIN_TOOLS_ROOT_DIR%\python276_bin" goto :PY27_INSTALL
if not exist "%WIN_TOOLS_ROOT_DIR%\python.bat" goto :PY27_INSTALL
set ERRORLEVEL=0
goto :GIT_CHECK


:PY27_INSTALL
echo Installing python 2.7.6...
:: Cleanup python directory if it was existing.
if exist "%WIN_TOOLS_ROOT_DIR%\python276_bin\." rd /q /s "%WIN_TOOLS_ROOT_DIR%\python276_bin"
if exist "%ZIP_DIR%\python276.zip" del "%ZIP_DIR%\python276.zip"
echo Fetching from %WIN_TOOLS_ROOT_URL%/third_party/python276_bin.zip
cscript //nologo //e:jscript "%~dp0get_file.js" %WIN_TOOLS_ROOT_URL%/third_party/python276_bin.zip "%ZIP_DIR%\python276_bin.zip"
if errorlevel 1 goto :PYTHON_FAIL
:: Will create python276_bin\...
cscript //nologo //e:jscript "%~dp0unzip.js" "%ZIP_DIR%\python276_bin.zip" "%WIN_TOOLS_ROOT_DIR%"
:: Create the batch files.
call copy /y "%~dp0python276.new.bat" "%WIN_TOOLS_ROOT_DIR%\python.bat" 1>nul
call copy /y "%~dp0pylint.new.bat" "%WIN_TOOLS_ROOT_DIR%\pylint.bat" 1>nul
del "%ZIP_DIR%\python276_bin.zip"
set ERRORLEVEL=0
goto :GIT_CHECK


:PYTHON_FAIL
echo ... Failed to checkout python automatically.
echo Please visit http://python.org to download the latest python 2.7.x client before
echo continuing.
echo You can also get the "prebacked" version used at %WIN_TOOLS_ROOT_URL%/third_party/
set ERRORLEVEL=1
goto :END


:GIT_CHECK
goto :GIT_190_CHECK


:GIT_190_CHECK
if "%DEPOT_TOOLS_GIT_190%" == "0" goto :GIT_1852_CHECK
:: Clean up a couple of known broken releases
for /l %%i in (1,1,2) do if exist "%WIN_TOOLS_ROOT_DIR%\git-1.9.0.chromium.%%i_bin" (
  rmdir /s /q "%WIN_TOOLS_ROOT_DIR%\git-1.9.0.chromium.%%i_bin"
)
set GIT_VERSION=1.9.0.chromium.3
for /f "tokens=2 delims=[]" %%i in ('ver') do set VERSTR=%%i
for /f "tokens=2,3 delims=. " %%i in ("%VERSTR%") do (set VERMAJOR=%%i & set VERMINOR=%%j)
if %VERMAJOR% lss 5 set GIT_VERSION=1.9.0.chromium.3-xp
if %VERMAJOR% equ 5 if %VERMINOR% lss 2 set GIT_VERSION=1.9.0.chromium.3-xp
set GIT_BIN_DIR=git-%GIT_VERSION%_bin
set GIT_ZIP_FILE=%GIT_BIN_DIR%.zip
set GIT_ZIP_URL=https://commondatastorage.googleapis.com/chrome-infra/%GIT_ZIP_FILE%
goto :GIT_COMMON


:GIT_1852_CHECK
if "%DEPOT_TOOLS_GIT_1852%" == "0" goto :GIT_180_CHECK
set GIT_VERSION=1.8.5.2.chromium.1
set GIT_BIN_DIR=git-%GIT_VERSION%_bin
set GIT_ZIP_FILE=%GIT_BIN_DIR%.zip
set GIT_ZIP_URL=https://commondatastorage.googleapis.com/chrome-infra/%GIT_ZIP_FILE%
:: This git uses APIs that target WINVER 0x0502, so refuse to install it on
:: anything older.
for /f "tokens=2 delims=[]" %%i in ('ver') do set VERSTR=%%i
for /f "tokens=2,3 delims=. " %%i in ("%VERSTR%") do (set VERMAJOR=%%i & set VERMINOR=%%j)
if %VERMAJOR% lss 5 goto :GIT_VER_UNSUPPORTED
if %VERMAJOR% equ 5 if %VERMINOR% lss 2 goto :GIT_VER_UNSUPPORTED
goto :GIT_COMMON


:GIT_VER_UNSUPPORTED
echo Git %GIT_VERSION% cannot be installed on:
ver
goto :GIT_180_CHECK


:GIT_180_CHECK
set GIT_VERSION=1.8.0
set GIT_BIN_DIR=git-%GIT_VERSION%_bin
set GIT_ZIP_FILE=%GIT_BIN_DIR%.zip
set GIT_ZIP_URL=%WIN_TOOLS_ROOT_URL%/third_party/%GIT_ZIP_FILE%
goto :GIT_COMMON


:GIT_COMMON
if "%WIN_TOOLS_FORCE%" == "1" goto :GIT_INSTALL
if exist "%WIN_TOOLS_ROOT_DIR%\%GIT_BIN_DIR%\cmd\git.cmd" (
  call "%WIN_TOOLS_ROOT_DIR%\%GIT_BIN_DIR%\cmd\git.cmd" --version 2>nul 1>nul
  if errorlevel 1 goto :GIT_INSTALL
  rem Several git versions can live side-by-side; check the top-level
  rem batch script to make sure it points to the desired version.
  find "%GIT_BIN_DIR%" "%WIN_TOOLS_ROOT_DIR%\git.bat" 2>nul 1>nul
  if errorlevel 1 goto :GIT_COPY_BATCH_FILES
  goto :SVN_CHECK
)
goto :GIT_INSTALL


:GIT_INSTALL
echo Installing git %GIT_VERSION% (avg 1-2 min download) ...
:: git is not accessible; check it out and create 'proxy' files.
if exist "%ZIP_DIR%\git.zip" del "%ZIP_DIR%\git.zip"
echo Fetching from %GIT_ZIP_URL%
cscript //nologo //e:jscript "%~dp0get_file.js" %GIT_ZIP_URL% "%ZIP_DIR%\git.zip"
if errorlevel 1 goto :GIT_FAIL
:: Cleanup svn directory if it was existing.
if exist "%WIN_TOOLS_ROOT_DIR%\%GIT_BIN_DIR%\." rd /q /s "%WIN_TOOLS_ROOT_DIR%\%GIT_BIN_DIR%"
:: Will create %GIT_BIN_DIR%\...
cscript //nologo //e:jscript "%~dp0unzip.js" "%ZIP_DIR%\git.zip" "%WIN_TOOLS_ROOT_DIR%"
if errorlevel 1 goto :GIT_FAIL
if not exist "%WIN_TOOLS_ROOT_DIR%\%GIT_BIN_DIR%\." goto :GIT_FAIL
del "%ZIP_DIR%\git.zip"
:: Ensure autocrlf and filemode are set correctly.
call "%WIN_TOOLS_ROOT_DIR%\git.bat" config --system core.autocrlf false
call "%WIN_TOOLS_ROOT_DIR%\git.bat" config --system core.filemode false
goto :GIT_COPY_BATCH_FILES


:GIT_COPY_BATCH_FILES
:: Create the batch files.
call copy /y "%WIN_TOOLS_ROOT_DIR%\%GIT_BIN_DIR%\git.bat" "%WIN_TOOLS_ROOT_DIR%\git.bat" 1>nul
call copy /y "%WIN_TOOLS_ROOT_DIR%\%GIT_BIN_DIR%\gitk.bat" "%WIN_TOOLS_ROOT_DIR%\gitk.bat" 1>nul
call copy /y "%WIN_TOOLS_ROOT_DIR%\%GIT_BIN_DIR%\ssh.bat" "%WIN_TOOLS_ROOT_DIR%\ssh.bat" 1>nul
call copy /y "%WIN_TOOLS_ROOT_DIR%\%GIT_BIN_DIR%\ssh-keygen.bat" "%WIN_TOOLS_ROOT_DIR%\ssh-keygen.bat" 1>nul
goto :SVN_CHECK


:GIT_FAIL
echo ... Failed to checkout git automatically.
echo Please visit http://code.google.com/p/msysgit to download the latest git
echo client before continuing.
echo You can also get the "prebaked" version used at %GIT_ZIP_URL%
set ERRORLEVEL=1
goto :END


:SVN_CHECK
:: If the batch file exists, skip the svn check.
if exist "%WIN_TOOLS_ROOT_DIR%\svn.bat" goto :END
if "%WIN_TOOLS_FORCE%" == "1" goto :SVN_INSTALL
call svn --version 2>nul 1>nul
if errorlevel 1 goto :SVN_INSTALL
goto :END


:SVN_INSTALL
echo Installing subversion ...
:: svn is not accessible; check it out and create 'proxy' files.
if exist "%ZIP_DIR%\svn.zip" del "%ZIP_DIR%\svn.zip"
echo Fetching from %WIN_TOOLS_ROOT_URL%/third_party/svn_bin.zip
cscript //nologo //e:jscript "%~dp0get_file.js" %WIN_TOOLS_ROOT_URL%/third_party/svn_bin.zip "%ZIP_DIR%\svn.zip"
if errorlevel 1 goto :SVN_FAIL
:: Cleanup svn directory if it was existing.
if exist "%WIN_TOOLS_ROOT_DIR%\svn\." rd /q /s "%WIN_TOOLS_ROOT_DIR%\svn"
if exist "%WIN_TOOLS_ROOT_DIR%\svn_bin\." rd /q /s "%WIN_TOOLS_ROOT_DIR%\svn_bin"
:: Will create svn_bin\...
cscript //nologo //e:jscript "%~dp0unzip.js" "%ZIP_DIR%\svn.zip" "%WIN_TOOLS_ROOT_DIR%"
if errorlevel 1 goto :SVN_FAIL
if not exist "%WIN_TOOLS_ROOT_DIR%\svn_bin\." goto :SVN_FAIL
del "%ZIP_DIR%\svn.zip"
:: Create the batch file.
call copy /y "%~dp0svn.new.bat" "%WIN_TOOLS_ROOT_DIR%\svn.bat" 1>nul
call copy /y "%~dp0svnversion.new.bat" "%WIN_TOOLS_ROOT_DIR%\svnversion.bat" 1>nul
goto :END


:SVN_FAIL
echo ... Failed to checkout svn automatically.
echo Please visit http://subversion.tigris.org to download the latest subversion client
echo before continuing.
echo You can also get the "prebacked" version used at %WIN_TOOLS_ROOT_URL%/third_party/
set ERRORLEVEL=1
goto :END


:returncode
set WIN_TOOLS_ROOT_URL=
set WIN_TOOLS_ROOT_DIR=
exit /b %ERRORLEVEL%

:END
call :returncode %ERRORLEVEL%
