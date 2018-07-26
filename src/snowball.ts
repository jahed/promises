export function snowball (...steps: (({}) => Promise<{}>)[]) {
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
