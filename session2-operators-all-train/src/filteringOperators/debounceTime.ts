import {
  debounceTime,
  fromEvent,
} from "rxjs";


export function debounceTimefun() {
  let clickCount = 0;

  const click = fromEvent(document, 'click')

  click.pipe(debounceTime(2000))
    .subscribe({
      next(val) {
        clickCount += 1;
        console.log(`${clickCount} click`)
      }
    })
}
//It was clicked 4 times in a row
// after 2 secound
// log : 1click
//It was clicked 2 times in a row
//after 1 secound click 1 times
//after 2 secound without click :
// log : 2 click
