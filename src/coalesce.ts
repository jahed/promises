/**
 * Resolves to the first function that resolves, otherwise rejects.
 */
export function coalesce<V> (...suppliers: (() => (Promise<V> | V))[]): Promise<V> {
  const defaultResult = Promise.reject(new Error('coalesce never resolved to a value'))
  return suppliers.reduce(
    (acc, next) => acc.catch(() => Promise.resolve(next())),
    defaultResult
  ).catch(() => defaultResult)
}
