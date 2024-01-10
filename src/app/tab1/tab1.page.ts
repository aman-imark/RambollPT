import { Component, OnInit, NgZone ,OnDestroy } from '@angular/core';


import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

import { BLE } from '@awesome-cordova-plugins/ble/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  ble_devices: any[] = [];

  constructor(private router: Router, private ble: BLE, private ngZone : NgZone, private loadingCtrl: LoadingController) 
  
  { }


  ionViewWillEnter(){
    this.scan();
  }




  goto_wayfinding(){    
    this.router.navigate(['/main/tabs/tab2']);
  }


  goto_appFeedback(){    
    this.router.navigate(['app-feedback']);
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
    //   name: 'KBPro_212376',
    //   id: 'DD;34;02;06;C6;DB',
    //   rssi: '-96'
    // },
    // {
    //   name: 'KBPro_211633',
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



  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Syncing ...',
      duration: 2000,
    });

    loading.present();
  }



  ngOnInit() {
  
  }


}
