import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  cityProjectList;
  cityId: number;
  projectId: number;
  constructor() { }

  ngOnInit() {
    this.cityProjectList = [{
      cityName: '深圳',
      areaCode: 1,
      projectList: [{
        projectId: 1,
        projectName: '项目A'
      }, {
        projectId: 2,
        projectName: '项目B'
      }, {
        projectId: 3,
        projectName: '项目C'
      }]
    }, {
      cityName: '广州',
      areaCode: 2,
      projectList: [{
        projectId: 4,
        projectName: '项目A'
      }, {
        projectId: 5,
        projectName: '项目B'
      }, {
        projectId: 6,
        projectName: '项目C'
      }]
    }, {
      cityName: '惠州',
      areaCode: 3,
      projectList: [{
        projectId: 7,
        projectName: '项目A'
      }, {
        projectId: 8,
        projectName: '项目B'
      }, {
        projectId: 9,
        projectName: '项目C'
      }]
    }];
    this.cityId = 1;
    this.projectId = 1;
  }
  chooseCity(cityId){
    if(cityId ===  this.cityId){
      this.cityId = -1;
      return;
    }
    this.cityId = cityId;
  }
  chooseProject(id){
    this.projectId = id;
  }

}
