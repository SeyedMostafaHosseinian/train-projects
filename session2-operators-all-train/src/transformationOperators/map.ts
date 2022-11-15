import { from, map } from 'rxjs';

export function mapOperatorFun() {
  const data = from([10, 11, 20, 25])
  const mapObservable = data.pipe(map(data => data * 2))
  mapObservable.subscribe({
    next(data) {
      console.log(data)
    }
  })
}
