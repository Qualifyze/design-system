import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { tokens } from '@qualifyze/design-tokens-v2';

export const { styled, css, theme, getCssText, globalCss, keyframes, config } =
  createStitches({
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
