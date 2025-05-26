#!/usr/bin/env node
import { program } from 'commander'
import { readFile } from '../src/cli.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')

  .argument('<filepath1>', 'first file')
  .argument('<filepath2>', 'second file')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(readFile(filepath1));
    console.log(readFile(filepath2));
  })

program.parse()
