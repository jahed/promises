import { snowball } from './snowball'

it('resolves with gathered values', () => {
  const fn = snowball(
    v => ({ b: `${v.a}.b` }),
    v => ({ c: `${v.a}.${v.b}.c` })
  )
  const result = fn({ a: 'a' })
  return expect(result).resolves.toEqual({
    a: 'a',
    b: 'a.b',
    c: 'a.a.b.c'
  })
})

it('rejects when one rejects', () => {
  const fn = snowball(
    () => ({ b: 'two' }),
    () => Promise.reject(new Error('nope')),
    () => ({ c: 'three' }),
  )
  const result = fn({ a: 'one' })
  return expect(result).rejects.toThrow('nope')
})
