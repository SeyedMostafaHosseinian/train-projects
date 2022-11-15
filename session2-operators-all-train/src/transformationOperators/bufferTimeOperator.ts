import { bufferTime, interval } from 'rxjs';

export function bufferTimeOperatorFun() {
  const source = interval(500)
  const bufferObservable = source.pipe(bufferTime(2000))

  bufferObservable.subscribe({
    next(val) {
      console.log(val)
    }
  })
}
