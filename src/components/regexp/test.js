import { assert } from 'chai'
import isEmail from './isEmail'
import isPhone from './isPhone'
import isBankno from './isBankno'
import isCardNo from './isCardNo'
import isChinese from './isChinese'

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
  it(`isPhone('17557289510') should return true`, () => {
    assert.isOk(isPhone('17557289510'))
  })
  it(`isBankno('62220200120418544') should return true`, () => {
    assert.isOk(isBankno('62220200120418544'))
  })
  it(`isIdCard('45032619840627183x') should return true`, () => {
    assert.isOk(isCardNo('45032619840627183x'))
  })
  it(`isIdCard('150822198801099559') should return true`, () => {
    assert.isOk(isCardNo('150822198801099559'))
  })
  it(`isChinese('余待永') should return true`, () => {
    assert.isOk(isChinese('余待永'))
  })
  it(`isChinese('aaa123') should return false`, () => {
    assert.isNotOk(isChinese('aaa123'))
  })
})
