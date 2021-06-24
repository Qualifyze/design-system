import React from 'react'
import PropTypes from 'prop-types'

import Flex from '../Flex'
import Icon from '../Icon'
import Text from '../Text'

import PrimaryAction from './PrimaryAction'
import DangerAction from './DangerAction'
import { getIconColor, getIconShape, getFileExtension } from './helpers'

const FileUploadRow = ({ text, children }) => {
  const fileExtension = getFileExtension(text)
  const iconColor = getIconColor(fileExtension)
  const iconShape = getIconShape(fileExtension)
  return (
    <Flex
      sx={{
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'display': 'flex',
        'flex': ['1 1 100%', null],
        'borderRadius': theme => theme.radii[1],
        'p': 2,
        'pl': 3,
        'border': 'none',
        'fontWeight': 'normal',
        'boxShadow': theme => `inset 0 0 0 1px ${theme.colors.grey[300]}`,
        'background': 'white',
        'outline': 'none',
        'minHeight': '48px',
        '.actions': {
          visibility: 'hidden',
        },
        '&:hover': {
          'boxShadow': theme => `inset 0 0 0 1px ${theme.colors.grey[800]}`,
          '.actions': {
            visibility: 'visible',
          },
        },
        '&:focus': {
          boxShadow: theme =>
            `${theme.shadows.focusRing}, inset 0 0 0 1px ${theme.colors.grey[800]}`,
        },
      }}
    >
      <Flex alignItems="center" sx={{ pr: 2 }}>
        <Icon name={iconShape} color={iconColor} sx={{ mr: 2 }} />
        <Text size="small">
          {text.indexOf('.') > 34 ? `${text.substring(0, 34)}...` : text}
        </Text>
      </Flex>
      <Flex className="actions">{children}</Flex>
    </Flex>
  )
}

FileUploadRow.PrimaryAction = PrimaryAction
FileUploadRow.DangerAction = DangerAction

FileUploadRow.propTypes = {
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
}

export default FileUploadRow
