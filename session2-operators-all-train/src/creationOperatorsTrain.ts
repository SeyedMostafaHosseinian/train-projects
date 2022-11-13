import {
  of,
  from,
  range,
  interval,
  defer
} from 'rxjs';

export function creationOperatorsTrain() {
//train the of opeerator
  of(1, 2, 3, 4, 5).subscribe({
    next(val) {
      console.log(`emmit the ${val} by of operator`)
    }
  })
//train the from operator
  const observable1 = from([1, 2, 3, 4])
  observable1.subscribe({
    next(data) {
      console.log(data)
    },
    complete() {
      console.log('the programm is complete')
    }
  })
//train of range operator

  const numbers = range(1, 25);

  numbers.subscribe({
    next: value => console.log(value),
    complete: () => console.log('the program is Complete!')
  });
//train of interval operator
  const observable = interval(1000)
  observable.subscribe({
    next(data) {
      console.log(data)
    }
  })

//train of defer operator
  const fromOrInterval = defer(() => {
    return Math.random() > 0.5
      ? from([12, 24, 48, 96, 0, 2, 5, 99])
      : interval(1000);
  });
  fromOrInterval.subscribe(x => console.log(x));
//

}
