import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './component/header/header.module'
import { FooterModule } from './component/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { SidebarModule } from './component/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    FooterModule,
    SidebarModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
