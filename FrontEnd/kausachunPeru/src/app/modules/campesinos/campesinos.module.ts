import { CampesinosComponent } from './campesinos.component'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CampesinosComponent
  }
];

@NgModule({
  declarations: [
    CampesinosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CampesinosModule {}

