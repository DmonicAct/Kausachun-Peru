import { EmpresasComponent } from './empresas.component'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: EmpresasComponent
  }
];

@NgModule({
  declarations: [
    EmpresasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EmpresasModule {}

