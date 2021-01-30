import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MainsideComponent } from './mainside/mainside.component';
import { InputFormMainComponent } from './input-form-main/input-form-main.component';
import { InputFormComponent } from './mainside/input-form/input-form.component';
import {WorkWithLocalStorageService} from './work-with-local-storage.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertiesOfAccordionComponent } from './mainside/input-form/properties-of-accordion/properties-of-accordion.component';
import { EditModalComponent } from './mainside/input-form/edit-modal/edit-modal.component';
import { EditFixedComponent } from './edit-fixed/edit-fixed.component';
import { ApphighlightDirective } from './apphighlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainsideComponent,
    InputFormMainComponent,
    InputFormComponent,
    PropertiesOfAccordionComponent,
    EditModalComponent,
    EditFixedComponent,
    ApphighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WorkWithLocalStorageService, NgbModalConfig, NgbModule ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
