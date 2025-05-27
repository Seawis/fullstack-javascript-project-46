#!/usr/bin/env node
import { program } from "commander";
import { readFile } from "../src/cli.js";
import { compareObjects } from "../src/index.js";

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .version("1.0.0")

  .argument("<filepath1>", "first file")
  .argument("<filepath2>", "second file")
  .option("-f, --format [type]", "output format")
  .action((filepath1, filepath2) => {
    const obj1 = JSON.parse(readFile(filepath1));
    const obj2 = JSON.parse(readFile(filepath2));
    compareObjects(obj1, obj2);
  });

program.parse();
