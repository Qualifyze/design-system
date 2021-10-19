import PropTypes from 'prop-types'
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { useMediaQuery, useTheme } from '../../util/style'

const Context = createContext()

export function AppBarContext({ collapseBelow, children }) {
  const theme = useTheme()
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = useCallback(() => setExpanded(e => !e), [])
  const collapsed = useMediaQuery(
    `(max-width: ${theme.breakpoints[collapseBelow]})`
  )

  const context = useMemo(
    () => ({
      collapsed,
      expanded,
      setExpanded,
      toggleExpanded,
    }),
    [collapsed, expanded, toggleExpanded]
  )

  return <Context.Provider value={context}>{children}</Context.Provider>
}

AppBarContext.propTypes = {
  children: PropTypes.node,
  collapseBelow: PropTypes.string.isRequired,
}

AppBarContext.defaultProps = {
  children: null,
}

export function useAppBarContext() {
  return useContext(Context)
}
