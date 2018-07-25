function relay (...steps) {
  return initial => steps
    .reduce(
      (acc, next) => acc.then(
        baton => Promise.resolve(next(baton)).then(
          () => baton
        )
      ),
      Promise.resolve(initial)
    )
}

module.exports = relay
