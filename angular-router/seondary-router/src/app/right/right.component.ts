import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  id: any;
  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.paramMap.subscribe(data=>{
      this.id = data.get('id');
    });
  }

}
