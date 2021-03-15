module.exports = {
  stories: [
    `../src/**/*.stories.@(ts|js|md)x`,
    `./components/**/*.stories.@(ts|js|md)x`,
  ],
  addons: [
    `@storybook/addon-links`,
    `@storybook/addon-essentials`,
    `@storybook/addon-knobs`,
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
