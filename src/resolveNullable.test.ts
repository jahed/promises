import { resolveNullable } from './resolveNullable'

it('resolves with a value', () => {
  const result = resolveNullable('yup')
  return expect(result).resolves.toEqual('yup')
})

it('rejects with an error when undefined value is given', () => {
  const result = resolveNullable(undefined, new Error('nope'))
  return expect(result).rejects.toThrow('nope')
})

it('rejects with an error when null value is given', () => {
  const result = resolveNullable(null, new Error('nope'))
  return expect(result).rejects.toThrow('nope')
})

it('rejects with a default error when null value is given', () => {
  const result = resolveNullable(null)
  return expect(result).rejects.toThrow('value was null')
})
