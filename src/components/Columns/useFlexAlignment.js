const transformAlignX = direction => {
  let alignment
  switch (direction) {
    case 'left':
      alignment = 'flex-start'
      break
    case 'right':
      alignment = 'flex-end'
      break
    case 'center':
      alignment = 'center'
      break
    case 'fill':
      alignment = 'space-between'
      break
    default:
      alignment = 'flex-start'
  }
  return alignment
}

const transformAlignY = direction => {
  let alignment
  switch (direction) {
    case 'top':
      alignment = 'flex-start'
      break
    case 'bottom':
      alignment = 'flex-end'
      break
    case 'center':
      alignment = 'center'
      break
    case 'stretch':
      alignment = 'stretch'
      break
    default:
      alignment = 'flex-start'
  }
  return alignment
}

// if the consumer does not give an array, we still need to make an array of 3 with what
// they supplied. This is because if they want to break at say mobile we need to swap one
// align for a justify at the mobile index (see comment on the hook for why).
const getXValues = xValues => {
  if (Array.isArray(xValues)) {
    return xValues.map(a => transformAlignX(a))
  }
  // eslint-disable-next-line no-unused-vars
  return [...Array(3)].map(() => transformAlignX(xValues))
}

const getYValues = yValues => {
  if (Array.isArray(yValues)) {
    return yValues.map(a => transformAlignY(a))
  }
  // eslint-disable-next-line no-unused-vars
  return [...Array(3)].map(() => transformAlignY(yValues))
}

// when flex direction is changed the axis of the flex box also changes, that means
// the value we want to use as align (top, bottom etc) becomes the value we want to use
// for justify when in 'flex-direction: column' mode. Luckily the values for these are the same
// flex-start is == both left and top this means we just re-use the values the consumer wants
// but we swap align for justify after the point they would like to break.
// If they do not want to break then we leave the align and justify as default for all cases
// as in this case we will stay in 'flex-direction: row'
const useFlexAlignment = (x, y, collapse) => {
  const justify = getXValues(x)
  const align = getYValues(y)

  let switchPoint

  // at what point should we 'switch' justify and align as the axis will change
  switch (collapse) {
    case 'mobile':
      // switch last index only
      switchPoint = 2
      break
    case 'tablet':
      // switch last two
      switchPoint = 1
      break
    case 'desktop':
      // switch starting at first index
      switchPoint = 0
      break
    default:
      // we will not switch at all so lets go out of bounds
      switchPoint = 4
      break
  }

  // add one for each break point
  const styles = {
    justifyContent: [...Array(3).keys()]
      .map(index => (index >= switchPoint ? align[index] : justify[index]))
      .reverse(),
    alignItems: [...Array(3).keys()]
      .map(index => (index >= switchPoint ? justify[index] : align[index]))
      .reverse(),
  }

  // insert another one for when it is above desktop
  styles.justifyContent.push(justify[0])
  styles.alignItems.push(align[0])

  return styles
}

export default useFlexAlignment
