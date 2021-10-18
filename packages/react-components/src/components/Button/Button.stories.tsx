import React from 'react';
import {
  DownloadIcon,
  GearIcon,
  CheckIcon,
  Cross2Icon,
} from '@radix-ui/react-icons';

import { Flex } from '../Flex/Flex';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const variants = () => (
  <Flex css={{ gap: '$32' }}>
    <Button variant="solid">Hello</Button>
    <Button variant="soft">Hello</Button>
    <Button variant="ghost">Hello</Button>
    <Button variant="transparent">Hello</Button>
  </Flex>
);

export const sizes = () => (
  <Flex css={{ gap: '$32' }}>
    <Button size="small">Hello</Button>
    <Button size="standard">Hello</Button>
    <Button size="large">Hello</Button>
  </Flex>
);

export const tone = () => (
  <Flex css={{ gap: '$32' }}>
    <Button variant="solid" tone="danger">
      Hello
    </Button>
    <Button variant="soft" tone="danger">
      Hello
    </Button>
    <Button variant="ghost" tone="danger">
      Hello
    </Button>
    <Button variant="transparent" tone="danger">
      Hello
    </Button>
  </Flex>
);

export const withIcon = () => (
  <Flex css={{ gap: '$32' }}>
    <Flex css={{ fd: 'column', gap: '$32' }}>
      <Button size="small" variant="solid">
        <DownloadIcon />
        Download
      </Button>
      <Button size="small" variant="soft">
        <GearIcon />
        Settings
      </Button>
      <Button size="small" variant="ghost">
        <CheckIcon />
        Approve
      </Button>
      <Button size="small" variant="transparent" tone="danger">
        <Cross2Icon />
        Decline
      </Button>
    </Flex>
    <Flex css={{ fd: 'column', gap: '$32' }}>
      <Button variant="solid">
        <DownloadIcon />
        Download
      </Button>
      <Button variant="soft">
        <GearIcon />
        Settings
      </Button>
      <Button variant="ghost">
        <CheckIcon />
        Approve
      </Button>
      <Button variant="transparent" tone="danger">
        <Cross2Icon />
        Decline
      </Button>
    </Flex>
    <Flex css={{ fd: 'column', gap: '$32' }}>
      <Button size="large" variant="solid">
        <DownloadIcon />
        Download
      </Button>
      <Button size="large" variant="soft">
        <GearIcon />
        Settings
      </Button>
      <Button size="large" variant="ghost">
        <CheckIcon />
        Approve
      </Button>
      <Button size="large" variant="transparent" tone="danger">
        <Cross2Icon />
        Decline
      </Button>
    </Flex>
  </Flex>
);
