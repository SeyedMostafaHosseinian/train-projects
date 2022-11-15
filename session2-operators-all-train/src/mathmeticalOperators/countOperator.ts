import { count, from } from "rxjs";

export function countOperatorFun() {
  const source = from(["salam", "hello", 10, 40, true]);
  source.pipe(count()).subscribe({
    next(val) {
      console.log(val);
    },
  });
}
