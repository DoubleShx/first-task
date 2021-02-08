import {Injectable, OnDestroy} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnDestroy {
  public sub: Subscription;
  public stream$: Subject<any> = new Subject<any>();
  public searchStr = '';

  constructor() {
    this.sub = this.stream$.subscribe(value => {
      this.searchStr = value;
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
