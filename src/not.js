function not (promise) {
  return promise.then(
    value => Promise.reject(new Error(`expected rejection but got ${value}`)),
    error => Promise.resolve(error)
  )
}

module.exports = not
