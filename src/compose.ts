/**
 * Calls the given functions in sequence, passing the result onto the next as a
 * Promise rather than a value.
 *
 * Unlike `waterfall` which passes resolved values, you can use this to combine
 * other Promise consuming functions like `branch`.
 */
export function compose (...steps: ((promise: Promise<any>) => Promise<any> | any)[]) {
  return (initial: any) => steps.reduce(
    (acc, next) => acc.then(
      accResult => next(Promise.resolve(accResult)),
      accError => next(Promise.reject(accError))
    ),
    Promise.resolve(initial)
  )
}
