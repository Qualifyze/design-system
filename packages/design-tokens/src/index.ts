import {
  brand,
  gray,
  green,
  yellow,
  red,
  sky,
  whiteA,
  blackA,
} from './tokens/color'
import { fontStack } from './tokens/font-stack'
import { fontSize } from './tokens/font-size'
import { fontWeight } from './tokens/font-weight'
import { borderRadius } from './tokens/border-radius'
import { spacing } from './tokens/spacing'

export const tokens = {
  ...brand,
  ...gray,
  ...green,
  ...yellow,
  ...red,
  ...sky,
  ...whiteA,
  ...blackA,
  ...fontStack,
  ...fontSize,
  ...fontWeight,
  ...borderRadius,
  ...spacing,
}
