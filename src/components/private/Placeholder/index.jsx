import React from 'react'
import PropTypes from 'prop-types'

import { propTypes } from '../../../util/style'
import Text from '../../Text'
import Box from '../../Box'
import Flex from '../../Flex'

const Placeholder = ({ label, width, height }) => (
  <Flex
    sx={{
      width,
      height,
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(51,51,51,.08)',
      border: '2px solid rgba(51,51,51,.3)',
    }}
  >
    {label ? (
      <Box px="3" py="2">
        <Text size="small" weight="strong" align="center" baseline={false}>
          {label}
        </Text>
      </Box>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', height: '100%', width: '100%' }}
      >
        <line
          x1={0}
          y1={0}
          x2="100%"
          y2="100%"
          style={{ strokeWidth: '2px', stroke: 'rgba(51,51,51,.1)' }}
        />
        <line
          x1="100%"
          y1={0}
          x2={0}
          y2="100%"
          style={{ strokeWidth: '2px', stroke: 'rgba(51,51,51,.1)' }}
        />
      </svg>
    )}
  </Flex>
)

Placeholder.propTypes = {
  label: PropTypes.string,
  height: propTypes.layout.height,
  width: propTypes.layout.width,
}

Placeholder.defaultProps = {
  label: null,
  height: 100,
  width: 'auto',
}

export default Placeholder
