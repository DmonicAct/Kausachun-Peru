import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "empresas-component",
  templateUrl: "empresas.template.html",
  styleUrls: ["empresas.template.scss"],
})
export class EmpresasComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    console.log("INIT EMRPESAS");
  }

  goToSection(tag) {
    document.getElementById(tag).scrollIntoView({ behavior: "smooth" });
  }

  goToPage(ruta) {
    this.route.navigate([ruta]);
    window.scrollTo(0, 0);
  }
}
