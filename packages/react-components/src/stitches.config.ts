import { createCss } from '@stitches/react';
import { indigo } from '@radix-ui/colors';
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  sizes,
  space,
} from '@qualifyze/design-tokens-v2';

export type { StitchesVariants } from '@stitches/react';

const stitches = createCss({
  theme: {
    colors: {
      ...colors.brand,
      ...colors.gray,
      ...indigo,
    },
    space: {
      ...space,
    },
    fontSizes: {
      ...fontSizes,
    },
    fonts: {
      ...fonts,
    },
    fontWeights: {
      ...fontWeights,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: { ...sizes },
    borderWidths: {},
    borderStyles: {},
    radii: {
      ...radii,
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
  },
  utils: {
    p: () => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: () => (value: any) => ({
      paddingTop: value,
    }),
    pr: () => (value: any) => ({
      paddingRight: value,
    }),
    pb: () => (value: any) => ({
      paddingBottom: value,
    }),
    pl: () => (value: any) => ({
      paddingLeft: value,
    }),
    px: () => (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: () => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: () => (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: () => (value: any) => ({
      marginTop: value,
    }),
    mr: () => (value: any) => ({
      marginRight: value,
    }),
    mb: () => (value: any) => ({
      marginBottom: value,
    }),
    ml: () => (value: any) => ({
      marginLeft: value,
    }),
    mx: () => (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: () => (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: () => (value: any) => ({ textAlign: value }),

    fd: () => (value: any) => ({ flexDirection: value }),
    fw: () => (value: any) => ({ flexWrap: value }),

    ai: () => (value: any) => ({ alignItems: value }),
    ac: () => (value: any) => ({ alignContent: value }),
    jc: () => (value: any) => ({ justifyContent: value }),
    as: () => (value: any) => ({ alignSelf: value }),
    fg: () => (value: any) => ({ flexGrow: value }),
    fs: () => (value: any) => ({ flexShrink: value }),
    fb: () => (value: any) => ({ flexBasis: value }),

    bc: () => (value: any) => ({
      backgroundColor: value,
    }),

    br: () => (value: any) => ({
      borderRadius: value,
    }),
    btrr: () => (value: any) => ({
      borderTopRightRadius: value,
    }),
    bbrr: () => (value: any) => ({
      borderBottomRightRadius: value,
    }),
    bblr: () => (value: any) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: () => (value: any) => ({
      borderTopLeftRadius: value,
    }),

    bs: () => (value: any) => ({ boxShadow: value }),
  },
});

export const {
  styled,
  css,
  theme,
  getCssString,
  global,
  keyframes,
  config,
} = stitches;
