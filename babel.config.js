module.exports = api => ({
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
  ignore: api.env('test') ? [] : ['**/*.test.jsx', 'src/util/test'],
})
