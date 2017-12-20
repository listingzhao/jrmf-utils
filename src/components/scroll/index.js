/**
 * [getScrollTop]
 * @return {[type]} [description]
 */
function getScrollTop () {
  const supportPageYOffset = window.pageYOffset !== undefined
  const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
  return supportPageYOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
}

/**
 * [setScrollTop description]
 * @param {[type]} value [description]
 */
function setScrollTop (value) {
  window.scrollTo(0, value)
}

export {
  getScrollTop,
  setScrollTop
}
