import { AsyncSubject } from 'rxjs';

export function asyncSubjectTrain() {
  const asyncSubject = new AsyncSubject()
  asyncSubject.next(10)
  asyncSubject.next(20)
  asyncSubject.next(30)

  asyncSubject.subscribe({
    next(val) {
      console.log(val)

    }
  })


}
