import {
  concat,
  from,
  of,
  partition,
  fromEvent,
  interval,
  zip,
  merge,
  forkJoin
} from 'rxjs';

export function joinCreationOperatorsTrain() {
//train of concat operator
  const observable = concat(
    from([1, 2, 3]),
    // subscribed after first completes
    of(4, 5, 6),
    // subscribed after second completes
    of(7, 8, 9),
  )
  observable.subscribe({
    next(data) {
      console.log(data)
    }
  })
//train of merge operator
  const clicks = fromEvent(document, 'click');
  const timer = interval(1000);
  const clicksOrTimer = merge(clicks, timer);
  clicksOrTimer.subscribe(x => console.log(x));
  //train of partition operator
  const observableValues = of(1, 2, 3, 4, 5, 6);
  const [evens$, odds$] = partition(observableValues, value => value % 2 === 0);

  odds$.subscribe(x => console.log('odds', x));
  evens$.subscribe(x => console.log('evens', x));
//train of zip operator
  /////zip operator without function in last argument
  let age2$ = of(27, 25, 29);
  let name2$ = of("Foo", "Bar", "Beer");
  let isDev2$ = of(true, true, false);

  zip(age2$, name2$, isDev2$, (age: number, name: string, isDev: boolean) => ({
    age,
    name,
    isDev,
  })).subscribe((x) => console.log(x));

  /////zip operator by function in last argument
  let age$ = of(27, 25, 29);
  let name$ = of("Foo", "Bar", "Beer");
  let isDev$ = of(true, true, false);

  zip(age$,
    name$,
    isDev$,
    (age: number, name: string, isDev: boolean) => ({age, name, isDev,}))
    .subscribe((x) => console.log(x));

//train of forkejoin operator
  //simple train
  const observable3 = forkJoin([
    from(['hello', 'world']),
    of(12, 23),
  ])
  observable.subscribe({
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
  observable.subscribe({
    next: value => console.log(value),
    complete: () => console.log('This is ends!'),
  });
}


