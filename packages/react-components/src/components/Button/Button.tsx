import React from 'react';
import { useFocusRing } from '@react-aria/focus';

import { styled } from '../../stitches.config';

import { FocusRing } from '../private/FocusRing/FocusRing';
import { Text } from '../Text/Text';

const ButtonPrimitive = styled('button', {
  // Reset
  all: 'unset',
  position: 'relative',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom styles
  fontVariantNumeric: 'tabular-nums',

  '&:active': {
    transform: '$transforms$touchable',
  },

  '& svg': {
    marginRight: '$8',
  },

  variants: {
    size: {
      small: {
        borderRadius: '$4',
        height: '40px',
        px: '$16',
        fontSize: '$14',
        lineHeight: '$sizes$5',
      },
      standard: {
        borderRadius: '$4',
        height: '48px',
        px: '$24',
        fontSize: '$14',
        lineHeight: '$sizes$6',
      },
      large: {
        borderRadius: '$4',
        height: '54px',
        px: '$32',
        fontSize: '$14',
        lineHeight: '$sizes$7',
      },
    },
    variant: {
      solid: {
        backgroundColor: '$brand10',
        color: 'white',
        '&:hover': {
          backgroundColor: '$brand9',
        },
      },
      soft: {
        backgroundColor: '$brand3',
        color: '$brand11',
        '&:hover': {
          backgroundColor: '$brand4',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$brand11',
        boxShadow: 'inset 0 0 0 2px $colors$brand7',
        '&:hover': {
          boxShadow: 'inset 0 0 0 2px $colors$brand8',
          backgroundColor: '$brand3',
        },
      },
      transparent: {
        backgroundColor: 'transparent',
        color: '$brand11',
        '&:hover': {
          backgroundColor: '$brand4',
        },
      },
    },
    tone: {
      brand: {},
      danger: {},
    },
  },
  defaultVariants: {
    size: 'standard',
    variant: 'solid',
    tone: 'brand',
  },
  compoundVariants: [
    {
      tone: 'danger',
      variant: 'solid',
      css: {
        backgroundColor: '$red10',
        color: 'white',
        '&:hover': {
          backgroundColor: '$red9',
        },
        '&:active': {
          transform: '$transforms$touchable',
        },
      },
    },
    {
      tone: 'danger',
      variant: 'soft',
      css: {
        backgroundColor: '$red3',
        color: '$red11',
        '&:hover': {
          backgroundColor: '$red4',
        },
      },
    },
    {
      tone: 'danger',
      variant: 'ghost',
      css: {
        backgroundColor: 'transparent',
        color: '$red11',
        boxShadow: 'inset 0 0 0 2px $colors$red7',
        '&:hover': {
          boxShadow: 'inset 0 0 0 2px $colors$red8',
          backgroundColor: '$red3',
        },
      },
    },
    {
      tone: 'danger',
      variant: 'transparent',
      css: {
        backgroundColor: 'transparent',
        color: '$red11',
        '&:hover': {
          backgroundColor: '$red4',
        },
      },
    },
  ],
});

export type ButtonProps = React.ComponentProps<typeof ButtonPrimitive>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size, variant, tone }, ref) => {
    let { isFocusVisible, focusProps } = useFocusRing();

    return (
      <ButtonPrimitive
        ref={ref}
        size={size}
        variant={variant}
        tone={tone}
        {...focusProps}
      >
        {isFocusVisible && <FocusRing />}
        <Text as="span">{children}</Text>
      </ButtonPrimitive>
    );
  }
);
