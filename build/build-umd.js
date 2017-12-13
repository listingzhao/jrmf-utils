'use strict'
process.env.NODE_ENV = 'production'

/**
 * --locale='zh-CN'
 * --namespace='vux'
 * --components=Group,Cell
 */

var argv = require('yargs').argv
var namespace = argv.namespace || 'mutils'

const { build } = require('./umd-helper')

var isBuildAll = !argv.components
var buildComponents = argv.components ? argv.components.split(',') : []

let config = require('./webpack.prod.conf.js')

const webpack = require('webpack')
const mkdirp = require('mkdirp')
const fs = require('fs')
const touch = require('touch')
const path = require('path')

let list = require(path.resolve(__dirname, '../src/datas/component_list.json'))
const maps = require(path.resolve(__dirname, '../src/components/map.json'))

let others = []
for (let i in maps) {
  let match = list.filter(function (one) {
    return _camelCase(one.name) === i
  })
  if (match.length === 0 && !/NOTICE/.test(i)) {
    others.push({
      name: toDash(i),
      importName: i,
      path: maps[i]
    })
  }
}

var co = require('co')
var pkg = require(path.resolve(__dirname, '../package.json'))

config.devtool = false

config.output.assetsPublicPath = '/'

let isBuilding = false

co(function* () {
  if (!buildComponents.length) {
    try {
      yield build(buildMainConfig(), 'mutils')
    } catch (e) {
      console.log(e)
    }
    try {
      for (let n = 0; n < others.length; n++) {
        yield build(buildConfig(others[n]), others[n].name)
      }
    } catch (e) {
      console.log(e)
    }
  }
})

function camelCase (input) {
  let str = input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase()
  })
  str = str.replace(/_(.)/g, function (match, group1) {
    return group1.toUpperCase()
  })
  return str
}

function _camelCase (input) {
  let str = camelCase(input)
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

function buildMainConfig () {
  // list all components
  const list = require('../src/components/map.json')
  let code = `const _mutils = {}\n
const isBrowser = typeof window !== 'undefined'\n`
  code += `isBrowser && (window.mutils = _mutils)\n\n`

  delete list['NOTICE']

  for (let i in list) {
    const name = `${namespace}${i}`
    code += `import ${name} from '${list[i]}'\n
_mutils['${name}'] = ${name}\n`
  }

  code += `
if (isBrowser) {
  for (let i in _mutils) {
    window[i] = _mutils[i]
  }
}\n`

  fs.writeFileSync(path.resolve(__dirname, '../src/components/index.js'), code)

  delete config.entry

  config.entry = config.entry || {}
  config.entry['mutils'] = 'src/components/index.js'
  config.output = {}
  config.output.libraryTarget = 'window'
  config.output.filename = `mutils.min.js`
  config.output.path = path.resolve(__dirname, `../dist/`)
  delete config.__vueOptions__
  return config
}

function buildConfig (one, opts) {
  opts = opts || {}
  one.importName = one.importName || _camelCase(one.name)
  one.path = path.resolve(__dirname, '../' + (one.path || maps[one.importName]))

  delete config.entry

  config.entry = {}
  config.entry[one.name] = one.path
  config.output = {}
  config.output.libraryTarget = 'umd'
  config.output.library = `${namespace}${one.importName}`
  config.output.filename = `index.min.js`
  config.output.path = path.resolve(__dirname, `../dist/components/${one.name}/`)
  delete config.__vueOptions__
  return config
}

function toDash (str) {
  return str.replace(/([A-Z])/g, function (m, w) {
    return '-' + w.toLowerCase()
  }).replace('-', '')
}
