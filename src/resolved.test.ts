import { resolved } from './resolved'

it('resolves with a value', () => {
  const result = resolved('yup')
  return expect(result).resolves.toEqual('yup')
})
