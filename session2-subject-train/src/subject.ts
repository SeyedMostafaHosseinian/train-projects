import { from, Subject, tap, BehaviorSubject, ReplaySubject } from 'rxjs';

export function subjectTrain() {

  const normalSubject = new Subject()
  normalSubject.subscribe(value => {
    console.log(value, "observer 1", "normall subject")
  })

  normalSubject.next(10)
  normalSubject.next(20)


   ///
}

