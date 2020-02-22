import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './helpers/material-components.module';
import { HospitalsComponent } from './components/hospital/hospitals/hospitals.component';
import { HttpClientModule } from '@angular/common/http';
import { SideNavBarComponent } from './components/common/side-nav-bar/side-nav-bar.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import { HospitalAddComponent } from './components/hospital/hospital-add/hospital-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HospitalEditComponent } from './components/hospital/hospital-edit/hospital-edit.component';
import { NursesComponent } from './components/nurse/nurses/nurses.component';
import { NurseAddComponent } from './components/nurse/nurse-add/nurse-add.component';
import { NurseDetailsComponent } from './components/nurse/nurse-details/nurse-details.component';
import { NurseEditComponent } from './components/nurse/nurse-edit/nurse-edit.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    HospitalsComponent,
    SideNavBarComponent,
    HospitalDetailsComponent,
    HospitalAddComponent,
    HospitalEditComponent,
    NursesComponent,
    NurseAddComponent,
    NurseDetailsComponent,
    NurseEditComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options)  ,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
