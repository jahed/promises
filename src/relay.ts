/**
 * Passes a given value to each function, finally resolving to the same value.
 *
 * If any of the functions reject, the entire function will reject with that
 * reason.
 *
 * You can think of this like a Relay Race in sports. The baton is the passed
 * to the next runner and doesn't change. If a runner drops the baton, the other
 * runners won't receive the baton and the team fails.
 */
export function relay<I> (...steps: ((value: I) => any)[]) {
  return (initial: I): Promise<I> => steps
    .reduce(
      (acc, next) => acc.then(
        baton => Promise.resolve(next(baton))
          .then(() => baton)
      ),
      Promise.resolve(initial)
    )
}
