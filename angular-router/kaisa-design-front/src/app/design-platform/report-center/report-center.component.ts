import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-center',
  templateUrl: './report-center.component.html',
  styleUrls: ['./report-center.component.css']
})
export class ReportCenterComponent implements OnInit {
  tabIndex: number;


  constructor() { }

  ngOnInit() {
  		this.tabIndex=3;
  }
  changeTab(index){
    this.tabIndex = index;
  }

}
 