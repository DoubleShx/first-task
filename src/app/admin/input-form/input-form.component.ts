import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {WorkWithLocalStorageService} from '../../work-with-local-storage.service';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs';
import {AuthService} from '../auth.service';
import {SearchService} from '../../shared/search.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit, OnDestroy {
  searchStr = '';
  sub: Subscription;

  // -----------------------------------------------------------------
  nameAddLocalStorage = new FormControl('', Validators.required);
  nameFromInput = '';
  public addedName = [];
  addedNameSub: Subscription;
  editSub: Subscription;
  notDeleted = true;

  // -----------------------------------------------------------------


  public addLocalStorage() {
    this.workWithLocalStorageService.create(this.nameAddLocalStorage).subscribe((response) => {
      this.addedName.push({value: this.nameAddLocalStorage.value, id: response.id});
      console.log(this.addedName);
      this.nameAddLocalStorage.setValue('');
      this.messageService.streamMessage$.next('Пост добавлен');
    });
  }

  // -----------------------------------------------------------------
  public nameEdit;
  public phoneEdit;
  public ageEdit;
  public sexEdit;

  // -----------------------------------------------------------------
  constructor(config: NgbModalConfig, private modalService: NgbModal,
              public workWithLocalStorageService: WorkWithLocalStorageService,
              public auth: AuthService,
              public search: SearchService,
              public messageService: MessageService) {
    // -----------------------------------------------------------------
    config.backdrop = 'static';
    config.keyboard = false;
    // -----------------------------------------------------------------
  }

  edit(content) {
    this.modalService.open(content);
  }

  editLocal(index) {
    this.editSub = this.workWithLocalStorageService.update({
      ...this.addedName[index],
      phone: this.phoneEdit,
      age: this.ageEdit,
      sex: this.sexEdit
    }).subscribe(() => {
      this.addedName[index] = {
        ...this.addedName[index],
        phone: this.phoneEdit,
        age: this.ageEdit,
        sex: this.sexEdit
      };
      this.messageService.streamMessage$.next('Пост изменен');
    });
  }

  deleteButton(index) {
    this.workWithLocalStorageService.remove(this.addedName[index].id).subscribe(() => {
      this.addedName = this.addedName.filter(item => item.id !== this.addedName[index].id);
      this.messageService.streamMessage$.next('Пост удалён')
    });
  }

  // -----------------------------------------------------------------
  ngOnInit(): void {
    this.addedNameSub = this.workWithLocalStorageService.getAll().subscribe(names => {
      this.addedName = names;
    });
    this.sub = this.search.stream$.subscribe(value => this.searchStr = value);
  }

  ngOnDestroy() {
    if (this.addedNameSub) {
      this.addedNameSub.unsubscribe();
    }
    if (this.editSub) {
      this.editSub.unsubscribe();
    }
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  // -----------------------------------------------------------------
  testing() {
    console.log(typeof this.addedName[0].value);
  }
}
