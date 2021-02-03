import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {WorkWithLocalStorageService} from './../../work-with-local-storage.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  //-----------------------------------------------------------------
   nameAddLocalStorage = new FormControl('');  
   nameFromInput='';
   public addedName=[];
   addedNameProperty=[];
   Properties=[];
   notDeleted=true;
  //-----------------------------------------------------------------
  public renderLocalStorage; 

  public addLocalStorage() { 
    this.addedName= this.renderLocalStorage
    if(this.nameAddLocalStorage.value!==''){
      localStorage.setItem(this.nameAddLocalStorage.value,`name,${this.nameAddLocalStorage.value},phone,unknown,age,unknown,sex,unknown`)    
      this.addedName.push(this.nameAddLocalStorage.value)
      this.nameAddLocalStorage.setValue('')}    
  }
  //-----------------------------------------------------------------
  public nameEdit;
  public phoneEdit;
  public ageEdit;
  public sexEdit;
  //-----------------------------------------------------------------
  constructor(config: NgbModalConfig, private modalService: NgbModal, WorkWithLocalStorageService:WorkWithLocalStorageService) { 
  //-----------------------------------------------------------------
    this.renderLocalStorage=WorkWithLocalStorageService.getState();
  //-----------------------------------------------------------------
    config.backdrop = 'static';
    config.keyboard = false;
  //-----------------------------------------------------------------
  }
  edit(content) {
    this.modalService.open(content);
  }

  editLocal(index){
    localStorage.removeItem(this.addedName[index])
    localStorage.setItem(this.addedName[index],`name,${this.addedName[index]},phone,${this.phoneEdit},age,${this.ageEdit},sex,${this.sexEdit}`)
    console.log(this.nameEdit)
    this.phoneEdit='';
    this.ageEdit='';
    this.sexEdit='';
  }
  deleteButton(index) {
    localStorage.removeItem(this.addedName[index]);
    this.addedName[index]=false;
  }
  //-----------------------------------------------------------------
  ngOnInit(): void {
    this.addLocalStorage()
    for(let key of this.addedName) {
    this.Properties.push(localStorage.getItem(key).split(','))
    console.log(this.Properties)
    } 
// this.addedNameProperty.push({key: localStorage.getItem(key)})

  }
  //-----------------------------------------------------------------
}
