import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./modules/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "campesinos",
    loadChildren: () =>
      import("./modules/campesinos/campesinos.module").then(
        (m) => m.CampesinosModule
      ),
  },
  {
    path: "comunidad",
    loadChildren: () =>
      import("./modules/comunidad/comunidad.module").then(
        (m) => m.ComunidadModule
      ),
  },
  {
    path: "empresas",
    loadChildren: () =>
      import("./modules/empresas/empresas.module").then(
        (m) => m.EmpresasModule
      ),
  },
  {
    path: "quieroAyudar",
    loadChildren: () =>
      import("./modules/quieroApoyar/quieroApoyar.module").then(
        (m) => m.QuieroApoyarModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./modules/adminLogin/adminLogin.module").then(
        (m) => m.adminLoginModule
      ),
  },
  {
    path: "admin/general",
    loadChildren: () =>
      import("./modules/adminGeneral/adminGeneral.module").then(
        (m) => m.adminGeneralModule
      ),
  },
  {
    path: "admin/campesinos",
    loadChildren: () =>
      import("./modules/adminCampesino/adminCampesino.module").then(
        (m) => m.adminCampesinoModule
      ),
  },
  {
    path: "admin/solicitudes_entidad",
    loadChildren: () =>
      import("./modules/adminSolicitudesLista/solicitudesEntidad.module").then(
        (m) => m.SolicitudesEntidadModule
      ),
  },
  {
    path: "admin/solicitudes_entidad/detalle",
    loadChildren: () =>
      import("./modules/adminSolicitudesLista/detalles/detalleSolicitudEntidad.module").then(
        (m) => m.DetalleSolicitudEntidadModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
