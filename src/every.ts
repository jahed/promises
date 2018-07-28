/**
 * Takes an array or object map of promises and only resolves when all values
 * resolve, rejecting otherwise.
 *
 * The resulting value is an array or object map of the resolved values from
 * each Promise.
 *
 * If any of the promises reject, the entire function will reject with that
 * reason.
 *
 * Passing an array is equivalent to using `Promise.all()`.
 */
export function every (promises: (Promise<any>[] | {[key: string]: Promise<any>})) {
  return Array.isArray(promises)
    ? everyArray(promises)
    : everyObject(promises)
}

function everyArray (promises: Promise<any>[]) {
  return Promise.all(promises)
}

function everyObject (promises: {[key: string]: Promise<any>}): Promise<{[key: string]: any}> {
  const keys = Object.keys(promises)
  return Promise.all(keys.map(key => promises[key]))
    .then(values => values.reduce(
      (acc, next, index) => {
        acc[keys[index]] = next
        return acc
      },
      {}
    ))
}
