import React, { createContext } from 'react'
import PropTypes from 'prop-types'

import { propTypes } from '../../util/style'
import Flex from '../Flex'
import useNegativeValue from '../private/hooks/useNegativeValue'

import useDefaultWidth from './useDefaultWidth'
import useFlexAlignment from './useFlexAlignment'
import useFlexDirection from './useFlexDirection'
import useFlexWrap from './useFlexWrap'

export const ColumnsContext = createContext({
  pl: 0,
  pt: 0,
  defaultWidth: '100%',
})

// -----
// align: 'center' | 'right' | 'left' || Array < 'center' | 'right' | 'left' >
//   How children will align top to bottom, can also be an array of how the children will align
//   at breakpoints
// -----
// alignY: 'center' | 'top' | 'bottom' || Array<'center' | 'top' | 'bottom'>
//   How children will align along you y axis so top to bottom, can also be an array for
//   responsive props
// -----
// collapseBellow:? 'mobile' | 'tablet' | 'desktop'
//   At what breakpoint would you like to collapse into cols mode, this is most of the time
//   just mobile, but if you want to keep a row just don't supply anything here
// -----
// space:?propTypes.space
//   Optional prop for how to space out the children also can be responsive array
// -----

const Columns = ({ children, collapseBelow, space, alignY, align }) => {
  // calculate the default width to use if none if provided for the children
  // add it to the context so each col can just use the default width per item
  // if none was given to a child
  const defaultWidth = useDefaultWidth(children, collapseBelow)

  return (
    <Flex
      {...useFlexAlignment(align, alignY, collapseBelow)}
      flexDirection={useFlexDirection(collapseBelow)}
      flexWrap={useFlexWrap(collapseBelow)}
      ml={useNegativeValue(space)}
      mt={useNegativeValue(space)}
    >
      <ColumnsContext.Provider
        value={{
          pl: space,
          pt: space,
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

// enums for prop checking
const alignValues = PropTypes.oneOf(['left', 'right', 'center', 'fill'])
const alignYValues = PropTypes.oneOf(['top', 'bottom', 'center', 'stretch'])

Columns.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  collapseBelow: PropTypes.oneOf(['mobile', 'tablet', 'desktop']),
  ...propTypes.space,
  alignY: PropTypes.oneOfType([alignYValues, PropTypes.arrayOf(alignYValues)]),
  align: PropTypes.oneOfType([alignValues, PropTypes.arrayOf(alignValues)]),
}

export default Columns
