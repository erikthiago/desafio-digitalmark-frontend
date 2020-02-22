import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HospitalService } from 'src/app/services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-add',
  templateUrl: './hospital-add.component.html'
})
export class HospitalAddComponent implements OnInit {

  form: FormGroup;

  constructor(public service: HospitalService, 
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      fullName: new FormControl(),
      address: new FormControl(),
      CNPJNumber: new FormControl(),
      documentType: new FormControl(2)
    });
  }

  onSubmit() {
    this.service.add(this.form.value).subscribe(result => {
      this.router.navigate(["/hospitals"]);
    },
    (err) =>{
      console.log(err)
    });
  }
}
