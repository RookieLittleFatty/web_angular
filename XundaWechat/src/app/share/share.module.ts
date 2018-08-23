import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwiperModule} from 'ngx-swiper-wrapper';
import { SwiperRefreshComponent } from './swiper-refresh/swiper-refresh.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule
  ],
  declarations: [SwiperRefreshComponent],
  exports: [SwiperRefreshComponent, SwiperModule, FormsModule],
  providers: []
})
export class ShareModule { }
