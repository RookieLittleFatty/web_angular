import { Component, OnInit } from '@angular/core';
import {TaskEntity} from './task-entity';
import {Router} from '@angular/router';
import {TaskService} from './task.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  currentDate: Date = new Date();
  minDate: Date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
  taskEntity: TaskEntity;
  constructor(private router: Router, private taskService: TaskService) {};
  taskId: any;

  ngOnInit() {
    this.taskEntity = new TaskEntity();
    this.taskEntity.taskNode = '0';
    this.taskEntity.projectCode = 'SZ-A001';
  }
  doUpload() {
    let uploader = $("#uploader").pluploadQueue({
      runtimes: 'html5,flash,silverlight,html4',
      url: "/projectTask",
      max_file_size: '10000mb',
      max_file_count: 10,
      chunk_size: '1mb',
      resize: {
        width: 200,
        height: 200,
        quality: 90,
        crop: true // crop to exact dimensions
      },
      filters: [
        {title: "Image files", extensions: "jpg,gif,png"},
        {title: "Vedio files", extensions: "mp4,mkv"},
        {title: "Zip files", extensions: "zip,avi"}
      ],
      rename: true,
      sortable: true,
      dragdrop: true,
      views: {
        list: true,
        thumbs: true, // Show thumbs
        active: 'thumbs'
      }
    });
  }



  doCancel() {
    this.router.navigate(['/designPlatform/home']);
  }

  doSave() {
    this.taskEntity.taskType = 1;
    this.taskEntity.attachmentIdStr = $("#testValue").val();
    this.taskService.doSave(this.taskEntity).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/designPlatform/home']);
      } else {
        alert(data.message);
      }
    });
  }
}
