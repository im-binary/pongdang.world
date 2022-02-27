#!/usr/bin/env bash

# md 파일을 HTML 파일로 변환
find ./static-post -name "*.md" | xargs -I {FILE} marked -i {FILE} -o ./public/{FILE}.html

# HTML 파일 앞에 붙일 prefix 를 위한 스크립트 조각
SCRIPT=$(cat <<-END
const fs = require('fs').promises;
const prefix = \`<head>
  <meta charset="UTF-8" />
</head>\`;
END
)

# HTML 파일에 prefix 붙이고 파일 덮어쓰기
find ./public/static-post -name "*.html" | \
    grep -v "index.html" | \
    xargs -I {FILE} \
    node -p "$SCRIPT;fs.readFile('{FILE}').then((e) => fs.writeFile('{FILE}', prefix + '\n' + e))"
