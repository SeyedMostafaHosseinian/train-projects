import { take, from } from "rxjs";

export function takeOperatorfun() {
  const data = from(["mostafa", 10, true, 20, 30, 40]);
  data.pipe(take(3)).subscribe({
    next(val) {
        console.log( `next by take operator '${val}'`)
    },
    complete() {
        console.log('the subscribe is complete')
    }
    
  })
}
