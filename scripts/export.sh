#!/usr/bin/env bash

# ls -al ./static-post

date
# [1초] 없는 디렉토리 [카테고리] 생성
find ./static-post -name "*.md" | sort | xargs -I {FILE} ./scripts/dir.js {FILE}

date
# [3초] md 파일을 HTML 파일로 변환
find ./static-post -name "*.md" | sort | xargs -I {FILE} marked -i {FILE} -o ./public/{FILE}.html

date
# [0초] 기존 리스트 json 파일 제거
find ./public/static-post -name "*.json" | xargs -I {FILE} rm -rf {FILE}

date
# [2초] HTML 내용에 헤더랑 리다이렉트 추가하는 로직
find ./public/static-post -name "*.html" | sort | grep -v "index.html" | xargs -I {FILE} ./scripts/export.js {FILE}

# blog 하위 디렉토리도 동작할 수 있도록 수정
mkdir ./public/blog
cp -R ./public/static-post ./public/blog/static-post

echo "> done"