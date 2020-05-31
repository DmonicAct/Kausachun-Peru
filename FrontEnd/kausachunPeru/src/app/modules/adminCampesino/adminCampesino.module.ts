import { adminCampesinoComponent } from "./adminCampesino.component";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatFormFieldModule,
} from "@angular/material";

const routes: Routes = [
  {
    path: "",
    component: adminCampesinoComponent,
  },
];

@NgModule({
  declarations: [adminCampesinoComponent],
  exports: [
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatFormFieldModule,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatFormFieldModule,
    RouterModule.forChild([
      {
        path: "",
        component: adminCampesinoComponent,
      },
    ]),
  ],
})
export class adminCampesinoModule {}
