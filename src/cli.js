import fs from "fs";
import path from "path";
import process from "process";

const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getFilePath(filepath), "utf-8");

// const file1 = readFile(getFilePath("__fixtures__/file1.json"));
// const file2 = readFile(getFilePath("__fixtures__/file1.json"));
// console.log(file1, file2);

export { readFile };
