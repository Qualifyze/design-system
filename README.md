# Design System

A place to develop React components in a sandboxed environment.

## Docs

- [Core concepts](./docs/CORE-CONCEPTS.md)
- [System Props](./docs/SYSTEM-PROPS.md)
- [FAQ](./docs/FAQ.md)

## Getting Started

Install all dependencies with `yarn install` and run our Storybook on a local server with `yarn dev:design-system` (from the repository's root). It's recommended you run the Jest tests in the background while developing with `yarn test:watch` (run this from within `packages/design-system/`).

## Deployments

### Next

We deploy the latest version our design system on the `next` branch here:

[![Storybook next](https://img.shields.io/badge/Next-storybook.qualifyze.com-blue.svg?style=social&logo=storify)](http://storybook.qualifyze.com/next)

### Production

We also deploy the version of the design system that is currently in production here:

[![Storybook production](https://img.shields.io/badge/Production-storybook.qualifyze.com-blue.svg?style=social&logo=storify)](http://storybook.qualifyze.com/production)

### Branch Deployments

Whenever you open a PR with changes to the design system, we will deploy these changes as well. For example, if you're working on a branch named `QC-1337/make-all-buttons-pink`, then your changes will be deployed to [http://storybook.qualifyze.com/QC-1337/make-all-buttons-pink](http://storybook.qualifyze.com/QC-1337/make-all-buttons-pink)

## Z-Indices

This project includes several components that have to work even when they are layered on top of each other. To not mess up the order in which they should appear on screen, let's collect all relevant values for `z-index` here.

| Component                 | `z-index` |
| ------------------------- | --------- |
| Header (`website`)        | 50        |
| Cookie Banner (`website`) | 900       |
| Notification              | ???       |
| Modal                     | 500       |
