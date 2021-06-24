/**
 * Heavily inspired by Braid https://github.com/seek-oss/braid-design-system/blob/26ea250b1565a1d65099ff3298fd474dd6fd1a10/lib/components/Inline/Inline.tsx
 *
 * Note: Currently, it's not possible to use <Hidden> inside an <Inline>. This needs more work, but I'm not sure if we will actually need it...
 */
import React, { Children } from 'react'
import PropTypes from 'prop-types'
import flattenChildren from 'react-keyed-flatten-children'

import { propType } from '../../util/style'
import Box from '../Box'
import Flex from '../Flex'

import useFlexDirection from './useFlexDirection'
import useAlignment from './useAlignment'

const Inline = ({ space, collapseBelow, alignY, children }) => {
  const inlineItems = flattenChildren(children)

  return (
    <Box mt={-space}>
      <Flex
        ml={-space}
        flexWrap="wrap"
        flexDirection={useFlexDirection(collapseBelow)}
        {...useAlignment(alignY)}
      >
        {Children.map(inlineItems, child => {
          return (
            <Box pl={space} pt={space}>
              {child}
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}

Inline.defaultProps = {
  space: 0,
  collapseBelow: null,
  alignY: 'top',
}

const alignYValues = PropTypes.oneOf(['top', 'bottom', 'center'])

Inline.propTypes = {
  /** Child React components to render */
  children: PropTypes.node.isRequired,
  /** Spacing between the children */
  space: propType,
  /** Shows components in a single column below this breakpoint */
  collapseBelow: PropTypes.oneOf(['mobile', 'tablet', 'desktop']),
  alignY: PropTypes.oneOfType([alignYValues, PropTypes.arrayOf(alignYValues)]),
}

export default Inline
