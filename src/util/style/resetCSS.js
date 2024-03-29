/* stylelint-disable */
/** Taken from https://dev.to/hankchizljaw/a-modern-css-reset-6p3 */
import { css } from '@emotion/core'

export const resetCSS = css`
  /* Base for our type scale */
  html {
    font-size: 112.5%;
    font-family: Everett, Roboto, 'Helvetica Neue', Arial, sans-serif;
    word-wrap: break-word;
    height: 100%;
  }

  body {
    height: 100%;
    min-width: 320px;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Prevent undesired focus styles when not using a keyboard for all browsers that support it. See: https://www.tpgi.com/focus-visible-and-backwards-compatibility/ */
  *:focus:not(:focus-visible) {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
`
