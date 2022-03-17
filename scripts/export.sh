#!/usr/bin/env bash

ls -al ./static-post

# 없는 디렉토리 [카테고리] 생성
find ./static-post -name "*.md" | sort | xargs -I {FILE} ./scripts/dir.js {FILE}

# md 파일을 HTML 파일로 변환
find ./static-post -name "*.md" | sort | xargs -I {FILE} marked -i {FILE} -o ./public/{FILE}.html

# 기존 json 파일 제거
find ./public/static-post -name "*.json" | sort | xargs -I {FILE} rm -rf {FILE}

# HTML에 리다이렉트 로직 추가 및 list.json 생성
find ./public/static-post -name "*.html" | sort | grep -v "index.html" | xargs -I {FILE} ./scripts/export.js {FILE}

ls -al ./static-post

find ./public -name "*.html"

find ./public -name "*.html" | xargs cat

find ./public -name "*.json"

find ./public -name "*.json" | xargs cat
