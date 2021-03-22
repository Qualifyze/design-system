import * as React from 'react';
import { render, screen } from '../../test';
import { ThemeProvider } from '../../theme/theme';

import { Box } from './Box';

const localTheme = {
  colors: {
    rebeccapurple: '#663399',
    papaya: '#ffefd5',
  },
};

describe('Box', () => {
  test('renders', () => {
    render(<Box>hola</Box>);
    expect(screen.getByText(/hola/)).toBeInTheDocument();
  });

  test('renders with css prop', () => {
    render(<Box css={{ padding: 1 }}>hola</Box>);
    const B = screen.getByText(/hola/);
    expect(B).toHaveStyleRule(`padding`, `1px`);
    expect(B).toMatchSnapshot();
  });

  test('renders with sx prop', () => {
    render(<Box sx={{ p: 1 }}>hola</Box>);
    const B = screen.getByText(/hola/);
    expect(B).toHaveStyleRule(`padding`, `4px`);
    expect(B).toMatchSnapshot();
  });

  test('renders with values from Qualifyze theme', () => {
    render(<Box sx={{ color: `positive`, bg: `caution` }}>hola</Box>);
    const B = screen.getByText(/hola/);
    expect(B).toHaveStyleRule(`color`, `var(--theme-ui-colors-positive)`);
    expect(B).toHaveStyleRule(
      `background-color`,
      `var(--theme-ui-colors-caution)`
    );
    expect(B).toMatchSnapshot();
  });

  test('renders with values from local theme', () => {
    render(
      <ThemeProvider theme={localTheme}>
        <Box sx={{ color: `rebeccapurple`, bg: `papaya` }}>hola</Box>
      </ThemeProvider>
    );
    const B = screen.getByText(/hola/);
    expect(B).toHaveStyleRule(`color`, `#663399`);
    expect(B).toHaveStyleRule(`background-color`, `#ffefd5`);
    expect(B).toMatchSnapshot();
  });
});
