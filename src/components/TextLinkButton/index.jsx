import React from 'react'
import PropTypes from 'prop-types'

import TextLink from '../TextLink'

const TextLinkButton = ({ onClick, isLoading, ...props }) => {
  const handleKeyPress = React.useCallback(
    event => {
      if (!isLoading && (event.code === 'Enter' || event.code === 'Space')) {
        onClick?.()
      }
    },
    [isLoading, onClick]
  )

  return (
    <TextLink
      as="span"
      role="button"
      tabIndex={0}
      onClick={isLoading ? undefined : onClick}
      isLoading={isLoading}
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
