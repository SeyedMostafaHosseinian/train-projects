import { fromEvent, interval, switchMap } from 'rxjs';

export function switchMapOperatorFun() {
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
}
