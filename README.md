# Design System

A place to develop React components in a sandboxed environment.

## Docs

- [Core concepts](./docs/CORE-CONCEPTS.md)
- [System Props](./docs/SYSTEM-PROPS.md)
- [FAQ](./docs/FAQ.md)

## Getting Started

Install all dependencies with `npm install` and run our Storybook on a local server with `npm start`.

It's recommended you run the Jest tests in the background while developing with `npm test --watch`.

## Z-Indices

This project includes several components that have to work even when they are layered on top of each other. To not mess up the order in which they should appear on screen, let's collect all relevant values for `z-index` here.

| Component                 | `z-index` |
| ------------------------- | --------- |
| Header                    | 50        |
| Cookie Banner             | 900       |
| Notification              | ???       |
| Modal                     | 500       |
