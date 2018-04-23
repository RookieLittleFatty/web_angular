import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  tabIndex: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.tabIndex = 1;
  }
  changeTab(index){
    this.tabIndex = index;
    if (index === 1) {
      this.router.navigate(['/designPlatform/repository/docModule']);
    }
  }

}
