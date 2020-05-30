import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'campesinos', loadChildren: () => import('./modules/campesinos/campesinos.module').then(m => m.CampesinosModule) },
  { path: 'empresas', loadChildren: () => import('./modules/empresas/empresas.module').then(m => m.EmpresasModule) },
  { path: 'quieroAyudar', loadChildren: () => import('./modules/quieroApoyar/quieroApoyar.module').then(m => m.QuieroApoyarModule) },
  { path: 'quieroApoyar', loadChildren: () => import('./modules/quieroAportar/quieroAyudar.module').then(m => m.QuieroAyudarModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
