const browser = {
  versions: (function () {
    const ua = navigator.userAgent
    return {
      webKit: ua.indexOf('AppleWebKit') > -1,
      gecko: ua.indexOf('Gecko') !== -1,
      wechat: /MicroMessenger/i.test(ua),
      android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
      ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(ua)
    }
  })(),
  types: (function () {
    const ua = navigator.userAgent
    return {
      isChrome: ua.indexOf('Chrome') && window.chrome,
      isIE: window.ActiveXObject !== undefined && ua.indexOf('MSIE') !== -1,
      isFireFox: ua.indexOf('Firefox') !== -1,
      isSafari: ua.indexOf('Safari') !== -1 && ua.indexOf('Version') !== -1
    }
  })(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

export default browser
