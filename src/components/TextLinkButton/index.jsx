import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { styled } from '../../util/style'
import TextLink from '../TextLink'
import Box from '../Box'
import ActionsContext from '../Actions/ActionsContext'

const Loader = styled.span`
  display: inline-flex;
  font-size: inherit;
  align-self: center;
  padding-top: 10px;

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
  const actionsContext = useContext(ActionsContext)
  const isNestedInActions = actionsContext != null

  const { isLoading } = props
  return (
    <Box as="span" sx={{ display: isNestedInActions ? 'flex' : null }}>
      <TextLink
        as="span"
        role="button"
        tabIndex={0}
        {...props}
        style={{
          fontSize: !!isNestedInActions ? 'inherit' : null,
        }}
      />
      {isLoading ? (
        <Loader isNestedInActions={isNestedInActions} aria-hidden>
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
