'use strict'

const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  appPackage: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appDist: resolveApp('dist'),
}
