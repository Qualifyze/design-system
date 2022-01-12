import PropTypes from 'prop-types'
import React from 'react'

import { styled } from '../../util/style'
import Box from '../Box'

const Bar = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: auto;
  transition: transform 0.2s linear 0s;
  transform-origin: left center;
  background-color: currentColor;
`

const IndeterminateBar1 = styled(Bar)`
  animation: 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s infinite normal
    none running bar;

  @keyframes bar {
    0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
  }
`

const IndeterminateBar2 = styled(Bar)`
  animation: 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite normal none
    running bar;

  @keyframes bar {
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
  }
`

export default function ProgressBar({ variant, size, value, color, bg, fg }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        height: size === 'small' ? 3 : 5,
        bg: bg ?? `${color}.100`,
        color: fg ?? `${color}.500`,
      }}
    >
      {variant === 'indeterminate' && (
        <>
          <IndeterminateBar1 />
          <IndeterminateBar2 />
        </>
      )}
      {variant === 'determinate' && (
        <Bar
          style={{ width: `${Math.min(Math.max(value ?? 0, 0), 1) * 100}%` }}
        />
      )}
    </Box>
  )
}

ProgressBar.propTypes = {
  variant: PropTypes.oneOf(['indeterminate', 'determinate']),
  size: PropTypes.oneOf(['normal', 'small']),
  value: PropTypes.number(),
  color: PropTypes.oneOf(['primary', 'secondary']),
  bg: PropTypes.string(),
  fg: PropTypes.string(),
}

ProgressBar.defaultProps = {
  variant: 'indeterminate',
  size: 'normal',
  value: undefined,
  color: 'primary',
  bg: undefined,
  fg: undefined,
}
