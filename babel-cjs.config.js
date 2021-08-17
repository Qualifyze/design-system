module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'cjs',
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
  ignore: ['**/*.stories.jsx', '**/*.test.jsx', 'src/util/test'],
}
