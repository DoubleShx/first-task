import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../admin/auth.service';
import {LoginButtonComponent} from '../navbar/login-button/login-button.component';
import {WorkWithLocalStorageService} from '../work-with-local-storage.service';
import {RouterModule} from '@angular/router';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [LoginButtonComponent, SearchPipe],
    imports: [
        CommonModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
  providers: [AuthService],
  exports: [
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    LoginButtonComponent,
    SearchPipe
  ]
})
export class SharedModule { }
