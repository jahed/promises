import { branch } from "./branch"

it('resolves through the fulfilled branch', () => {
  const fn = branch(
    () => 'yep',
    () => Promise.reject(new Error('nope'))
  )
  const result = fn(Promise.resolve('success'))
  return expect(result).resolves.toEqual('yep')
})

it('resolves through the rejected branch', () => {
  const fn = branch(
    () => 'yep',
    () => Promise.reject(new Error('nope'))
  )
  const result = fn(Promise.reject(new Error('failure')))
  return expect(result).rejects.toThrow('nope')
})
