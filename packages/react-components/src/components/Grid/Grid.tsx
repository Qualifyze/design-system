import { styled } from '../../stitches.config';

export const Grid = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
  display: 'grid',

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
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    flow: {
      row: {
        gridAutoFlow: 'row',
      },
      column: {
        gridAutoFlow: 'column',
      },
      dense: {
        gridAutoFlow: 'dense',
      },
      rowDense: {
        gridAutoFlow: 'row dense',
      },
      columnDense: {
        gridAutoFlow: 'column dense',
      },
    },
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
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
    gapX: {
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
    gapY: {
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
});
