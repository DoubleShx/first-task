import { Component, Input, OnInit } from '@angular/core';
import {WorkWithLocalStorageService} from './../../../work-with-local-storage.service'

@Component({
  selector: 'app-properties-of-accordion',
  templateUrl: './properties-of-accordion.component.html',
  styleUrls: ['./properties-of-accordion.component.scss']
})
export class PropertiesOfAccordionComponent implements OnInit {
  @Input() index;
public Properties;
  constructor(WorkWithLocalStorageService:WorkWithLocalStorageService) { 
    this.Properties=WorkWithLocalStorageService.getproperties();
  }

  ngOnInit(): void {
  }

}
