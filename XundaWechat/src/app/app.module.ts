import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {PickerService, WeUiModule} from 'ngx-weui';
import { AppComponent } from './app.component';
import { VisitPlanComponent } from './visit-plan/visit-plan.component';
import {AppRoutingModule} from './app-routing.module';
import {ShareModule} from './share/share.module';
import {CalendarModule} from 'primeng/primeng';
import {ENgxEChartsModule} from 'e-ngx-echarts';
import { VisitListComponent } from './visit-list/visit-list.component';
import {DatePipe} from '@angular/common';
import { VisitDetailComponent } from './visit-detail/visit-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    VisitPlanComponent,
    VisitListComponent,
    VisitDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WeUiModule.forRoot(),
    ShareModule,
    CalendarModule,
    ENgxEChartsModule
  ],
  providers: [DatePipe, PickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
