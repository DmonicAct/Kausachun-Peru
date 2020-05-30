import { ComunidadComponent } from './comunidad.component'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ComunidadComponent
  }
];

@NgModule({
  declarations: [
    ComunidadComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComunidadModule {}

