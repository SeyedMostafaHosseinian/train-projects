import { forkJoin, from, of } from 'rxjs';

export function forkjoinOperatorFun() {
  const observable3 = forkJoin([
    from(['hello', 'world']),
    of(12, 23),
  ])
  observable3.subscribe({
    next(val) {
      console.log(val)
    }
  })
  //advance train
  const observable4 = forkJoin({
    foo: of(1, 2, 3, 4),
    bar: Promise.resolve(8),
    baz: from([10, 5, 16])
  });
  observable4.subscribe({
    next: value => console.log(value),
    complete: () => console.log('This is ends!'),
  });
}
