import { timer, from, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
export function catchErrorOperatorFun() {


  const myBadPromise = () =>
    new Promise((resolve, reject) => reject('Rejected!'));
  const source = timer(1000);
  const example = source.pipe(
    mergeMap(_ =>
      from(myBadPromise()).pipe(catchError(error => of(`Bad Promise: ${error}`)))
    )
  );
  const subscribe = example.subscribe(val => console.log(val));
}
