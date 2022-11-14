import { debounceTime, from, fromEvent, interval, map, tap } from "rxjs";
export function debounceTimefun() {
  const clicks = fromEvent(document, "click");
  const result = clicks.pipe(debounceTime(1000));
  result.subscribe({
    next(val) {
      console.log("click");
    },
  });


}
