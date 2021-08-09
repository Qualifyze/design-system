import React, { ReactNode } from 'react';

import { Box } from '../../Box/Box';

export interface PlaceholderProps {
  height: string | number;
  width?: string | number;
  label?: ReactNode;
  shape?: 'rectangle' | 'round';
}

function resolveToPxIfUnitless(value: string | number) {
  return typeof value === 'string' && /[0-9]$/.test(value)
    ? `${value}px`
    : value;
}

export const Placeholder = ({
  label,
  width = 'auto',
  height = 100,
}: PlaceholderProps) => (
  <Box
    css={{
      width: resolveToPxIfUnitless(width),
      height: resolveToPxIfUnitless(height),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bc: '$gray5',
      borderColor: '$gray8',
      borderWidth: 2,
      borderStyle: 'solid',
    }}
  >
    {label ? (
      <Box css={{ px: 3, py: 2 }}>
        <Box as="span" css={{ color: '$gray11' }}>
          {label}
        </Box>
      </Box>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', height: '100%', width: '100%' }}
      >
        <line
          x1={0}
          y1={0}
          x2="100%"
          y2="100%"
          style={{ strokeWidth: '2px', stroke: 'rgba(51,51,51,.1)' }}
        />
        <line
          x1="100%"
          y1={0}
          x2={0}
          y2="100%"
          style={{ strokeWidth: '2px', stroke: 'rgba(51,51,51,.1)' }}
        />
      </svg>
    )}
  </Box>
);
