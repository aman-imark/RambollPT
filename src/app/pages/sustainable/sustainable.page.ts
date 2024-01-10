import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustainable',
  templateUrl: './sustainable.page.html',
  styleUrls: ['./sustainable.page.scss'],
})
export class SustainablePage implements OnInit {


  sustainableData = [
    {
      "id": 1,
      "name": "sf",
      "icon": "ds",
      "text": "Meat-free Mondays"
    },
    {
      "id": 2,
      "name": "sf",
      "icon": "ds",
      "text": "Reduce Aircon Use"
    },
    {
      "id": 3,
      "name": "sf",
      "icon": "ds",
      "text": "Recycle our Weekly Waste"
    },
    {
      "id": 4,
      "name": "sf",
      "icon": "ds",
      "text": "Bring A Reusable Bag"
    },
    {
      "id": 5,
      "name": "sf",
      "icon": "ds",
      "text": "Start Conserving Water"
    },
    {
      "id": 6,
      "name": "sf",
      "icon": "ds",
      "text": "Unplug Your Appliances"
    },


]


  constructor() { }

  ngOnInit() {
  }

}
