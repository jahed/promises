import { eventually } from './eventually'

it('creates a promise that resolves', () => {
  const result = eventually(resolve => resolve('yep'))
  return expect(result).resolves.toBe('yep')
})

it('creates a promise that rejects', () => {
  const result = eventually((_, reject) => reject(new Error('nope')))
  return expect(result).rejects.toThrow('nope')
})
