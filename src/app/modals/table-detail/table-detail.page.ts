import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.page.html',
  styleUrls: ['./table-detail.page.scss'],
})
export class TableDetailPage implements OnInit {

  @Input() user_id: number;
  @Input() imageData: any;

  constructor(public modalCtrl: ModalController) { }

  dismiss() {
     this.modalCtrl.dismiss({'dismissed': true});
  } 



  ngOnInit() {
  }

}
