import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { formEntidad } from 'src/app/models/formularioEntidad';
import { tipoPropuesta } from 'src/app/models/tipoPropuesta';
import { QuieroAyudarService } from 'src/app/services/quieroAyudar.service';
import { TipoPropuestaService } from 'src/app/services/tipoPropuesta.service';
import { Component, OnInit } from '@angular/core';
import { TipoPropuestaService } from "../../services/tipoPropuesta.service"

@Component({
  selector: "quiero-apoyar-component",
  templateUrl: "quieroApoyar.template.html",
  styleUrls: ["quieroApoyar.template.scss"],
})
export class QuieroApoyarComponent implements OnInit {
  public formulario:formEntidad;
  public itemsTipoPropuesta:Array<tipoPropuesta>;
  public itemTipo:String;
  constructor(private route: Router,
    private service:QuieroAyudarService,
    private serviceTipo:TipoPropuestaService) {
      this.formulario = new formEntidad();
      this.itemsTipoPropuesta = new Array<tipoPropuesta>();
    }
  
  ngOnInit() {
    this.serviceTipo.obtenerTipoPropuesta().subscribe(
      (res:any)=>{
        console.log(res);
        this.itemsTipoPropuesta = res.body;
      }
    )
  }

  guardarFormulario(){
    this.formulario.tipoSolicitud = this.itemTipo;
    this.service.guardarFormularioAyuda(this.formulario);
  }
  goToPage(ruta) {
    this.route.navigate([ruta]);
  constructor(
    private serviceTipoPropuesta: TipoPropuestaService,
  ) { }

  ngOnInit(): void {
    console.log('QUIERO APOYAR')
    this.obtenerListaTipoPropuesta();
  }

  obtenerListaTipoPropuesta() {
    this.serviceTipoPropuesta.obtenerTiposPropuesta().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }
  }
}
