function doNothing() {
  return () => {
    console.log('doing nothing')
    Promise.resolve()
  }
}

module.exports = doNothing
