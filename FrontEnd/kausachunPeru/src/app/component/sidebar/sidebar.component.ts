import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-component',
  templateUrl: 'sidebar.template.html',
  styleUrls: ['sidebar.template.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router){

  }
  ngOnInit() {
  }
  cerrarSesion(){
    this.router.navigate['home'];
  }
}

