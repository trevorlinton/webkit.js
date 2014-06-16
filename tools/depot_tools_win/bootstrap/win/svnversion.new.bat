@echo off
setlocal
set PATH=%~dp0svn_bin;%PATH%
"%~dp0svn_bin\svnversion.exe" %*
