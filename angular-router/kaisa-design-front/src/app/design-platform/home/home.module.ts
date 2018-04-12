import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ModalModule, BsDatepickerModule} from "ngx-bootstrap";
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [CommonModule, FormsModule, ModalModule.forRoot(), BsDatepickerModule.forRoot(), HomeRoutingModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
