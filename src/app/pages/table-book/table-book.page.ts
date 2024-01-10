import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { LoadingController } from '@ionic/angular'

import { ToastController } from '@ionic/angular';
import { HttpCapService } from 'src/app/services/http-cap.service';

@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.page.html',
  styleUrls: ['./table-book.page.scss'],
})
export class TableBookPage implements OnInit {


  selectedLocation: any = '1';
  selectedTBnum: any = '';
  selectedTBfloor: any = '';
  selectedTBname: any = '';
  selectedCname: any = '';

  string: any;

  
footerTableDetails: boolean = false;
tableBookData: any;

locationData: any =[
  {
    id: "1",
    name: "B1 - TTSH Good Life Cafe",
    cname: "Goodlife",
    image: "",
    other: "B1 FLOOR"
  },
  {
    id: "2",
    name: "L1 - TTSH Kopitiam",
    cname: "TTSH Kopitiam",
    image: "",
    other: "L1 FLOOR"
  },
  {
    id: "3",
    name: "B1 - CHI PitStop @  Kopitiam",
    cname: "PitStop @ Kopitiam",
    image: "",
    other: "L4 FLOOR"
  },
  {
    id: "4",
    name: "L4 - CHI Kampung Square",
    cname: "CHI Kampung",
    image: "",
    other: "B1 FLOOR"
  }]; 



