export function doNothing () {
  return () => Promise.resolve()
}
