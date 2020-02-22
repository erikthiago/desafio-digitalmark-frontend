import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NurseService } from 'src/app/services/nurse.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nurse-edit',
  templateUrl: './nurse-edit.component.html',
  providers: [DatePipe]
})
export class NurseEditComponent implements OnInit {

  form: FormGroup;
  hospitalid = this.route.snapshot.paramMap.get('hospitalid');
  id = this.route.snapshot.paramMap.get('id');

  constructor(public service: NurseService, 
    public router: Router,
    public datepipe: DatePipe,
    public route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      fullName: new FormControl(),
      coren: new FormControl(),
      cpfNumber: new FormControl(),
      birthDate: new FormControl(),
      documentType: new FormControl(1),
      hospitalId: new FormControl(this.hospitalid)
    });

    this.service.getById(this.id).subscribe(result =>{
      this.form.patchValue(result);
    })
  }

  onSubmit() {
    debugger
    var dateFormatted: any;

    if(this.form.controls['birthDate'].value){
      dateFormatted = this.datepipe.transform(this.form.controls['birthDate'].value, 'MM/dd/yyyy hh:mm');
      this.form.controls['birthDate'].setValue(new Date(dateFormatted));
    }

    this.service.update(this.form.value).subscribe(result => {
      this.router.navigate(["/hospital-details/" + this.hospitalid]);
    },
    (err) =>{
      console.log(err)
    });
  }
}