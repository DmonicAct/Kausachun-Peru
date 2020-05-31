import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'campesinos-component',
  templateUrl: 'campesinos.template.html',
  styleUrls: ['campesinos.template.scss'],
})
export class CampesinosComponent implements OnInit {
  public items=[];
  public tipoSolicitud:String;
  ngOnInit(): void {
  
  }

}

