const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    DIRTREE: require('./src/doc-directory-tree')
  }
}

const markdownPathFull = path.join('./', 'COMMENTS.md')
markdownMagic(markdownPathFull, config)

const markdownPath = path.join('./src', '../COMMENTS.md')
markdownMagic(markdownPath, config)