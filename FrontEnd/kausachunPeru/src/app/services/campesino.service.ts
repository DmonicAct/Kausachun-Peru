
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { formCampesino } from '../models/formularioCampesino';
import { Observable,throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class CampesinoService{
    private apiEndpoint:string;

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
    constructor(public http:HttpClient) {
      this.apiEndpoint = environment.serviceEndpoint;
    }

    guardarFormularioCampesino(formulario:formCampesino){
        let url = this.apiEndpoint + 'Campesino/solicitud/add';
        formulario.fecha = (new Date()).toISOString();
        formulario.estado = '1';
        return this.http.post(this.apiEndpoint,JSON.stringify(formulario)).pipe(
            catchError(e => {
                if (e.status == 400) {
                return throwError(e);
                }
                if (e.error.mensaje) {
                console.error(e.error.mensaje);
                }
                return throwError(e);
            }));
    }
}