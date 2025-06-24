import _ from 'lodash'

export default (diffs) => {
  return diffs.reduce((acc, item, i, diffs) => {
    const newKey = item.key
    const next = diffs[i + 1] ?? diffs[i]

    const value = (el) => {
      const val = el.value
      if (_.isObject(val)) {
        return '[complex value]'
      }
      else {
        return typeof val === 'string'
          ? `'${val}'`
          : val
      }
    }

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
