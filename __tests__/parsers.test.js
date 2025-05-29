/* eslint no-undef: "off" */
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

import getObject from '../src/parsers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('isObject', () => {
  const filepath1 = getFixturePath('file1.json')
  const filepath2 = getFixturePath('file1.yaml')
  const filepath3 = getFixturePath('file2.yml')
  const filepath4 = getFixturePath('file12result')

  expect(getObject(filepath1) instanceof Object).toBeTruthy()
  expect(getObject(filepath2) instanceof Object).toBeTruthy()
  expect(getObject(filepath3) instanceof Object).toBeTruthy()

  expect(getObject(filepath4) instanceof Object).toBeFalsy()
})
