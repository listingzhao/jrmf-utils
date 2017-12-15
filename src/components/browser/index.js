const browser = {
  versions: (function () {
    const ua = navigator.userAgent
    return {
      webKit: ua.indexOf('AppleWebKit') > -1,
      wechat: /MicroMessenger/i.test(ua),
      android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
      ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(ua)
    }
  }()),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

export default browser
