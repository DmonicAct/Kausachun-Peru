import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "quiero-apoyar-component",
  templateUrl: "quieroApoyar.template.html",
  styleUrls: ["quieroApoyar.template.scss"],
})
export class QuieroApoyarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  goToPage(ruta) {
    this.route.navigate([ruta]);
  }
}
