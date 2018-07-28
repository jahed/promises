/**
 * A function that only resolves. Useful in `branch` and if you want to ignore
 * errors.
 */
export function doNothing () {
  return () => Promise.resolve()
}
