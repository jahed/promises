function every (promises) {
  return Array.isArray(promises)
    ? everyArray(promises)
    : everyObject(promises)
}

function everyArray (promises) {
  return Promise.all(promises)
}

function everyObject (promiseMap) {
  const keys = Object.keys(promiseMap)
  return Promise.all(keys.map(key => promiseMap[key]))
    .then(values => values.reduce(
      (acc, next, index) => {
        acc[keys[index]] = next
        return acc
      },
      {}
    ))
}

module.exports = every
