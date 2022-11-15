import { delay, mergeMap, of } from 'rxjs';

export function mergeMapOperatorFun() {
  const source3 = of(2000, 1000)
  const mergeMapExample = source3
    .pipe(
      // just so we can log this after the first example has run
      mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    )
    .subscribe({
      next(val) {
        console.log(`With mergeMap: ${val}`)

      },
      complete() {
        console.log('the merge map is completed')
      }
    });
}
