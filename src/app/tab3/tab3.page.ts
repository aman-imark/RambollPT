import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  carbanFootPrint: any;

  sustainData = [
    {
      id: 1,
      title: "Take Public Transport",
      subtitle: "-2kg",
      icon: "assets/sus1.svg",
      data: [{
        image: "assets/1sd.png",
        title: "TAKE PUBLIC TRANSPORT",
        desc: "<p>Did you know...</p>  <p>Travelling by the MRT reduces carbon emissions by 87% compared to taking a car.</p>  <p>Using public transport is one of the most effective actions individuals can take. Public transportation offers an immediate alternative for individuals seeking to reduce their energy use and carbon footprints. This action far exceeds the benefits of other energy saving household activities, such as using energy efficient light bulbs or adjusting thermostats.</p>",
      }]
    },
    {
      id: 2,
      title: "Bring a Reuseable bag",
      subtitle: "-1.6kg",
      icon: "assets/sus2.svg",
      data: [{
        image: "assets/2sd.png",
        title: "BRING A RESUABLE BAG",
        desc: "<p>Did you know...</p>  <p>On average a plastic shopping bag is used for just 12 minutes. It takes up to 1000 years to break down.</p>  <p>Using a reusable bag, for grocery shopping and errands can reduce the number of plastic bags we produce as well as saving you money.</p>",
      }]
    },
    {
      id: 3,
      title: "Meat-Free Mondays",
      subtitle: "-3.6kg",
      icon: "assets/sus3.svg",
      data: [{
        image: "assets/3sd.png",
        title: "MEAT-FREE MONDAYS",
        desc: "<p>Did you know...</p>  <p>If you skip just 1 serving of beef every Monday for a year, you would save the same amount of carbon emissions as driving from Singapore to Ipoh (560km) in a car.</p>",
      }]
    }];


  constructor(private router: Router, private checkStr: StorageService) { }


  ionViewDidEnter(){
    this.getWelcome();
  }


  getWelcome(){
    this.checkStr.getStore('carbon_footprint').then((data:any) => {  
      console.log(data);
      // { "status": "set" }
      if(data != null || data != '' || typeof(data) != 'undefined'){
        if(data.status && data.value){   
          this.carbanFootPrint = data.value;
        }
      }
    }).catch( err => { });
  }



  goto_subSustainable(sub_stan_id, sus_dt_data){
    console.log(sub_stan_id);
    console.log(sus_dt_data);

      this.router.navigate(['sustainable-detail'], 
      {queryParams: { title: sus_dt_data[0].title, image: sus_dt_data[0].image, desc: sus_dt_data[0].desc }});
    
    // if(sub_stan_id == "1"){
    //    this.router.navigate(['sustainable-detail']);
    // }else if(sub_stan_id == "2"){
    //    this.router.navigate(['sustainable']);
    // }else if(sub_stan_id == "3"){
    //    this.router.navigate(['sustainable']);
    // }else if(sub_stan_id == "4"){
    //    this.router.navigate(['sustainable']);
    // }else{
    //    this.router.navigate(['sustainable']);
    // }
    // this.router.navigate(['sustainable']);
  }




}
