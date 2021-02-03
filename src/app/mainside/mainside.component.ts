import { Component, OnInit } from '@angular/core';
import {WorkWithLocalStorageService} from './../work-with-local-storage.service'

@Component({
  selector: 'app-mainside',
  templateUrl: './mainside.component.html',
  styleUrls: ['./mainside.component.scss']
})
export class MainsideComponent implements OnInit {
  // private LocalStorageService;
  // public renderLocalStorageName:any = [];
  // public renderLocalStorage;
  
  // keysLocal
    constructor(WorkWithLocalStorageService:WorkWithLocalStorageService) { 
    // this.LocalStorageService=WorkWithLocalStorageService;
    // this.renderLocalStorage=this.LocalStorageService.getState();

    // this.keysLocal=this.LocalStorageService.State1;

    // for (let key in this.renderLocalStorage) {
    //   this.renderLocalStorageName.push(key)
    // }
    }
  ngOnInit(): void {
    // for(let key of (this.renderLocalStorage))
    // console.log(localStorage.getItem(key))

  
  }

}
