import { Component, OnInit } from '@angular/core';
import { NurseService } from 'src/app/services/nurse.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nurse-add',
  templateUrl: './nurse-add.component.html',
  providers: [DatePipe]
})
export class NurseAddComponent implements OnInit {

  form: FormGroup;
  id = this.route.snapshot.paramMap.get('hospitalid');

  constructor(public service: NurseService, 
    public router: Router,
    public datepipe: DatePipe,
    public route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      fullName: new FormControl(),
      coren: new FormControl(),
      cpfNumber: new FormControl(),
      birthDate: new FormControl(),
      documentType: new FormControl(1),
      hospitalId: new FormControl(this.id)
    });
  }

  onSubmit() {
    debugger
    var dateFormatted: any;

    if(this.form.controls['birthDate'].value){
      dateFormatted = this.datepipe.transform(this.form.controls['birthDate'].value, 'MM/dd/yyyy hh:mm');
      this.form.controls['birthDate'].setValue(new Date(dateFormatted));
    }

    this.service.add(this.form.value).subscribe(result => {
      this.router.navigate(["/hospital-details/" + this.id]);
    },
    (err) =>{
      console.log(err)
    });
  }
}