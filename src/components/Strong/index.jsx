import { styled } from '../../util/style'

const Strong = styled('strong')(props => ({
  fontWeight: props.theme.fontWeights.semibold,
}))

Strong.displayName = 'Strong'

export default Strong
