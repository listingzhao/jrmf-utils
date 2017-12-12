/**
 * [判断两个数组是否相等]
 * @param  {[type]} arr1 [description]
 * @param  {[type]} arr2 [description]
 * @return {[type]}      [description]
 */
export default function arrayEqual (arr1, arr2) {
  if (arr1 === arr2) return true
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}
