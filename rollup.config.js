import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'
import styles from 'rollup-plugin-styles'

import { dependencies } from './package.json'

export default defineConfig({
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/index.cjs.js',
  },
  plugins: [
    resolve({ preferBuiltins: true, extensions: ['.js', '.jsx'] }),
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    styles(),
  ],
  external: [...Object.keys(dependencies), 'react-select/creatable'],
})
