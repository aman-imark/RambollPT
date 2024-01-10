import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrVoucherPageRoutingModule } from './qr-voucher-routing.module';

import { QrVoucherPage } from './qr-voucher.page';

import { CustomTabsComponent } from '../../components/custom-tabs/custom-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrVoucherPageRoutingModule
  ],
  declarations: [QrVoucherPage, CustomTabsComponent]
})
export class QrVoucherPageModule {}
