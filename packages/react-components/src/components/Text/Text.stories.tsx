import React from 'react';
import {
  DownloadIcon,
  GearIcon,
  CheckIcon,
  Cross2Icon,
} from '@radix-ui/react-icons';

import { Flex } from '../Flex/Flex';

import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
};

export const basic = () => (
  <>
    <Text size="tiny">Hola mundo</Text>
    <Text size="tiny">Hola mundo</Text>
    <Text size="tiny">Hola mundo</Text>
    <Text size="small">Hola mundo</Text>
    <Text size="small">Hola mundo</Text>
    <Text size="small">Hola mundo</Text>
    <Text size="standard">Hola mundo</Text>
    <Text size="standard">Hola mundo</Text>
    <Text size="standard">Hola mundo</Text>
    <Text size="large">Hola mundo</Text>
    <Text size="large">Hola mundo</Text>
    <Text size="large">Hola mundo</Text>
  </>
);

export const paragraphs = () => (
  <>
    <Text>
      Pivot termsheet twitter. Leverage deployment holy grail advisor traction
      monetization seed money business model canvas validation ownership pitch
      infographic. Conversion direct mailing social proof release validation
      disruptive termsheet alpha leverage long tail hackathon iteration user
      experience. Hypotheses advisor paradigm shift hackathon interaction design
      ecosystem sales research & development business plan iteration.
    </Text>
    <Text>
      Equity startup alpha hypotheses accelerator iPad. Gamification holy grail
      MVP business model canvas funding pitch responsive web design mass market
      paradigm shift virality. Termsheet customer user experience return on
      investment metrics interaction design validation hackathon social media
      direct mailing client funding value proposition business plan. Disruptive
      market low hanging fruit prototype paradigm shift.
    </Text>
    <Text>
      Branding focus buzz niche market handshake android virality user
      experience. MVP crowdfunding incubator first mover advantage strategy
      disruptive hypotheses founders long tail focus venture.
    </Text>
  </>
);

export const withIcon = () => (
  <Flex css={{ fd: 'column', gap: '$32' }}>
    <Text size="tiny">
      <DownloadIcon />
      Hola mundo
    </Text>
    <Text size="small">
      <GearIcon />
      Hola mundo
    </Text>
    <Text size="standard">
      <CheckIcon />
      Hola mundo
    </Text>
    <Text size="large">
      <Cross2Icon />
      Hola mundo
    </Text>
  </Flex>
);
