import React from 'react'
import PropTypes from 'prop-types'

import TextLink from '../TextLink'

const TextLinkButton = ({ onClick, isLoading, icon, children }) => {
  const handleKeyPress = React.useCallback(
    event => {
      if ((!isLoading && event.code === 'Enter') || event.code === 'Space') {
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
      icon={icon}
      onKeyPress={handleKeyPress}
    >
      {children}
    </TextLink>
  )
}

TextLinkButton.defaultProps = {
  isLoading: false,
}

TextLinkButton.propTypes = {
  isLoading: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  // eslint-disable-next-line react/require-default-props
  icon: PropTypes.node,
}

export default TextLinkButton
