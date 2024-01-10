import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrVoucherPage } from './qr-voucher.page';

const routes: Routes = [
  {
    path: '',
    component: QrVoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrVoucherPageRoutingModule {}
