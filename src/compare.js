import _ from 'lodash'
import format from '../formatters/index.js'

const compareObjects = (obj1, obj2, formatType) => {
  const diffs = (obj1, obj2, deep = 1, parent = '') => {
    const getAllKeys = _.uniq([
      ...Object.keys(obj1),
      ...Object.keys(obj2),
    ]).sort()

    const result = getAllKeys.reduce((acc, key) => {
      const fullKey = deep === 1 ? `${parent}${key}` : `${parent}.${key}`
      if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
        if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
          acc = [
            ...acc,
            { key: fullKey, where: 'compareObj', level: deep },
            diffs(obj1[key], obj2[key], deep + 1, fullKey),
            { where: 'end', level: deep },
          ] // значение (объект) есть в обоих файлах, рекурсия
        }
        else {
          acc = obj1[key] === obj2[key]
            ? [...acc, { key: fullKey, value: obj1[key], where: 'inBoth', level: deep }] // значения в обоих файлах совпадают
            : [
                ...acc,
                { key: fullKey, value: obj1[key], where: 'inFirst', level: deep },
                { key: fullKey, value: obj2[key], where: 'inSecond', level: deep },
              ] // значения в обоих файлах НЕ совпадают
        }
      }
      else if (Object.hasOwn(obj1, key)) {
        acc = [...acc, { key: fullKey, value: obj1[key], where: 'inFirstOnly', level: deep }] // значение есть только в первом файле
      }
      else {
        acc = [...acc, { key: fullKey, value: obj2[key], where: 'inSecondOnly', level: deep }] // значение есть только во втором файле
      }
      return acc
    }, [])
    return _.flattenDeep(result)
  }
  // console.log(diffs(obj1, obj2))
  return format(diffs(obj1, obj2), formatType)
}

export { compareObjects }
