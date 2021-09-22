import { createCss } from '@stitches/react';
import { tokens } from '@qualifyze/design-tokens-v2';

export type { StitchesVariants } from '@stitches/react';

const stitches = createCss({
  theme: {
    colors: {
      brand1: tokens.colorBrand1,
      brand2: tokens.colorBrand2,
      brand3: tokens.colorBrand3,
      brand4: tokens.colorBrand4,
      brand5: tokens.colorBrand5,
      brand6: tokens.colorBrand6,
      brand7: tokens.colorBrand7,
      brand8: tokens.colorBrand8,
      brand9: tokens.colorBrand9,
      brand10: tokens.colorBrand10,
      brand11: tokens.colorBrand11,
      brand12: tokens.colorBrand12,
    },
    space: {
      0: tokens.spacing0,
      4: tokens.spacing4,
      8: tokens.spacing8,
      12: tokens.spacing12,
      16: tokens.spacing16,
      24: tokens.spacing24,
      32: tokens.spacing32,
      48: tokens.spacing48,
      64: tokens.spacing64,
      96: tokens.spacing96,
    },
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
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
