// require all test files (files that ends with .test.js)
const testsContext = require.context('../../src/components/', true, /test.js$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.

const srcContext = require.context('../../src/components/', true, /^.*\.js$/)

srcContext.keys().filter((one) => {
  console.log(one)
  if (/index\.js/.test(one) || /spinner/.test(one)) {
    return false
  }
  return true
}).forEach(srcContext)
