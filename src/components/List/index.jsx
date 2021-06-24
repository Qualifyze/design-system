/* eslint-disable no-nested-ternary */
/**
 * Heavily inspired by Braid https://github.com/seek-oss/braid-design-system/blob/a2dae256cc7ee7b5341e0ec50777e41511dc48bd/lib/components/List/List.tsx
 */
import React, { Children } from 'react'
import PropTypes from 'prop-types'
import flattenChildren from 'react-keyed-flatten-children'

import { propType } from '../../util/style'
import Stack from '../Stack'
import Flex from '../Flex'
import Box from '../Box'
import Text from '../Text'

// eslint-disable-next-line react/prop-types
const CharacterBullet = ({ children }) => (
  <Box sx={{ display: 'inline-block' }}>{children}.</Box>
)

const List = ({ children, size, tone, space, type, start }) => {
  const listItems = flattenChildren(children)

  return (
    <Stack as={type === 'bullet' ? 'ul' : 'ol'} space={space}>
      {Children.map(listItems, (listItem, index) => {
        const resolvedIndex = index + (start - 1)

        return (
          <Flex>
            <Text as="div" size={size} tone={tone}>
              <Flex
                sx={{
                  alignItems: type !== 'number' ? 'center' : undefined,
                  height:
                    size === 'tiny'
                      ? '16px'
                      : size === 'small'
                      ? '20px'
                      : size === 'large'
                      ? '32px'
                      : '24px',
                  userSelect: 'none',
                }}
                aria-hidden
              >
                {(() => {
                  if (type === 'number') {
                    return (
                      <CharacterBullet>{resolvedIndex + 1}</CharacterBullet>
                    )
                  }

                  const dotSize = size === 'large' ? '5px' : '4px'

                  return (
                    <Box
                      sx={{
                        width: dotSize,
                        height: dotSize,
                        bg: 'currentColor',
                        borderRadius: '100%',
                      }}
                    />
                  )
                })()}
              </Flex>
            </Text>
            <Text as="div" size={size} tone={tone}>
              <Box
                sx={{
                  pl: size === 'tiny' ? 2 : 3,
                }}
              >
                {listItem}
              </Box>
            </Text>
          </Flex>
        )
      })}
    </Stack>
  )
}

List.propTypes = {
  /** Child React components to render */
  children: PropTypes.node.isRequired,
  /** The font size */
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),
  /** Tone, i.e., color to use */
  tone: PropTypes.oneOf([
    'neutral',
    'lightneutral',
    'positive',
    'critical',
    'secondary',
    'lightsecondary',
    'info',
  ]),
  /** Type of list */
  type: PropTypes.oneOf(['bullet', 'number']),
  start: PropTypes.number,
  /** Spacing between the children */
  space: propType,
}

List.defaultProps = {
  type: 'bullet',
  start: 1,
  size: null,
  tone: null,
  space: null,
}

export default List
