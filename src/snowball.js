function snowball (...steps) {
  return initial => steps.reduce(
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

module.exports = snowball
