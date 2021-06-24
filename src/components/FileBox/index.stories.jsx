import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import Box from '../Box'
import Inline from '../Inline'
import Text from '../Text'

import FileBox from '.'

const files = [
  {
    name: 'someAgenda.docx',
    link: 'someAgendaLink',
  },
  {
    name: 'otherAgenda.doc',
    link: 'otherAgendaLink',
  },
  {
    name: 'someReport.pdf',
    link: 'someReportLink',
  },
  {
    name: 'someSpreadsheet.xls',
    link: 'someSpreadsheetLink',
  },
  {
    name: 'otherSpreadsheet.xlsx',
    link: 'otherSpreadsheetLink',
  },
  {
    name: 'someCompression.zip',
    link: 'someCompressionLink',
  },
  {
    name: 'otherCompression.rar',
    link: 'otherCompressionLink',
  },
  {
    name: 'somePresentation.ppt',
    link: 'somePresentationLink',
  },
  {
    name: 'otherPresentation.pptx',
    link: 'otherPresentationLink',
  },
  {
    name: 'someRandomeFile.txt',
    link: 'someRandomeFileLink',
  },
  {
    name: 'someImage.png',
    link: 'someImageLink',
  },
  {
    name: 'Pneumonoultramicroscopicsilicovolcanoconiosis.png',
    link: 'someLink3',
  },
]

export const Default = () => {
  const downloadAction = boolean('Primary action?', false)
  const removeAction = boolean('Danger action', false)

  return (
    <Box sx={{ p: 3 }}>
      <Text>
        Remember to open the knobs area of storybook to check how it looks with
        each combination of actions
      </Text>
      <Inline space="1">
        {files.map(file => (
          <FileBox key={file.name} text={file.name}>
            {!!downloadAction && (
              <FileBox.PrimaryAction
                iconName="download"
                // eslint-disable-next-line no-console
                onClick={event => console.log(event.target)}
              />
            )}
            {!!removeAction && (
              <FileBox.DangerAction
                iconName="trash"
                // eslint-disable-next-line no-alert
                onClick={() => alert("I'm supposed remove")}
              />
            )}
          </FileBox>
        ))}
      </Inline>
    </Box>
  )
}

export default { title: 'FileBox', component: Default }

Default.story = {
  name: 'default',
}
