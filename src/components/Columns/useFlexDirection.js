const colOrRowStyle = isColumn => {
  return isColumn ? 'column' : 'row'
}

const responsiveDirections = (desktopCol, tabletCol, mobileCol) => {
  return [
    colOrRowStyle(mobileCol),
    colOrRowStyle(tabletCol),
    colOrRowStyle(desktopCol),
    // this is so we can go 'bellow' desktop with the collapse
    colOrRowStyle(false),
  ]
}

const useFlexDirection = collapseBelow => {
  if (!collapseBelow) return colOrRowStyle(false)
  let direction

  switch (collapseBelow) {
    case 'mobile':
      direction = responsiveDirections(false, false, true)
      break
    case 'tablet':
      direction = responsiveDirections(false, true, true)
      break
    case 'desktop':
      direction = responsiveDirections(true, true, true)
      break
    default:
      direction = colOrRowStyle(true)
      break
  }
  return direction
}

export default useFlexDirection
