import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { propTypes } from '../../util/style'
import Box from '../Box'
import { ColumnsContext } from '../Columns'

const resolveWidth = {
  fill: '100%',
}

const Column = ({ width, children }) => {
  const { pt, pl, defaultWidth } = useContext(ColumnsContext)

  // If width is `auto`, we need to make sure the column doesn't break lines
  const preventBreak = width === 'auto'

  return (
    <Box
      sx={{
        pt,
        pl,
        width: resolveWidth[width] ?? width ?? defaultWidth,
        flexShrink: preventBreak ? 0 : null,
        position: 'static',
      }}
    >
      {children}
    </Box>
  )
}

Column.defaultProps = {
  width: undefined,
}

Column.propTypes = {
  children: PropTypes.node.isRequired,
  width: propTypes.layout.width,
}

export default Column
