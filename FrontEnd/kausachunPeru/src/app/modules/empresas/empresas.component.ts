import { Component, OnInit } from "@angular/core";

@Component({
  selector: "empresas-component",
  templateUrl: "empresas.template.html",
  styleUrls: ["empresas.template.scss"],
})
export class EmpresasComponent implements OnInit {
  ngOnInit(): void {
    console.log("INIT EMRPESAS");
  }

  goToSection(tag) {
    document.getElementById(tag).scrollIntoView({ behavior: "smooth" });
  }
}
