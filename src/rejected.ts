/**
 * Creates a rejected Promise with the given Error.
 * Use `reason()` to neatly pass an error.
 * This is an alternative to `Promise.reject()`.
 */
export function rejected (reason: Error) {
  return Promise.reject(reason)
}
