import { every } from './every'

it('resolves with all values', () => {
  const result = every([
    Promise.resolve('one'),
    Promise.resolve('two'),
    Promise.resolve('three')
  ])
  return expect(result).resolves.toEqual(['one', 'two', 'three'])
})

it('rejects when one value rejects', () => {
  const result = every([
    Promise.resolve('one'),
    Promise.reject(new Error('nope')),
    Promise.resolve('three')
  ])
  return expect(result).rejects.toThrow('nope')
})

it('resolves with all key-values', () => {
  const result = every({
    a: Promise.resolve('one'),
    b: Promise.resolve('two'),
    c: Promise.resolve('three')
  })
  return expect(result).resolves.toEqual({
    a: 'one',
    b: 'two',
    c: 'three'
  })
})

it('rejects when one key-value rejects', () => {
  const result = every({
    a: Promise.resolve('one'),
    b: Promise.reject(new Error('nope')),
    c: Promise.resolve('three')
  })
  return expect(result).rejects.toThrow('nope')
})
