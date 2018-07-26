export function resolved<V> (value: V): Promise<V> {
  return Promise.resolve(value)
}
