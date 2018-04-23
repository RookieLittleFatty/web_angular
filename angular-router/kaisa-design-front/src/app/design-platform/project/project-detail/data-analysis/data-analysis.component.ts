import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.css']
})
export class DataAnalysisComponent implements OnInit {
  totalItems: number;
  currentPage: number;
  constructor() { }

  ngOnInit() {
    this.totalItems = 72;
    this.currentPage = 1;
  }

}
