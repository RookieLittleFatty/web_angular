import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  testArr = [1, 2, 3, 4];
  sortFlags;
  constructor() { }

  ngOnInit() {
    this.sortFlags = {};
  }
  changeSortWay(sortType){
    this.sortFlags[sortType] = !this.sortFlags[sortType];
  }
}
