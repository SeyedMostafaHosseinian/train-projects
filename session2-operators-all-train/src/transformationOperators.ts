import {
  bufferTime,
  interval,
  concatMap,
  mergeMap,
  fromEvent,
  switchMap,
  scan,
  map,
  from,
  delay,
  of,

} from 'rxjs';

export function transformationOperators() {
//train of bufferTime operator
  const source = interval(500)
  const bufferObservable = source.pipe(bufferTime(2000))

  bufferObservable.subscribe({
    next(val) {
      console.log(val)
    }
  })
//train of the map operator
  const data = from([10, 11, 20, 25])
  const mapObservable = data.pipe(map(data => data * 2))
  mapObservable.subscribe({
    next(data) {
      console.log(data)
    }
  })
//train of the concatMap operator
  const source2 = of(2000, 1000)
  const observable = source2.pipe(
    concatMap(data => of(`delay the ${data}`).pipe(delay(data)))
  )
  observable.subscribe({
    next(data) {
      console.log(data)
    }
  })
//train of mergeMap operator
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
//train of switchMap
  const clicks = fromEvent(document, 'click');
  clicks.subscribe({
    next() {
      console.log('new clicked !')
    }
  })
  const result = clicks.pipe(switchMap(() => interval(1000)));

  result.subscribe({
    next(val) {
      console.log(val)
    }
  })
//train of scan
  const source10 = of(12, 3, 45)
  source10.pipe(
    scan((acc, cur) => acc + cur, 0)
  ).subscribe({
    next(val) {
      console.log(val)
    }
  })
}
