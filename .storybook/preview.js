import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator } from '@storybook/react'
import { withCSSReset, withFont, withTheme } from '../src/util/style'

addDecorator(withKnobs)
addDecorator(withTheme)
addDecorator(withFont)
addDecorator(withCSSReset)
