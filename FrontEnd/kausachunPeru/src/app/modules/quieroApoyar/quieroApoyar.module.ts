import { QuieroApoyarComponent } from './quieroApoyar.component'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: QuieroApoyarComponent
  }
];

@NgModule({
  declarations: [
    QuieroApoyarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuieroApoyarComponent
      }
    ])
  ]
})
export class QuieroApoyarModule {}

