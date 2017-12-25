import { assert } from 'chai'
import { setScrollTop, getScrollTop } from './index'

describe('scroll API Test', function () {
  describe('#getScrollTop', () => {
    const $body = document.body
    const bodyHeight = getComputedStyle($body).getPropertyValue('height')
    const length = 20

    before(function () {
      $body.style.height = '1000px'
      setScrollTop(length)
    })
    it(`getScrollTop() should return true`, function () {
      assert(getScrollTop() === length)
    })
    after(function () {
      setScrollTop(0)
      $body.style.height = bodyHeight
    })
  })

  describe('#setScrollTop', () => {
    let $body = document.body
    let bodyHeight = getComputedStyle($body).getPropertyValue('height')
    let length = 20
    before(function () {
      $body.style.height = '1000px'
      setScrollTop(length)
    })
    it(`setScrollTop() should return true`, function () {
      setScrollTop(length)
      assert(getScrollTop() === length)
    })
    after(function () {
      setScrollTop(0)
      $body.style.height = bodyHeight
    })
  })
})
