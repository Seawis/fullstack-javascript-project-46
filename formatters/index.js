import _ from 'lodash'
import stylish from '../formatters/stylish.js'
import plain from '../formatters/plain.js'

export default (diffs, formatType) => {
  const rates = {
    stylish: stylish(diffs),
    plain: plain(diffs),
    undefined: stylish(diffs),
  }

  if (!_.has(rates, [formatType])) {
    throw new Error(`Unknown format type '${formatType}'`)
  }
  return rates[formatType]
}
