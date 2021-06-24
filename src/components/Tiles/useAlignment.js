// This is basically copy & pasted from Columns
const transformAlign = direction => {
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
    default:
      alignment = 'flex-start'
  }
  return alignment
}

const getValues = values => {
  if (Array.isArray(values)) {
    return values.map(a => transformAlign(a))
  }
  return transformAlign(values)
}

const useFlexAlignment = x => {
  return getValues(x)
}

export default useFlexAlignment
