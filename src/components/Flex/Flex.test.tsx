import * as React from 'react';
import { render, screen } from '../../test';

import { Flex } from './Flex';

describe('Flex', () => {
  test('renders', () => {
    render(<Flex>hola</Flex>);
    expect(screen.getByText(/hola/)).toBeInTheDocument();
  });

  test('renders with css prop', () => {
    render(<Flex css={{ padding: 1 }}>hola</Flex>);
    const F = screen.getByText(/hola/);
    expect(F).toHaveStyleRule(`padding`, `1px`);
    expect(F).toMatchSnapshot();
  });

  test('renders with sx prop', () => {
    render(<Flex sx={{ p: 1 }}>hola</Flex>);
    const F = screen.getByText(/hola/);
    expect(F).toHaveStyleRule(`padding`, `4px`);
    expect(F).toMatchSnapshot();
  });
});
