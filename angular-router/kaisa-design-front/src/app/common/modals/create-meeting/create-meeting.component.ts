import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnInit {
  taskList: any [];
  addNewFlag: boolean;
  newTask: any;
  minDate: Date = new Date(2017, 5, 10);
  maxDate: Date = new Date(2018, 9, 15);
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.newTask = {};
    this.addNewFlag = false;
    this.taskList = [{
      desc: '任务一',
      type: 'A',
      major: '装饰',
      isEdit: false
    }];
  }

  addTask(){
    this.addNewFlag = true;
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

  editTask(task){
    task.isEdit = true;
  }
  saveTask(isNew, task) {
    if (isNew) {
      this.taskList.push(this.newTask);
      this.addNewFlag = false;
      delete this.newTask;
      this.newTask = {};
    }else {
      task.isEdit = false;
    }
  }
  cancelAdd() {
    delete this.newTask;
    this.newTask = {};
    this.addNewFlag = false;
  }

}
