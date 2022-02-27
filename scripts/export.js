#!/usr/bin/env node

const fs = require("fs").promises;
const [, , file] = process.argv;

(async () => {
  const contents = (await fs.readFile(file)).toString("utf-8");
  await fs.writeFile(
    file,
    [
      `<head>`,
      `  <meta charset="UTF-8" />`,
      `</head>`,
      `${contents}`,
      `<script>`,
      `  window.location.href="${file.replace("./public/static-post", "").replace(".md.html", "")}";`,
      `</script>`,
    ]
      .join("\n")
      .trim()
  );
})();
