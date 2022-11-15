import { concat, from, of } from 'rxjs';

export function concatOperatorFun() {

  const observable = concat(
    from([1, 2, 3]),
    // subscribed after first completes
    of(4, 5, 6),
    // subscribed after second completes
    of(7, 8, 9),
  )
  observable.subscribe({
    next(data) {
      console.log(data)
    }
  })
}
