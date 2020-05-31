import { adminLoginComponent } from "./adminLogin.component";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: adminLoginComponent
  }
];

@NgModule({
  declarations: [adminLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: adminLoginComponent
      }
    ])
  ]
})
export class adminLoginModule {}
