import * as React from 'react';
import { styled, StitchesVariants } from '../../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'button';

const StyledButton = styled(DEFAULT_TAG, {
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
  px: '$2',
  fontFamily: '$inter',
  // fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',
  cursor: 'pointer',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
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
        fontSize: '$3',
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
        backgroundColor: '$indigo10',
        color: 'white',
        '&:active': {
          backgroundColor: '$indigo9',
        },
        '&:focus': {
          backgroundColor: '$indigo8',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: '$slate11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
      },
      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
      },
    },
  },
  defaultVariants: {
    size: 'standard',
    variant: 'primary',
  },
});

// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type ButtonVariants = Omit<StitchesVariants<typeof StyledButton>, 'size'>;
type ButtonOwnProps = ButtonVariants & { size?: any };

type ButtonComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  ButtonOwnProps
>;

export const Button = React.forwardRef((props, forwardedRef) => {
  return <StyledButton {...props} ref={forwardedRef} />;
}) as ButtonComponent;

Button.toString = () => `.${StyledButton.className}`;