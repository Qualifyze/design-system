module.exports = {
  stories: [
    './components/**/*.stories.mdx',
    '../packages/react-components/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-essentials'],
}
