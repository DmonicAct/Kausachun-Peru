import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: 'footer.template.html',
  styleUrls: ['footer.template.scss']
})
export class FooterComponent implements OnInit {

  nombre:string = "";
  apellido:string = "";
  ngOnInit() {
   this.nombre="GG";
   this.apellido="GG x2";
  }

}

