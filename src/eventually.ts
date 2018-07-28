/**
 * Returns a Promise which resolves or rejects based on a given function.
 * This is a functional alternative to using `new Promise()`.
 */
export function eventually<V> (
  fulfiller: (
    resolve: (value: V) => void,
    reject: (error: Error) => void
  ) => void
): Promise<V> {
  return new Promise(fulfiller)
}
