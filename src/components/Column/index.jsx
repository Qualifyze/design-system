import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { propTypes } from '../../util/style'
import Box from '../Box'
import { ColumnsContext } from '../Columns'

const resolveWidth = {
  fill: '100%',
}

const Column = ({ width, children }) => {
  const { defaultWidth } = useContext(ColumnsContext)

  // If width is `auto`, we need to make sure the column doesn't break lines
  const preventBreak = width === 'auto'

  return (
    <Box
      sx={{
        width: resolveWidth[width] ?? width ?? defaultWidth,
        flexShrink: preventBreak ? 0 : null,
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
