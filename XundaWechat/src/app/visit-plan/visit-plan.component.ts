import {Component, OnInit, ViewChild} from '@angular/core';
import {zhcn} from '../locale-zh-cn';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-visit-plan',
  templateUrl: './visit-plan.component.html',
  styleUrls: ['./visit-plan.component.css']
})
export class VisitPlanComponent implements OnInit {
  weekVisitList: any[] = [];
  sliderIndex: number;
  lang: any = zhcn;
  chartType: number; //拜访统计的数据类型，周还是月，1是周，2是月
  chartOptions: any;
  selectedDay: any;
  constructor(private router: Router, private datePipe: DatePipe, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.sliderIndex = 0;
    this.chartType = 1;
    this.chartOptions =  {
      title: {
        show: true,
        text: '拜访次数'
      },
      xAxis : [
        {
          type : 'category',
          data : ['计划','实际','推荐'],
          axisLabel: {showMaxLabel: true}
        }
      ],
      yAxis : [
        {
          type : 'value',
          boundaryGap: [0, 0.1]
        }
      ],
      series : [
        {
          name:'Acutal',
          type:'bar',
          stack: 'sum',
          barCategoryGap: '50%',
          itemStyle: {
            normal: {
              color: '#1890ff',
              barBorderColor: '#1890ff',
              barBorderWidth: 6,
              barBorderRadius:0,
              label : {
                show: true, position: 'insideTop'
              }
            }
          },
          data:[260, 100, 80]
        }
      ]
    };
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
  selectDay() {
    console.log(this.selectedDay);
    const date = this.datePipe.transform(this.selectedDay,'yyyy-MM-dd');
    this.router.navigate(['./visitList', {day: date}], {relativeTo: this.ar});
    // this.router.navigate(['visitList', date]);
  }
  changeChart(type){
    this.chartType = type;
  }
  changeTab(e){
    this.sliderIndex = e;
  }
  goback(){
    this.router.navigate(['../'], {relativeTo: this.ar});
  }

}
