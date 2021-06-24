/* eslint-disable no-shadow */
/* eslint-disable prefer-template */
/* eslint-disable no-underscore-dangle */
import styled from '@emotion/styled'
import css, { get } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'

import {
  compose,
  space,
  layout,
  typography,
  color,
  position,
  flexbox,
  grid,
  sx,
} from '../../util/style'

const base = props => css(props.__css)(props.theme)
const variant = ({ theme, variant, tx = 'variants' }) =>
  css(get(theme, tx + '.' + variant, get(theme, variant)))(theme)

const Box = styled('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    position: 'relative',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
  props => props.css,
  compose(space, layout, typography, color, position, flexbox, grid)
)

export default Box
