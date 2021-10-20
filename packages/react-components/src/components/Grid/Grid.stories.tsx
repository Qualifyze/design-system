import React from 'react';

import { StoryBackground } from '../private/StoryBackground/StoryBackground';
import { Box } from '../Box/Box';

import { Grid } from './Grid';

const boxStyles = {
  display: 'flex',
  bc: 'white',
  br: '$8',
  height: '$space$48',
  width: '$space$48',
  justifyContent: 'center',
  alignItems: 'center',
};

export default {
  title: 'Components/Grid',
  component: Grid,
};

export const basic = () => (
  <StoryBackground>
    <Grid gap="16" css={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
      <Box css={{ ...boxStyles }}>1</Box>
      <Box css={{ ...boxStyles }}>2</Box>
      <Box css={{ ...boxStyles }}>3</Box>
      <Box css={{ ...boxStyles }}>4</Box>
      <Box css={{ ...boxStyles }}>5</Box>
      <Box css={{ ...boxStyles }}>6</Box>
    </Grid>
  </StoryBackground>
);
