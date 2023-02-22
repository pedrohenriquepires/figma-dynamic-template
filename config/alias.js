const paths = require('./paths')
const alias = require('../tsconfig.paths.json').compilerOptions.paths

module.exports = Object.keys(alias).reduce((ac, c) => {
  return {
    ...ac,
    [c.replace('/*', '')]: `${paths.appSrc}/${alias[c][0].replace('/*', '')}`,
  }
}, {})
