/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Button from '../Button'
import TextLink from '../TextLink'
import TextLinkButton from '../TextLinkButton'

import Actions from './index'

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 3000))
}

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

export const WithTextLinkButton = () => {
  return (
    <Actions>
      <Button>Submit</Button>
      <TextLinkButton>Cancel</TextLinkButton>
    </Actions>
  )
}
WithTextLinkButton.story = {
  name: 'with TextLinkButton',
}

export const WithButtonsAndLink = () => {
  return (
    <Actions>
      <Button>Save & Close</Button>
      <Button variant="secondary">Save</Button>
      <TextLink href="#">Cancel</TextLink>
    </Actions>
  )
}
WithButtonsAndLink.story = {
  name: 'with buttons and links',
}

export const WithLoadingIndicator = () => {
  const [isLoadingPrimary, setLoadingPrimary] = React.useState(false)
  const [isLoadingSecondary, setLoadingSecondary] = React.useState(false)
  const [isLoadingTertiary, setLoadingTertiary] = React.useState(false)

  const handleClickPrimary = () => {
    setLoadingPrimary(true)
  }

  const handleClickSecondary = () => {
    setLoadingSecondary(true)
  }

  const handleClickTertiary = () => {
    setLoadingTertiary(true)
  }

  React.useEffect(() => {
    if (isLoadingPrimary || isLoadingSecondary || isLoadingTertiary) {
      simulateNetworkRequest().then(() => {
        setLoadingPrimary(false)
        setLoadingSecondary(false)
        setLoadingTertiary(false)
      })
    }
  }, [isLoadingPrimary, isLoadingSecondary, isLoadingTertiary])

  return (
    <Actions>
      <Button onClick={handleClickPrimary} isLoading={isLoadingPrimary}>
        Save & close
      </Button>
      <Button
        onClick={handleClickSecondary}
        isLoading={isLoadingSecondary}
        variant="secondary"
      >
        Save
      </Button>
      <TextLinkButton
        onClick={handleClickTertiary}
        isLoading={isLoadingTertiary}
      >
        Cancel
      </TextLinkButton>
    </Actions>
  )
}
WithLoadingIndicator.story = {
  name: 'with loading indicator',
}
