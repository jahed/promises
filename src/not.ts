export function not<I> (promise: Promise<I>): Promise<Error> {
  return promise.then(
    value => Promise.reject(new Error(`rejected "${value}"`)),
    error => Promise.resolve(error)
  )
}
