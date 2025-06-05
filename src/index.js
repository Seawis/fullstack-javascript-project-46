import _ from 'lodash'
import { stringify, stylish } from '../src/style.js'

const compareObjects = (obj1, obj2, deep = 1) => {
  const getAllKeys = _.uniq([
    ...Object.keys(obj1),
    ...Object.keys(obj2),
  ]).sort()

  const s = stylish(' ', deep)

  const diff = getAllKeys.reduce((acc, key) => {
    const value1 = stringify(obj1[key], s.shift, '    ')
    const value2 = stringify(obj2[key], s.shift, '    ')

    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        const level = deep + 1
        acc += `${s.inBoth}${key}: ${compareObjects(obj1[key], obj2[key], level)}\n`
      }
      else {
        acc
          += obj1[key] === obj2[key]
            ? `${s.inBoth}${key}: ${value1}\n`
            : `${s.inFirst}${key}: ${value1}\n${s.inSecond}${key}: ${value2}\n`
      }
    }
    else if (Object.hasOwn(obj1, key)) {
      acc += `${s.inFirst}${key}: ${value1}\n`
    }
    else {
      acc += `${s.inSecond}${key}: ${value2}\n`
    }
    return acc
  }, '')

  return `{\n${diff}${s.atTheEnd}}`
}

export { compareObjects }
