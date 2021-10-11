import capsize from 'capsize';

import { styled } from '../../stitches.config';

// Font metrics for "Inter"
const fontMetrics = {
  capHeight: 660,
  ascent: 984,
  descent: -273,
  lineGap: 0,
  unitsPerEm: 1000,
};

const tinyStyles = capsize({
  fontSize: 12,
  lineGap: 12,
  fontMetrics,
});

const smallStyles = capsize({
  fontSize: 14,
  lineGap: 18,
  fontMetrics,
});

const standardStyles = capsize({
  fontSize: 16,
  lineGap: 18,
  fontMetrics,
});

const largeStyles = capsize({
  fontSize: 20,
  lineGap: 24,
  fontMetrics,
});

export const Text = styled('p', {
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

  '& svg': {
    width: '1em',
    height: '1em',
    verticalAlign: 'middle',
    top: '-0.08em',
    position: 'relative',
  },

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
