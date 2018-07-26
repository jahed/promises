export function waterfall (...steps: ((value: any) => any)[]) {
  return (initial: any) => steps.reduce(
    (acc, next) => acc.then(accResult => next(accResult)),
    Promise.resolve(initial)
  )
}
