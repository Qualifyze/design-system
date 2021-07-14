import React, { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';

import { ThemeProvider, theme } from '../theme/theme';

const ThemeWrapper: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
const customRender = (ui: ReactElement, options?: any) =>
  render(ui, {
    wrapper: ThemeWrapper,
    ...options,
  });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render, user };
