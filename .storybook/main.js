module.exports = {
  stories: ['../src/**/*.stories.{js,jsx}'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-actions/register',
  ],
  staticDirs: ['./public'],
}
