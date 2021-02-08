import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {SearchService} from '../../shared/search.service';
import {MessageService} from '../message.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page-authorized',
  templateUrl: './main-page-authorized.component.html',
  styleUrls: ['./main-page-authorized.component.scss']
})
export class MainPageAuthorizedComponent implements OnInit, OnDestroy {
  public searchStr = '';
  public message = '';
  public isVisible = false;
  public subMessage: Subscription;

  constructor(public auth: AuthService, public search1: SearchService,
              public messageService: MessageService,
              public router: Router) {
  }

  visible(val) {
    this.isVisible = !this.isVisible;
    console.log(val);
  }

  ngOnInit(): void {
    this.messageService.streamMessage$.subscribe(value => {
      this.message = value;
      this.isVisible = true;
      setTimeout(() => { this.isVisible = false; }, 3000);
    });
  }

  onchange() {
    this.search1.stream$.next(this.searchStr);

  }

  ngOnDestroy() {
    if (this.subMessage) {
      this.subMessage.unsubscribe();
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
