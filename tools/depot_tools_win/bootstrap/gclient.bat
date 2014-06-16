@echo off
:: Copyright (c) 2012 The Chromium Authors. All rights reserved.
:: Use of this source code is governed by a BSD-style license that can be
:: found in the LICENSE file.

:: IMPORTANT NOTE:
:: The bootstrap flow has been removed. This file's only purpose is to make the
:: transition smooth as the previous update script called bootstrap\gclient.bat
:: The current flow took place on March 21, 2012. This file should be removed
:: when it is believed everyone has updated since then.

:: At this point we know %DEPOT_TOOLS_UPDATE% != 0 as in the previous script
:: bootstrap\gclient.bat was only called if this was the case.

:: Update the root directory. The previous version only supported svn so there
:: is no need looking for git here (i.e. if someone has git they can't get to
:: this point where the bootstrap dir is gone during the update anyways...)
IF NOT EXIST "%~dp0..\.svn\." GOTO :EOF
call svn up -q "%~dp0.."

:: Call the updated gclient.bat in the root directory to wrap the update.
call "%~dp0..\gclient.bat"
