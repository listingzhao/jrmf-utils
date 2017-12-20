/**
 * [isEmail Whether regular match email address]
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */
export default function isChinese (str) {
  const reg = /^[\u4e00-\u9fa5]+$/
  return reg.test(str)
}
