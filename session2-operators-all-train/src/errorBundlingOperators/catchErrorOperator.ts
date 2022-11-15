import { timer, from, of } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";

export function catchErrorOperatorFun() {
  const badPromise = () => new Promise((resolve, reject) => {
    reject("rejected")
  });
  const source = timer(1000)
  const example = source.pipe(
    mergeMap((_) => from(badPromise()).pipe(catchError((error) => of(`error occured : ${error}`))))
  )
  example.subscribe(val => console.log(val))

// Bad Promise: Rejected
}
