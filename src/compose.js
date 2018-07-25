function compose (...steps) {
  return initial => steps.reduce(
    (acc, next) => acc.then(
      accResult => next(Promise.resolve(accResult)),
      accError => next(Promise.reject(accError))
    ),
    Promise.resolve(initial)
  )
}

module.exports = compose
