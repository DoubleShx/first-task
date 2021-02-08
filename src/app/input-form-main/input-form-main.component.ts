import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkWithLocalStorageService} from '../work-with-local-storage.service';
import {Subscription} from 'rxjs';
import {SearchService} from '../shared/search.service';

@Component({
  selector: 'app-input-form-main',
  templateUrl: './input-form-main.component.html',
  styleUrls: ['./input-form-main.component.scss']
})
export class InputFormMainComponent implements OnInit, OnDestroy {
  public Properties = [];
  addedNameSub: Subscription;
  public addedName;
  public searchStr = '';
  public subSearch: Subscription;

  constructor(public workWithLocalStorage: WorkWithLocalStorageService,
              public search: SearchService) {
  }



  ngOnInit() {
    this.addedNameSub = this.workWithLocalStorage.getAll().subscribe(names => {
      this.addedName = names;
      this.subSearch = this.search.stream$.subscribe(value => this.searchStr = value);
    });
  }

  ngOnDestroy() {
    if (this.addedNameSub) {
      this.addedNameSub.unsubscribe();
    }
    if (this.subSearch) {
      this.subSearch.unsubscribe();
    }
  }
}
