import { Component, OnInit } from '@angular/core';
import { Nurse } from 'src/app/models/nurse';
import { NurseService } from 'src/app/services/nurse.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nurse-details',
  templateUrl: './nurse-details.component.html'
})
export class NurseDetailsComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');
  hospitalid = this.route.snapshot.paramMap.get('hospitalid');
  nurse = new Nurse();

  constructor(public service: NurseService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.service.getById(this.id).subscribe(result => {
      this.nurse = result;
    });
  }

  deleteItem() {
    this.service.delete(this.nurse).subscribe(() => {
      this.router.navigate(["/hospital-details/" + this.hospitalid]);
    },
    (err) =>{
      console.log(err)
    });
  }

}
