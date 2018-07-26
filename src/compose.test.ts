import { compose } from './compose'

it('composes functions one after the other', () => {
  const fn = compose(
    p => p.then(v => v + 1),
    p => p.then(v => v + 1)
  )
  const result = fn(Promise.resolve(1))
  return expect(result).resolves.toEqual(3)
})

it('rejects when any function rejects', () => {
  const fn = compose(
    p => p.then(v => v + 1),
    p => p.then(() => Promise.reject(new Error('nope'))),
    p => p.then(v => v + 1)
  )
  const result = fn(Promise.resolve(1))
  return expect(result).rejects.toThrow('nope')
})
