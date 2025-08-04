/**
 * node.build.js
 * Merges the contents of public/index.php and build/index.html,
 * then writes the result to build/index.php and removes the original HTML file.
 *
 * Author: Yumi Takuma
 */

const fs = require("fs");
const path = require("path");

const publicIndexPath = path.resolve(__dirname, "public", "index.php");
const buildIndexPath = path.resolve(__dirname, "build", "index.html");

const publicIndexContent = fs.readFileSync(publicIndexPath, "utf8");
const buildIndexContent = fs.readFileSync(buildIndexPath, "utf8");

const updatedIndexContent = `${publicIndexContent}\n${buildIndexContent}`;

fs.writeFileSync(
  buildIndexPath.replace(".html", ".php"),
  updatedIndexContent,
  "utf8",
);

fs.unlinkSync(buildIndexPath);
