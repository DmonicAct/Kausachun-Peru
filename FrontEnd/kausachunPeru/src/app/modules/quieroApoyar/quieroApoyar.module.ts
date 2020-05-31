import { QuieroApoyarComponent } from './quieroApoyar.component'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

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
    
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuieroApoyarComponent
      }
    ])
  ]
})
export class QuieroApoyarModule {}

