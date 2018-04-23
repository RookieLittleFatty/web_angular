import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { MeetingHomeComponent } from './meeting-home/meeting-home.component';
import {AppMeetingRoutingModule} from "./app-meeting-routing.module";
import { AppMeetingDetailComponent } from './app-meeting-detail/app-meeting-detail.component';
import {AppCommonModule} from "../app-common/app-common.module";

@NgModule({
  imports: [CommonModule, AppMeetingRoutingModule, AppCommonModule],
  declarations: [ MeetingHomeComponent, AppMeetingDetailComponent]
})
export class AppMeetingModule {}
