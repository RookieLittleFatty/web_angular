import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import  {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {HttpUtil} from './utils/http.util';
import {LoginService} from './login/login.service';
import {TaskService} from './design-platform/task/task.service';
import {HomeService} from './design-platform/home/home.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpUtil, LoginService, TaskService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
