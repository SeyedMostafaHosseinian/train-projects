import { range } from "rxjs";

export function rangeOperatorFun() {
  const numbers = range(1, 25);

  numbers.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("the program is Complete!"),
  });
}
