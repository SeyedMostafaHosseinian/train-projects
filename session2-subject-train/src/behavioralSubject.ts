import { BehaviorSubject } from 'rxjs';

export function behavioralSubjectTrain() {
  const behaviorSubject = new BehaviorSubject(0)
  behaviorSubject.next(10)

  const observer1 = behaviorSubject.subscribe({
    next(val) {
      console.log(val, "by observer1","behavior observable")
    }
  })
  behaviorSubject.next(20)
  const observer2 = behaviorSubject.subscribe({
    next(val) {
      console.log(val, 'by observer2',"behavior observable")
    }
  })
  behaviorSubject.next(30)

}
