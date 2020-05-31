import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { formCampesino } from "../models/formularioCampesino";
import { persona as personaModel } from "../models/persona";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CampesinoService {
  private apiEndpoint: string;
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
  private urlCampesino: string;
  private urlPersona: string;

  constructor(public http: HttpClient) {
    this.apiEndpoint = environment.serviceEndpoint;
    this.urlCampesino = this.apiEndpoint + "Campesino/solicitud/add";
    this.urlPersona = this.apiEndpoint + "Persona/add";
  }

  guardarPersona(body: String) {
    console.log("BODY", body);
    console.log("URL", this.urlPersona);
    return this.http.post(this.urlPersona, body).pipe(
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
    // .subscribe({
    //   next: (data) => {
    //     console.log("PERSONA ADDED", data);
    //   },
    //   error: (error) => {
    //     console.log("PERSONA ERROR", error);
    //   },
    // });
  }

  guardarFormularioCampesino(formulario: formCampesino, persona: personaModel) {
    console.log("FORMULARIO", formulario);

    const personaAdded = this.guardarPersona(
      JSON.stringify(persona)
    ).subscribe();

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
  }
}
