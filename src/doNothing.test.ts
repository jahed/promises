import { doNothing } from './doNothing'

it('always resolves to nothing', () => {
  const fn = doNothing()
  return expect(fn()).resolves.toBeUndefined()
})
