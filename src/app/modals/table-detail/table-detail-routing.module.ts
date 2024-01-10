import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableDetailPage } from './table-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TableDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableDetailPageRoutingModule {}
