import { program } from 'commander'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')

program

  .argument('<filepath1>', 'first file')
  .argument('<filepath2>', 'second file')
  .option('-f, --format [type]', 'output format')

program.parse()