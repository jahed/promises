import { not } from './not'

it('rejects a resolved value', () => {
  const result = not(Promise.resolve('value'))
  return expect(result).rejects.toThrow(`expected rejection but got "value"`)
})

it('resolves a rejected value', () => {
  const expected = new Error('nope')
  const result = not(Promise.reject(expected))
  return expect(result).resolves.toEqual(expected)
})
