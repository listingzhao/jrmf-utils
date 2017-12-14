import _isEqual from 'lodash/isEqual'
/**
 * [isEqual 比较两者的值是否相等]
 * @param  {[type]}  value [description]
 * @param  {[type]}  other [description]
 * @return {Boolean}       [description]
 */
export default function isEqual (value, other) {
  return _isEqual(value, other)
}
