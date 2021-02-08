import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public message = '';
  public streamMessage$: Subject<any> = new Subject<any>();
  public sub1: Subscription;

  constructor() {
    this.sub1 = this.streamMessage$.subscribe(value => this.message = value);
  }
}
