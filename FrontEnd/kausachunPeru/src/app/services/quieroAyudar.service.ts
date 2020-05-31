
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { formCampesino } from '../models/formularioCampesino';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { persona as personaModel } from "../models/persona";
import { formEntidad } from '../models/formularioEntidad';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})

export class QuieroAyudarService {
    private apiEndpoint: string;
    private urlPersona: string;
    private urlEntidad: string;
    private urlAyuda: string;

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(public http: HttpClient) {
        this.apiEndpoint = environment.serviceEndpoint;
        this.urlPersona = this.apiEndpoint + "Persona/add";
        this.urlEntidad = this.apiEndpoint + "Entidad/add";
        this.urlAyuda = this.apiEndpoint + "Entidad/solicitud/add";
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
    guardaEntidad(formulario: formEntidad, idPersona: string) {
        const entidad = {
            //[nombre], [descripcion], [telefono], [correo], [paginaWeb], [logo], [fecha], [idEstado], [idContacto]
            nombre: formulario.entidad,
            descripcion: "-",
            telefono: formulario.telefono,
            correo: formulario.correo,
            paginaWeb: "-",
            logo: "-",
            fecha: formulario.fecha,
            idEstado: "3",
            idContacto: idPersona,
        };
        return this.http.post(this.urlEntidad, entidad).pipe(
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

    guardaFormulario(formulario: formEntidad, idEntidad: string) {
        console.log('IMRIME idENTIDAD',idEntidad);
        const obj = {
            //detalle], [comentario], [fecha], [idEstado], [idTipo], [idEntidad]
            detalle: formulario.detalle,
            fecha: formulario.fecha,
            idEstado: formulario.estado,
            idTipo: formulario.tipoSolicitud,
            idEntidad: idEntidad,
        };
        return this.http.post(this.urlAyuda, obj).pipe(
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

    guardarFormularioAyuda(persona: personaModel, formulario: formEntidad) {
        console.log("FORMULARIO", formulario);

        this.guardarPersona(persona).subscribe((response: any) => {
            console.log("PERSONA ADDED", response);
            formulario.fecha = new Date().toISOString();
            formulario.estado = "1";

            this.guardaEntidad(formulario, response.body.id).subscribe((responseEnt: any) => {
                console.log("ENTIDAD ADDED", responseEnt);

                this.guardaFormulario(formulario, responseEnt.body.id).subscribe(
                    (responseForm: any) => {
                        console.log("FORMULARIO AYUDA ADDED", responseForm, formulario, response);
                        Swal.fire(
                            'Enviado',
                            'Su formulario ha sido enviado satisfactoriamente!',
                            'success'
                        )
                    }
                );
            })
        });
    }
}