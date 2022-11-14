import { filter, interval } from 'rxjs';

export function filterOperatorfun() {
  const source = interval(200)
  const filterData = source.pipe(filter(val => val > 10 && val <= 30)).subscribe({
    next(val) {
      console.log(val)
    },
    complete() {
      console.log('the programm is complete')
    }
  })

}

//output
// 11
// 12
// 13
// 14
//...
//30
// the programm is complete
