import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Stack } from './Stack';
import { Box } from '../Box/Box';

describe('Stack', () => {
  test('renders', () => {
    render(
      <Stack>
        <Box>hola</Box>
        <Box>mundo</Box>
      </Stack>
    );
    expect(screen.getByText(/hola/)).toBeInTheDocument();
  });

  test('does not render a list by default', () => {
    render(
      <Stack>
        <Box>hola</Box>
        <Box>hola</Box>
        <Box>hola</Box>
      </Stack>
    );

    expect(screen.queryAllByRole('list').length).toBe(0);
  });

  test('renders a valid unordered list when passing "ul" to "as"', () => {
    render(
      <Stack as="ul">
        <Box>hola</Box>
        <Box>hola</Box>
        <Box>hola</Box>
      </Stack>
    );

    const list = screen.getByRole('list');

    expect(list.nodeName).toBe('UL');
    expect(
      Array.from(list.childNodes).map((childNode) => childNode.nodeName)
    ).toEqual(['LI', 'LI', 'LI']);
  });

  test('renders a valid ordered list when passing "ol" to "as"', () => {
    render(
      <Stack as="ol">
        <Box>hola</Box>
        <Box>hola</Box>
        <Box>hola</Box>
      </Stack>
    );

    const list = screen.getByRole('list');

    expect(list.nodeName).toBe('OL');
    expect(
      Array.from(list.childNodes).map((childNode) => childNode.nodeName)
    ).toEqual(['LI', 'LI', 'LI']);
  });
});
