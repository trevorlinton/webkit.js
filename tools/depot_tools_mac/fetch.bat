@echo off
:: Copyright (c) 2013 The Chromium Authors. All rights reserved.
:: Use of this source code is governed by a BSD-style license that can be
:: found in the LICENSE file.
setlocal

:: This is required with cygwin only.
PATH=%~dp0;%PATH%

:: Synchronize the root directory before deferring control back to gclient.py.
call "%~dp0\update_depot_tools.bat"

:: Defer control.
%~dp0python "%~dp0\fetch.py" %*
