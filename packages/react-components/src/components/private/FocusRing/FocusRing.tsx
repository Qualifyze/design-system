import { styled } from '../../../stitches.config';

export const FocusRing = styled('span', {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  borderRadius: '$4',
  boxShadow: '0 0 0 4px $colors$brand7',
  opacity: 1,
});
