import { SolicitudesEntidadComponent } from "./solicitudesEntidad.component";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatFormFieldModule,
  MatIconModule
} from "@angular/material";
const routes: Routes = [
  {
    path: "",
    component: SolicitudesEntidadComponent,
  },
];

@NgModule({
  declarations: [SolicitudesEntidadComponent],
  exports: [
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: "",
        component: SolicitudesEntidadComponent,
      },
    ]),
  ],
})
export class SolicitudesEntidadModule {}
