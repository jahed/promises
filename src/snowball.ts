export function snowball (
  ...steps: ((value: {[key: string]: any}) => (Promise<{[key: string]: any}> | {[key: string]: any}))[]
) {
  return (initial: {}): Promise<{}> => steps.reduce(
    (acc, next) => acc
      .then(accResult => Promise.resolve(next(accResult))
        .then(nextResult => (typeof nextResult === 'object'
          ? { ...accResult, ...nextResult }
          : accResult
        ))
    ),
    Promise.resolve(initial)
  )
}
