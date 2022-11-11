import {map,tap,from} from 'rxjs';

export function observableByOpeartor(){
    let arr = [1,2,3,4]
    const observable = from(arr)
      .pipe(
        tap((data) => console.log(data, "next by from")),
        map((data) => data + 1)
      )
      .subscribe({
        next(data) {
          console.log(data, "next by map");
        },
        complete() {
          console.log("the observable is compelete");
        },
      });
    
}
