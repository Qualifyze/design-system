import * as React from 'react';
import { render, screen } from '../../test';
// import { ThemeProvider } from '../../theme/theme';

import { Text } from './Text';

describe('Text', () => {
  test('renders', () => {
    render(<Text>hola</Text>);
    expect(screen.getByText(/hola/)).toBeInTheDocument();
  });

  test('renders as a p tag per default', () => {
    render(<Text>hola</Text>);
    const T = screen.getByText(/hola/);
    expect(T.tagName).toEqual(`P`);
    expect(T).toMatchSnapshot();
  });

  test('renders as a span tag', () => {
    render(<Text as="span">hola</Text>);
    const T = screen.getByText(/hola/);
    expect(T.tagName).toEqual(`SPAN`);
    expect(T).toMatchSnapshot();
  });

  test('renders as a strong tag', () => {
    render(<Text as="strong">hola</Text>);
    const T = screen.getByText(/hola/);
    expect(T.tagName).toEqual(`STRONG`);
    expect(T).toMatchSnapshot();
  });

  test('renders as an em tag', () => {
    render(<Text as="em">hola</Text>);
    const T = screen.getByText(/hola/);
    expect(T.tagName).toEqual(`EM`);
    expect(T).toMatchSnapshot();
  });

  test('renders with size prop', () => {
    render(<Text size="tiny">hola</Text>);
    const T = screen.getByText(/hola/);
    expect(T).toHaveStyleRule(`font-size`, `12.1212px`);
    expect(T).toMatchSnapshot();
  });

  test('renders with tone prop', () => {
    render(<Text tone="critical">hola</Text>);
    const T = screen.getByText(/hola/);
    expect(T).toHaveStyleRule(`color`, `#d0011b`);
    expect(T).toMatchSnapshot();
  });

  test('renders with weight prop', () => {
    render(<Text weight="strong">hola</Text>);
    const T = screen.getByText(/hola/);
    expect(T).toHaveStyleRule(`font-weight`, `700`);
    expect(T).toMatchSnapshot();
  });
});
