import { Observable } from "rxjs";

/**simulation from and map by normall obsevable and loop */
export function normalObservable() {
  let arr = [1, 2, 3, 4];
  const normalObservable = new Observable((subscribe) => {
    for (let i: number = 0; i < arr.length; i++) {
      subscribe.next(arr[i]);
    }
    subscribe.complete();
  }).subscribe({
    next(data) {
      console.log(data, "normal position next by from");
      const subObservable = new Observable((subscribe2) => {
        if (typeof data === "number") {
          let data2 = data + 1;
          subscribe2.next(data2);
        }
      }).subscribe({
        next(data3) {
          console.log(data3, "normal position next by map");
        },
      });
    },
    complete() {
      console.log(`the normalObserver is complete`);
    },
  });
}
