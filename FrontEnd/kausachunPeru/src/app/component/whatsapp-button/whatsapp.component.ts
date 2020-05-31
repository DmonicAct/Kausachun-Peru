import { Component, OnInit } from "@angular/core";

@Component({
  selector: "whatsapp-component",
  templateUrl: "whatsapp.template.html",
  styleUrls: ["whatsapp.template.scss"],
})
export class WhatsAppComponent implements OnInit {
  nombre: string = "";
  apellido: string = "";
  public booleanFooter: Boolean = true;
  ngOnInit() {}
  public onFloatClick() {
    console.log("wspppppp");
  }
}
