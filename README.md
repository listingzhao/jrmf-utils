# jrmf-utils

[![npm](https://img.shields.io/npm/v/jrmf-utils.svg)](https://www.npmjs.com/package/jrmf-utils)
[![Build Status](https://travis-ci.org/listingzhao/jrmf-utils.svg?branch=master)](https://travis-ci.org/listingzhao/jrmf-utils)
[![codecov](https://codecov.io/gh/listingzhao/jrmf-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/listingzhao/jrmf-utils)
[![npm](https://img.shields.io/npm/l/jrmf-utils.svg)]()

#### jrmf-utils JavaScript tool library
> Internal encapsulates the commonly used browser object, array, function, purpose is to achieve the effect of the box.

# Installation

#### Using npm
``` bash
npm install jrmf-utils // or yarn add jrmf-utils
```
#### In a browser

``` html
<script src="https://cdn.jsdelivr.net/npm/jrmf-utils/dist/jrmf-utils.js"></script>
<script>
jrmfUtils.isPhone('1510166000') // return false
</script>
```
#### CommonJs

``` javascript
// Load the full build.
const jrmfUtils = require('jrmfUtils')
jrmfUtils.isPhone('1510166000') // return false

// Load method categories.
const isPhone = require('jrmfUtils/isPhone')
// or ES6
import isPhone from 'jrmfUtils/isPhone'

isPhone('1510166000') // return false
```

# Docs
#### Array
[isEqual](https://github.com/listingzhao/jrmf-utils/blob/master/src/components/array/isEqual.js)
#### Browser
[mBrowser](https://github.com/listingzhao/jrmf-utils/blob/master/src/components/browser/index.js)
#### Regexp
[isPhone](https://github.com/listingzhao/jrmf-utils/blob/master/src/components/regexp/isPhone.js)
[isEmail](https://github.com/listingzhao/jrmf-utils/blob/master/src/components/regexp/isEmail.js)
[isCardNo](https://github.com/listingzhao/jrmf-utils/blob/master/src/components/regexp/isCardNo.js)
[isBankno](https://github.com/listingzhao/jrmf-utils/blob/master/src/components/regexp/isBankno.js)
[isChinese](https://github.com/listingzhao/jrmf-utils/blob/master/src/components/regexp/isChinese.js)
#### DOM
##### Scroll
[getScrollTop](https://github.com/listingzhao/jrmf-utils/blob/master/src/components/scroll/index.js)
[setScrollTop](https://github.com/listingzhao/jrmf-utils/blob/master/src/components/scroll/index.js)
##### Spinner
[Spinner](https://github.com/listingzhao/jrmf-utils/blob/master/src/components/spinner/index.js)
``` javascript
/**
  * 'android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral'
*/
var ele = $('.v-spinner')
jrmfUtils.Spinner(ele[0], 'android')     
```
# License
MIT
