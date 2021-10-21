function hash(string) {
  let val = 0

  /* eslint-disable no-bitwise */
  for (let i = 0; i < string.length; i += 1) {
    val = string.charCodeAt(i) + ((val << 5) - val)
  }

  return val
}

/**
 * Create a color based on a string value.
 */
export function colorFromString(string, saturation = '50%', lightness = '50%') {
  /* eslint-disable no-bitwise */
  const hue = hash(string) & 360
  return `hsl(${hue},${saturation},${lightness})`
}
