import { styled } from '../../util/style'

const HiddenFileInput = styled('input')({
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  padding: 0,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  border: 0,
  visibility: 'inherit',
  clip: 'rect(0,0,0,0)',
})
export default HiddenFileInput
