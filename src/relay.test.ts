import { relay } from './relay'

it('resolves with initial value', () => {
  const fn = relay<number>(
    n => n + 1,
    n => n + 1
  )
  const result = fn(1)
  return expect(result).resolves.toEqual(1)
})

it('rejects when one rejects', () => {
  const fn = relay<number>(
    n => n + 1,
    () => Promise.reject(new Error('nope')),
    n => n + 1
  )
  const result = fn(1)
  return expect(result).rejects.toThrow('nope')
})
