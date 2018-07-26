export function branch<I, R1, R2> (
  onResolved: (value: I) => Promise<R1>|R1,
  onRejected: (error?: Error) => Promise<R2>|R2
) {
  return (promise: Promise<I>) => Promise.resolve(promise).then(onResolved, onRejected)
}
