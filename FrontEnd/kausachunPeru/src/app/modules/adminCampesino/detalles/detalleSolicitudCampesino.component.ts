import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "detalle-solicitud-campesino-component",
  templateUrl: "detalleSolicitudCampesino.template.html",
  styleUrls: ["detalleSolicitudCampesino.template.scss"],
})
export class DetalleSolicitudCampesinoComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  goToPage(ruta) {
    this.route.navigate([ruta]);
  }
}
