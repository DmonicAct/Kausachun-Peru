import { Component, OnInit } from '@angular/core';
import { TipoPropuestaService } from "../../services/tipoPropuesta.service"

@Component({
  selector: 'quiero-apoyar-component',
  templateUrl: 'quieroApoyar.template.html',
  styleUrls: ['quieroApoyar.template.scss']
})
export class QuieroApoyarComponent implements OnInit {
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

