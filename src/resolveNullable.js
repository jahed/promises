function resolveNullable(value, error = new Error(`value was ${value}`)) {
  return typeof value === 'undefined' || value === null
    ? Promise.reject(error)
    : Promise.resolve(value)
}

module.exports = resolveNullable
