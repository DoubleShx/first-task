import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {WorkWithLocalStorageService} from '../../work-with-local-storage.service';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  // -----------------------------------------------------------------
  nameAddLocalStorage = new FormControl('', Validators.required);
  nameFromInput = '';
  public addedName = [];
  addedNameProperty = [];
  notDeleted = true;
  // -----------------------------------------------------------------
  public renderLocalStorage;

  public addLocalStorage() {
    this.workWithLocalStorageService.addLocalStorage(this.nameAddLocalStorage.value);
    this.addedName = this.workWithLocalStorageService.getState();
    this.nameAddLocalStorage.setValue('');
    // this.addedName = this.renderLocalStorage;
    // if (this.nameAddLocalStorage.value !== '') {
    // localStorage.setItem(this.nameAddLocalStorage.value, `name,${this.nameAddLocalStorage.value},phone,unknown,age,unknown,sex,unknown`);
    //   this.addedName.push(this.nameAddLocalStorage.value);
    //   this.nameAddLocalStorage.setValue('');
    // }
  }

  // -----------------------------------------------------------------
  public nameEdit;
  public phoneEdit;
  public ageEdit;
  public sexEdit;

  // -----------------------------------------------------------------
  constructor(config: NgbModalConfig, private modalService: NgbModal,
              public workWithLocalStorageService: WorkWithLocalStorageService,
              public auth: AuthService) {
    // -----------------------------------------------------------------
    this.renderLocalStorage = workWithLocalStorageService.getState();
    // -----------------------------------------------------------------
    config.backdrop = 'static';
    config.keyboard = false;
    // -----------------------------------------------------------------
  }

  public Properties = this.workWithLocalStorageService.getproperties();

  edit(content) {
    this.modalService.open(content);
  }

  editLocal(index) {
    const formgroup = [this.addedName[index], this.phoneEdit, this.ageEdit, this.sexEdit];
    this.workWithLocalStorageService.editLocal(index, formgroup);
    this.phoneEdit = '';
    this.ageEdit = '';
    this.sexEdit = '';
  }

  deleteButton(index) {
    this.workWithLocalStorageService.deleteButton(this.addedName[index]);
    this.addedName = this.workWithLocalStorageService.getState();

    // localStorage.removeItem(this.addedName[index]);
  }

  // -----------------------------------------------------------------
  ngOnInit(): void {
    this.addedName = this.workWithLocalStorageService.getState();
    // for (let key of this.addedName) {
    //   this.Properties.push(localStorage.getItem(key).split(','));
    //   console.log(this.Properties);
    // }
// this.addedNameProperty.push({key: localStorage.getItem(key)})

  }

  // -----------------------------------------------------------------
}
