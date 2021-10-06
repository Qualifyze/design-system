import { useEffect, useState } from 'react'

/**
 * Accepts a media query string then uses the
 * [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API to determine if it
 * matches with the current document.
 *
 * It also monitor the document changes to detect when it matches or stops matching the media query.
 *
 * Returns the validity state of the given media query.
 */
export function useMediaQuery(mediaQuery) {
  const [matches, setMatches] = useState(
    Boolean(window.matchMedia(mediaQuery).matches)
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    const documentChangeHandler = () =>
      setMatches(Boolean(mediaQueryList.matches))

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler)
    } catch (e) {
      mediaQueryList.addListener(documentChangeHandler)
    }

    documentChangeHandler()
    return () => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler)
      } catch (e) {
        mediaQueryList.removeListener(documentChangeHandler)
      }
    }
  }, [mediaQuery])

  return matches
}
