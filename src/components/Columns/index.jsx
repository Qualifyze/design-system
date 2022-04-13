import React, { createContext } from 'react'
import PropTypes from 'prop-types'

import { propTypes } from '../../util/style'
import Flex from '../Flex'

import useDefaultWidth from './useDefaultWidth'
import useFlexAlignment from './useFlexAlignment'
import useFlexDirection from './useFlexDirection'
import useFlexWrap from './useFlexWrap'

export const ColumnsContext = createContext({
  pl: 0,
  pt: 0,
  defaultWidth: '100%',
})

const Columns = ({ children, collapseBelow, space, alignY, align }) => {
  // calculate the default width to use if none if provided for the children
  // add it to the context so each col can just use the default width per item
  // if none was given to a child
  const defaultWidth = useDefaultWidth(children, collapseBelow)

  return (
    <Flex
      sx={{
        flexWrap: useFlexWrap(collapseBelow),
        flexDirection: useFlexDirection(collapseBelow),
        ...useFlexAlignment(align, alignY, collapseBelow),
        gap: space,
      }}
    >
      <ColumnsContext.Provider
        value={{
          defaultWidth,
        }}
      >
        {children}
      </ColumnsContext.Provider>
    </Flex>
  )
}

Columns.defaultProps = {
  collapseBelow: null,
  align: 'left',
  alignY: 'top',
}

const alignValues = PropTypes.oneOf(['left', 'right', 'center', 'fill'])
const alignYValues = PropTypes.oneOf(['top', 'bottom', 'center', 'stretch'])

Columns.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  /** Breakpoint for when columns should appear stacked vertically */
  collapseBelow: PropTypes.oneOf(['mobile', 'tablet', 'desktop']),
  /** Spacing between child components */
  ...propTypes.space,
  /** Vertical alignment of child components */
  alignY: PropTypes.oneOfType([alignYValues, PropTypes.arrayOf(alignYValues)]),
  /** Horizontal alignment of child components */
  align: PropTypes.oneOfType([alignValues, PropTypes.arrayOf(alignValues)]),
}

export default Columns
