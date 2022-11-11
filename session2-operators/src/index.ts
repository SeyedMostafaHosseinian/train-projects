import {from,map,tap} from 'rxjs'
import {Observable} from 'rxjs';

const arr = [1,2,3,4];
const observable = from(arr).pipe(
    tap(data => console.log(data,'next by from')),
    map(data => data + 1)
).subscribe({
    next (data) {
        console.log(data,'next by map')
    },
    complete() {
        console.log('the observable is compelete')
    },
})
///change top codes to normall observable;
const normalObservable = new Observable(subscribe => {
    for(let i:number = 0; i<arr.length; i++) {
        subscribe.next(arr[i])   
    }
    subscribe.complete()
}).subscribe({
    next(data) {
        console.log(data,'normal position next by from')
        const subObservable = new Observable(subscribe2 => {
            if(typeof data === 'number') {
                let data2 = data +1
                subscribe2.next(data2)
            }
        }).subscribe({
            next(data3) {
                console.log(data3,'normal position next by map')
            },
        })
    },
    complete() {
        console.log(`the normalObserver is complete`)
    }
})