import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import PropTypes from 'prop-types'
import React from 'react'

import { styled } from '../../util/style'
import { colorFromString } from '../../util/style/colorFromString'

const StyledRoot = styled(Root, { shouldForwardProp: p => p !== 'bg' })(
  props => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    width: props.size,
    height: props.size,
    borderRadius: '100%',
    backgroundColor: props.bg,
  })
)

const StyledImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const StyledFallback = styled(Fallback)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  lineHeight: 1,
})

export default function Avatar({
  size,
  src,
  alt,
  fallback = alt.length ? alt.charAt(0).toUpperCase() : alt,
  bg = colorFromString(alt),
}) {
  return (
    <StyledRoot size={size} bg={bg}>
      {src ? <StyledImage src={src} alt={alt} /> : null}
      <StyledFallback>{fallback}</StyledFallback>
    </StyledRoot>
  )
}

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  bg: PropTypes.string,
  fallback: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  src: PropTypes.string,
}

Avatar.defaultProps = {
  bg: undefined,
  fallback: undefined,
  size: '40px',
  src: null,
}
