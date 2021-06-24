// This is basically copy & pasted from Columns
const transformAlign = direction => {
  let alignment
  switch (direction) {
    case 'top':
      alignment = 'flex-start'
      break
    case 'center':
      alignment = 'center'
      break
    case 'bottom':
      alignment = 'flex-end'
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

const useAlignment = x => {
  const alignment = getValues(x)

  return {
    alignItems: alignment,
  }
}

export default useAlignment
