const argv = require('yargs').argv
argv.simulate = argv.simulate || false

module.exports = {
  options: {
    jrmfDev: !argv.simulate, // true
    jrmfSetBabel: argv.simulate, // false
    jrmfWriteFile: false,
    env: 'dev'
  },
  plugins: [
    'jrmf-module'
  ]
}
