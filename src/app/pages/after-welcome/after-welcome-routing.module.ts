import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterWelcomePage } from './after-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: AfterWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterWelcomePageRoutingModule {}
