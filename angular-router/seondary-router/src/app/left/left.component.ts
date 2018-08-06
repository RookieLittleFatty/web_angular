import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(private router: Router, private ar: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.ar);
    this.router.navigate(['./', 1], {relativeTo: this.ar.parent});
  }
  goto(id){
    this.router.navigate(['./', id], {relativeTo: this.ar.parent});
  }

}
