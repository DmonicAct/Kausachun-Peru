import { WhatsAppComponent } from './whatsapp.component'
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    WhatsAppComponent
  ],
  exports: [
    WhatsAppComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WhatsAppModule {}

