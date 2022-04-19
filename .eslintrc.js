module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:testing-library/recommended',
    'plugin:storybook/recommended',
  ],
  parser: 'babel-eslint',
  env: {
    es2020: true,
    jest: true,
    browser: true,
  },
  plugins: ['prettier', 'import', 'react', 'react-hooks', 'jsx-a11y'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.stories.*', '.storybook/**'],
      rules: {
        'import/no-default-export': 'off',
        // eslint cannot resolve properly the @storybook paths
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['scripts/**'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  rules: {
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
      },
    ],
    'no-empty-function': 'off',
    'import/prefer-default-export': 'off',
    'no-extra-boolean-cast': 'off',
    'react/jsx-props-no-spreading': ['off'],
  },
}
