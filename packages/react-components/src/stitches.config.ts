// @ts-nocheck
// This duct tape is sadly needed because there is an issue with @stitches/react:
// "Property 'styled' does not exist on type 'Stitches<..."
// Not sure how to fix this yet.
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { tokens } from '@qualifyze/design-tokens-v2';

export const {
  styled,
  css,
  theme,
  getCssText,
  globalCss,
  keyframes,
  config,
} = createStitches({
  theme: {
    // (somewhat) final ✅
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
      whiteA1: tokens.colorWhiteA1,
      whiteA2: tokens.colorWhiteA2,
      whiteA3: tokens.colorWhiteA3,
      whiteA4: tokens.colorWhiteA4,
      whiteA5: tokens.colorWhiteA5,
      whiteA6: tokens.colorWhiteA6,
      whiteA7: tokens.colorWhiteA7,
      whiteA8: tokens.colorWhiteA8,
      whiteA9: tokens.colorWhiteA9,
      whiteA10: tokens.colorWhiteA10,
      whiteA11: tokens.colorWhiteA11,
      whiteA12: tokens.colorWhiteA12,
      blackA1: tokens.colorBlackA1,
      blackA2: tokens.colorBlackA2,
      blackA3: tokens.colorBlackA3,
      blackA4: tokens.colorBlackA4,
      blackA5: tokens.colorBlackA5,
      blackA6: tokens.colorBlackA6,
      blackA7: tokens.colorBlackA7,
      blackA8: tokens.colorBlackA8,
      blackA9: tokens.colorBlackA9,
      blackA10: tokens.colorBlackA10,
      blackA11: tokens.colorBlackA11,
      blackA12: tokens.colorBlackA12,
      gray1: tokens.colorGray1,
      gray2: tokens.colorGray2,
      gray3: tokens.colorGray3,
      gray4: tokens.colorGray4,
      gray5: tokens.colorGray5,
      gray6: tokens.colorGray6,
      gray7: tokens.colorGray7,
      gray8: tokens.colorGray8,
      gray9: tokens.colorGray9,
      gray10: tokens.colorGray10,
      gray11: tokens.colorGray11,
      gray12: tokens.colorGray12,
      green1: tokens.colorGreen1,
      green2: tokens.colorGreen2,
      green3: tokens.colorGreen3,
      green4: tokens.colorGreen4,
      green5: tokens.colorGreen5,
      green6: tokens.colorGreen6,
      green7: tokens.colorGreen7,
      green8: tokens.colorGreen8,
      green9: tokens.colorGreen9,
      green10: tokens.colorGreen10,
      green11: tokens.colorGreen11,
      green12: tokens.colorGreen12,
      yellow1: tokens.colorYellow1,
      yellow2: tokens.colorYellow2,
      yellow3: tokens.colorYellow3,
      yellow4: tokens.colorYellow4,
      yellow5: tokens.colorYellow5,
      yellow6: tokens.colorYellow6,
      yellow7: tokens.colorYellow7,
      yellow8: tokens.colorYellow8,
      yellow9: tokens.colorYellow9,
      yellow10: tokens.colorYellow10,
      yellow11: tokens.colorYellow11,
      yellow12: tokens.colorYellow12,
      red1: tokens.colorRed1,
      red2: tokens.colorRed2,
      red3: tokens.colorRed3,
      red4: tokens.colorRed4,
      red5: tokens.colorRed5,
      red6: tokens.colorRed6,
      red7: tokens.colorRed7,
      red8: tokens.colorRed8,
      red9: tokens.colorRed9,
      red10: tokens.colorRed10,
      red11: tokens.colorRed11,
      red12: tokens.colorRed12,
      sky1: tokens.colorSky1,
      sky2: tokens.colorSky2,
      sky3: tokens.colorSky3,
      sky4: tokens.colorSky4,
      sky5: tokens.colorSky5,
      sky6: tokens.colorSky6,
      sky7: tokens.colorSky7,
      sky8: tokens.colorSky8,
      sky9: tokens.colorSky9,
      sky10: tokens.colorSky10,
      sky11: tokens.colorSky11,
      sky12: tokens.colorSky12,
    },
    // (somewhat) final ✅
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
    // (somewhat) final ✅
    fontSizes: {
      12: tokens.fontSize12,
      14: tokens.fontSize14,
      16: tokens.fontSize16,
      20: tokens.fontSize20,
      28: tokens.fontSize28,
      36: tokens.fontSize36,
      48: tokens.fontSize48,
    },
    // (somewhat) final ✅
    fonts: {
      primary: tokens.fontStackPrimary,
    },
    // under construction 🚧
    fontWeights: {
      normal: tokens.fontWeightNormal,
      semibold: tokens.fontWeightSemibold,
      bold: tokens.fontWeightBold,
    },
    // under construction 🚧
    lineHeights: {},
    // under construction 🚧
    letterSpacings: {},
    // under construction 🚧
    sizes: {},
    // under construction 🚧
    borderWidths: {},
    // under construction 🚧
    borderStyles: {},
    radii: {
      0: tokens.borderRadius0,
      2: tokens.borderRadius2,
      4: tokens.borderRadius4,
      8: tokens.borderRadius8,
      16: tokens.borderRadius16,
      round: tokens.borderRadiusRound,
      pill: tokens.borderRadiusPill,
    },
    // under construction 🚧
    // TODO: Figure out shadow color var
    shadows: {
      small: `0.5px 1px 1px hsl(var(--shadow-color) / 0.7)`,
      medium: `
        1px 2px 2px hsl(var(--shadow-color) / 0.333),
        2px 4px 4px hsl(var(--shadow-color) / 0.333),
        3px 6px 6px hsl(var(--shadow-color) / 0.333)
      `,
      large: `
        1px 2px 2px hsl(var(--shadow-color) / 0.2),
        2px 4px 4px hsl(var(--shadow-color) / 0.2),
        4px 8px 8px hsl(var(--shadow-color) / 0.2),
        8px 16px 16px hsl(var(--shadow-color) / 0.2),
        16px 32px 32px hsl(var(--shadow-color) / 0.2)
      `,
    },
    // under construction 🚧
    zIndices: {},
    // under construction 🚧
    transitions: {},
    // under construction 🚧
    transforms: {
      touchable: 'scale(0.98)',
    },
  },
  // under construction 🚧
  media: {
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
  },
  // (somewhat) final ✅ but still extendable of course
  utils: {
    p: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
      textAlign: value,
    }),
    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
      alignSelf: value,
    }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
      flexBasis: value,
    }),
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),
    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
      boxShadow: value,
    }),
  },
});
