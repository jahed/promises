/**
 * Calls the given function sequentially as each Promise resolves, passing the
 * value onto the next.
 *
 * If any of the functions reject, the entire function will reject with that
 * reason.
 */
export function waterfall (...steps: ((value: any) => any)[]) {
  return (initial: any) => steps.reduce(
    (acc, next) => acc.then(accResult => next(accResult)),
    Promise.resolve(initial)
  )
}
