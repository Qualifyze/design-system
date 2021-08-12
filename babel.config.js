module.exports = api => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: api.env('test') ? 'cjs' : false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
  ignore: api.env('test') ? [] : ['**/*.test.jsx', 'src/util/test'],
})
