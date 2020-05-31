
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { formCampesino } from '../models/formularioCampesino';
import { Observable,throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { formEntidad } from '../models/formularioEntidad';

@Injectable({
    providedIn: 'root',
})

export class QuieroAyudarService{
    private apiEndpoint:string;

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
    constructor(public http:HttpClient) {
      this.apiEndpoint = environment.serviceEndpoint;
    }

    guardarFormularioAyuda(formulario:formEntidad){
        let url = this.apiEndpoint + 'Entidad/solicitud/add';
        formulario.fecha = (new Date()).toISOString();
        formulario.estado = '1';
        console.log(JSON.stringify(formulario));
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