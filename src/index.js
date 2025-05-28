import _ from 'lodash'

const compareObjects = (obj1, obj2) => {
  const getAllKeys = _.uniq([
    ...Object.keys(obj1),
    ...Object.keys(obj2),
  ]).sort()

  const diff = getAllKeys.reduce((acc, key) => {
    const inBoth = '    '
    const inFirst = '  - '
    const inSecond = '  + '
    if (Object.hasOwn(obj1, key) & Object.hasOwn(obj2, key)) {
      acc += obj1[key] === obj2[key]
        ? `${inBoth}${key}: ${obj1[key]}\n`
        : `${inFirst}${key}: ${obj1[key]}\n${inSecond}${key}: ${obj2[key]}\n`
    }
    else if (Object.hasOwn(obj1, key)) {
      acc += `${inFirst}${key}: ${obj1[key]}\n`
    }
    else {
      acc += `${inSecond}${key}: ${obj2[key]}\n`
    }
    return acc
  }, '')

  return `{\n${diff}}`
}

export { compareObjects }
