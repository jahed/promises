function waterfall (...steps) {
  return initial => steps.reduce(
    (acc, next) => acc.then(accResult => next(accResult)),
    Promise.resolve(initial)
  )
}

module.exports = waterfall
