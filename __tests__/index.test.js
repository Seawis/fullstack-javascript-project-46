import { fileURLToPath } from "url";
import { dirname, path } from "node: path";

import { compareObjects } from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);

test("compareObjects", () => {
  const file1 = getFixturePath(file1.json);
  const file2 = getFixturePath(file2.json);
  console.log(file1);
  expect(compareObjects(file1, file2)).toEqual(compareObjects(file1, file2));
});
