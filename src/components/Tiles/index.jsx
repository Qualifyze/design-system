/* Heavily inspired by https://github.com/seek-oss/braid-design-system/blob/f64967236918e9aabe3886aba7d8a94ffaf2446f/lib/components/Tiles/Tiles.tsx */

import React, { Children } from 'react'
import PropTypes from 'prop-types'
import flattenChildren from 'react-keyed-flatten-children'

import { propType } from '../../util/style'
import Box from '../Box'
import Flex from '../Flex'

import useAlignment from './useAlignment'
import useColumns from './useColumns'

const Tiles = ({ columns, as, space, align, children }) => (
  <Box
    as={as}
    sx={{
      display: 'grid',
      width: '100%',
      gridGap: space,
      gridTemplateColumns: useColumns(columns),
    }}
  >
    {Children.map(flattenChildren(children), child => (
      <Flex
        sx={{
          minWidth: 0,
          justifyContent: useAlignment(align),
        }}
      >
        {child}
      </Flex>
    ))}
  </Box>
)

Tiles.defaultProps = {
  as: 'div',
  space: 0,
  columns: 3,
  align: 'left',
}

const alignValues = PropTypes.oneOf(['left', 'right', 'center'])

Tiles.propTypes = {
  /** Sets the HTML tag for the component */
  as: PropTypes.oneOf(['span', 'div', 'section', 'article']),
  /** Child React components to render */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /** Spacing between the children */
  space: propType,
  /** How many columns should we have */
  columns: propType,
  align: PropTypes.oneOfType([alignValues, PropTypes.arrayOf(alignValues)]),
}

export default Tiles
