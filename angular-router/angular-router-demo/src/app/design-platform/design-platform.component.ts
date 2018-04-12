import { Component, OnInit } from '@angular/core';

@Component({
  template: '<app-header></app-header>' +
            '<router-outlet></router-outlet>',
  styleUrls: ['./design-platform.component.css']
})
export class DesignPlatformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
