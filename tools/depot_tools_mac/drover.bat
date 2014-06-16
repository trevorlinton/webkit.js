@echo off
:: Copyright (c) 2009 The Chromium Authors. All rights reserved.
:: Use of this source code is governed by a BSD-style license that can be
:: found in the LICENSE file.

setlocal
set PATH=%~dp0svn;%PATH%
set PYTHONDONTWRITEBYTECODE=1
call python "%~dp0drover.py" %*
