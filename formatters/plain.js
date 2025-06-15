import _ from 'lodash'

export default (diffs) => {
  return diffs.reduce((acc, item, i, diffs) => {
    const newKey = item.key

    const value = _.isObject(item.value)
      ? '[complex value]'
      : typeof item.value === 'string'
        ? `'${item.value}'`
        : item.value

    const next = diffs[i + 1] ?? diffs[i]
    const nextValue = typeof next.value === 'string'
      ? `'${next.value}'`
      : next.value

    const rates = {
      compareObj: '',
      inBoth: '',
      inFirst: `Property '${newKey}' was updated. From ${value} to ${nextValue}\n`,
      inFirstOnly: `Property '${newKey}' was removed\n`,
      inSecond: '',
      inSecondOnly: `Property '${newKey}' was added with value: ${value}\n`,
      end: '',
    }

    acc += rates[item.where]
    return acc
  }, '')
}
