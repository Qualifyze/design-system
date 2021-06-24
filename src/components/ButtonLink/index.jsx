/* eslint-disable react/destructuring-assignment, react/require-default-props */
import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

const ButtonLink = props => {
  return <Button as={props.as || 'a'} {...props} />
}

ButtonLink.displayName = `ButtonLink`

ButtonLink.propTypes = {
  /** Sets the HTML tag for the component */
  // eslint-disable-next-line react/forbid-prop-types
  as: PropTypes.any,
  size: PropTypes.oneOf(['small', 'standard', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
}

export default ButtonLink
