import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box'
import Flex from '../Flex'
import Text from '../Text'
import Icon from '../Icon'

const FieldMessage = ({ tone, message, disabled }) => {
  const toneColors = {
    positive: 'green.700',
    neutral: 'grey.700',
    critical: 'red.700',
  }
  const toneIcons = {
    positive: 'checkmark',
    critical: 'cross',
  }

  const showMessage = !disabled && message

  return (
    <Box>
      <Text as="span" size="small" color={toneColors[tone]}>
        <Flex minHeight="24px">
          {showMessage && tone !== 'neutral' ? (
            <Box mr={1} pt={1.5} flexShrink={0} flexGrow={0}>
              <Icon
                name={toneIcons[tone]}
                color={toneColors[tone]}
                size="small"
              />
            </Box>
          ) : null}
          {showMessage ? message : '\u00A0'}
        </Flex>
      </Text>
    </Box>
  )
}

FieldMessage.propTypes = {
  tone: PropTypes.oneOf(['positive', 'neutral', 'critical']),
  message: PropTypes.node,
  disabled: PropTypes.bool,
}

FieldMessage.defaultProps = {
  tone: 'neutral',
  message: '',
  disabled: false,
}
export default FieldMessage
