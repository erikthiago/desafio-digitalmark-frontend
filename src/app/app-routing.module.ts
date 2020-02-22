import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalsComponent } from './components/hospital/hospitals/hospitals.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import { HospitalAddComponent } from './components/hospital/hospital-add/hospital-add.component';
import { HospitalEditComponent } from './components/hospital/hospital-edit/hospital-edit.component';
import { NurseAddComponent } from './components/nurse/nurse-add/nurse-add.component';
import { NurseDetailsComponent } from './components/nurse/nurse-details/nurse-details.component';
import { NurseEditComponent } from './components/nurse/nurse-edit/nurse-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'hospitals', pathMatch: 'full' },

  { path: 'hospitals', component: HospitalsComponent },
  { path: 'hospital-details/:id', component: HospitalDetailsComponent },
  { path: 'hospital-add', component: HospitalAddComponent },
  { path: 'hospital-edit/:id', component: HospitalEditComponent },

  { path: 'nurse-add/:hospitalid', component: NurseAddComponent },
  { path: 'nurse-details/:id/:hospitalid', component: NurseDetailsComponent },
  { path: 'nurse-edit/:id/:hospitalid', component: NurseEditComponent },

  { path: '**', redirectTo: 'hospitals' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
