/**
 * [isBankno Whether regular match Bank card number]
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */
export default function isBankno (str) {
  const reg = /^\d{16,19}$/
  return reg.test(str)
}
