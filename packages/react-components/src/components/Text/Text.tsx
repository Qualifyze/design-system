import * as React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
// import responsiveCapsize from 'responsive-capsize';
import capsize from 'capsize';

import { styled, StitchesVariants } from '../../stitches.config';

const DEFAULT_TAG = 'p';

// Font metrics for "Inter"
const fontMetrics = {
  capHeight: 2048,
  ascent: 2728,
  descent: -680,
  lineGap: 0,
  unitsPerEm: 2816,
};

const tinyStyles = capsize({
  capHeight: 8,
  lineGap: 10,
  fontMetrics,
});

const smallStyles = capsize({
  capHeight: 10,
  lineGap: 12,
  fontMetrics,
});

const standardStyles = capsize({
  capHeight: 12,
  lineGap: 18,
  fontMetrics,
});

const largeStyles = capsize({
  capHeight: 14,
  lineGap: 20,
  fontMetrics,
});

console.log(tinyStyles);

export const StyledText = styled(DEFAULT_TAG, {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  marginBlockStart: '0',
  marginBlockEnd: '0',
  marginInlineStart: '0',
  marginInlineEnd: '0',

  variants: {
    size: {
      tiny: {
        ...tinyStyles,
        '&::before': {
          ...tinyStyles['::before'],
        },
        '&::after': {
          ...tinyStyles['::after'],
        },
      },
      small: {
        ...smallStyles,
        '&::before': {
          ...smallStyles['::before'],
        },
        '&::after': {
          ...smallStyles['::after'],
        },
      },
      standard: {
        ...standardStyles,
        '&::before': {
          ...standardStyles['::before'],
        },
        '&::after': {
          ...standardStyles['::after'],
        },
      },
      large: {
        ...largeStyles,
        '&::before': {
          ...largeStyles['::before'],
        },
        '&::after': {
          ...largeStyles['::after'],
        },
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'standard',
  },
});

// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type TextVariants = Omit<StitchesVariants<typeof StyledText>, 'size'>;
type TextOwnProps = TextVariants & { size?: any };

type TextComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  TextOwnProps
>;

export const Text = React.forwardRef((props, forwardedRef) => {
  return <StyledText {...props} ref={forwardedRef} />;
}) as TextComponent;

Text.toString = () => `.${StyledText.className}`;
