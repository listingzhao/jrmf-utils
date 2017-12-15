/**
 * [isEmail Matching regular mobile phone number]
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */
export default function isPhone (str) {
  const reg = /^1((3[0-9])|(4[57])|([58][012356789]))\d{8}$/g
  return reg.test(str)
}
