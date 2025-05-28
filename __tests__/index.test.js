/* eslint no-undef: "off" */
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

import { compareObjects } from '../src/index.js'
import { readFile } from '../src/cli.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('compareObjects', () => {
  const file1 = JSON.parse(readFile(getFixturePath('file1.json')))
  const file2 = JSON.parse(readFile(getFixturePath('file2.json')))
  expect(compareObjects(file1, file2)).toEqual(readFile(getFixturePath('file12result')))
})
