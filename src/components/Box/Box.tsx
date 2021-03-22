/** @jsxImportSource theme-ui */
import * as React from 'react';
import { Box as UIBox, BoxProps as UIBoxProps } from 'theme-ui';

export interface BoxProps extends UIBoxProps {}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <UIBox ref={ref} {...props} />;
});
