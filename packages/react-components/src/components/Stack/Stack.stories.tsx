import React from 'react';

import { StoryBackground } from '../private/StoryBackground/StoryBackground';
import { Box } from '../Box/Box';

import { Stack } from './Stack';

const boxStyles = { bc: 'white', br: '$8', height: '$space$32' };

export default {
  title: 'Components/Stack',
  component: Stack,
};

export const basic = () => (
  <StoryBackground>
    <Stack gap="24" align="end">
      <Box css={{ ...boxStyles, width: '$space$48' }} />
      <Box css={{ ...boxStyles, width: '$space$64' }} />
      <Box css={{ ...boxStyles, width: '$space$96' }} />
      <Box css={{ ...boxStyles, width: '$space$64' }} />
    </Stack>
  </StoryBackground>
);
