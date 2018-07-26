export function eventually<V> (
  fulfiller: (
    resolve: (value: V) => void,
    reject: (error: Error) => void
  ) => void
): Promise<V> {
  return new Promise(fulfiller)
}