 tableA_occp: any;
 tableB_occp: any;
 tableC_occp: any;


constructor(private router: Router, private vibration: Vibration, private loadingCtrl: LoadingController,
           public capHttp: HttpCapService, private toastCtrl: ToastController, private activatedRoute: ActivatedRoute)

{
  this.selectedLocation = this.activatedRoute.snapshot.queryParamMap.get('loaction')
  this.footerTableDetails = false;
  this.selectedTBnum = '';
}


ionViewWillEnter(){
  this.showLoading(500);
  this.footerTableDetails = false;
  this.selectedTBnum = '';
  this.checkTable_Aviablity();
}


// ionViewDidLeave
// ionViewWillLeave
// ngOnDestroy
ionViewDidLeave(){
  // console.log('Page leave hit')
  this.footerTableDetails = false;
  this.selectedTBnum = '';
  this.checkTable_Aviablity();
}




checkTable_Aviablity(){
  // console.log(this.selectedLocation);
    if(this.selectedLocation == '1'){
       this.string = 'Goodlife';
    }else if(this.selectedLocation == '2'){
      this.string = 'TTSH Kopitiam';
    }else if(this.selectedLocation == '3'){
      this.string = 'PitStop @ Kopitiam';
    }else if(this.selectedLocation == '4'){
      this.string = 'CHI Kampung';
    }
  console.log("location: "+ this.string);
  this.capHttp.postFormData('/esp-outputs-api.php', {"location" : this.string} ).then((res:any) => { console.log(res);      
    // console.log(res.data);
    //  https://rambolldashboards.com/api/esp-outputs-api.php
    if(res.status === 'success'){
      this.tableA_occp = res.data[0].occupied;
      this.tableB_occp = res.data[1].occupied;
      this.tableC_occp = res.data[2].occupied;
    }else{
      this.presentToast(res.status+': '+res.message);
    }
  }).catch( err => {
    //  alert(JSON.stringify(err));
  });
 }




locationSelection(ev){
  this.showLoading(500);
  console.log(ev.detail.value);
  console.log(this.selectedLocation);
  this.selectedTBnum = '';
  this.selectedTBfloor = '';
  this.selectedTBname = '';
  this.selectedCname = '';    
  this.footerTableDetails = false;
  this.checkTable_Aviablity();
}



clickOnTable(tableId){
  console.log(tableId)
  this.selectedTBnum = tableId;
  this.footerTableDetails = true;
  this.vibration.vibrate(20);

  if(tableId == '1'){       
    this.selectedTBfloor = this.locationData[0].other;
    this.selectedTBname = this.locationData[0].name;
    this.selectedCname = this.locationData[0].cname;
  }
  else if(tableId == '2'){
    this.selectedTBfloor = this.locationData[0].other;
    this.selectedTBname = this.locationData[0].name;
    this.selectedCname = this.locationData[0].cname;
  }
  else if(tableId == '3'){
    this.selectedTBfloor = this.locationData[0].other;
    this.selectedTBname = this.locationData[0].name;
    this.selectedCname = this.locationData[0].cname;
  }
  else if(tableId == '4'){
    this.selectedTBfloor = this.locationData[1].other;
    this.selectedTBname = this.locationData[1].name;
    this.selectedCname = this.locationData[1].cname;
  }  
  else if(tableId == '5'){
    this.selectedTBfloor = this.locationData[1].other;
    this.selectedTBname = this.locationData[1].name;
    this.selectedCname = this.locationData[1].cname;
  }  
  else if(tableId == '6'){
    this.selectedTBfloor = this.locationData[1].other;
    this.selectedTBname = this.locationData[1].name;
    this.selectedCname = this.locationData[1].cname;
  }  
  else if(tableId == '7'){
    this.selectedTBfloor = this.locationData[2].other;
    this.selectedTBname = this.locationData[2].name;
    this.selectedCname = this.locationData[2].cname;
  }  
  else if(tableId == '8'){
    this.selectedTBfloor = this.locationData[2].other;
    this.selectedTBname = this.locationData[2].name;
    this.selectedCname = this.locationData[2].cname;
  }  
  else if(tableId == '9'){
    this.selectedTBfloor = this.locationData[2].other;
    this.selectedTBname = this.locationData[2].name;
    this.selectedCname = this.locationData[2].cname;
  }  
  else if(tableId == '10'){
    this.selectedTBfloor = this.locationData[3].other;
    this.selectedTBname = this.locationData[3].name;
    this.selectedCname = this.locationData[3].cname;
  }
  else if(tableId == '11'){
    this.selectedTBfloor = this.locationData[3].other;
    this.selectedTBname = this.locationData[3].name;
    this.selectedCname = this.locationData[3].cname;
  }  
  else if(tableId == '12'){
    this.selectedTBfloor = this.locationData[3].other;
    this.selectedTBname = this.locationData[3].name;
    this.selectedCname = this.locationData[3].cname;
  }else{      
  }
}



bookAnTable(num, cname, floor, name){
  this.tableBookData = {
    sensor: "EC-SR002",
    location: cname, 
    tablenumber: num,
    occupied: "1",
  }
  console.table(this.tableBookData);
  this.capHttp.postFormData('/esp-output-action-api.php', this.tableBookData).then((res:any) => {  console.log(res);
    // https://rambolldashboards.com/api/esp-output-action-api.php
    // console.log(res.data);
    if(res.status === 'success'){
      this.presentToast(res.message);
         setTimeout( () => {
           this.router.navigate(['book-status'], {queryParams: { 
                                                   TBid: res.id,
                                                   TBloc: this.selectedLocation,
                                                   TBnum: this.selectedTBnum, 
                                                   TBfloor: this.selectedTBfloor, 
                                                   TBname: this.selectedTBname,
                                                   CouponStatus: res.couponstatus
                                                   }
                                                 });                                               
         }, 2000);
    }else{
      this.presentToast(res.status+': '+res.message);
    }
    // {
    //   "status": "success",
    //   "message": "data saved successfully",
    //   "user": {
    //       "sensor": "EC-SR002",
    //       "location": "B1 FLOOR-B1 - Good Life Cafe",
    //       "tablenumber": "2",
    //       "occupied": "1"
    //   }
    // }
  }).catch( err => {
    //  alert(JSON.stringify(err));
  });
}



confirmBooking(){
  this.showLoading(3000);
  // console.log(this.selectedTBnum);
  // console.log(this.selectedTBfloor);
  // console.log(this.selectedTBname);
  this.bookAnTable(this.selectedTBnum, this.selectedCname, this.selectedTBfloor, this.selectedTBname);   
}


cancelBooking(){
  this.selectedTBnum = '';
  this.selectedTBfloor = '';
  this.selectedTBname = '';
  this.selectedCname = '';
  this.footerTableDetails = false;
}



async showLoading(time) {
  const loading = await this.loadingCtrl.create({
    message: 'Syncing...',
    duration: time,
    mode: 'ios'
  });

  loading.present();
}


async presentToast(message) {
  const toast = await this.toastCtrl.create({
    message: message,
    duration: 1500,
    position: 'bottom'
  });

  await toast.present();
}

ngOnInit() {

}


}
