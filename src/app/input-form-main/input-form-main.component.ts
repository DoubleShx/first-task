import {Component, OnInit} from '@angular/core';
import {WorkWithLocalStorageService} from '../work-with-local-storage.service';

@Component({
  selector: 'app-input-form-main',
  templateUrl: './input-form-main.component.html',
  styleUrls: ['./input-form-main.component.scss']
})
export class InputFormMainComponent implements OnInit {
  public Properties = [];

  constructor(public workWithLocalStorage: WorkWithLocalStorageService) {
  }

  public addedName = this.workWithLocalStorage.getState();

  ngOnInit() {
    this.Properties = this.workWithLocalStorage.getproperties();
  }
}
