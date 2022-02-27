#!/usr/bin/env bash

# 없는 디렉토리 생성
find ./static-post -name "*.md" | sort | xargs -I {FILE} ./scripts/dir.js {FILE}

# md 파일을 HTML 파일로 변환
find ./static-post -name "*.md" | sort | xargs -I {FILE} marked -i {FILE} -o ./public/{FILE}.html

# 기존 json 파일 제거
find ./public/static-post -name "*.json" | sort | xargs -I {FILE} rm -rf {FILE}

# HTML에 리다이렉트 로직 추가 및 list.json 생성
find ./public/static-post -name "*.html" | sort | grep -v "index.html" | xargs -I {FILE} ./scripts/export.js {FILE}
