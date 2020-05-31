import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "campesinos-component",
  templateUrl: "campesinos.template.html",
  styleUrls: ["campesinos.template.scss"],
})
export class CampesinosComponent implements OnInit {
  public items = [];
  public tipoSolicitud: String;
  constructor(private route: Router) {}

  ngOnInit() {}

  goToSection(tag) {
    document.getElementById(tag).scrollIntoView({ behavior: "smooth" });
  }

  goToPage(ruta) {
    this.route.navigate([ruta]);
  }
}
