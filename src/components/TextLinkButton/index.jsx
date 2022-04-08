import React from 'react'

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
      {...props}
      onClick={isLoading ? undefined : onClick}
      isLoading={isLoading}
      onKeyPress={handleKeyPress}
    />
  )
}

TextLinkButton.propTypes = {
  children: TextLink.propTypes.children,
  icon: TextLink.propTypes.icon,
  isLoading: TextLink.propTypes.isLoading,
  onClick: TextLink.propTypes.onClick,
  tone: TextLink.propTypes.tone,
}

TextLinkButton.defaultProps = {
  children: TextLink.defaultProps.children,
  icon: TextLink.defaultProps.icon,
  isLoading: TextLink.defaultProps.isLoading,
  onClick: TextLink.defaultProps.onClick,
  tone: TextLink.defaultProps.tone,
}

export default TextLinkButton
