import { assert } from 'chai'
import isEmail from './isEmail'
import isPhone from './isPhone'
import isBankno from './isBankno'

describe('regexp API Test', function () {
  it(`isEmail('7@qq.com') should return true`, () => {
    assert.isOk(isEmail('7@qq.com'))
  })
  it(`isEmail('7@qq') should return false`, () => {
    assert.isNotOk(isEmail('7@qq'))
  })
  it(`isPhone('01088312800') should return false`, () => {
    assert.isNotOk(isPhone('01088312800'))
  })
  it(`isPhone('15100000000') should return true`, () => {
    assert.isOk(isPhone('15100000000'))
  })
  it(`isBankno('62220200120418544') should return true`, () => {
    assert.isOk(isBankno('62220200120418544'))
  })
})
