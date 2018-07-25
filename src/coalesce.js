const coalesce = (...suppliers) => suppliers.reduce(
  (acc, next) => acc.catch(() => Promise.resolve(next())),
  Promise.reject(new Error('coalesce never resolved to a value'))
)

module.exports = coalesce
