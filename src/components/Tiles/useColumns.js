const getColWidth = cols => {
  return `${100 / cols}%` || `100%`
}

const useColumns = cols => {
  // if we have an array must be responsive
  if (Array.isArray(cols)) {
    return cols.map(bpCols => `0 0 ${getColWidth(bpCols)}`)
  }
  return `0 0 ${getColWidth(cols)}`
}

export default useColumns
