import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpCapService } from 'src/app/services/http-cap.service';


@Component({
  selector: 'app-book-status',
  templateUrl: './book-status.page.html',
  styleUrls: ['./book-status.page.scss'],
})
export class BookStatusPage implements OnInit {

   tableLocaction_id: any = ''; 
   tableNum: any = '';
   tableFloor: any = '';
   tableName: any = '';
   couponStatus: any = '';


   

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
              private capHttp: HttpCapService, private alertCtrl: AlertController) { }




  async cancelBooking(){
      const alert = await this.alertCtrl.create({
        header: 'Are you sure, want to cancel booking?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {

            },
          },
          {
            text: 'Yes',
            role: 'Yes',
            handler: () => {
               this.confirmCancelBooking();
            },
          },
        ],
      });
  
      await alert.present();
      const { role } = await alert.onDidDismiss();
  }
  

  confirmCancelBooking(){
    this.capHttp.postFormData('/table-cancel.php', {}).then((res:any) => { console.log(res);      
      if(res.status === 'success'){
      }else{

      }
    }).catch( err => {
      //  alert(JSON.stringify(err));    
    });
  }


  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((res)=>{   console.log(res);
      // {
      //   "TBnum": "03",
      //   "TBfloor": "B1 FLOOR",
      //   "TBname": "B1 - Good Life Cafe"
      // }
    });
    this.tableLocaction_id = this.activatedRoute.snapshot.queryParamMap.get('TBid');
    this.tableNum = this.activatedRoute.snapshot.queryParamMap.get('TBnum');
    this.tableFloor = this.activatedRoute.snapshot.queryParamMap.get('TBfloor');
    this.tableName = this.activatedRoute.snapshot.queryParamMap.get('TBname');
    this.couponStatus = this.activatedRoute.snapshot.queryParamMap.get('CouponStatus');
  }

}
