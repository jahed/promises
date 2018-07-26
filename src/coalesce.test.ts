import { coalesce } from "./coalesce"

it('returns the first resolved value', () => {
  const result = coalesce(
    () => Promise.reject(new Error('nope')),
    () => 'value 1',
    () => Promise.resolve('value 2')
  )

  return expect(result).resolves.toEqual('value 1')
})
