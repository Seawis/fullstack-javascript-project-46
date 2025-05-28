import fs from 'fs'
import path from 'path'
import process from 'process'

const getFilePath = filepath => path.resolve(process.cwd(), filepath)
const readFile = filepath => fs.readFileSync(getFilePath(filepath), 'utf-8')

export { getFilePath, readFile }
