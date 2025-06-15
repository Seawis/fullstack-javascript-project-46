import _ from 'lodash'

export default (diffs) => {
  return diffs.reduce((acc, item) => {
    const value = _.isObject(item.value)
      ? '[complex value]'
      : item.value
    const newKey = _.has(item, item.key)
      ? item.key.slice(1)
      : item.key

    const rates = {
      compareObj: '',
      inBoth: '',
      inFirst: `Property '${newKey}' was removed\n`,
      inSecond: `Property '${newKey}' was added with value: ${value}\n`,
      end: '',
    }

    acc += rates[item.where]
    return acc
  }, '')
}
