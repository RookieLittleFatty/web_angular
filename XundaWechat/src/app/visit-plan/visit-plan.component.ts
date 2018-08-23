import {Component, OnInit, ViewChild} from '@angular/core';
import {zhcn} from '../locale-zh-cn';
import {Router} from '@angular/router';
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
  constructor(private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    this.sliderIndex = 0;
    this.chartType = 1;
    this.chartOptions =  {
      // title : {
      //   text: '温度计式图表',
      //   subtext: 'From ExcelHome',
      //   sublink: 'http://e.weibo.com/1341556070/AizJXrAEa'
      // },
      // tooltip : {
      //   trigger: 'axis',
      //   axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      //   },
      //   formatter: function (params){
      //     return params[0].name + '<br/>'
      //       + params[0].seriesName + ' : ' + params[0].value + '<br/>'
      //       + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
      //   }
      // },
      // legend: {
      //   selectedMode:false,
      //   data:['Acutal', 'Forecast']
      // },
      // toolbox: {
      //   show : true,
      //   feature : {
      //     mark : {show: true},
      //     dataView : {show: true, readOnly: false},
      //     restore : {show: true},
      //     saveAsImage : {show: true}
      //   }
      // },
      xAxis : [
        {
          type : 'category',
          data : ['计划拜访次数','实际拜访次数','推荐拜访次数'],
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
              color: 'tomato',
              barBorderColor: 'tomato',
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
    this.router.navigate(['/visitList', {day: date}]);
    // this.router.navigate(['visitList', date]);
  }
  changeChart(type){
    this.chartType = type;
  }
  changeTab(e){
    this.sliderIndex = e;
  }

}
