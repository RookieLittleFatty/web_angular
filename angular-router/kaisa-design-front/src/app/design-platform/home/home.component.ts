import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  taskType: number;
  taskList: any [];
  addNewFlag: boolean;
  newTask: any;
  minDate: Date = new Date(2017, 5, 10);
  maxDate: Date = new Date(2018, 9, 15);
  constructor() { }

  ngOnInit() {
    this.taskType = 1;
    this.newTask = {};
    this.addNewFlag = false;
    this.taskList = [{
      desc: '任务一',
      type: 'A',
      major: '装饰',
      isEdit: false
    }];
  }
  changeType(type) {
    this.taskType = type;
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
