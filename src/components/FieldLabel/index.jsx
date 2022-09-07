import React from 'react'
import PropTypes from 'prop-types'

import Stack from '../Stack'
import Box from '../Box'
import Flex from '../Flex'
import Text from '../Text'

const FieldLabel = ({
  htmlFor,
  label,
  description,
  secondaryLabel,
  tertiaryLabel,
}) => {
  if (!label) {
    return null
  }

  const labelElement = (
    <Text as="span">
      <Box as="span" sx={{ fontWeight: 500 }}>
        {label}
      </Box>
      {secondaryLabel ? (
        <Text as="span" color="grey.600">
          &nbsp;({secondaryLabel})
        </Text>
      ) : null}
    </Text>
  )

  return (
    <Stack space={0}>
      <Flex as="span" sx={{ justifyContent: 'space-between', zIndex: 1 }}>
        {htmlFor ? (
          <label htmlFor={htmlFor}>{labelElement}</label>
        ) : (
          labelElement
        )}
        {tertiaryLabel ? <Text>&nbsp;{tertiaryLabel}</Text> : null}
      </Flex>
      {description ? (
        <Box>
          <Text tone="secondary">{description}</Text>
        </Box>
      ) : null}
    </Stack>
  )
}

FieldLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.node,
  secondaryLabel: PropTypes.string,
  tertiaryLabel: PropTypes.node,
}

FieldLabel.defaultProps = {
  label: null,
  description: null,
  secondaryLabel: null,
  tertiaryLabel: null,
}

export default FieldLabel
