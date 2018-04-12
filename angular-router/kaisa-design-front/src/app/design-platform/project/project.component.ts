import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {current} from 'codelyzer/util/syntaxKind';

class ProjectSortFlags {
  drawingNum: boolean;
  meetingNum: boolean;
  waitToFollow: boolean;
  activity: boolean;
  checkPoints: boolean;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  testArr: number[];
  focusProjectSort = new ProjectSortFlags();
  allProjectSort = new ProjectSortFlags();

  constructor(private router: Router) { }

  ngOnInit() {
    console.log();
    this.testArr = [1, 2, 3, 4, 5, 6, 7];
  }
  goDetail(){
    this.router.navigate(['/designPlatform/project/detail']);
  }
  changeSortWay(tableType, sortFlagType){
    let currentFlags;
    if(tableType === 1){
      currentFlags = this.focusProjectSort;
    }else {
      currentFlags = this.allProjectSort;
    }
    currentFlags[sortFlagType] = !currentFlags[sortFlagType];
  }
}
