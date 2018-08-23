import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styleUrls: ['./visit-detail.component.css']
})
export class VisitDetailComponent implements OnInit {
  params: any = {};
  @ViewChild('test') testpop: any;
  constructor() { }

  ngOnInit() {
    console.log(this.testpop);
  }

}
