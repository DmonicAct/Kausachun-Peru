import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { formCampesino } from "../models/formularioCampesino";
import { persona as personaModel } from "../models/persona";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { usuario } from '../models/usuario';

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private apiEndpoint: string;
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
  private urlUsuario: string;

  constructor(public http: HttpClient) {
    this.apiEndpoint = environment.serviceEndpoint;
    this.urlUsuario = this.apiEndpoint + "Usuario/login";
  }

  login(usuario: usuario) {
    console.log("BODY", JSON.stringify(usuario));
    console.log("URL", this.urlUsuario);
    return this.http.post(this.urlUsuario, usuario).pipe(
      catchError((e) => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
  /*
  logout(formulario: formCampesino, persona: personaModel) {
    console.log("FORMULARIO", formulario);

    const personaAdded = this.guardarPersona(persona).subscribe();

    console.log("PERSONA ADDED", personaAdded);
    // formulario.fecha = new Date().toISOString();
    // formulario.estado = "1";
    // console.log("FORM CAMPESINO", JSON.stringify(formulario));
    // return this.http.post(this.apiEndpoint, JSON.stringify(formulario)).pipe(
    //   catchError((e) => {
    //     if (e.status == 400) {
    //       return throwError(e);
    //     }
    //     if (e.error.mensaje) {
    //       console.error(e.error.mensaje);
    //     }
    //     return throwError(e);
    //   })
    // );
  }*/
}
