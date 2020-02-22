import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/models/hospital';
import { MatTableDataSource } from '@angular/material/table';
import { Nurse } from 'src/app/models/nurse';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html'
})
export class HospitalDetailsComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');
  hospital = new Hospital();
  dataSource = new MatTableDataSource<Nurse>();

  constructor(public service: HospitalService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.service.getById(this.id).subscribe(result => {
      this.hospital = result;
    });

    this.service.getNurses(this.id).subscribe(result => {
      this.dataSource.data = result;
    })
  }

  deleteItem() {
    this.service.delete(this.hospital).subscribe(() => {
      this.router.navigate(["/hospitals"]);
    },
    (err) =>{
      console.log(err)
    });
  }

}
