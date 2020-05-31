import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DepartamentoService {
  private apiEndpoint: string;

  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(public http: HttpClient) {
    this.apiEndpoint = environment.serviceEndpoint;
  }

  obtenerDepartamentos(): Observable<any> {
    let url = this.apiEndpoint + "Provincia/all";

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
}
