import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'first-task';
  nameEdit;

  constructor() {
    
   }

  public showModal=false;


  


  // observable = Observable.create((observer) => {
  //   observer.next('Start Processing ...');
  //   setTimeout(()=> observer.next('Still processing ...'), 3000);
  //   setTimeout(()=> observer.complete(), 5000);
  // })

  ngOnInit() {
    // this.observable.subscribe(
    //   data=> console.log(data),
    //   error => console.log(error),
    //   () => console.log('Process completed')
      
    // )
    // console.log('component initialized')
  }
}
