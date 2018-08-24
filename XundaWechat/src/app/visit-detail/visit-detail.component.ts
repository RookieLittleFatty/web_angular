import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styleUrls: ['./visit-detail.component.css']
})
export class VisitDetailComponent implements OnInit {
  params: any = {};
  @ViewChild('test') testpop: any;
  constructor(private router: Router, private ar: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.testpop);
  }
  goback(){
    this.router.navigate(['../'], {relativeTo: this.ar});
  }

}
