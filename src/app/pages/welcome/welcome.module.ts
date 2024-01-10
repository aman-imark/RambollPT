import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';

import { CustomTabsComponent } from '../../components/custom-tabs/custom-tabs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule
  ],
  entryComponents: [CustomTabsComponent],
  declarations: [WelcomePage, CustomTabsComponent]
})
export class WelcomePageModule {}
