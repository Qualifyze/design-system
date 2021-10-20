import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Text } from '../Text/Text';

import { Stack } from './Stack';

describe('Stack', () => {
  test('renders', () => {
    render(
      <Stack>
        <Text>hola</Text>
        <Text>hello</Text>
      </Stack>
    );
    expect(screen.getByText(/hola/)).toBeInTheDocument();
  });

  test('renders with theme-aware gap prop', () => {
    render(
      <Stack gap="32">
        <Text>hola</Text>
        <Text>hello</Text>
      </Stack>
    );
    const B = screen.getByText(/hola/);
    // The `toHaveStyle` matcher relies on a serializer of the created CSS,
    // which we don't have for Stitches yet
    // expect(B).toHaveStyle(`padding-top`, `1px`);
    expect(B).toMatchSnapshot();
  });

  test('passes `data-` attributes through to the DOM', () => {
    render(<Stack data-testid="some-random-id">hola</Stack>);
    const B = screen.getByText(/hola/);
    expect(B).toHaveAttribute(`data-testid`, `some-random-id`);
    expect(B).toMatchSnapshot();
  });

  test('passes `aria-` attributes through to the DOM', () => {
    render(<Stack aria-hidden="true">hola</Stack>);
    const B = screen.getByText(/hola/);
    expect(B).toHaveAttribute(`aria-hidden`, `true`);
    expect(B).toMatchSnapshot();
  });

  test('renders as passed HTML element', () => {
    render(
      <Stack as="ul">
        <Text>hola</Text>
        <Text>hello</Text>
      </Stack>
    );
    const B = screen.getByRole(`list`);
    expect(B).toMatchSnapshot();
  });
});
