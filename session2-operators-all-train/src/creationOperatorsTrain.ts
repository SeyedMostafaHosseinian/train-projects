import {of,from} from 'rxjs';

export function creationOperatorsTrain() {
//train the of opeerator
  of(1,2,3,4,5).subscribe({
    next(val) {
      console.log(`emmit the ${val} by of operator`)
    }
  })
//train the from operator

  const observable1 = from([1,2,3,4])
  observable1.subscribe({
    next(data) {
      console.log(data)
    },
    complete() {
      console.log('the programm is complete')
    }
  })

  console.log(observable1)
// output
// 1
// 2
// 3
// 4
// the programm is complete
}
