import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
export interface tableElement {
  cod: string;
  name: string;
  apellido: string;
  dni: string;
  tipo: string;
}

const ELEMENT_DATA: tableElement[] = [
  {
    cod: "00001",
    name: "Entidad 1",
    apellido: "Tipo 1",
    dni: "111111111",
    tipo: "Pendiente"
    
  },
  {
    cod: "00002",
    name: "Entidad 2",
    apellido: "Tipo 2",
    dni: "222222222",
    tipo: "Aprobado"
    
  },
  {
    cod: "00003",
    name: "Entidad 3",
    apellido: "Tipo 3",
    dni: "333333333",
    tipo: "Aprobado"
    
  },
  {
    cod: "00004",
    name: "Entidad 4",
    apellido: "Tipo 4",
    dni: "444444444",
    tipo: "Rechazado"
    
  },
  {
    cod: "00005",
    name: "Entidad 5",
    apellido: "Tipo 5",
    dni: "555555555",
    tipo: "Rechazado"
    
  },
  {
    cod: "00006",
    name: "Entidad 6",
    apellido: "Tipo 6",
    dni: "666666666",
    tipo: "Pendiente"
  },
  {
    cod: "00007",
    name: "Entidad 7",
    apellido: "Tipo 7",
    dni: "777777777",
    tipo: "Aprobado"
    
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
    "apellido",
    "dni",
    "tipo",
    'details'
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

  redirectToDetails(id:number){
    console.log(id);
    this.router.navigate['/home']
  }
}
