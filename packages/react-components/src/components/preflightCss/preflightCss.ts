export const preflightCss: Record<string, any>[] = [
  {
    ':where(html, body)': {
      fontFamily:
        'Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
    },
    // Prevent undesired focus styles when not using a keyboard for all browsers
    // that support it. See:
    // https://www.tpgi.com/focus-visible-and-backwards-compatibility/
    '*:focus:not(:focus-visible)': {
      outline: 'none !important',
      boxShadow: 'none !important',
      border: 'none !important',
    },
  },
];
