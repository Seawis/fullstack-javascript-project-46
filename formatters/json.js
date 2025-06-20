import _ from 'lodash'

export default (diffs) => {
  const result = diffs.reduce((acc, item, i, diffs) => {
    const newKeys = Object.hasOwn(item, 'key')
      ? item.key.split('.')
      : []
    const newObj = elem => newKeys.reverse().reduce((acc, curr) => ({ [curr]: acc }), elem)

    const value = item.value
    const prevValue = (diffs[i - 1] ?? diffs[i]).value

    const rates = {
      compareObj: '',
      inBoth: { value, changes: 'not changed' },
      inFirst: '',
      inFirstOnly: { value, changes: 'was removed' },
      inSecond: { value, changes: prevValue },
      inSecondOnly: { value, changes: 'was added' },
      end: '',
    }

    acc = _.merge(acc, newObj(rates[item.where]))
    return acc
  }, {})
  return JSON.stringify(result, null, 2)
}
