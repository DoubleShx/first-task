import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {LoginButtonComponent} from '../navbar/login-button/login-button.component';
import {WorkWithLocalStorageService} from './work-with-local-storage.service';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LoginButtonComponent],
    imports: [
        HttpClientModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
  providers: [],
  exports: [
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    LoginButtonComponent,

  ]
})
export class SharedModule { }