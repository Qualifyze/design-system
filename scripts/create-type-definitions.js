const { mkdirSync, readdirSync, writeFileSync } = require('fs')
const { join, resolve } = require('path')

const { generateFromFile } = require('react-to-typescript-definitions')

const componentsPath = resolve(module.path, '../src/components')
const distPath = resolve(module.path, '../dist/types')

// Assume every sub-folder in components folder has index.jsx with a default export
readdirSync(componentsPath, { withFileTypes: true })
  .filter(entry => entry.isDirectory() && entry.name !== 'private')
  .forEach(({ name }) => {
    console.log(name)

    const output = generateFromFile(
      name,
      join(componentsPath, name, 'index.jsx'),
      { babylonPlugins: ['nullishCoalescingOperator'] }
    )

    const targetPath = join(distPath, 'components', name)
    mkdirSync(targetPath, { recursive: true })
    writeFileSync(join(targetPath, 'index.d.ts'), output, 'utf-8')
  })
