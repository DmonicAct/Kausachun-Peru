import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { formCampesino } from "src/app/models/formularioCampesino";
import { CampesinoService } from "src/app/services/campesino.service";
import { TipoSolicitudService } from "src/app/services/tipoSolicitud.service";
import { DepartamentoService } from "src/app/services/departamento.service";
import { tipoSolicitud } from "src/app/models/tipoSolicitud";
import { departamento } from "src/app/models/departamento";
import { persona as personaModel } from "src/app/models/persona";

@Component({
  selector: "campesinos-component",
  templateUrl: "campesinos.template.html",
  styleUrls: ["campesinos.template.scss"],
  providers: [CampesinoService, TipoSolicitudService],
})
export class CampesinosComponent implements OnInit {
  public items = [];
  public tipoSolicitud: String;
  public formulario: formCampesino;
  public persona: personaModel;
  public itemsTipoSolicitud: Array<tipoSolicitud>;
  public itemsDepartamentos: Array<departamento>;
  public selectedItem: tipoSolicitud;
  public selectedDpto: departamento;

  constructor(
    private route: Router,
    private service: CampesinoService,
    private serviceTipo: TipoSolicitudService,
    private serviceDpto: DepartamentoService
  ) {
    this.itemsTipoSolicitud = new Array<tipoSolicitud>();
    this.itemsDepartamentos = new Array<departamento>();

    this.formulario = new formCampesino();
    this.persona = new personaModel();
  }

  ngOnInit() {
    this.serviceTipo.obtenerTipoSolicitud().subscribe((res: any) => {
      this.itemsTipoSolicitud = res.body;
    });
    this.serviceDpto.obtenerDepartamentos().subscribe((res: any) => {
      this.itemsDepartamentos = res.body;
      // console.log(res.body);
    });
  }

  goToSection(tag) {
    document.getElementById(tag).scrollIntoView({ behavior: "smooth" });
  }

  goToPage(ruta) {
    this.route.navigate([ruta]);
  }
  OnGuardar() {
    //Validar Datos
    this.formulario.tipoSolicitud = this.selectedItem.toString();
    this.formulario.provincia = this.selectedDpto.toString();
    this.persona.nombres = this.formulario.nombres;
    this.persona.apellidos = this.formulario.apellidos;
    this.persona.dni = this.formulario.dni;
    this.persona.telefono = this.formulario.telefono;
    this.persona.correo = this.formulario.correo;
    this.persona.cargo = "";
    this.persona.idTipo = "1";
    this.persona.idProvincia = this.formulario.provincia;
    this.service.guardarFormularioCampesino(this.formulario, this.persona);
  }
}
