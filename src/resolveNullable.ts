/**
 * Resolves to a Promise which rejects if the given value is null or undefined,
 * otherwise resolves with that value.
 */
export function resolveNullable<V> (
  value?: V, error = new Error(`value was ${value}`)
): Promise<V> {
  return typeof value === 'undefined' || value === null
    ? Promise.reject(error)
    : Promise.resolve(value)
}
