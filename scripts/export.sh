#!/usr/bin/env bash

# md 파일을 HTML 파일로 변환
find ./static-post -name "*.md" | xargs -I {FILE} marked -i {FILE} -o ./public/{FILE}.html

find ./public/static-post -name "*.html" | grep -v "index.html" | xargs -I {FILE} ./scripts/export.js {FILE}