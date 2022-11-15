import { concatMap, delay, of } from 'rxjs';

export function concatMapOperatorFun() {
  const source2 = of(2000, 1000)
  const observable = source2.pipe(
    concatMap(data => of(`delay the ${data}`).pipe(delay(data)))
  )
  observable.subscribe({
    next(data) {
      console.log(data)
    }
  })
}
