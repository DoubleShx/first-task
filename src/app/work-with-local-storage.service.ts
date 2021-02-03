import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import {of, from, interval} from 'rxjs';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkWithLocalStorageService {


  constructor(public http: HttpClient) {
  }

  create(name): Observable<any> {
    return this.http.post(`${environment.fbDbUrl}/names.json`, name)
      .pipe(map((response: any) => {
        return {
          ...name,
          id: response.name,
          date: new Date(name.date)
        };
      }));
  }

  getAll() {
    return this.http.get(`${environment.fbDbUrl}/names.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object.keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));

      }));
  }

  update(properties): Observable<any> {
    return this.http.patch(`${environment.fbDbUrl}/names/${properties.id}.json`, properties);
  }
}


// private State = Object.keys(localStorage);
// private properties = [];
//
// public getproperties() {
//   for (let key of this.State) {
//     this.properties.push(localStorage.getItem(key).split(','));
//   }
//   return this.properties;
// }
//
// public getState() {
//   return (this.State);
// }
//
//
// // input form add
// public addLocalStorage(name) {
//   localStorage.setItem(name, `name,${name},phone,unknown,age,unknown,sex,unknown`);
//   this.State = Object.keys(localStorage);
// }
//
// // input form buttons
//
// editLocal(index, formgroup) {
//   localStorage.removeItem(formgroup[0]);
//   localStorage.setItem(formgroup[0], `name,${formgroup[0]},phone,${formgroup[1]},age,${formgroup[2]},sex,${formgroup[3]}`);
// }
//
// deleteButton(props) {
//   localStorage.removeItem(props);
//   console.log(this.getState());
//   this.State = Object.keys(localStorage);
//   console.log(this.State);
//   console.log(typeof this.State);
// }
//
// // -----------------------------------------
// // private productsInCart: Array<any> = Object.keys(localStorage);
// // public order$ = new BehaviorSubject(this.productsInCart);
// // пример функции,после которой мне нужно пропихнуть новое значение
// // unsetLSS(id: string){
// //   delete this.productsInCart[id];
// //   localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));
// //
// //   //именно эта строка делает событие
// //   this.order$.next(this.productsInCart);
// //  // }
// // -----------------------------------------
//
// // ---------------------------------------------------------------

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
