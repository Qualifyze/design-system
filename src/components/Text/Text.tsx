/** @jsxImportSource theme-ui */
import * as React from 'react';
import responsiveCapsize from 'responsive-capsize';

import { Box } from '../Box/Box';
import { variant } from '../../theme/theme';

// Font metrics for "Source Sans Pro"
export const fontMetrics = {
  capHeight: 660,
  ascent: 984,
  descent: -273,
  lineGap: 0,
  unitsPerEm: 1000,
};

const tinyStyles = responsiveCapsize({
  fontMetrics,
  capHeight: [8],
  lineGap: [10],
});

const smallStyles = responsiveCapsize({
  fontMetrics,
  capHeight: [10],
  lineGap: [12],
});

const standardStyles = responsiveCapsize({
  fontMetrics,
  capHeight: [12],
  lineGap: [18],
});

const largeStyles = responsiveCapsize({
  fontMetrics,
  capHeight: [14],
  lineGap: [20],
});

const tones = variant({
  neutral: {
    color: 'blue',
  },
  positive: {
    color: 'positive',
  },
  caution: {
    color: 'caution',
  },
  critical: {
    color: 'critical',
  },
});
type Tone = keyof typeof tones;

const sizes = variant({
  tiny: {
    ...tinyStyles,
  },
  small: {
    ...smallStyles,
  },
  standard: {
    ...standardStyles,
  },
  large: {
    ...largeStyles,
  },
});
type Size = keyof typeof sizes;

const weights = variant({
  regular: {
    fontWeight: 'regular',
  },
  medium: {
    fontWeight: 'medium',
  },
  strong: {
    fontWeight: 'strong',
  },
});
type Weight = keyof typeof weights;

interface TextProps {
  tone?: Tone;
  size?: Size;
  weight?: Weight;
  as?: 'p' | 'span' | 'em' | 'strong';
  children: React.ReactNode;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  function Text(
    {
      as = 'p',
      tone = 'neutral',
      size = 'standard',
      weight = 'regular',
      children,
    },
    ref
  ) {
    return (
      <Box
        ref={ref}
        as={as}
        sx={{
          ...tones[tone],
          ...sizes[size],
          ...weights[weight],
        }}
      >
        {children}
      </Box>
    );
  }
);
