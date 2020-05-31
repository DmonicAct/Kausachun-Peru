
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { formCampesino } from '../models/formularioCampesino';
import { Observable,throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class TipoSolicitudService{
    private apiEndpoint:string;

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
    constructor(public http:HttpClient) {
      this.apiEndpoint = environment.serviceEndpoint;
    }

    obtenerTipoSolicitud():Observable<any>{
        let url = this.apiEndpoint + 'Ayuda/tipo/all';

        return this.http.get(url).pipe(
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