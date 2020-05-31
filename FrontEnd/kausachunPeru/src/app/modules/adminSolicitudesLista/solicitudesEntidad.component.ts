import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
export interface tableElement {
  cod: string;
  name: string;
  tipo: string;
  contacto: string;
  estado: string;
}
const ELEMENT_DATA: tableElement[] = [
  {
    cod: "00001",
    name: "Entidad 1",
    tipo: "Tipo 1",
    contacto: "111111111",
    estado: "Pendiente"
    
  },
  {
    cod: "00002",
    name: "Entidad 2",
    tipo: "Tipo 2",
    contacto: "222222222",
    estado: "Aprobado"
    
  },
  {
    cod: "00003",
    name: "Entidad 3",
    tipo: "Tipo 3",
    contacto: "333333333",
    estado: "Aprobado"
    
  },
  {
    cod: "00004",
    name: "Entidad 4",
    tipo: "Tipo 4",
    contacto: "444444444",
    estado: "Rechazado"
    
  },
  {
    cod: "00005",
    name: "Entidad 5",
    tipo: "Tipo 5",
    contacto: "555555555",
    estado: "Rechazado"
    
  },
  {
    cod: "00006",
    name: "Entidad 6",
    tipo: "Tipo 6",
    contacto: "666666666",
    estado: "Pendiente"
  },
  {
    cod: "00007",
    name: "Entidad 7",
    tipo: "Tipo 7",
    contacto: "777777777",
    estado: "Aprobado"
    
  },
];

@Component({
  selector: "solicitudes-entidad-component",
  templateUrl: "solicitudesEntidad.template.html",
  styleUrls: ["solicitudesEntidad.template.scss"],
})


export class SolicitudesEntidadComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<tableElement>;
  selectedRowIndex:number=-1;
  displayedColumns: string[] = [
    "cod",
    "name",
    "tipo",
    "contacto",
    "estado",
    "details"
  ];

  constructor(private router:Router) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
  }

  highlight(row){
    this.selectedRowIndex = row.id;
  }

 /*  redirectToDetails(id){
    debugger;
 
  } */
  public redirectToDetails = (id) => {
    console.log(id);
    try{
      this.router.navigate['/home'];
    }catch(e){
      console.log(e);
    }
    
  }
 
}
