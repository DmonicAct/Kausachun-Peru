import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "home-component",
  templateUrl: "home.template.html",
  styleUrls: ["home.template.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  goToPage(ruta) {
    this.route.navigate([ruta]);
    window.scrollTo(0, 0);
  }
}
