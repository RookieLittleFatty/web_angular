import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  tabIndex: number;

  constructor() { }

  ngOnInit() {
    this.tabIndex = 1;
  }

  changeTab(tabNum){
    this.tabIndex = tabNum;
  }

}
