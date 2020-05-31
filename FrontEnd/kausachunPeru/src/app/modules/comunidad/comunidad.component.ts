import { Component, OnInit } from "@angular/core";

@Component({
  selector: "comunidad-component",
  templateUrl: "comunidad.template.html",
  styleUrls: ["comunidad.template.scss"],
})
export class ComunidadComponent implements OnInit {
  ngOnInit(): void {
    console.log("INIT COMUNIDAD");
  }
}
