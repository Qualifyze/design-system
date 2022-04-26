import PropTypes from 'prop-types'
import React from 'react'

import { color, styled, variant } from '../../util/style'
import Box from '../Box'

const Wrapper = styled(Box)(
  `
  display: inline-block;
  animation: 1.4s linear 0s infinite normal none running wrapper;
  width: ${props => props.size};
  height: ${props => props.size};

  @keyframes wrapper {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,
  variant({
    prop: 'variant',
    variants: {
      primary: {
        color: 'primary.600',
      },
      secondary: {
        color: 'secondary.600',
      },
      light: {
        color: 'white',
      },
    },
  }),
  color
)

const Circle = styled.circle`
  stroke: currentColor;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0;
  animation: 1.4s ease-in-out 0s infinite normal none running circle;

  @keyframes circle {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }

    100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px;
    }
  }
`

export default function LoadingSpinner(props) {
  return (
    <Wrapper as="span" role="progressbar" {...props}>
      <svg viewBox="22 22 44 44">
        <Circle
          as="circle"
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
        />
      </svg>
    </Wrapper>
  )
}

LoadingSpinner.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'light']),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

LoadingSpinner.defaultProps = {
  variant: 'primary',
  size: 48,
}
