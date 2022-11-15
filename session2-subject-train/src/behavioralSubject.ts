import { BehaviorSubject } from 'rxjs';

export function behavioralSubjectTrain() {
  const behaviorSubject = new BehaviorSubject<number | string>("init")
  behaviorSubject.subscribe(value => console.log(value,"observer 0"))
  behaviorSubject.next(5)
  behaviorSubject.subscribe(value => console.log(value, "observer 1"))
  behaviorSubject.next(10)
  behaviorSubject.next(20)
  behaviorSubject.subscribe(value => console.log(value, "observer 2"))

}
