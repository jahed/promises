function eventually (fulfiller) {
  return new Promise(fulfiller)
}

module.exports = eventually
