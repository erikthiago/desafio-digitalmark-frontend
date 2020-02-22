import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HospitalService } from 'src/app/services/hospital.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospital-edit',
  templateUrl: './hospital-edit.component.html'
})
export class HospitalEditComponent implements OnInit {

  form: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  constructor(public service: HospitalService, 
    public router: Router,
    public route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.form = new FormGroup({
        id: new FormControl(),
        fullName: new FormControl(),
        address: new FormControl(),
        cnpjNumber: new FormControl(),
        documentType: new FormControl(2)
      });

      this.service.getById(this.id).subscribe(result => {
        this.form.patchValue(result)
        console.log(result)
      });
    }
  
    onSubmit() {
      this.service.update(this.form.value).subscribe(result => {
        this.router.navigate(["/hospitals"]);
      },
      (err) =>{
        console.log(err)
      });
    }

}
