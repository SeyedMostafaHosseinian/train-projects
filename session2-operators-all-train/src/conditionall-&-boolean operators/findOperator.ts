import { find, from } from "rxjs";

export function findOperatorFun() {
  const data = from([11, 22, 25, 45, 50, 2, 9, 14]);
  const findExample = data.pipe(find((val) => val % 5 === 0)).subscribe({
    next(val) {
      console.log(val);
    },
  });
}
//output
// 25
