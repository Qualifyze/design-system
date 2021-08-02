import { createCss } from '@stitches/react';
import { indigo } from '@radix-ui/colors';

export type { StitchesVariants } from '@stitches/react';

const stitches = createCss({
  theme: {
    colors: {
      brand100: 'hsl(221, 100%, 97%)',
      brand200: 'hsl(223, 59%, 86%)',
      brand300: 'hsl(223, 44%, 71%)',
      brand400: 'hsl(223, 40%, 60%)',
      brand500: 'hsl(223, 36%, 50%)',
      brand600: 'hsl(223, 47%, 39%)',
      brand700: 'hsl(223, 60%, 29%)',
      brand800: 'hsl(223, 70%, 21%)',
      brand900: 'hsl(223, 79%, 13%)',
      secondary100: 'hsl(191, 52%, 94%)',
      secondary200: 'hsl(192, 39%, 77%)',
      secondary300: 'hsl(192, 34%, 62%)',
      secondary400: 'hsl(192, 33%, 48%)',
      secondary500: 'hsl(192, 45%, 36%)',
      secondary600: 'hsl(192, 50%, 30%)',
      secondary700: 'hsl(192, 56%, 24%)',
      secondary800: 'hsl(192, 63%, 19%)',
      secondary900: 'hsl(192, 69%, 14%)',
      gray100: 'hsl(210, 17%, 98%)',
      gray200: 'hsl(207, 22%, 90%)',
      gray300: 'hsl(210, 24%, 87%)',
      gray400: 'hsl(208, 17%, 83%)',
      gray500: 'hsl(209, 24%, 74%)',
      gray600: 'hsl(215, 17%, 63%)',
      gray700: 'hsl(214, 11%, 49%)',
      gray800: 'hsl(215, 17%, 30%)',
      gray900: 'hsl(215, 23%, 16%)',
      red100: 'hsl(360, 77%, 95%)',
      red200: 'hsl(360, 79%, 81%)',
      red300: 'hsl(360, 71%, 73%)',
      red400: 'hsl(360, 70%, 64%)',
      red500: 'hsl(360, 71%, 53%)',
      red600: 'hsl(360, 65%, 45%)',
      red700: 'hsl(360, 61%, 38%)',
      red800: 'hsl(360, 63%, 31%)',
      red900: 'hsl(360, 60%, 24%)',
      yellow100: 'hsl(44, 100%, 98%)',
      yellow200: 'hsl(44, 90%, 92%)',
      yellow300: 'hsl(45, 86%, 86%)',
      yellow400: 'hsl(44, 90%, 80%)',
      yellow500: 'hsl(43, 87%, 67%)',
      yellow600: 'hsl(44, 57%, 52%)',
      yellow700: 'hsl(43, 59%, 42%)',
      yellow800: 'hsl(43, 64%, 34%)',
      yellow900: 'hsl(44, 66%, 22%)',
      green100: 'hsl(142, 81%, 94%)',
      green200: 'hsl(141, 67%, 80%)',
      green300: 'hsl(145, 65%, 68%)',
      green400: 'hsl(146, 57%, 65%)',
      green500: 'hsl(145, 55%, 49%)',
      green600: 'hsl(145, 55%, 41%)',
      green700: 'hsl(145, 59%, 33%)',
      green800: 'hsl(155, 63%, 26%)',
      green900: 'hsl(156, 61%, 20%)',
      ...indigo,
    },
    space: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
    },
    fontSizes: {
      1: '12px',
      2: '15px',
      3: '18px',
      4: '24px',
      5: '28px',
      6: '35px',
      7: '44px',
      8: '55px',
    },
    fonts: {
      inter: 'Inter, apple-system, sans-serif',
    },
    fontWeights: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: { narrow: '500px', medium: '700px', wide: '1100px', page: '1400px' },
    borderWidths: {},
    borderStyles: {},
    radii: {
      0: '0',
      1: '2px',
      2: '4px',
      3: '8px',
      4: '16px',
      round: '50%',
      pill: '9999px',
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
