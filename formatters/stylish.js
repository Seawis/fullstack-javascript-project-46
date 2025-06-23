import _ from 'lodash'

const stringify = (key, obj, replacer, deep = 0) => {
  const shift = replacer.repeat(4 * deep)

  const converter = (value, level) => {
    const symBefore = shift + replacer.repeat(4 * level)
    const symAfter = shift + replacer.repeat(4 * (level - 1))

    const cb = (acc, [key, val]) =>
      `${acc}${symBefore}${key}: ${converter(val, level + 1)}\n`

    return (typeof value === 'object') && (value !== null)
      ? `{\n${Object.entries(value).reduce(cb, '')}${symAfter}}`
      : String(value)
  }

  return converter(obj[key], 1)
}

export default (diffs) => {
  const sym = ' '

  const result = diffs.reduce((acc, item) => {
    const left = sym.repeat(4 * item.level - 2)
    const newKey = Object.hasOwn(item, 'key')
      ? item.key.split('.').slice(-1)
      : null
    const value = _.isObject(item.value)
      ? stringify('value', item, sym, item.level)
      : item.value
    const result = el => `${left}${el}${newKey}: ${value}\n`

    const rates = {
      compareObj: `${left}  ${newKey}: {\n`,
      inBoth: result('  '),
      inFirst: result('- '),
      inFirstOnly: result('- '),
      inSecond: result('+ '),
      inSecondOnly: result('+ '),
      end: `${left}  }\n`,
    }

    acc += rates[item.where]
    return acc
  }, '')

  return `{\n${result}}\n`
}
