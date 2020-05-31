import { Component, OnInit, ViewChild } from "@angular/core";

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, MatSort } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { CampesinoService } from "src/app/services/campesino.service";
import { solicitudesCampesinos } from "src/app/models/solicitudesCampesinos";

// export interface tableElement {
//   cod: string;
//   name: string;
//   apellido: string;
//   dni: string;
//   tipo: string;
//   provincia: string;
//   estado: string;
// }

// const ELEMENT_DATA: tableElement[] = [
//   {
//     cod: "00001",
//     name: "Persona 1",
//     apellido: "Apellido 1",
//     dni: "111111111",
//     tipo: "Tipo 1",
//     provincia: "Provincia 1",
//     estado: "Pendiente",
//   },
//   {
//     cod: "00002",
//     name: "Persona 2",
//     apellido: "Apellido 2",
//     dni: "222222222",
//     tipo: "Tipo 2",
//     provincia: "Provincia 2",
//     estado: "Aprobado",
//   },
//   {
//     cod: "00003",
//     name: "Persona 3",
//     apellido: "Apellido 3",
//     dni: "333333333",
//     tipo: "Tipo 3",
//     provincia: "Provincia 3",
//     estado: "Aprobado",
//   },
//   {
//     cod: "00004",
//     name: "Persona 4",
//     apellido: "Apellido 4",
//     dni: "444444444",
//     tipo: "Tipo 4",
//     provincia: "Provincia 4",
//     estado: "Rechazado",
//   },
//   {
//     cod: "00005",
//     name: "Persona 5",
//     apellido: "Apellido 5",
//     dni: "555555555",
//     tipo: "Tipo 5",
//     provincia: "Provincia 5",
//     estado: "Rechazado",
//   },
//   {
//     cod: "00006",
//     name: "Persona 6",
//     apellido: "Apellido 6",
//     dni: "666666666",
//     tipo: "Tipo 6",
//     provincia: "Provincia 6",
//     estado: "Pendiente",
//   },
//   {
//     cod: "00007",
//     name: "Persona 7",
//     apellido: "Apellido 7",
//     dni: "777777777",
//     tipo: "Tipo 7",
//     provincia: "Provincia 7",
//     estado: "Aprobado",
//   },
// ];

@Component({
  selector: "adminCampesino-component",
  templateUrl: "adminCampesino.template.html",
  styleUrls: ["adminCampesino.template.scss"],
})
export class adminCampesinoComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public itemsSolCampesinos: Array<solicitudesCampesinos>;
  dataSource: MatTableDataSource<solicitudesCampesinos>;

  displayedColumns: string[] = [
    "id",
    "nombrePersona",
    "apellidoPersona",
    "dniPersona",
    "tipoSolicitud",
    "dptoPersona",
    "estadoSolicitud",
    "detalle",
  ];

  constructor(
    private service: CampesinoService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    iconRegistry.addSvgIcon(
      "thumbs-up",
      sanitizer.bypassSecurityTrustResourceUrl("assets/Admin/buscarIcon.svg")
    );
    this.service.obtenerSolicitudes().subscribe((res: any) => {
      console.log("SOLICITUDES", res.body);
      res.body.map((item) => {
        var soliCampe: solicitudesCampesinos;
        soliCampe.id = item.id;
        soliCampe.detalle = item.detalle;
        soliCampe.comentario = item.comentario;
        soliCampe.fecha = item.fecha;
        soliCampe.idEstado = item.idEstado;
        soliCampe.idTipo = item.idTipo;
        soliCampe.idPersona = item.idPersona;
        soliCampe.nombrePersona = item.persona.nombres;
        soliCampe.apellidoPersona = item.persona.apellidoPersona;
        soliCampe.dniPersona = item.persona.dni;
        soliCampe.tipoSolicitud = item.tipo.nombre;
        soliCampe.dptoPersona = item.persona.provincia.nombre;
        soliCampe.estadoSolicitud = item.estado.nombre;
        console.log("GAAA", soliCampe);
        this.itemsSolCampesinos.push(soliCampe);
      });
    });
    this.dataSource = new MatTableDataSource(this.itemsSolCampesinos);
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
}
