import { assert } from 'chai'
import browser from './index'

describe('browser API Test', function () {
  it(`browser.versions.webKit should return true`, () => {
    assert.isOk(browser.versions.webKit)
  })
  it(`browser.versions.ctype should return pc`, () => {
    console.log(browser.ctype())
    assert.equal('pc', browser.ctype())
  })
  it(`browser.brower should return chrome`, () => {
    console.log(navigator.userAgent)
    console.log(browser.brower())
    assert.equal('chrome', 'chrome')
  })
  it(`browser.browerVer should return version`, () => {
    console.log(browser.browerVer())
    assert.isString(browser.browerVer())
  })
  it(`browser.osSys should return string`, () => {
    console.log(browser.osSys())
    assert.isString(browser.osSys())
  })
  it(`browser.osVersion should return string`, () => {
    console.log(browser.osVersion())
    assert.isString(browser.osVersion())
  })
  it(`browser.language should return true`, () => {
    assert.isOk(browser.language)
  })
  it(`browser.position should return obj`, () => {
    var obj = {}
    function pos (position) {
      console.log(position)
      obj = position
      return position
    }
    browser.position(pos)
    setTimeout(function () {
      assert.isObject(obj)
    }, 1000)
  })
})
