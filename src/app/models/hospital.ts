import { GenericModel } from './base/generic-model';
import { Nurse } from './nurse';

export class Hospital extends GenericModel {
    address: string;
    cnpjNumber: string;
    nurses: Nurse[] = [];
}