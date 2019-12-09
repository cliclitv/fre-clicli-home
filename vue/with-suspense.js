import {h} from 'fre'

export function withSuspense(fn) {
  let error = null
  let data = null
  let component = null
  let last = null

  return next => {
    if (last != next) {
      data = null
      last = next
    }
    if (error) throw error
    if (data) return data
    if (component) return h(component, next)
    throw fn(next).then(
      res => (res.default ? (component = res.default) : (data = res)),
      err => (error = err)
    )
  }
}