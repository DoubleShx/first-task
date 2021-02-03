import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {MainPageAuthorizedComponent} from '../main-page-authorized/main-page-authorized.component';
import {InputFormComponent} from '../input-form/input-form.component';
import {CreateTaskComponent} from '../create-task/create-task.component';
import {EditFixedComponent} from '../main-page-authorized/edit-fixed/edit-fixed.component';
import {AdminGuard} from './admin.guard';
import {LoginPageComponent} from '../login-page/login-page.component';


@NgModule({
  declarations: [
    MainPageAuthorizedComponent,
    InputFormComponent,
    CreateTaskComponent,
    EditFixedComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: MainPageAuthorizedComponent, children: [
          {path: '', redirectTo: '/admin', pathMatch: 'full'},
          {path: '', component: InputFormComponent, canActivate: [AdminGuard]},
          {path: 'createtask', component: CreateTaskComponent, canActivate: [AdminGuard]},
          {path: 'login', component: LoginPageComponent}
        ]
      }])
  ],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class AdminModule {
}
