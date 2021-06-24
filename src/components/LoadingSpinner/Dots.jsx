import { styled, color, variant } from '../../util/style'

import dotSpinAnimation from './dotSpinAnimation'

const Dots = styled('div')(
  {
    position: 'relative',
    width: '8px',
    height: '8px',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    boxShadow: `0 -18px 0 0 white, 12.72984px -12.72984px 0 0 white,
    18px 0 0 0 white, 12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
    0 18px 0 0 rgba(152, 128, 255, 0),
    -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
    -18px 0 0 0 rgba(152, 128, 255, 0),
    -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0)`,
    animation: `${dotSpinAnimation} 1s infinite ease-in-out both`,
  },
  variant({
    prop: 'variant',
    variants: {
      default: {
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

export default Dots
