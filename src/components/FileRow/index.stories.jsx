import React from 'react'

import Box from '../Box'
import Stack from '../Stack'

import FileRow from '.'

export const Default = () => {
  const files = [
    {
      name: 'file1.png',
      link: 'someLink1',
    },
    {
      name: 'file2.png',
      link: 'someLink2',
    },
    {
      name: 'file3.png',
      link: 'someLink3',
    },
  ]
  return (
    <Box sx={{ p: 3 }}>
      <Stack space="1">
        {files.map(file => (
          <FileRow key={file.name} text={file.name}>
            <FileRow.PrimaryAction
              iconName="download"
              // eslint-disable-next-line no-alert
              onClick={() => alert("I'm supposed to be a download")}
            />
          </FileRow>
        ))}
      </Stack>
    </Box>
  )
}

export default { title: 'FileRow', component: Default }

Default.story = {
  name: 'default',
}
