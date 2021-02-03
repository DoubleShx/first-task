import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkWithLocalStorageService} from '../work-with-local-storage.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-input-form-main',
  templateUrl: './input-form-main.component.html',
  styleUrls: ['./input-form-main.component.scss']
})
export class InputFormMainComponent implements OnInit, OnDestroy {
  public Properties = [];
  addedNameSub: Subscription;

  constructor(public workWithLocalStorage: WorkWithLocalStorageService) {
  }

  public addedName;

  ngOnInit() {
    this.addedNameSub = this.workWithLocalStorage.getAll().subscribe(names => {
      this.addedName = names;
    });
  }
  ngOnDestroy() {
    if (this.addedNameSub) {
      this.addedNameSub.unsubscribe();
    }
  }
}
