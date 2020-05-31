import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { formCampesino } from 'src/app/models/formularioCampesino';
import { CampesinoService } from 'src/app/services/campesino.service';
import { TipoSolicitudService } from 'src/app/services/tipoSolicitud.service';
import { tipoSolicitud } from 'src/app/models/tipoSolicitud';

@Component({
  selector: "campesinos-component",
  templateUrl: "campesinos.template.html",
  styleUrls: ["campesinos.template.scss"],
  providers:[CampesinoService,TipoSolicitudService]
})
export class CampesinosComponent implements OnInit {
  public items = [];
  public tipoSolicitud: String;
  public formulario:formCampesino;
  public itemsTipoSolicitud:Array<tipoSolicitud>;
  public selectedItem:tipoSolicitud;
  constructor(private route: Router,
    private service:CampesinoService,
    private serviceTipo:TipoSolicitudService) {
    this.itemsTipoSolicitud = new Array<tipoSolicitud>();
    this.formulario = new formCampesino();
  }

  ngOnInit() {
    this.serviceTipo.obtenerTipoSolicitud().subscribe(
      (res:any)=>{
        this.itemsTipoSolicitud = res.body;
      }
    )
  }

  goToSection(tag) {
    document.getElementById(tag).scrollIntoView({ behavior: "smooth" });
  }

  goToPage(ruta) {
    this.route.navigate([ruta]);
  }
  OnGuardar(){
    //Validar Datos
    this.formulario.tipoSolicitud = this.selectedItem.toString();
    this.service.guardarFormularioCampesino(this.formulario);
  }
}
