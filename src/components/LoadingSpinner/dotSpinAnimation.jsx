import { keyframes } from '@emotion/core'

const dotSpinAnimation = keyframes`
  0%,
  100% {
    box-shadow:
      0 -18px 0 0 currentColor,
      12.72984px -12.72984px 0 0 currentColor,
      18px 0 0 0 currentColor,
      12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }

  12.5% {
    box-shadow:
      0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.72984px -12.72984px 0 0 currentColor,
      18px 0 0 0 currentColor,
      12.72984px 12.72984px 0 0 currentColor,
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }

  25% {
    box-shadow:
      0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 0 currentColor,
      12.72984px 12.72984px 0 0 currentColor,
      0 18px 0 0 currentColor,
      -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }

  37.5% {
    box-shadow:
      0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.72984px 12.72984px 0 0 currentColor,
      0 18px 0 0 currentColor,
      -12.72984px 12.72984px 0 0 currentColor,
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }

  50% {
    box-shadow:
      0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 0 currentColor,
      -12.72984px 12.72984px 0 0 currentColor,
      -18px 0 0 0 currentColor,
      -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }

  62.5% {
    box-shadow:
      0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 0 currentColor,
      -18px 0 0 0 currentColor,
      -12.72984px -12.72984px 0 0 currentColor;
  }

  75% {
    box-shadow:
      0 -18px 0 0 currentColor,
      12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 0 currentColor,
      -12.72984px -12.72984px 0 0 currentColor;
  }

  87.5% {
    box-shadow:
      0 -18px 0 0 currentColor,
      12.72984px -12.72984px 0 0 currentColor,
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 0 currentColor;
  }
`
export default dotSpinAnimation
