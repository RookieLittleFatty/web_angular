import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {isRegExp} from 'util';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRemeber: boolean;
  constructor(private route: Router) { }

  ngOnInit() {
    this.isRemeber = false;
  }

  login(){
    this.route.navigate(['/designPlatform/home']);
  }

}
