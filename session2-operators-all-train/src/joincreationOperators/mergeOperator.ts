import { fromEvent, interval, merge } from 'rxjs';

export function mergeOperatorFun() {
  const clicks = fromEvent(document, 'click');
  const timer = interval(1000);
  const clicksOrTimer = merge(clicks, timer);
  clicksOrTimer.subscribe(x => console.log(x));
}
