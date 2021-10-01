import PropTypes from 'prop-types'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const Context = createContext({
  collapsed: false,
  setCollapsed: () => {},
  toggleCollapsed: () => {},
})

export function DrawerContext({ children, initialCollapsed }) {
  const [collapsed, set] = useState(initialCollapsed ?? false)
  useEffect(() => set(initialCollapsed), [initialCollapsed])

  const setCollapsed = useCallback(value => set(value), [])
  const toggleCollapsed = useCallback(() => set(c => !c), [])

  const context = useMemo(
    () => ({ collapsed, setCollapsed, toggleCollapsed }),
    [collapsed, setCollapsed, toggleCollapsed]
  )

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export function useDrawerContext() {
  return useContext(Context)
}

DrawerContext.propTypes = {
  initialCollapsed: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

DrawerContext.defaultProps = {
  initialCollapsed: false,
}
