@echo off
setlocal
:: This is required with cygwin only.
PATH=%~dp0;%PATH%
call python "%~dp0chrome-update.py" %*
