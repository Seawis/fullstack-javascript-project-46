import { getFilePath, readFile } from '../src/cli.js'
import path from 'path'
import yaml from 'js-yaml'

export default (filepath) => {
  let ext = path.extname(getFilePath(filepath))

  switch (ext) {
    case '.json':
      return JSON.parse(readFile(filepath))
    case '.yml':
    case '.yaml':
      return yaml.load(readFile(filepath))
    default:
      throw new Error('Incorrect file extension')
  }
}
