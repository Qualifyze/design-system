/* Heavily inspired by https://github.com/seek-oss/braid-design-system/blob/f64967236918e9aabe3886aba7d8a94ffaf2446f/lib/components/Tiles/Tiles.tsx */

import React, { Children } from 'react'
import PropTypes from 'prop-types'
import flattenChildren from 'react-keyed-flatten-children'

import { propType } from '../../util/style'
import Box from '../Box'
import useNegativeValue from '../private/hooks/useNegativeValue'

import useColumns from './useColumns'
import useAlignment from './useAlignment'

const Tiles = ({ columns, as, space, align, children }) => (
  <Box
    as={as}
    sx={{ display: 'block', width: '100%', mt: useNegativeValue(space) }}
  >
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        ml: useNegativeValue(space),
        justifyContent: useAlignment(align),
      }}
    >
      {Children.map(flattenChildren(children), child => (
        <Box
          sx={{
            'minWidth': 0,
            'flex': useColumns(columns),
            '@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none)':
              {
                // IE11 needs this overflow, although it doesn't change the layout.
                // Without it, IE11 creates horizontal scrollbars.
                overflow: 'hidden',
              },
          }}
        >
          <Box
            sx={{
              height: '100%',
              /* This needs to be a separate element to support IE11. */
              paddingTop: space,
              paddingLeft: space,
            }}
          >
            {child}
          </Box>
        </Box>
      ))}
    </Box>
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
