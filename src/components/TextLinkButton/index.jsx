import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import TextLink from '../TextLink'

const TextLinkButton = ({ onClick, ...props }) => {
  const handleKeyPress = useCallback(
    event => {
      if (onClick && (event.code === 'Enter' || event.code === 'Space')) {
        onClick()
      }
    },
    [onClick]
  )

  return (
    <TextLink
      as="span"
      role="button"
      tabIndex={0}
      onKeyPress={handleKeyPress}
      {...props}
    />
  )
}

TextLinkButton.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.node,
}

TextLinkButton.defaultProps = {
  isLoading: false,
  onClick: null,
  children: null,
  icon: null,
}

export default TextLinkButton
