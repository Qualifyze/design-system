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

const useAlignment = values => {
  if (Array.isArray(values)) {
    return values.map(a => transformAlign(a))
  }
  return transformAlign(values)
}

export default useAlignment
