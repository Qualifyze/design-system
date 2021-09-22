import React from 'react';

import { Box } from './Box';

export default {
  title: 'Components/Box',
  component: Box,
};

export const basic = () => (
  <Box css={{ padding: '$32', color: '$brand1', backgroundColor: '$brand11' }}>
    Hello
  </Box>
);
