import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {InputFormMainComponent} from './input-form-main/input-form-main.component';
import {PropertiesOfAccordionComponent} from './admin/input-form/properties-of-accordion/properties-of-accordion.component';
import {EditModalComponent} from './admin/input-form/edit-modal/edit-modal.component';
import {TasksComponent} from './tasks/tasks.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputFormMainComponent,
    PropertiesOfAccordionComponent,
    EditModalComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [NgbModalConfig, NgbModule],
  bootstrap: [AppComponent]

})
export class AppModule {
}
