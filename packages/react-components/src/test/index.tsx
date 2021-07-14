import * as React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';

// import { ThemeProvider, theme } from '../theme/theme';

// const ThemeWrapper: FC = ({ children }) => {
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// };
const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, {
    // wrapper: ThemeWrapper,
    ...options,
  });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render, user };
