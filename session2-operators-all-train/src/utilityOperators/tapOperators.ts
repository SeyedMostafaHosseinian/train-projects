import { from, interval, map, mergeAll, tap } from "rxjs";

export function tapOperatorFun() {
  const data = interval(1000);
  const example = data.pipe(
    tap(val => console.log(`logged by tap : ${val}`)),
    map(val => val * 2),
  )
  example.subscribe({
    next(val) {
      console.log(`change and log by map : ${val}`)
    }
  })
}

//output =>
// change and log by map : 0
// logged by tap : 1
// change and log by map : 2
// logged by tap : 2
// change and log by map : 4
// logged by tap : 3
// change and log by map : 6
// logged by tap : 4
// change and log by map : 8
// logged by tap : 5
// change and log by map : 10
// logged by tap : 6
// change and log by map : 12
// logged by tap : 7
// change and log by map : 14
