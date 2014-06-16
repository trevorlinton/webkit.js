@echo off
:: Copyright (c) 2012 The Chromium Authors. All rights reserved.
:: Use of this source code is governed by a BSD-style license that can be
:: found in the LICENSE file.
setlocal

:: This is required with cygwin only.
PATH=%~dp0;%PATH%

:: Defer control.
%~dp0python "%~dp0\apply_issue.py" %*
