import { from } from "rxjs";

export function fromOperatorFun() {
  const observable1 = from([1, 2, 3, 4]);
  observable1.subscribe({
    next(data) {
      console.log(data);
    },
    complete() {
      console.log("the programm is complete");
    },
  });
}
