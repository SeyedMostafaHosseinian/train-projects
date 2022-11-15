import { ReplaySubject } from 'rxjs';

export function replaySubjectTrain() {
  const replaySubject = new ReplaySubject(1000,500)
}
