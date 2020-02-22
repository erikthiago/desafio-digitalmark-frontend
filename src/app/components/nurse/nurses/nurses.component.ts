import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { NurseService } from 'src/app/services/nurse.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Nurse } from 'src/app/models/nurse';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html'
})
export class NursesComponent implements OnInit, AfterViewInit {
 
  displayedColumns: string[] = ['nurseName'];

  @Input() dataSource = new MatTableDataSource<Nurse>();
  @Input() hospitalId: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public service: NurseService) { }

  ngOnInit(): void {
    this.service.getEntities().subscribe(result => {
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }
}

