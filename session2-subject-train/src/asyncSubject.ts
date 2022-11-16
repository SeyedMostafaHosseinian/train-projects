import { AsyncSubject } from 'rxjs';

export function asyncSubjectTrain() {
  const asyncSubject = new AsyncSubject()

  asyncSubject.subscribe({
    next(val) {
      console.log(val,"observer2","asyncSubject")

    },
    complete() {
      console.log("the programm is complete")
    }
  })
  asyncSubject.next(10)
  asyncSubject.next(20)
  asyncSubject.next(30)

  
  asyncSubject.complete()
  asyncSubject.subscribe({
    next(val) {
      console.log(val,"observer1","asyncSubject")

    },
    complete() {
      console.log("the programm is complete")
    }
  })
  
  

}
