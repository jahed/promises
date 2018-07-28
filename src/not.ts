/**
 * Reverses the result of a Promise. So a rejected Promise becomes resolved and
 * a resolved Promise becomes rejected.
 *
 * When resolved, it provides the rejected error.
 * When rejected, provides a generic error.
 */
export function not<I> (promise: Promise<I>): Promise<Error> {
  return promise.then(
    value => Promise.reject(new Error(`rejected "${value}"`)),
    error => Promise.resolve(error)
  )
}
