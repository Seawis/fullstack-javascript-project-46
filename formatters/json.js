// import _ from 'lodash'

export default (diffs) => {
  const result = diffs.reduce((acc, item, i, diffs) => {
    const newKey = Object.hasOwn(item, 'key')
      ? item.key // .split('.').slice(-1)
      : null
    const value = item.value
    const prevValue = (diffs[i - 1] ?? diffs[i]).value

    const rates = {
      compareObj: '',
      inBoth: acc[newKey] = { value, newValue: 'not changed' },
      inFirst: '',
      inFirstOnly: acc[newKey] = { value, newValue: 'was removed' },
      inSecond: { value: prevValue, newValue: value },
      inSecondOnly: acc[newKey] = { value, newValue: 'was added' },
      end: '',
    }
    acc[newKey] = rates[item.where]
    return acc
  }, {})

  return result // JSON.parse(result)
}
