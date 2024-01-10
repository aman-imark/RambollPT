import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.page.html',
  styleUrls: ['./table-status.page.scss'],
})
export class TableStatusPage implements OnInit {

  yesClickStatus: boolean = false;
  noClickStatus: boolean = false;

  constructor(private router: Router) { }

  ionViewWillEnter(){
    this.noClickStatus = false;
  }

  yesClick(){
    this.yesClickStatus = true;
    this.router.navigate(['/table-book']);
  }

  noClick(){
    this.noClickStatus = true;
  }




  ngOnInit() {
  }

  
}
