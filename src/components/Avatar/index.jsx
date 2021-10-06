import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'

export default function Avatar({ size, src, bg, alt }) {
  const fallback = alt?.length ? alt.charAt(0).toUpperCase() : null

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.25rem',
        bg,
        color: 'white',
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        fallback
      )}
    </Box>
  )
}

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  bg: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  src: PropTypes.string,
}

Avatar.defaultProps = {
  bg: 'grey.500',
  size: '40px',
  src: null,
}
