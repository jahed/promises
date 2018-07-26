export function not<I> (promise: Promise<I>): Promise<Error> {
  return promise.then(
    value => Promise.reject(new Error(`expected rejection but got ${value}`)),
    error => Promise.resolve(error)
  )
}
