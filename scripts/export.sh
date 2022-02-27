#!/usr/bin/env bash

find ./static-post -name "*.md" | xargs -I {FILE} marked -i {FILE} -o ./public/{FILE}.html

SCRIPT=$(cat <<-END
const fs = require('fs').promises;
const prefix = \`<head>
  <meta charset="UTF-8" />
</head>\`;
END
)

find ./public/static-post -name "*.html" | grep -v "index.html" | xargs -I {FILE} node -p "$SCRIPT;fs.readFile('{FILE}').then((e) => fs.writeFile('{FILE}', prefix + '\n' + e))"
