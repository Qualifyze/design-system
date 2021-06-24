const wrapStyle = noWrap => {
  return noWrap ? 'nowrap' : 'wrap'
}

const responsiveWrapDirections = (desktop, tablet, mobile) => {
  return [
    wrapStyle(mobile),
    wrapStyle(tablet),
    wrapStyle(desktop),
    // this is so we can go 'bellow' desktop with the collapse
    wrapStyle(true),
  ]
}

const useFlexWrap = collapseBelow => {
  if (!collapseBelow) return wrapStyle(true)
  let direction

  switch (collapseBelow) {
    case 'mobile':
      direction = responsiveWrapDirections(true, true, false)
      break
    case 'tablet':
      direction = responsiveWrapDirections(true, false, false)
      break
    case 'desktop':
      direction = responsiveWrapDirections(false, false, false)
      break
    default:
      direction = wrapStyle(true)
      break
  }
  return direction
}

export default useFlexWrap
