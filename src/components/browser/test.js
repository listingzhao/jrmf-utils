import { assert } from 'chai'
import browser from './index'

describe('browser API Test', function () {
  it(`browser.versions.webKit should return true`, () => {
    assert.isOk(browser.versions.webKit)
  })
  it(`browser.language should return true`, () => {
    assert.isOk(browser.language)
  })
})
