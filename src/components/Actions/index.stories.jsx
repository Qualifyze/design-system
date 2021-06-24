/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Button from '../Button'
import TextLink from '../TextLink'

import Actions from './index'

export default { title: 'Actions', component: Actions }

export const WithButtons = () => {
  return (
    <Actions>
      <Button>Submit</Button>
      <Button variant="secondary">Cancel</Button>
    </Actions>
  )
}
WithButtons.story = {
  name: 'with Buttons',
}

export const WithTextLink = () => {
  return (
    <Actions>
      <Button>Submit</Button>
      <TextLink href="#">Cancel</TextLink>
    </Actions>
  )
}
WithTextLink.story = {
  name: 'with TextLink',
}

export const WithBoth = () => {
  return (
    <Actions>
      <Button>Save & Close</Button>
      <Button variant="secondary">Save</Button>
      <TextLink href="#">Cancel</TextLink>
    </Actions>
  )
}
WithBoth.story = {
  name: 'with both',
}
