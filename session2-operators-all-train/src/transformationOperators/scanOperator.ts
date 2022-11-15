import { of, scan } from 'rxjs';

export function scanOperatorFun() {
  const source10 = of(12, 3, 45)
  source10.pipe(
    scan((acc, cur) => acc + cur, 0)
  ).subscribe({
    next(val) {
      console.log(val)
    }
  })
}
