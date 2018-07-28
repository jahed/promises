/**
 * Takes an object map and calls the given functions sequentially, assigning
 * key-values from each step and passing the result onto the next.
 *
 * If any of the functions reject, the entire function will reject with that
 * reason.
 *
 * This is useful if you're building up an object sequentially instead of at
 * once like you might do with `every`.
 */
export function snowball (
  ...steps: ((value: {[key: string]: any}) => (Promise<{[key: string]: any}> | {[key: string]: any}))[]
) {
  return (initial: {}): Promise<{}> => steps.reduce(
    (acc, next) => acc
      .then(accResult => Promise.resolve(next(accResult))
        .then(nextResult => ({ ...accResult, ...nextResult }))
    ),
    Promise.resolve(initial)
  )
}
