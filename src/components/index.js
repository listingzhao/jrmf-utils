const _mutils = {}

              const isBrowser = typeof window !== 'undefined'
isBrowser && (window.mutils = _mutils)

import mutilsisEqual from 'src/components/array/isEqual'

_mutils['mutilsisEqual'] = mutilsisEqual

if (isBrowser) {
  for (let i in _mutils) {
    window[i] = _mutils[i]
  }
}
