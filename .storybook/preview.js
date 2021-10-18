import '@fontsource/source-sans-pro'

import { normalizeCss } from '../packages/react-components/src/components/normalizeCss/normalizeCss'
import { preflightCss } from '../packages/react-components/src/components/preflightCss/preflightCss'
import { globalCss } from '../packages/react-components/src/stitches.config'

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  layout: `centered`,
  options: {
    storySort: {
      method: `alphabetical`,
      order: [`Design Tokens`, `Foundations`, `Components`],
    },
  },
  viewport: {
    // defaultViewport: `responsive`,
    viewports: {
      initial: {
        name: `Initial (320px)`,
        styles: { width: `320px`, height: `100%` },
        type: 'desktop',
      },
      small: {
        name: `Small (640px)`,
        styles: { width: `640px`, height: `100%` },
        type: 'desktop',
      },
      medium: {
        name: `Medium (768px)`,
        styles: { width: `1024px`, height: `100%` },
        type: 'desktop',
      },
      large: {
        name: `Large (1024px)`,
        styles: { width: `1024px`, height: `100%` },
        type: 'desktop',
      },
      extraLarge: {
        name: `XLarge (1280px)`,
        styles: { width: `1280px`, height: `100%` },
        type: 'desktop',
      },
      extraExtraLarge: {
        name: `XXLarge (1536px)`,
        styles: { width: `1536px`, height: `100%` },
        type: 'desktop',
      },
    },
  },
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: `^on.*` },
}

const customStyles = globalCss(...normalizeCss, ...preflightCss)

function withCustomStyles(Story) {
  customStyles()
  return (
    <div>
      <Story />
    </div>
  )
}

export const decorators = [withCustomStyles]
