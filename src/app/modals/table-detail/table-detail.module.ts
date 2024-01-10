import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableDetailPageRoutingModule } from './table-detail-routing.module';

import { TableDetailPage } from './table-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableDetailPageRoutingModule
  ],
  declarations: [TableDetailPage]
})
export class TableDetailPageModule {}
