import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospital } from '../models/hospital';
import { BaseService } from './base/base.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HospitalService extends BaseService<Hospital> {

    constructor(public http: HttpClient) {
        super(http, 'hospital');
    }

      /** GET by id. Will 404 if id not found */
      getNurses(id: any): Observable<any[]> {
        return this.http.get<any[]>(`${this.service()}/${this.api}/${id}/nurses`).pipe(
            tap(),
            catchError(this.handleError<any[]>(`base service getEntities`))
        );
    }
}