import { rejected } from './rejected'

it('rejects with an error', () => {
  const result = rejected(new Error('nope'))
  return expect(result).rejects.toThrow('nope')
})
