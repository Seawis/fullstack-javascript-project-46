/* eslint no-undef: "off" */
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'

import { getFilePath, readFile } from '../src/cli.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)

test('getFilePath', () => {
  expect(getFilePath('__fixtures__/file1.json')).toEqual(
    getFixturePath('file1.json'),
  )
  expect(getFilePath(getFixturePath('file2.json'))).toEqual(
    getFixturePath('file2.json'),
  )
})

test('readFile', () => {
  expect(readFile(getFixturePath('file2.json'))).toEqual(
    fs.readFileSync(getFixturePath('file2.json'), 'utf-8'),
  )
})
