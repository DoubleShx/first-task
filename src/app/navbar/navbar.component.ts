import { Component, OnInit } from '@angular/core';
import {AuthService} from '../admin/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showmy = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
