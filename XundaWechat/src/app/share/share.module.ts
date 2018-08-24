import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwiperModule} from 'ngx-swiper-wrapper';
import { SwiperRefreshComponent } from './swiper-refresh/swiper-refresh.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule
  ],
  declarations: [SwiperRefreshComponent, HeaderComponent],
  exports: [SwiperRefreshComponent, SwiperModule, FormsModule, HeaderComponent],
  providers: []
})
export class ShareModule { }
