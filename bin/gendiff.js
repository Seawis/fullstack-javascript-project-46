#!/usr/bin/env node
import { program } from 'commander'
import { compareObjects } from '../src/index.js'
import getObject from '../src/parsers.js'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')

  .argument('<filepath1>', 'first file')
  .argument('<filepath2>', 'second file')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const result = compareObjects(getObject(filepath1), getObject(filepath2))
    console.log(result)
    // console.log(program.opts().format)
  })

program.parse()
