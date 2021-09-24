import React from 'react'
import PropTypes from 'prop-types'

import TextLink from '../TextLink'

const TextLinkButton = ({ onClick, isLoading, children }) => {
  return (
    <TextLink
      as="span"
      role="button"
      tabIndex={0}
      onClick={onClick}
      isLoading={isLoading}
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
}

export default TextLinkButton
