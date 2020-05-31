import { SolicitudesEntidadComponent } from "./solicitudesEntidad.component";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: SolicitudesEntidadComponent,
  },
];

@NgModule({
  declarations: [SolicitudesEntidadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: SolicitudesEntidadComponent,
      },
    ]),
  ],
})
export class SolicitudesEntidadModule {}
