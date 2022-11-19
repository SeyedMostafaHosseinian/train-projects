import { Subject } from 'rxjs';

export function subjectTrain() {

  const normalSubject = new Subject()
  normalSubject.subscribe({
    next(val) {
      console.log(val, 'observer1')
    }
  })
  normalSubject.next(10)
  normalSubject.subscribe({
    next(val) {
      console.log(val,'observer2')
    }
  })
  normalSubject.next(20)
  normalSubject.next(30)
}
