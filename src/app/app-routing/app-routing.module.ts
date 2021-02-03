import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {AppComponent} from '../app.component';
import {TasksComponent} from '../tasks/tasks.component';
import {InputFormComponent} from '../admin/input-form/input-form.component';
import {InputFormMainComponent} from '../input-form-main/input-form-main.component';



const routes: Routes = [
  {
    path: '', component: NavbarComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: InputFormMainComponent},
      {path: 'tasks/:mail', component: TasksComponent}
    ]
  },
  {path: 'admin', loadChildren: () => import('../admin/admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
