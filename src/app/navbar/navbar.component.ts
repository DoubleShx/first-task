import { Component, OnInit } from '@angular/core';
import {AuthService} from '../admin/auth.service';
import {SearchService} from '../shared/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public searchStr = '';
  showmy = false;

  constructor(public auth: AuthService,
              public search: SearchService) { }

  ngOnInit(): void {
  }

  onChange() {
    this.search.stream$.next(this.searchStr);
  }
}
