// import * as _ from 'lodash';
import './style/style.scss'
import {Observable} from "rxjs";

const observable = new Observable(subscriber => {
    let counter = 0;
    setTimeout(() => {
        counter +=20;
        subscriber.next(`counter value changed to = ${counter}`)
    },2000)
    setTimeout(() => {
        counter +=50;
        subscriber.next(`counter value changed to = ${counter}`)
    },4000)
    setTimeout(() => {
        counter +=50;
        subscriber.next(`counter value changed to = ${counter}`)
    },8000)
    setTimeout(() => {
        subscriber.next('event is compelete')
        subscriber.complete()
    },9000)
    //this is not work beacause event is compelete
    setTimeout(() => {
        counter +=50;
        subscriber.error(`counter value changed to = ${counter}`)
    },10000)
})
observable.subscribe(subscribe => {
    console.log(subscribe)
})