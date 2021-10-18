import React from 'react';

import { Box } from '../Box/Box';

import { Grid } from './Grid';

function Item({ children }) {
  return (
    <Box css={{ p: '$32', bc: '$brand12', color: '$brand1' }}>{children}</Box>
  );
}

export default {
  title: 'Components/Grid',
  component: Grid,
};
export const basic = () => (
  <Grid gap="16">
    <Item>1</Item>
    <Item>2</Item>
    <Item>3</Item>
    <Item>4</Item>
    <Item>5</Item>
  </Grid>
);
