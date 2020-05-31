import { adminGeneralComponent } from "./adminGeneral.component";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: adminGeneralComponent,
  },
];

@NgModule({
  declarations: [adminGeneralComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: adminGeneralComponent,
      },
    ]),
  ],
})
export class adminGeneralModule {}
