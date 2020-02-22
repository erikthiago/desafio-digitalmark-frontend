import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { MatTableDataSource } from '@angular/material/table';
import { Hospital } from 'src/app/models/hospital';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html'
})
export class HospitalsComponent implements OnInit, AfterViewInit {
 
  dataSource = new MatTableDataSource<Hospital>();
  displayedColumns: string[] = ['hospitalName'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public service: HospitalService) { }

  ngOnInit(): void {
    this.service.getEntities().subscribe(result => {
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }
}
