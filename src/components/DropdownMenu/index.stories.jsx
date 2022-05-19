/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { select } from '@storybook/addon-knobs'

import { styled } from '../../util/style'
import Box from '../Box'
import Flex from '../Flex'
import Button from '../Button'
import Icon from '../Icon'
import Inline from '../Inline'
import Stack from '../Stack'
import Text from '../Text'

import { DropdownMenu } from './index'

const RightSlot = styled('div')(props => ({
  'marginLeft': 'auto',
  'paddingLeft': 20,
  'color': props.theme.colors.grey[600],
  ':focus > &': { color: 'white' },
  '[data-disabled] &': { color: props.theme.colors.grey[300] },
}))

export default { title: 'DropdownMenu', component: DropdownMenu }

export const Default = () => {
  return (
    <Box sx={{ minHeight: '500px' }}>
      <DropdownMenu>
        <Inline>
          <DropdownMenu.Trigger
            as={Button}
            variant="secondary"
            size="small"
            icon={<Icon name="chevrondown" size="tiny" />}
          >
            More
          </DropdownMenu.Trigger>
        </Inline>

        <DropdownMenu.Content align="start">
          <DropdownMenu.Item>
            New Tab <RightSlot>⌘+T</RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            New Window <RightSlot>⌘+N</RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            New Private Window <RightSlot>⇧+⌘+N</RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Label>People</DropdownMenu.Label>
          <DropdownMenu.Item>Pablo</DropdownMenu.Item>
          <DropdownMenu.Item>Philipp</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </Box>
  )
}
Default.story = {
  name: 'default',
}

export const CustomItem = () => {
  return (
    <Box sx={{ minHeight: '500px' }}>
      <DropdownMenu>
        <Inline>
          <DropdownMenu.Trigger
            as={Button}
            variant="secondary"
            size="small"
            icon={<Icon name="chevrondown" size="tiny" />}
          >
            Manage account
          </DropdownMenu.Trigger>
        </Inline>

        <DropdownMenu.Content align="start">
          <DropdownMenu.Item disabled>
            <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
              <Box sx={{ py: 2, pr: 2 }}>
                <Flex
                  sx={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '50%',
                    bg: 'primary.900',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  WW
                </Flex>
              </Box>
              <Box>
                <Stack space={1}>
                  <Text size="small" weight="medium">
                    Willy Wonka
                  </Text>
                  <Text size="small">willy.wonka@qualifyze.com</Text>
                </Stack>
              </Box>
            </Flex>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Manage profile</DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert('logged out')}>
            Log out{' '}
            <RightSlot>
              <Icon name="exit" />
            </RightSlot>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </Box>
  )
}
CustomItem.story = {
  name: 'with custom item',
}

const localeToDisplayLabel = {
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
}

const resolveBackground = {
  dark: 'grey.900',
  light: 'white',
}

const LanguageButton = styled(Button)(props => ({
  'background': 'white',
  'border': 'none',

  '&:hover': {
    background: props.theme.colors.primary[100],
  },
}))

export const LanguageSwitch = () => {
  const [locale, setLocale] = React.useState('de')
  const background = select('Background', ['dark', 'light'], 'dark')

  return (
    <Box sx={{ p: 5, bg: resolveBackground[background] }}>
      <DropdownMenu>
        <Inline>
          <DropdownMenu.Trigger
            as={LanguageButton}
            variant="secondary"
            size="small"
            icon={<Icon name="chevrondown" size="tiny" />}
          >
            {localeToDisplayLabel[locale]}
          </DropdownMenu.Trigger>
        </Inline>

        <DropdownMenu.Content align="start">
          <DropdownMenu.Item onClick={() => setLocale('de')}>
            {localeToDisplayLabel.de}
            <RightSlot>
              {locale === 'de' ? (
                <Icon name="checkmark" size="small" tone="secondary" />
              ) : null}
            </RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => setLocale('en')}>
            {localeToDisplayLabel.en}
            <RightSlot>
              {locale === 'en' ? (
                <Icon name="checkmark" size="small" tone="secondary" />
              ) : null}
            </RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => setLocale('es')}>
            {localeToDisplayLabel.es}
            <RightSlot>
              {locale === 'es' ? (
                <Icon name="checkmark" size="small" tone="secondary" />
              ) : null}
            </RightSlot>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </Box>
  )
}
LanguageSwitch.story = {
  name: 'as language switch',
}
