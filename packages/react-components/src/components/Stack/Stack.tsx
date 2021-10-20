import { styled } from '../../stitches.config';

export const Stack = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    align: {
      start: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    gap: {
      0: {
        gap: 0,
      },
      4: {
        gap: '$4',
      },
      8: {
        gap: '$8',
      },
      12: {
        gap: '$12',
      },
      16: {
        gap: '$16',
      },
      24: {
        gap: '$24',
      },
      32: {
        gap: '$32',
      },
      48: {
        gap: '$48',
      },
      64: {
        gap: '$64',
      },
      96: {
        gap: '$96',
      },
    },
  },
  defaultVariants: {
    align: 'start',
    gap: '24',
  },
});
