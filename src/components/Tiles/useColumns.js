const useColumns = columnCount => {
  // if we have an array must be responsive
  if (Array.isArray(columnCount)) {
    return columnCount.map(col => `repeat(${col}, 1fr)`)
  }

  return `repeat(${columnCount}, 1fr)`
}

export default useColumns
