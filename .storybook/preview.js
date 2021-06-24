import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { withTheme } from '../src/util/style'
import withFont from '../src/util/style/withFont'
import withCSSReset from '../src/util/style/withCSSReset'

addDecorator(withKnobs)
addDecorator(withTheme)
addDecorator(withFont)
addDecorator(withCSSReset)
