// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzipExtensions: ['js']
  },
  dev: {
    env: require('./dev.env'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  }
}
