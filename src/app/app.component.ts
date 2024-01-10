import { Component } from '@angular/core';

import { IonGrid, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

import { StorageService } from './services/storage.service';
import { MenuController, AlertController, ToastController, LoadingController } from '@ionic/angular';

import { Http } from '@capacitor-community/http';
// import { BleClient } from '@capacitor-community/bluetooth-le';


import { BleClient, numbersToDataView, numberToUUID, ScanResult, dataViewToText } from '@capacitor-community/bluetooth-le';

import { BluetoothLE } from '@awesome-cordova-plugins/bluetooth-le/ngx';

import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  bluetoothScanResults: ScanResult[] = [];
  bluetoothIsScanning = false;

  bluetoothConnectedDevice?: ScanResult;

  devices: any[] = [];

  constructor(private checkStr: StorageService, public alrtCtrl: AlertController,
              private router: Router, private menu: MenuController, private diagnostic: Diagnostic,
              private toastCtrl: ToastController, public bluetoothle: BluetoothLE, 
              public plt: Platform, private ble: BLE, private openNativeSettings: OpenNativeSettings) 

  
  {
    this.getWelcome();
    this.checkBluetoothStatus();
  }






  getWelcome(){
    this.checkStr.getStore('carbon_footprint').then((data:any) => {  
      // console.log(data);
      // { "pahla": "set" }
      if(data != null || data != '' || typeof(data) != 'undefined'){
        if(data.pahla){   
          // this.router.navigate(['/main/tabs/tab1']);
          this.router.navigate(["/welcome"]);
        }else{ 
          this.router.navigate(["/welcome"]);
        }
      }else{ 
        this.router.navigate(["/welcome"]);
      }
    }).catch( err => {
       this.router.navigate(["/welcome"]);
    });
  }




  checkBluetoothStatus(){
   this.bluetoothle.initialize().subscribe(ble => {
     console.log('ble', ble.status) // logs 'enabled'

     if(ble.status == 'disabled'){
        this.bluetoothAlert();
     }
   });

  }
  

  async bluetoothAlert() {
    const alert = await this.alrtCtrl.create({
      message: '<ion-text>Your Bluetooth is off, for using the app you need to always keep on the Bluetooth.</ion-text>',
      buttons: [
        {
          text: 'On the Bluetooth',
          role: 'confirm',
          handler: () => {
            this.openNativeSettings.open('bluetooth');
          },
        },
      ],
    });

    await alert.present();

    // const { role } = await alert.onDidDismiss();
  }

}

