const _mutils = {}

const isBrowser = typeof window !== 'undefined'
isBrowser && (window.mutils = _mutils)

import mutilsarrayEqual from 'src/components/Array/arrayEqual'

_mutils['mutilsarrayEqual'] = mutilsarrayEqual

if (isBrowser) {
  for (let i in _mutils) {
    window[i] = _mutils[i]
  }
}
