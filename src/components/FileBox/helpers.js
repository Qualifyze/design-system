// XXX Not getting the colours from Theme
const colors = {
  doc: 'hsl(203, 75%, 51%)',
  docx: 'hsl(203, 75%, 51%)',
  pdf: 'hsl(4, 80%, 53%)',
  xls: 'hsl(151, 78%, 40%)',
  xlsx: 'hsl(151, 78%, 40%)',
  zip: 'hsl(54, 65%, 51%)',
  rar: 'hsl(54, 65%, 51%)',
  ppt: 'hsl(16, 67%, 57%)',
  pptx: 'hsl(16, 67%, 57%)',
}

export const getIconColor = extension => {
  return colors[extension] || 'hsl(216, 18%, 30%)'
}

const shapes = {
  doc: 'document',
  docx: 'document',
  pdf: 'document',
  xls: 'document',
  xlsx: 'document',
  zip: 'folderopen',
  rar: 'folderopen',
  ppt: 'document',
  pptx: 'document',
}

export const getIconShape = extension => {
  return shapes[extension] || 'document'
}

export const getFileExtension = text => text.slice(text.indexOf('.') + 1)
