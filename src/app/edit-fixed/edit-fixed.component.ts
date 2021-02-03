import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {WorkWithLocalStorageService} from './../work-with-local-storage.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-fixed',
  templateUrl: './edit-fixed.component.html',
  styleUrls: ['./edit-fixed.component.scss']
})


export class EditFixedComponent implements OnInit {

  public selectorName;
  public indexOfSelectedName;
  public propertiesToShow;

  public addedFixedNames;
  public phoneFixedEdit;
  public sexFixedEdit;
  public ageFixedEdit;  

  constructor(config: NgbModalConfig, private modalService: NgbModal, WorkWithLocalStorageService:WorkWithLocalStorageService) {
    // ----------------------------------------------------------------
    config.backdrop = 'static';
    config.keyboard = false;
    // ----------------------------------------------------------------
    this.selectorName=WorkWithLocalStorageService.getState();
    this.propertiesToShow=WorkWithLocalStorageService.getproperties();
    
    // ----------------------------------------------------------------
  }

  editLocalStorage(){
    if(this.addedFixedNames!=='' && this.addedFixedNames!=undefined){
    localStorage.removeItem(this.addedFixedNames)
    localStorage.setItem(this.addedFixedNames,`name,${this.addedFixedNames},phone,${this.phoneFixedEdit},age,${this.ageFixedEdit},sex,${this.sexFixedEdit}`)
    console.log(this.addedFixedNames)
    this.phoneFixedEdit='';
    this.ageFixedEdit='';
    this.sexFixedEdit='';
    this.addedFixedNames='';}
  }
  onChange($event){
    this.addedFixedNames=$event;
    this.phoneFixedEdit='';
    this.ageFixedEdit='';
    this.sexFixedEdit='';       
    this.indexOfSelectedName=this.selectorName.indexOf($event)
    if(this.propertiesToShow[this.indexOfSelectedName][3]!='unknown'){
    this.phoneFixedEdit=parseFloat(this.propertiesToShow[this.indexOfSelectedName][3]) 
    }
    if(this.propertiesToShow[this.indexOfSelectedName][5]!='unknown'){
    this.ageFixedEdit=parseFloat(this.propertiesToShow[this.indexOfSelectedName][5])
    }
    if(this.propertiesToShow[this.indexOfSelectedName][7]!='unknown'){
    this.sexFixedEdit=this.propertiesToShow[this.indexOfSelectedName][7]
    }    
  }


  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
  
  }

}
