import { styled } from '../../stitches.config';

const DEFAULT_TAG = 'button';

export const Button = styled(DEFAULT_TAG, {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  // height: '50px',
  px: '$32',
  fontFamily: '$inter',
  // fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',
  cursor: 'pointer',

  '&:disabled': {
    backgroundColor: '$gray2',
    boxShadow: 'inset 0 0 0 1px $colors$gray7',
    color: '$gray8',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      small: {
        borderRadius: '$1',
        height: '50px',
        px: '$2',
        fontSize: '$1',
        lineHeight: '$sizes$5',
      },
      standard: {
        borderRadius: '$2',
        height: '50px',
        px: '$3',
        fontSize: '$14',
        lineHeight: '$sizes$6',
      },
      large: {
        borderRadius: '$2',
        height: '70px',
        px: '$4',
        fontSize: '$4',
        lineHeight: '$sizes$7',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$brand10',
        color: 'white',
        '&:active': {
          backgroundColor: '$brand9',
        },
        '&:focus': {
          backgroundColor: '$brand8',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$gray4',
        boxShadow: 'inset 0 0 0 1px $colors$gray8',
        color: '$gray11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$gray5',
            boxShadow: 'inset 0 0 0 1px $colors$gray8',
          },
        },
        '&:active': {
          backgroundColor: '$gray5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8',
        },
      },
      waiting: {
        backgroundColor: '$gray4',
        boxShadow: 'inset 0 0 0 1px $colors$gray8',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$gray5',
            boxShadow: 'inset 0 0 0 1px $colors$gray8',
          },
        },
        '&:active': {
          backgroundColor: '$gray5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray8',
        },
      },
    },
  },
  defaultVariants: {
    size: 'standard',
    variant: 'primary',
  },
});
