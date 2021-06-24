import React from 'react'

import TextLink from '../TextLink'

const TextLinkButton = props => {
  return <TextLink as="span" role="button" tabIndex={0} {...props} />
}

export default TextLinkButton
