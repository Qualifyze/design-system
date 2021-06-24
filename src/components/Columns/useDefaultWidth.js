const useDefaultWidth = (children, collapseBelow = null) => {
  if (!Array.isArray(children)) {
    return '100.00%'
  }

  const calculatedWidth = `${(100 / children.length).toFixed(2)}%`

  if (typeof collapseBelow === 'string') {
    switch (collapseBelow) {
      case 'mobile':
        return ['100.00%', calculatedWidth]
      case 'tablet':
        return ['100.00%', '100.00%', calculatedWidth]
      case 'desktop':
        return ['100.00%', '100.00%', '100.00%', calculatedWidth]
      default:
        return calculatedWidth
    }
  }

  return calculatedWidth
}

export default useDefaultWidth
