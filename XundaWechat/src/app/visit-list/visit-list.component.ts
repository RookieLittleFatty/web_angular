import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PickerService} from 'ngx-weui';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {
  weekVisitList: any[] = [];
  paramDay: string;
  constructor(private ar: ActivatedRoute,
              private router: Router,
              private ps: PickerService) { }

  ngOnInit() {
    this.ar.paramMap.subscribe((params: ParamMap) => {
      this.paramDay = params.get('day');
      console.log(this.paramDay);
    });
    this.weekVisitList = [
      {company: '首都机场T2停车楼', time: '2018年4月25日', id: 1},
      {company: '首都机场T2停车楼', time: '2018年4月26日', id: 2},
      {company: '首都机场T2停车楼', time: '2018年4月27日', id: 3},
      {company: '首都机场T2停车楼', time: '2018年4月28日', id: 4},
      {company: '首都机场T2停车楼', time: '2018年4月29日', id: 5},
      {company: '首都机场T2停车楼', time: '2018年4月30日', id: 6},
      // {company: '首都机场T2停车楼', time: '2018年4月1日', id: 7},
      // {company: '首都机场T2停车楼', time: '2018年4月2日', id: 8},
      // {company: '首都机场T2停车楼', time: '2018年4月3日', id: 9},
      // {company: '首都机场T2停车楼', time: '2018年4月4日', id: 10},
    ];
  }
  onRefresh(e) {
  }
  onLoadMore(e) {
    this.weekVisitList.push({company: '测试', time: '2018年4月4日', id: 11});
  }
  viewDetail(id) {
    this.router.navigate(['./', id], {relativeTo: this.ar});
  }
  chooseDate(e) {
    e.stopPropagation();
    this.ps.showDateTime('date').subscribe((res: any) =>{
      console.log(res);
    });
  }
  goback() {
    this.router.navigate(['']);
  }
}
