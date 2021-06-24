const convertToNumIfNeeded = value => {
  return Number.isNaN(Number(value)) ? 0 : value
}

const useNegativeValue = value => {
  if (Array.isArray(value)) {
    return value.map(val => -convertToNumIfNeeded(val))
  }
  return -convertToNumIfNeeded(value)
}

export default useNegativeValue
