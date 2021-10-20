import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Flex } from './Flex';

describe('Flex', () => {
  test('renders', () => {
    render(<Flex>hola</Flex>);
    expect(screen.getByText(/hola/)).toBeInTheDocument();
  });

  test('renders with css prop', () => {
    render(<Flex css={{ paddingTop: 1 }}>hola</Flex>);
    const B = screen.getByText(/hola/);
    // The `toHaveStyle` matcher relies on a serializer of the created CSS,
    // which we don't have for Stitches yet
    // expect(B).toHaveStyle(`padding-top`, `1px`);
    expect(B).toMatchSnapshot();
  });

  test('renders with theme-aware values from Stitches config', () => {
    render(<Flex css={{ color: `$gray12` }}>hola</Flex>);
    const B = screen.getByText(/hola/);
    // The `toHaveStyle` matcher relies on a serializer of the created CSS,
    // which we don't have for Stitches yet
    // expect(B).toHaveStyleRule(`color`, `var(--theme-ui-colors-positive)`);
    // expect(B).toHaveStyleRule(
    //   `background-color`,
    //   `var(--theme-ui-colors-caution)`
    // );
    expect(B).toMatchSnapshot();
  });

  test('passes `data-` attributes through to the DOM', () => {
    render(<Flex data-testid="some-random-id">hola</Flex>);
    const B = screen.getByText(/hola/);
    expect(B).toHaveAttribute(`data-testid`, `some-random-id`);
    expect(B).toMatchSnapshot();
  });

  test('passes `aria-` attributes through to the DOM', () => {
    render(<Flex aria-hidden="true">hola</Flex>);
    const B = screen.getByText(/hola/);
    expect(B).toHaveAttribute(`aria-hidden`, `true`);
    expect(B).toMatchSnapshot();
  });

  test('renders as passed HTML element', () => {
    render(<Flex as="h1">hola</Flex>);
    const B = screen.getByRole(`heading`);
    expect(B).toMatchSnapshot();
  });
});
