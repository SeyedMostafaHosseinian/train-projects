import { ReplaySubject } from 'rxjs';

export function replaySubjectTrain() {
  const replaySubject = new ReplaySubject(2)
  replaySubject.next(50)
  replaySubject.next(500)
  replaySubject.next(550)
  const observer1 = replaySubject.subscribe({
    next(val) {
      console.log(val,"observer1","replaySubject")
    }
  })
  replaySubject.next(120)
  replaySubject.next(227)

  const observer2 = replaySubject.subscribe({
    next(val) {
      console.log(val,"observer2","replaySubject")
    }
  })
  replaySubject.next(300)
  replaySubject.next(100)
  replaySubject.next(200)

}
//output
// 500 , observer1
// 550 , observer1
// 120 , observer1
// 227 , observer1
// 120 , observer2
// 227 , observer2
// 300 , observer1
// 300 , observer2
// 100 , observer1
// 100 , observer2
// 200 , observer2
// 200 , observer2


