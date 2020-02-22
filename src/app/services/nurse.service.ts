import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { Nurse } from '../models/nurse';

@Injectable({
    providedIn: 'root'
})
export class NurseService extends BaseService<Nurse> {

    constructor(public http: HttpClient) {
        super(http, 'nurse');
    }
}