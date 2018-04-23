import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-file',
  templateUrl: './project-file.component.html',
  styleUrls: ['./project-file.component.css']
})
export class ProjectFileComponent implements OnInit {
  totalItems: number;
  currentPage:  number;
  constructor() { }

  ngOnInit() {
    this.totalItems = 64;
    this.currentPage = 1;
  }

}
