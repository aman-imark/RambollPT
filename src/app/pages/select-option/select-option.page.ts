import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.page.html',
  styleUrls: ['./select-option.page.scss'],
})
export class SelectOptionPage implements OnInit {


  constructor(private router: Router) {}


  goto_tableBooking(){
    this.router.navigate(['/main/tabs/tab1']);
  }


  goto_wayfinding(){    
    this.router.navigate(['/main/tabs/tab2']);
  }


  goto_appFeedback(){    
    this.router.navigate(['app-feedback']);
  }


  ngOnInit() {
  }

}
