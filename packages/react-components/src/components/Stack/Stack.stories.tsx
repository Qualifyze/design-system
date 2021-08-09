import React from 'react';

import { Placeholder } from '../private/Placeholder/Placeholder';
import { Stack } from './Stack';

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    as: {
      options: ['div', 'ul', 'ol'],
      control: { type: 'inline-radio' },
    },
    space: {
      options: ['0', '$1', '$2', '$2', '$3', '$4', '10px'],
      control: { type: 'select' },
    },
  },
};

export const basic = ({ align, as, space }) => (
  <Stack space={space} align={align} as={as}>
    <Placeholder width={100} height={50} />
    <Placeholder width={200} height={50} />
    <Placeholder width={150} height={50} />
    <Placeholder width={50} height={50} />
  </Stack>
);
