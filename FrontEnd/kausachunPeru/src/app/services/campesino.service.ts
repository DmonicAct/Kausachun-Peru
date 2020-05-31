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

  obtenerDatosPersonaId(id: string): Observable<any> {
    let url = this.apiEndpoint + "Persona/" + id;

    return this.http.get(url).pipe(
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

  obtenerSolicitudes(): Observable<any> {
    let url = this.apiEndpoint + "Campesino/solicitudes";

    return this.http.get(url).pipe(
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

  guardarPersona(persona: personaModel) {
    console.log("BODY", JSON.stringify(persona));
    console.log("URL", this.urlPersona);
    return this.http.post(this.urlPersona, persona).pipe(
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

  guardaFormulario(formulario: formCampesino, idPersona: string) {
    const obj = {
      detalle: formulario.detalle,
      comentario: "",
      fecha: formulario.fecha,
      idEstado: formulario.estado,
      idTipo: formulario.tipoSolicitud,
      idPersona: idPersona,
    };
    return this.http.post(this.urlCampesino, obj).pipe(
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

  guardarFormularioCampesino(formulario: formCampesino, persona: personaModel) {
    console.log("FORMULARIO", formulario);

    this.guardarPersona(persona).subscribe((response: any) => {
      console.log("PERSONA ADDED", response);
      formulario.fecha = new Date().toISOString();
      formulario.estado = "3";
      this.guardaFormulario(formulario, response.body.id).subscribe(
        (responseForm: any) => {
          console.log("FORMULARIO ADDED", responseForm, formulario, response);
        }
      );
    });
  }
}
