import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs'
import {of, from, interval} from 'rxjs'
// @Injectable({
//   providedIn: 'root'
// })
export class WorkWithLocalStorageService {
  private State=Object.keys(localStorage);
  private properties=[];
  public getproperties() {
  for (let key of this.State){
 this.properties.push(localStorage.getItem(key).split(','))
    
  }
  return this.properties;
}

  public getState(){
    return (this.State);
  }

  constructor() { this.getproperties()}
}

// let arr$ = from([2,5,6,8])
// arr$.subscribe(val=>console.log(val))

// const stream$ = new Observable(observer => {
//   observer.next('first value')

// })

// stream$.subscribe(val=>console.log(val))

// let st = '5';
// let func = () => {
// return st;
// }
// let d = interval(500).subscribe(v=>console.log(v))
