import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerant-detective',
  templateUrl: './itinerant-detective.component.html',
  styleUrls: ['./itinerant-detective.component.css']
})
export class ItinerantDetectiveComponent implements OnInit {

  interTabIndex: number;
  tableArr;
  constructor() { }

  ngOnInit() {
    this.interTabIndex = 1;
    this.tableArr = [{
      id: 1,
      modified: false,
      isReduced: false
    }, {
      id: 2,
      modified: false,
      isReduced: false
    }, {
      id: 3,
      modified: false,
      isReduced: false
    }, {
      id: 4,
      modified: false,
      isReduced: false
    }];
  }

  changeTab(tabIndex){
    this.interTabIndex = tabIndex;
  }

}
