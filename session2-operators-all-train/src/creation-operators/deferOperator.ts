import { defer, from, interval } from "rxjs";

export function deferOperatorFun() {
  const fromOrInterval = defer(() => {
    return Math.random() > 0.5 ? from([12, 24, 48, 96, 0, 2, 5, 99]) : interval(1000);
  });
}
