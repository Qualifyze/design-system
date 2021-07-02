import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '../../util/style'

import Dots from './Dots'

const Wrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80px',
  height: '80px',
})

const LoadingSpinner = ({ variant: dotColor }) => (
  <Wrapper>
    <Dots variant={dotColor} />
  </Wrapper>
)

LoadingSpinner.defaultProps = {
  variant: 'default',
}

LoadingSpinner.propTypes = {
  variant: PropTypes.oneOf(['default', 'secondary', 'light']),
}

export default LoadingSpinner
