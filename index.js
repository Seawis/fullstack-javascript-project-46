import { compareObjects } from './src/compare.js'
import getObject from './src/parsers.js'

const gendiff = (filepath1, filepath2, f) => compareObjects(getObject(filepath1), getObject(filepath2), f)

export default gendiff
