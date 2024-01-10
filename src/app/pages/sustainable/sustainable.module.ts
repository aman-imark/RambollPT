import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SustainablePageRoutingModule } from './sustainable-routing.module';

import { SustainablePage } from './sustainable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SustainablePageRoutingModule
  ],
  declarations: [SustainablePage]
})
export class SustainablePageModule {}
