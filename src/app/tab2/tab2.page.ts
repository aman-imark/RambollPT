import { Component, OnInit, NgZone ,OnDestroy } from '@angular/core';


import { IonGrid, LoadingController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { BluetoothLE } from '@awesome-cordova-plugins/bluetooth-le/ngx';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  setIntervalFun: any;
  bluetoothStatus: any;
  ble_devices: any[] = [];
  ble_devices2: any[] = [];  // remove after
  
  filteredResult: any;

  haveBeacon: any[] = 
    [{
      name: 'KBPro_211601',
      id: '',
      rssi: ''
    },{
      name: 'KBPro_211602',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_211629',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_211633',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_211669',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_211691',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_211696',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_211714',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_211724',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_211727',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_211756',
      id: '',
      rssi: ''
    },
        {
      name: 'KBPro_211829',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_211931',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_212314',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_212316',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_212327',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_212348',
      id: '',
      rssi: ''
    },
    ,    {
      name: 'KBPro_212358',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_212376',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_212405',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_212425',
      id: '',
      rssi: ''
    },
    {
      name: 'KBPro_212431',
      id: '',
      rssi: ''
    }];


    // KBPro_212431
    // KBPro_212316
    // KBPro_212314
    // KBPro_211931
// [
  // 211601,
  // 211602,
  // 211629,
  // 211633,
  // 211669,
  // 211691,
  // 211696,
  // 211714,
  // 211724,
  // 211727,
  // 211756,
  // 211829,
  // 211931,
  // 212314,
  // 212316,
  // 212327,
  // 212348,
  // 212358,
  // 212376,
  // 212405,
  // 212425,
  // 212431
// ]

  activeBeacon: any;
  // activeBeacon: any = 'KBPro_212431';
  // activeBeacon: any = 'KBPro_212316';
  // activeBeacon: any = 'KBPro_212314';
  // activeBeacon: any = 'KBPro_211931';


  constructor(private router: Router, private ble: BLE, private ngZone : NgZone, public alrtCtrl: AlertController,
              public bluetoothle: BluetoothLE, private loadingCtrl: LoadingController, 
              private openNativeSettings: OpenNativeSettings, private toastCtrl : ToastController) 
  
  { }




  ionViewDidEnter(){
    this.checkBluetoothStatus();

    this.scan();
    this.reloadBle(); // remove after
    this.fetchComman();

    this.setIntervalFun = setInterval( () => {
    //     this.scan();
    //     this.reloadBle(); // remove after
    //     this.fetchComman();
    }, 1500)
  }



  ionViewDidLeave(){
    console.log('Page leave')
    clearInterval(this.setIntervalFun);
  }



  doRefresh(event) {
    setTimeout(() => {
      this.checkBluetoothStatus();
      this.reloadBle();  // remove after
      this.fetchComman(); // remove after
      event.target.complete();
    }, 5000);
  }



  fetchComman(){
    // const firstArray = [
    //   { "name": "John Doe" },
    //   { "name": "John Smith" },
    //   { "name": "David Miller" },
    //   { "name": "Bob Taylor" },
    //   { "name": "Carol taylor" },
    //   { "name": "Adam Smith" },
    // ];
    // const secondArray = [
    //    { "name": "Adam Smith" },
    //    { "name": "John Doe" },
    //    { "name": "David Miller" },
    //    { "name": "James Taylor" }
    // ];
    //  const getAllValue = ({ 'name': name }) => name;
    //  const result = firstArray
    //     .map(getAllValue)
    //     .filter(value => secondArray
    //        .map(getAllValue)
    //        .includes(value)
    //     );
    
    console.log(this.activeBeacon);
    const getAllValue = ({ 'name': name }) => name;
    const filteredResult = this.ble_devices.map(getAllValue).filter(value => this.haveBeacon
          .map(getAllValue)
          .includes(value)
    );
    this.filteredResult = filteredResult;
    this.activeBeacon = this.filteredResult[0];
    this.prToast(this.activeBeacon);
    console.log(this.filteredResult);
    if(this.activeBeacon != undefined){
      this.prToast(this.activeBeacon);
      console.log(this.activeBeacon);
    }  
  }



  scan(){
    this.ble_devices = [];
    // this.ble_devices = [{
    //   name: 'Unname',
    //   id: 'C4;4C;AC;61',
    //   rssi: '-81'
    // },{
    //   name: '',
    //   id: '4A;4C;AC;61',
    //   rssi: '-46'
    // },
    // {
    //   name: 'KBPro_212316',
    //   id: 'DD;34;02;06;C6;DB',
    //   rssi: '-96'
    // },
    // {
    //   name: 'KBPro_211931',
    //   id: 'DD;34;02;06;C7;21',
    //   rssi: '-96'
    // },
    // {
    //   name: 'Apple 78',
    //   id: '4A;4C;AC;61',
    //   rssi: '-26'
    // }];
  
    this.ble.scan([], 15).subscribe( (device) => {
      console.log(device)
      this.ngZone.run( () => {
        this.ble_devices.push(device);
        console.log(this.ble_devices);
      })
    })
  }


   // remove after
  reloadBle(){
    this.ble_devices2 = [];
    this.ble.scan([], 15).subscribe( (device) => {
      console.log(device)
      this.ngZone.run( () => {
        this.ble_devices2.push(device);
        console.log(this.ble_devices2);
      })
      this.fetchComman();
    });
  }



  checkBluetoothStatus(){
    this.bluetoothle.initialize().subscribe(ble => {
      console.log('ble', ble.status) // logs 'enabled'
      this.bluetoothStatus =  ble.status;
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
 
     alert.present(); 

     setTimeout( () => {
      alert.onDidDismiss();
     }, 3000);     
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Syncing ...',
      duration: 2000,
    });

    loading.present();
  }



  goto_tableBooking(){
    this.router.navigate(['/table-status']);
    clearInterval(this.setIntervalFun);
  }


  async prToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 500,
      color: 'dark',
      position: 'top'
    });

    await toast.present();
  }

}
