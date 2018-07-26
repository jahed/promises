export function coalesce<V> (...suppliers: (() => (Promise<V> | V))[]): Promise<V> {
  return suppliers.reduce(
    (acc, next) => acc.catch(() => Promise.resolve(next())),
    Promise.reject(new Error('coalesce never resolved to a value'))
  )
}
