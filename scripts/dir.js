#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const [, , file] = process.argv;

(async () => {
  console.log(path.resolve("public", file, ".."));
  if (!fs.existsSync(path.resolve("public", file, ".."))) {
    await fs.promises.mkdir(path.resolve("public", file, ".."), { recursive: true });
  }
})();
