import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfterWelcomePageRoutingModule } from './after-welcome-routing.module';

import { AfterWelcomePage } from './after-welcome.page';

import { CustomTabsComponent } from '../../components/custom-tabs/custom-tabs.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfterWelcomePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AfterWelcomePage, CustomTabsComponent]
})
export class AfterWelcomePageModule {}
