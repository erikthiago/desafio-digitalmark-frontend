import { GenericModel } from './base/generic-model';
import { Hospital } from './hospital';

export class Nurse extends GenericModel {
    cpfNumber: string;
    coren: string;
    birthDate: Date;
    hospitalId: string;
    hospital: Hospital;
}