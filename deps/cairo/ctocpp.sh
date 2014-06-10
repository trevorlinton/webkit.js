#!/bin/sh
find -L . -type f -name "*.c" -print0 | while IFS= read -r -d '' FNAME; do
    mv -- "$FNAME" "${FNAME%.c}.cpp"
done
