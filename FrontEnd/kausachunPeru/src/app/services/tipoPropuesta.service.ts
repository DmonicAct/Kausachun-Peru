
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { formCampesino } from '../models/formularioCampesino';
import { Observable,throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable,throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';
//import { Categoria } from '../models';

@Injectable({
    providedIn: 'root',
})

export class TipoPropuestaService{
    private apiEndpoint:string;

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
    constructor(public http:HttpClient) {
      this.apiEndpoint = environment.serviceEndpoint;
    }

    obtenerTipoPropuesta():Observable<any>{
        let url = this.apiEndpoint + 'Propuesta/tipo/all';

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
    private apiEndpoint: string;
    private config_name: string
    private config_password: string;

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
    constructor(public http: HttpClient) {
      this.apiEndpoint = 'https://kausachunperubackend.azurewebsites.net/api/Propuesta/tipo/all';
    }

    obtenerTiposPropuesta():Observable<any> {
      return this.http.get(this.apiEndpoint).pipe(
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