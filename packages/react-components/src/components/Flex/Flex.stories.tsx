import React from 'react';

import { Flex } from './Flex';

export default {
  title: 'Components/Flex',
  component: Flex,
};

export const basic = () => (
  <Flex css={{ padding: '$2', bc: '$indigo4' }}>Hello</Flex>
);
