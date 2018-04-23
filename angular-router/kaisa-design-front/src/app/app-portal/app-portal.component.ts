import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-portal',
  templateUrl: './app-portal.component.html',
  styleUrls: ['./app-portal.component.css']
})
export class AppPortalComponent implements OnInit {
  headerTitle: string;
  backUrl: string;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  onActivate(e) {
    this.headerTitle = e.headerTitle;
    this.backUrl = e.backUrl;
  }

  goBack() {
    if ( !this.backUrl ) {
      return;
    }
    this.router.navigate([this.backUrl]);
  }

}
