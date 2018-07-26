import { reason } from './reason'

it('returns an error', () => {
  const result = reason('nope')
  return expect(result).toEqual(new Error('nope'))
})
