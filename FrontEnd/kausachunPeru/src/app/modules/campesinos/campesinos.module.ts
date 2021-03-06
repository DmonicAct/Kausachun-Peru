import { CampesinosComponent } from './campesinos.component'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
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
    
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: CampesinosComponent
      }
    ])
  ]
})
export class CampesinosModule {}

