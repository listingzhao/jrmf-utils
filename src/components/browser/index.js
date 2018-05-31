const ua = navigator.userAgent
const browser = {
  versions: (function () {
    return {
      webKit: ua.indexOf('AppleWebKit') > -1,
      gecko: ua.indexOf('Gecko') !== -1,
      wechat: /MicroMessenger/i.test(ua),
      qq: /qq/i.test(ua),
      android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
      ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(ua)
    }
  })(),
  position: function (cb) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPositon)
    }
    function showPositon (pos) {
      var obj = {
        lat: pos && pos.coords.latitude,
        lng: pos && pos.coords.longitude
      }
      cb(obj)
      return obj
    }
  },
  types: (function () {
    return {
      isChrome: ua.indexOf('Chrome') && window.chrome,
      isIE: window.ActiveXObject !== undefined && ua.indexOf('MSIE') !== -1,
      isFireFox: ua.indexOf('Firefox') !== -1,
      isSafari: ua.indexOf('Safari') !== -1 && ua.indexOf('Version') !== -1
    }
  })(),
  ctype: function () {
    let _self = this
    if (_self.versions.webKit || _self.versions.gecko) {
      return 'pc'
    } else if (
      _self.versions.android ||
      _self.versions.ios ||
      _self.versions.wechat
    ) {
      return 'h5'
    }
  },
  brower: function () {
    let _self = this
    if (_self.ctype() === 'pc') {
      if (_self.types.isChrome) {
        return 'chrome'
      } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
        return 'firefox'
      } else if (_self.types.isIE) {
        return 'ie'
      } else if (_self.types.isSafari) {
        return 'safari'
      }
    }
  },
  browerVer: function () {
    let btype = this.brower()
    let version
    if (btype) {
      var name = btype.substring(0, 1).toUpperCase() + btype.substring(1)
      version = ua.substring(ua.indexOf(name))
      if (version.indexOf(' ') !== -1) {
        version = version.substring(
          version.indexOf('/') + 1,
          version.indexOf(' ')
        )
      } else {
        version = version.substring(version.indexOf('/') + 1)
      }
      return version
    }
    return ''
  },
  osSys: function () {
    let isWin = navigator.platform === 'Win32' || navigator.platform === 'Windows'
    let isMac =
      navigator.platform === 'MacIntel' ||
      navigator.platform === 'Mac68K' ||
      navigator.platform === 'MacPPC' ||
      navigator.platform === 'Macintosh'
    if (isMac) return 'mac'
    let isLinux = navigator.platform.indexOf('Linux') > -1
    if (isLinux) return 'linux'
    if (isWin) {
      let isWinXP =
        ua.indexOf('Windows NT 5.1') > -1 || ua.indexOf('Windows XP') > -1
      if (isWinXP) return 'winxp'
      let isWin7 =
        ua.indexOf('Windows NT 6.1') > -1 || ua.indexOf('Windows 7') > -1
      if (isWin7) return 'win7'
      let isWin10 =
        ua.indexOf('Windows NT 10') > -1 || ua.indexOf('Windows 10') > -1
      if (isWin10) return 'win10'
    }
  },
  osVersion: function () {
    let osVer = ua.substring(ua.indexOf('(') + 1, ua.indexOf(')'))
    return osVer
  },
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

export default browser
