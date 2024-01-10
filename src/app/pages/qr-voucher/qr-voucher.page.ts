import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { LoadingController } from '@ionic/angular'

import { ToastController } from '@ionic/angular';
import { HttpCapService } from 'src/app/services/http-cap.service';


@Component({
  selector: 'app-qr-voucher',
  templateUrl: './qr-voucher.page.html',
  styleUrls: ['./qr-voucher.page.scss'],
})
export class QrVoucherPage implements OnInit {


  constructor(private router: Router, private vibration: Vibration, private loadingCtrl: LoadingController,
    public capHttp: HttpCapService, private toastCtrl: ToastController) { }


    ionViewWillEnter(){
      this.getOrderData();
    }
  
  
    // ionViewDidLeave
    // ionViewWillLeave
    // ngOnDestroy
    ionViewDidLeave(){
      this.getOrderData();
    }
  
  

   getOrderData(){
    this.capHttp.getData('/get-latest-order.php').then((res:any) => { console.log(res);      
      // console.log(res.data);
      //  https://rambolldashboards.com/api/esp-outputs-api.php
      // if(res.status === 'success'){
      //   this.tableA_occp = res.data[0].occupied;
      //   this.tableB_occp = res.data[1].occupied;
      //   this.tableC_occp = res.data[2].occupied;
      // }else{
      //   this.presentToast(res.status+': '+res.message);
      // }
    }).catch( err => {
      //  alert(JSON.stringify(err));
    });
   }





  ngOnInit() {
  }

}
