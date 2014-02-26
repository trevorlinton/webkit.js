#!/bin/sh
cat UnresolvedSymbols.md | c++filt -n | grep -v 'C++' | sort > UnresolvedSymbolsDemangled.md
