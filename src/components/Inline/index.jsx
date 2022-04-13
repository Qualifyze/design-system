/**
 * Heavily inspired by Braid https://github.com/seek-oss/braid-design-system/blob/26ea250b1565a1d65099ff3298fd474dd6fd1a10/lib/components/Inline/Inline.tsx
 *
 * Note: Currently, it's not possible to use <Hidden> inside an <Inline>. This needs more work, but I'm not sure if we will actually need it...
 */
import React from 'react'
import PropTypes from 'prop-types'

import { propType } from '../../util/style'
import Box from '../Box'

import useFlexDirection from './useFlexDirection'
import useAlignment from './useAlignment'

const Inline = ({ space, collapseBelow, alignY, children }) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        flexDirection: useFlexDirection(collapseBelow),
        alignItems: useAlignment(alignY),
        gap: space,
      }}
    >
      {children}
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
  /** Vertical alignment of components */
  alignY: PropTypes.oneOfType([alignYValues, PropTypes.arrayOf(alignYValues)]),
}

export default Inline
