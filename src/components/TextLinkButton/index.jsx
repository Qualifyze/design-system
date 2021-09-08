import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '../../util/style'
import TextLink from '../TextLink'
import Box from '../Box'

const Loader = styled.span`
  display: 'inline-block';

  & > span {
    width: 0.15em;
    height: 0.15em;
    background-color: currentColor;
    border-radius: 100%;
    display: inline-block;
    animation: loading-animation 1000ms infinite ease-in-out both;
  }

  & > span:nth-of-type(1) {
    margin-left: 0.25em;
    margin-right: 0.15em;
    animation-delay: -320ms;
  }

  & > span:nth-of-type(2) {
    margin-right: 0.15em;
    animation-delay: -160ms;
  }

  @keyframes loading-animation {
    0%,
    80%,
    100% {
      transform: scale(0);
    }

    40% {
      transform: scale(1);
    }
  }
`

const TextLinkButton = props => {
  const { isLoading } = props
  return (
    <Box as="span">
      <TextLink as="span" role="button" tabIndex={0} {...props} />
      {isLoading ? (
        <Loader aria-hidden>
          <span />
          <span />
          <span />
        </Loader>
      ) : null}
    </Box>
  )
}

TextLinkButton.defaultProps = {
  isLoading: false,
}

TextLinkButton.propTypes = {
  isLoading: PropTypes.bool,
}

export default TextLinkButton
