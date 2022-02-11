// lovingly stolen from https://codepen.io/sirJiggles/pen/oNowExg
import React from 'react'

import { styled } from '../../util/style'
import Box from '../Box'

const LoadingMarkup = () => {
  const barStyles = {
    position: 'absolute',
    height: '4px',
    bg: 'rgba(255,255,255,0.6)',
    transition: 'transform .2s linear',
    left: 0,
    top: 0,
    bottom: 0,
    width: '100%',
  }
  return (
    <Box
      as="span"
      sx={{
        bg: 'rgba(255,255,255,0.2)',
        height: '4px',
        bottom: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        margin: '0 auto',
        overflow: 'hidden',
        animation: 'start .3s ease-in',
        display: 'inline-block',
      }}
    >
      <Box
        as="span"
        sx={{
          ...barStyles,
          animation: 'progressLinearMovement 2.5s infinite',
          animationDelay: 0,
        }}
      />
      <Box
        as="span"
        sx={{
          ...barStyles,
          left: '-100%',
          animation: 'progressLinearMovement 2.5s infinite',
          animationDelay: '.7s',
        }}
      />
    </Box>
  )
}

export const LoadingBar = styled(LoadingMarkup)`
  @keyframes growBar1 {
    0% {
      animation-timing-function: linear;
      transform: scaleX(0.1);
    }
    36% {
      animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);
      transform: scaleX(0.1);
    }
    69% {
      animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);
      transform: scaleX(0.83);
    }
    100% {
      transform: scaleX(0.1);
    }
  }

  @keyframes moveBar1 {
    0% {
      left: -105.16667%;
      animation-timing-function: linear;
    }
    20% {
      left: -105.16667%;
      animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);
    }
    69% {
      left: 21.5%;
      animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
    }
    100% {
      left: 95.44444%;
    }
  }

  @keyframes growBar2 {
    0% {
      animation-timing-function: cubic-bezier(
        0.20503,
        0.05705,
        0.57661,
        0.45397
      );
      transform: scaleX(0.1);
    }
    19% {
      animation-timing-function: cubic-bezier(
        0.15231,
        0.19643,
        0.64837,
        1.00432
      );
      transform: scaleX(0.57);
    }
    44% {
      animation-timing-function: cubic-bezier(
        0.25776,
        -0.00316,
        0.21176,
        1.38179
      );
      transform: scaleX(0.91);
    }
    100% {
      transform: scaleX(0.1);
    }
  }

  @keyframes moveBar2 {
    0% {
      left: -54.88889%;
      animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);
    }
    25% {
      left: -17.25%;
      animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);
    }
    48% {
      left: 29.5%;
      animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);
    }
    100% {
      left: 117.38889%;
    }
  }

  @keyframes start {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 20px;
      opacity: 1;
    }
  }

  @keyframes end {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 2px;
      opacity: 1;
    }
  }

  @keyframes progressLinearMovement {
    0% {
      left: -100%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
`
