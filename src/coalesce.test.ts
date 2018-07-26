import { coalesce } from './coalesce'

it('resolves to the first resolved value', () => {
  const result = coalesce(
    () => Promise.reject(new Error('nope')),
    () => 'value 1',
    () => Promise.resolve('value 2')
  )

  return expect(result).resolves.toEqual('value 1')
})

it('rejects when no value is resolved', () => {
  const result = coalesce(
    () => Promise.reject(new Error('nope'))
  )

  return expect(result).rejects.toThrow('coalesce never resolved to a value')
})
