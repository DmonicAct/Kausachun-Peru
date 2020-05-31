import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "detalle-solicitud-entidad-component",
  templateUrl: "detalleSolicitudEntidad.template.html",
  styleUrls: ["detalleSolicitudEntidad.template.scss"],
})
export class DetalleSolicitudEntidadComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  goToPage(ruta) {
    this.route.navigate([ruta]);
  }
}
