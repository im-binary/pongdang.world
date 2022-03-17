#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const [, , file] = process.argv;

(async () => {
  const contents = (await fs.promises.readFile(file)).toString("utf-8");
  await fs.promises.writeFile(
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
  if (!fs.existsSync(path.resolve(file, "..", "list.json"))) {
    await fs.promises.writeFile(path.resolve(file, "..", "list.json"), "[]");
  }

  const list = JSON.parse((await fs.promises.readFile(path.resolve(file, "..", "list.json"))).toString("utf-8"));
  const title = contents
    .trim()
    .split("\n")[0]
    .replace(/<[^>]*>/g, "");
  const item = { title, id: list.length + 1 };

  await fs.promises.writeFile(path.resolve(file, "..", "list.json"), JSON.stringify([...list, item], null, 2));
  console.log([`${title}이 추가되었습니다.`, `${JSON.stringify(item, null, 2)}`].join("\n"));
})();
