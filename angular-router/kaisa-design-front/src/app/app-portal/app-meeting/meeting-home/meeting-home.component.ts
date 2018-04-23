import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-meeting-home',
  templateUrl: './meeting-home.component.html',
  styleUrls: ['./meeting-home.component.css']
})
export class MeetingHomeComponent implements OnInit {
  tabIndex: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.tabIndex = 1;
  }

  changeTab(type){
    this.tabIndex = type;
  }

  //查看会议详情
  viewDetail(){
    this.router.navigate(['/appPortal/meeting/detail', 1]);
  }

  goback(){
    return;
  }

}
