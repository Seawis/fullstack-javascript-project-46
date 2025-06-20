import _ from 'lodash'

export default (diffs) => {
  return diffs.reduce((acc, item, i, diffs) => {
    const newKey = item.key

    const value = el => _.isObject(el.value)
      ? '[complex value]'
      : typeof el.value === 'string'
        ? `'${el.value}'`
        : el.value
    const next = diffs[i + 1] ?? diffs[i]

    const rates = {
      compareObj: '',
      inBoth: '',
      inFirst: `Property '${newKey}' was updated. From ${value(item)} to ${value(next)}\n`,
      inFirstOnly: `Property '${newKey}' was removed\n`,
      inSecond: '',
      inSecondOnly: `Property '${newKey}' was added with value: ${value(item)}\n`,
      end: '',
    }

    acc += rates[item.where]
    return acc
  }, '').trim()
}
