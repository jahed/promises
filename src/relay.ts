export function relay<I> (...steps: ((value: I) => any)[]) {
  return (initial: I): Promise<I> => steps
    .reduce(
      (acc, next) => acc.then(
        baton => Promise.resolve(next(baton))
          .then(() => baton)
      ),
      Promise.resolve(initial)
    )
}
