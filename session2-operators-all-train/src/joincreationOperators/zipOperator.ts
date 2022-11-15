import { zip, of } from 'rxjs';

export function zipOperatorFun() {
  let age2$ = of(27, 25, 29);
  let name2$ = of("first", "secound", "third");
  let isDev2$ = of(true, true, false);

  let example = zip(age2$, name2$, isDev2$)
  example.subscribe({
    next(val) {
      console.log(val)
    }
  })

  //zip example with function in last argument an output the object
  let exampl2 = zip(
    age2$,
    name2$,
    isDev2$,
    (age: number, name: string, isdev: boolean) => ({age, name, isdev})
  )
  exampl2.subscribe({
    next(val) {
      console.log(val)
    }
  })
}


