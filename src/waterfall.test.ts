import { waterfall } from './waterfall'

it('resolves with gathered values', () => {
  const fn = waterfall(
    v => `${v}.b`,
    v => `${v}.c`
  )
  const result = fn('a')
  return expect(result).resolves.toEqual('a.b.c')
})

it('rejects when one rejects', () => {
  const fn = waterfall(
    v => `${v}.b`,
    () => Promise.reject(new Error('nope')),
    v => `${v}.c`
  )
  const result = fn('a')
  return expect(result).rejects.toThrow('nope')
})
