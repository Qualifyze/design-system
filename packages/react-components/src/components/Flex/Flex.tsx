/** @jsxImportSource theme-ui */
import * as React from 'react';

import { Box, BoxProps } from '../Box/Box';

export type FlexProps = BoxProps;

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ css, ...props }, ref) => {
    return (
      <Box ref={ref} css={{ display: `flex`, ...(css as object) }} {...props} />
    );
  }
);
