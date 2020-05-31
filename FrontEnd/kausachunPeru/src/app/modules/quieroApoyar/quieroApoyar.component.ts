import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { formEntidad } from 'src/app/models/formularioEntidad';
import { tipoPropuesta } from 'src/app/models/tipoPropuesta';
import { QuieroAyudarService } from 'src/app/services/quieroAyudar.service';
import { TipoPropuestaService } from 'src/app/services/tipoPropuesta.service';
import { persona as personaModel } from "src/app/models/persona";

@Component({
  selector: "quiero-apoyar-component",
  templateUrl: "quieroApoyar.template.html",
  styleUrls: ["quieroApoyar.template.scss"],
})
export class QuieroApoyarComponent implements OnInit {
  public formulario: formEntidad;
  public itemsTipoPropuesta: Array<tipoPropuesta>;
  public itemTipo: String;
  public persona: personaModel;

  constructor(private route: Router,
    private service: QuieroAyudarService,
    private serviceTipo: TipoPropuestaService
  ) {
    this.formulario = new formEntidad();
    this.persona = new personaModel();
    this.itemsTipoPropuesta = new Array<tipoPropuesta>();
  }

  ngOnInit() {
    this.serviceTipo.obtenerTipoPropuesta().subscribe((res: any) => {
      console.log(res);
      this.itemsTipoPropuesta = res.body;
    });
  }

  guardarFormulario() {
    this.formulario.tipoSolicitud = this.itemTipo.toString();
    this.persona.nombres = this.formulario.nombres;
    this.persona.apellidos = this.formulario.apellidos;
    this.persona.telefono = this.formulario.telefono;
    this.persona.correo = this.formulario.correo;
    this.persona.cargo = this.formulario.cargo;
    this.persona.dni="";
    this.persona.idProvincia="";
    this.persona.idTipo="2";
    //Route::post('solicitud/add', 'Api\SolicitudEntidaController@add');
    //Route::post('add', 'Api\EntidadController@add');
    this.service.guardarFormularioAyuda(this.persona,this.formulario);
  }

  goToPage(ruta) {
    this.route.navigate([ruta]);
    window.scrollTo(0, 0);
  }
}
