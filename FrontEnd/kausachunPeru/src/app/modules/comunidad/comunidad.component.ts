import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "comunidad-component",
  templateUrl: "comunidad.template.html",
  styleUrls: ["comunidad.template.scss"],
})
export class ComunidadComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    console.log("INIT COMUNIDAD");
  }

  goToPage(ruta) {
    this.route.navigate([ruta]);
    window.scrollTo(0, 0);
  }
}
