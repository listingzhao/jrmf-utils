import { assert } from 'chai'
import isEqual from './isEqual'

describe('mutils API Test', function () {
  it('should start empty', function () {
    var arr = []

    assert.equal(arr.length, 0)
  })
  it(`isEqual([0, 2, 3], [1, 2, 3]) should return false`, () => {
    assert.notEqual(isEqual([0, 2, 3], [1, 2, 3]))
  })
})
