import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { BluetoothLE } from '@awesome-cordova-plugins/bluetooth-le/ngx';

import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { FilterPipe } from './services/filter.pipe';


@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Vibration, BluetoothLE, BLE, OpenNativeSettings, Diagnostic],
  bootstrap: [AppComponent],
})
export class AppModule {}
