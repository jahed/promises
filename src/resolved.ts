/**
 * Creates a resolved Promise with the given value.
 * This is an alternative to `Promise.resolve()`.
 */
export function resolved<V> (value: V): Promise<V> {
  return Promise.resolve(value)
}
