/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { text } from '@storybook/addon-knobs'

import TextLink from '../TextLink'

import FieldLabel from './index'

export default { title: 'FieldLabel', component: FieldLabel }

export const Default = () => {
  const label = text('Label', 'This is a field label')
  const description = text(
    'description',
    'Please insert your SSN and master password here '
  )
  const secondaryLabel = text('Secondary Label', 'optional')
  const tertiaryLabel = text('Tertiary Label', 'Need help?')

  return (
    <FieldLabel
      label={label}
      description={description}
      secondaryLabel={secondaryLabel}
      tertiaryLabel={<TextLink href="#">{tertiaryLabel}</TextLink>}
    />
  )
}
Default.story = {
  name: 'default',
}
