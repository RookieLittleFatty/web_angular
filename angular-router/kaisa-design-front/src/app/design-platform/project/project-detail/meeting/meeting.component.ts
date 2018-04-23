import { Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {CommonModalService} from "../../../../common/modals/common-modal.service";
import {MeetingType} from "./meeting.type";
import {MeetingService} from "./meeting.service";

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  isDetail: boolean;
  bsModalRef: BsModalRef;
  minDate: Date = new Date(2017, 5, 10);
  maxDate: Date = new Date(2018, 9, 15);
  searchParams: MeetingType = new MeetingType();
  constructor(private commonModalService: CommonModalService,
              private meetingService: MeetingService) { }

  ngOnInit() {
    this.isDetail = false;
    this.searchParams.projectId = 1;
    this.meetingService.searchMeetings(this.searchParams).subscribe(data => {
      console.log(data);
    });
  }
  add(){
   this.bsModalRef = this.commonModalService.openMeetingModal();
  }
  viewDetail(){
    this.isDetail = true;
  }
  goBackList(){
    this.isDetail = false;
  }
}
