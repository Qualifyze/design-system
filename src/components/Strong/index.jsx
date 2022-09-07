import { styled } from '../../util/style'

const Strong = styled('strong')(props => ({
  fontWeight: props.theme.fontWeights.bold,
}))

Strong.displayName = 'Strong'

export default Strong
