import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-main-page-authorized',
  templateUrl: './main-page-authorized.component.html',
  styleUrls: ['./main-page-authorized.component.scss']
})
export class MainPageAuthorizedComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
