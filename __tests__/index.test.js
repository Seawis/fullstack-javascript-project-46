/* eslint no-undef: "off" */
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { readFile } from '../src/cli.js'
import format from '../formatters/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('format', () => {
  const diffs = [
    { key: 'follow', value: false, where: 'inFirstOnly', level: 1 },
    { key: 'host', value: 'hexlet.io', where: 'inBoth', level: 1 },
    {
      key: 'proxy',
      value: '123.234.53.22',
      where: 'inFirstOnly',
      level: 1,
    },
    { key: 'timeout', value: 50, where: 'inFirst', level: 1 },
    { key: 'timeout', value: 20, where: 'inSecond', level: 1 },
    { key: 'verbose', value: true, where: 'inSecondOnly', level: 1 },
  ]

  expect(format(diffs, 'stylish')).toEqual(readFile(getFixturePath('fileResult.txt')))
  expect(format(diffs, 'plain')).toEqual(readFile(getFixturePath('plain.txt')))
})
