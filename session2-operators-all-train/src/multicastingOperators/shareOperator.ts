import { from, interval, map, of, timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

export function shareOperatorFun() {

  const source = interval(1000);
  //unshared observable
  const example = source.pipe(
    tap(() => console.log('*** an new observable is created ***')),

  );

  const subscribe = example.subscribe(val => console.log('subscriber 1',`value : ${val}`));
  const subscribeTwo = example.subscribe(val => console.log('subscriber 2',` value : ${val}`));

  //sharing the observable
  const sharedExample = example.pipe(share());

  const subscribeThree = sharedExample.subscribe(val => console.log('subscriber 3',` value : ${val}`));
  const subscribeFour = sharedExample.subscribe(val => console.log('subscriber 4',` value : ${val}`));
}
