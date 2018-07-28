/**
 * Creates an Error with the given message. This is a functional alternative to
 * `new Error()`.
 */
export function reason (message: string) {
  return new Error(message)
}
