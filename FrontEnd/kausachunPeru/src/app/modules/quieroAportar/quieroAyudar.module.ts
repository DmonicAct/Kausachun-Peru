import { QuieroAyudarComponent } from './quieroAyudar.component'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: QuieroAyudarComponent
  }
];

@NgModule({
  declarations: [
    QuieroAyudarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class QuieroAyudarModule {}

