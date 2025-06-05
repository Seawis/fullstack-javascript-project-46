const stringify = (toStr, shift = '', replacer = ' ') => {
  const converter = (value, level) => {
    const symBefore = shift + replacer.repeat(level)
    const symAfter = shift + replacer.repeat(level - 1)

    const cb = (acc, [key, val]) =>
      `${acc}${symBefore}${key}: ${converter(val, level + 1)}\n`

    return (typeof value === 'object') & (value !== null)
      ? `{\n${Object.entries(value).reduce(cb, '')}${symAfter}}`
      : String(value)
  }

  return converter(toStr, 1)
}

const stylish = (sym, level = 1) => {
  const shiftLeft = sym.repeat(4 * level)
  const left = shiftLeft.slice(0, -2)

  return {
    shift: shiftLeft,
    atTheEnd: shiftLeft.slice(0, -4), // sym.repeat(4 * level - 4)
    symbols: left, // sym.repeat(4 * level - 2)
    inBoth: `${left}  `,
    inFirst: `${left}- `,
    inSecond: `${left}+ `,
  }
}

export { stringify, stylish }
