import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
const MEMBERS = '会议成员';
const DETAIL = '会议详情';

@Component({
  selector: 'app-app-meeting-detail',
  templateUrl: './app-meeting-detail.component.html',
  styleUrls: ['./app-meeting-detail.component.css']
})
export class AppMeetingDetailComponent implements OnInit {
  moreFlag: boolean;
  meetingId: string;
  headerTitle: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.moreFlag = false;
    this.headerTitle = DETAIL;
    this.meetingId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  //查看更多
  viewMore(){
    this.moreFlag = true;
    this.headerTitle = MEMBERS;
  }
  goback(){
    if(this.moreFlag){
      this.moreFlag = false;
      this.headerTitle = DETAIL;
    }else {
      this.router.navigate(['/appPortal/meeting']);
    }
  }

}
