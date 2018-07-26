export function doNothing () {
  return (value?: any) => {
    console.log(`doing nothing with "${value}"`)
    return Promise.resolve()
  }
}
