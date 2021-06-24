import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box'
import Icon from '../Icon'
import Columns from '../Columns'
import Column from '../Column'

const backgroundForTone = {
  positive: 'green.100',
  neutral: 'primary.100',
  critical: 'red.100',
  caution: 'yellow.100',
}

const colorForTone = {
  positive: 'green.700',
  neutral: 'primary.700',
  critical: 'red.700',
  caution: 'yellow.700',
}

const iconForTone = {
  positive: 'checkmark',
  neutral: 'information',
  critical: 'cross',
  caution: 'warning',
}

const highlightBarSize = 1

const Alert = ({ children, tone }) => {
  return (
    <Box
      role="alert"
      aria-live="polite"
      sx={{
        bg: backgroundForTone[tone],
        p: 3,
        borderRadius: 2,
        color: colorForTone[tone],
        boxShadow: `inset 0 0 0 1px currentColor`,
        overflow: 'hidden',
      }}
    >
      <Box sx={{ pl: highlightBarSize }}>
        <Columns space={3}>
          <Column width="auto">
            <Icon name={iconForTone[tone]} tone={tone} />
          </Column>
          <Column width="fill">{children}</Column>
        </Columns>
      </Box>
      <Box
        sx={{
          bg: colorForTone[tone],
          pl: highlightBarSize,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
        }}
      />
    </Box>
  )
}

Alert.displayName = `Alert`

Alert.defaultProps = {
  tone: 'neutral',
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  tone: PropTypes.oneOf(['positive', 'neutral', 'critical', 'caution']),
}

export default Alert
