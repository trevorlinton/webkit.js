#!/bin/sh
find . -type d -exec ls -1 -F {} \; | grep -v '/' | xargs -I {} find ../JavaScriptCore/ -name "{}" | xargs -I file cp file ./DerivedSources/JavaScriptCore
