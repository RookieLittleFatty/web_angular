import { Component, OnInit, ViewChild } from '@angular/core';
import {BsModalRef, BsDatepickerDirective} from "ngx-bootstrap";
import {CommonModalService} from "../../common/modals/common-modal.service";
import {Router} from '@angular/router';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('calender') homeCalender: BsDatepickerDirective;
  taskType: number;
  taskStatus: number;
  addMeetingModal: BsModalRef;
  date11: Date;
  cn: any;
  taskList: any[];

  constructor(private commonModalService: CommonModalService, private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.taskType = 3;
    this.taskStatus = 0;
    this.cn = {
      firstDayOfWeek: 0,
      dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
      monthNames: [ "1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月" ],
      monthNamesShort: [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
    };
    this.doSearchTask(this.taskType, this.taskStatus);
  }
  changeType(type) {
    this.taskType = type;
    this.doSearchTask(this.taskType, this.taskStatus);
  }
  showAddMeeting() {
    this.addMeetingModal = this.commonModalService.openMeetingModal();
  }

  doSearchTask( taskType: number, taskStatus: number) {
      this.homeService.getTaskList(taskType, taskStatus).subscribe(data => {
          if (data.success) {
            this.taskList = data.list;
          } else {
            alert(data.message);
          }
      });
  }

  creatTask() {
   this.router.navigate(['/designPlatform/task']);
  }

}
