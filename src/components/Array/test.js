import { assert } from 'chai'
import mfutils from 'src/index.js'

describe('Array.arrayEqual', function () {
  it('should start empty', function () {
    var arr = []

    assert.equal(arr.length, 0)
  })
  it(`arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, () => {
    assert.notEqual(mfutils.arrayEqual([0, 2, 3], [1, 2, 3]))
  })
})
