import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/primeng";
// import {BsDatepickerModule} from "ngx-bootstrap";
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {PublicModule} from "../../common/public.module";

@NgModule({
  imports: [CommonModule, FormsModule, CalendarModule, PublicModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
