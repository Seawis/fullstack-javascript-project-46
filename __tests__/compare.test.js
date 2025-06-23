/* eslint no-undef: "off" */
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import yaml from 'js-yaml'

import { compareObjects } from '../src/compare.js'
import { readFile } from '../src/cli.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('compareJSON', () => {
  const file1 = JSON.parse(readFile(getFixturePath('file1.json')))
  const file2 = JSON.parse(readFile(getFixturePath('file2.json')))
  expect(compareObjects(file1, file2)).toEqual(readFile(getFixturePath('fileResult.txt')))
})

test('compareYML', () => {
  const file1 = yaml.load(readFile(getFixturePath('file1.yaml')))
  const file2 = yaml.load(readFile(getFixturePath('file2.yml')))
  expect(compareObjects(file1, file2)).toEqual(readFile(getFixturePath('fileResult.txt')))
})

test('compareNestedJSON', () => {
  const file1 = JSON.parse(readFile(getFixturePath('file1nested.json')))
  const file2 = JSON.parse(readFile(getFixturePath('file2nested.json')))
  expect(compareObjects(file1, file2)).toEqual(readFile(getFixturePath('fileNested.txt')))
  expect(compareObjects(file1, file2, 'stylish')).toEqual(readFile(getFixturePath('fileNested.txt')))
  expect(compareObjects(file1, file2, 'json')).toEqual(readFile(getFixturePath('fileJSON.json')))
})

test('compareNestedYML', () => {
  const file1 = yaml.load(readFile(getFixturePath('file1nested.yaml')))
  const file2 = yaml.load(readFile(getFixturePath('file2nested.yml')))
  expect(compareObjects(file1, file2)).toEqual(readFile(getFixturePath('fileNested.txt')))
  expect(compareObjects(file1, file2, 'plain')).toEqual(readFile(getFixturePath('filePlain.txt')))
  expect(compareObjects(file1, file2, 'json')).toEqual(readFile(getFixturePath('fileJSON.json')))
  expect(() => {
    compareObjects('stylishplain')
  }).toThrow()
})

test('boom!', () => {
  const file1 = yaml.load(readFile(getFixturePath('file1nested.yaml')))
  const file2 = yaml.load(readFile(getFixturePath('file2nested.yml')))
  expect(() => {
    compareObjects(file1, file2, 'stylishplain')
  }).toThrow()
})
