/**
 * [isEmail Whether regular match email address]
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */
export default function isEmail (str) {
  const reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
  return reg.test(str)
}
