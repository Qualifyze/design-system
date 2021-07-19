import React from 'react';

import { Box } from './Box';

export default {
  title: 'Components/Box',
  component: Box,
};

export const basic = () => (
  <Box css={{ padding: '$2', bc: '$indigo4' }}>Hello</Box>
);
