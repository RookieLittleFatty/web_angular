import { Component, OnInit, Input, EventEmitter, Output, ViewChild} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIGER: SwiperConfigInterface = {
  direction: 'vertical',
  nested: true,
  freeMode: true,
  slidesPerView: 'auto',
  autoHeight: true
};
@Component({
  selector: 'app-swiper-refresh',
  templateUrl: './swiper-refresh.component.html',
  styleUrls: ['./swiper-refresh.component.css']
})
export class SwiperRefreshComponent implements OnInit {

  refreshPos: string;
  refreshTip: string;
  refreshFlag: number;
  loadMoreTip: string;
  isLoad: boolean;
  refreshConfig: any = DEFAULT_SWIPER_CONFIGER;
  @Input() totalItem: number;  //pageInfo属性总数目
  @Input() listLength: number; //当前展示的list的长度
  @Input() disableLoad: boolean;  //是否允许加载更多，决定上两个参数是否可选
  @Output() loadMore: EventEmitter<any> = new EventEmitter<any>(); //加载更多回调
  @Output() refresh: EventEmitter<any> = new EventEmitter<any>();  //下拉刷新回调
  @ViewChild('refresher') refresher: any;
  swiperPlugin: any;
  constructor() { }

  ngOnInit() {
    this._setRefresh('下拉刷新', 1);
    if (!this.disableLoad) {
      this._setLoadMore('上拉加载...', false);
    }
  }
  //设置Refresh的提示和显示
  _setRefresh(tip: string, flag: number,  pos?:string){
    if (pos) {
      this.refreshPos = pos;
    }
    this.refreshFlag = flag;
    this.refreshTip = tip;
  }
  _setLoadMore(tip: string, flag: boolean){
    this.loadMoreTip = tip;
    this.isLoad = flag;
  }
  _getSwiperProp(prop) {
    this.swiperPlugin = this.swiperPlugin || this.refresher.directiveRef.swiper();
    return this.swiperPlugin[prop];
  }
  updateSwiper() {
    this._setRefresh('下拉刷新', 1, 'absolute');
    if (!this.disableLoad) {
      this._setLoadMore('上拉加载', false);
    }
    this.refresher.directiveRef.update();
  }
  translateTo (x:number, y: number) {
    this.swiperPlugin = this.swiperPlugin || this.refresher.directiveRef.swiper();
    this.swiperPlugin.setTranslate(x, y);
  }
  touchMove() {
    //当正在刷新或者加载的时候，直接返回
    if (this.refreshFlag === 3 || this.isLoad) {
      return;
    }
    //刷新
    const translate = this._getSwiperProp('translate');
    if (translate <= 0) {
      return;
    } else if (translate > 0 && translate < 40) {
      this._setRefresh('下拉刷新', 1);
    } else {
      this._setRefresh('释放刷新',2);
    }
  }
  touchEnd() {
    //当正在刷新或者加载的时候，直接返回
    if (this.refreshFlag === 3 || this.isLoad) {
      return;
    }
    //加载更多,下拉底部并且上拉超过50px,加载
    const translate = this._getSwiperProp('translate');
    const contentHeight = this._getSwiperProp( 'slides')[0].offsetHeight;
    const wrapperHeight = this._getSwiperProp('$el')[0].offsetHeight;
    if (translate < 0 && (Math.abs(translate) >= (contentHeight - wrapperHeight) + 50)) {
      if (this.totalItem == this.listLength || this.disableLoad) {
        return;
      }
      this._setLoadMore('正在加载……', true);
      this.loadMore.emit();
    } else {
      //下拉刷新
      if (translate >= 40) {
        this._setRefresh('正在刷新',3, 'static');
        this.refresh.emit();
      }
    }
  }

}
