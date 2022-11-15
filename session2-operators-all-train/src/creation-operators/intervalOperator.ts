import { interval } from "rxjs";
export function intervalOperatorFun() {
  const observable = interval(1000);
  observable.subscribe({
    next(data) {
      console.log(data);
    },
  });
}
