const fs = require('fs')
const path = require('path')

const maps = require(path.resolve(__dirname, '../src/components/map.json'))
delete maps.NOTICE

const target = path.resolve(__dirname, '../src/index.js')

let str = `// THIS FILE IS ONLY FOR IDE ENTRY CHECKING NOT FOR REAL USAGE\n\n`

for (let i in maps) {
  str += `import ${i} from '${maps[i]}'\n`
}

str += `\nexport {\n`
for (let i in maps) {
  str += `  ${i}${i === 'Spinner' ? '' : ','}\n`
}
str += '}\n'

fs.writeFileSync(target, str)
