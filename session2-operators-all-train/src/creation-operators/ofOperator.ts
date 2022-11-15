import { of } from "rxjs";

export function ofOperatorFun() {
  of(1, 2, 3, 4, 5).subscribe({
    next(val) {
      console.log(`emmit the ${val} by of operator`);
    },
  });
}
