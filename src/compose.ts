export function compose (...steps: ((promise: Promise<any>) => Promise<any>)[]) {
  return (initial: any) => steps.reduce(
    (acc, next) => acc.then(
      accResult => next(Promise.resolve(accResult)),
      accError => next(Promise.reject(accError))
    ),
    Promise.resolve(initial)
  )
}
