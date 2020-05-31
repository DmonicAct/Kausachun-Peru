import { Component, OnInit } from '@angular/core';
import { UtilServices } from 'src/app/services/util.services';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: 'header.template.html',
  styleUrls: ['header.template.scss'],
  providers: [UtilServices]
})
export class HeaderComponent implements OnInit {

  public booleanColor:Boolean=true;

  constructor(private router:Router){

  }
  ngOnInit() {
   
  }

}

