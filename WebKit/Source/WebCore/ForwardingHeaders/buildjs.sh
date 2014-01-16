#!/bin/sh
find . -type d -exec ls -1 -F {} \; | grep -v '/'
