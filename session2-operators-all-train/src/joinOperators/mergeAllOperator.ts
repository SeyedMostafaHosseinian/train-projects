import { interval, map, mergeAll, timer } from 'rxjs';

export function mergeAllOperator() {
  const source = timer(1000)
  const higherOrder = source.pipe(map(() => interval(1000)))
  const mergedObservable = higherOrder.pipe(mergeAll())
  mergedObservable.subscribe({
    next(val) {
      console.log(val)
    }
  })
  mergedObservable.subscribe({
    next(val) {
      console.log(val)
    }
  })
}

