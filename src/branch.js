function branch (onResolved, onRejected) {
  return promise => Promise.resolve(promise).then(onResolved, onRejected)
}

module.exports = branch
