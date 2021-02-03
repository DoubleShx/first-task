import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {InputFormMainComponent} from './input-form-main/input-form-main.component';
import {PropertiesOfAccordionComponent} from './admin/input-form/properties-of-accordion/properties-of-accordion.component';
import {EditModalComponent} from './admin/input-form/edit-modal/edit-modal.component';
import {TasksComponent} from './tasks/tasks.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './shared/auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}


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
  providers: [
    NgbModalConfig,
    NgbModule,
    INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]

})
export class AppModule {
}
