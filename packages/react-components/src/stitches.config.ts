import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import {
  brand,
  gray,
  red,
  green,
  yellow,
  sky,
  fontStack,
  fontSizes,
  fontWeights,
  borderRadius,
  sizes,
  space,
} from '@qualifyze/design-tokens-v2';

// @ts-ignore
export const { styled, css, theme, getCssText, globalCss, keyframes, config } =
  createStitches({
    theme: {
      colors: {
        ...brand,
        ...gray,
        ...red,
        ...green,
        ...yellow,
        ...sky,
      },
      space: {
        ...space,
      },
      fontSizes: {
        ...fontSizes,
      },
      fonts: {
        ...fontStack,
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
        ...borderRadius,
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
