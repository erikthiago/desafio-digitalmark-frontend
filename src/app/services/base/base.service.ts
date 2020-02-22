import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GenericModel } from 'src/app/models/base/generic-model';

export class BaseService<T extends GenericModel> {
    constructor(public http: HttpClient, public api) {
    }

    /** GET by id. Will 404 if id not found */
    getEntities(): Observable<T[]> {
        return this.http.get<T[]>(`${this.service()}/${this.api}`).pipe(
            tap(),
            catchError(this.handleError<T[]>(`base service getEntities`))
        );
    }

    /** GET by id. Will 404 if id not found */
    getById(id: string): Observable<T> {
        return this.http.get<T>(`${this.service()}/${this.api}/${id}`).pipe(
            tap(),
            catchError(this.handleError<T>(`base service getById id=${id}`))
        );
    }

    /** POST: add a new model to the server */
    add(model: T): Observable<T> {
        const url = `${this.service()}/${this.api}`;
        return this.http.post<T>(url, model)
            .pipe(tap(), catchError(this.handleError<any>('base service add')));
    }

    /** PUT: update the model on the server */
    update(model: T): Observable<T> {
        const url = `${this.service()}/${this.api}/${model.id}`;
        return this.http.put(url, model).pipe(
            tap(),
            catchError(this.handleError<any>('base service update'))
        );
    }

    /** DELETE: delete the model from the server */
    delete(model: T): Observable<T> {
        const url = `${this.service()}/${this.api}/${model.id}`;
        return this.http.delete(url).pipe(
            tap(),
            catchError(this.handleError<any>('base service delete'))
        );
    }

    protected log(message: string) {
        message = message;
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    protected handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    service(): string {
        // A regra aqui é: se terminar com / a rotina retira essa barra
        var url = environment.api.endsWith("/") ?
            environment.api.substring(0, environment.api.length - 1) : environment.api;

        return url;
    }
}