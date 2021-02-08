import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {WorkWithLocalStorageService} from '../../../work-with-local-storage.service';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MessageService} from '../../message.service';

@Component({
  selector: 'app-edit-fixed',
  templateUrl: './edit-fixed.component.html',
  styleUrls: ['./edit-fixed.component.scss']
})


export class EditFixedComponent implements OnInit, OnDestroy {
  public selectorName;
  public selectorNameSub;
  public indexOfSelectedName;
  public propertiesToShow;

  public addedFixedNames;
  public phoneFixedEdit;
  public sexFixedEdit;
  public ageFixedEdit;

  constructor(
    config: NgbModalConfig, private modalService: NgbModal,
    public workWithLocalStorageService: WorkWithLocalStorageService,
    public messageService: MessageService
  ) {
    //   // ----------------------------------------------------------------
    config.backdrop = 'static';
    config.keyboard = false;
    //   // ----------------------------------------------------------------
    this.selectorNameSub = workWithLocalStorageService.getAll().subscribe(response => {
      this.selectorName = response;
    });
    //
    //   // ----------------------------------------------------------------
  }

  //
  editLocalStorage() {
    let indexOfEdit = this.selectorName.findIndex(i => i.value === this.addedFixedNames);
    this.workWithLocalStorageService.update({
      ...this.selectorName[indexOfEdit],
      phone: this.phoneFixedEdit,
      age: this.ageFixedEdit,
      sex: this.sexFixedEdit
    }).subscribe((response) => {
      console.log(response);
      this.messageService.streamMessage$.next('Пост изменён');
    });
  }

  onChange($event) {
    let indexOf = this.selectorName.findIndex(i => i.value === $event);
    console.log(this.selectorName[indexOf]);

    this.addedFixedNames = $event;
    this.phoneFixedEdit = '';
    this.ageFixedEdit = '';
    this.sexFixedEdit = '';
    this.indexOfSelectedName = this.selectorName.indexOf($event);
    if (this.selectorName[indexOf].phone) {
      this.phoneFixedEdit = this.selectorName[indexOf].phone;
    }
    if (this.selectorName[indexOf].age) {
      this.ageFixedEdit = this.selectorName[indexOf].age;
    }
    if (this.selectorName[indexOf].sex) {
      this.sexFixedEdit = this.selectorName[indexOf].sex;
    }

  }


  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.selectorNameSub) {
      this.selectorNameSub.unsubscribe();
    }
  }

}
