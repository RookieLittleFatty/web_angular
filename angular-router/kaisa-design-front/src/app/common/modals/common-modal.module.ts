import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ModalModule, BsDatepickerModule} from "ngx-bootstrap";
import {CreateMeetingComponent} from "./create-meeting/create-meeting.component";

@NgModule({
  imports: [BrowserModule, ModalModule.forRoot(), BsDatepickerModule.forRoot()],
  declarations: [CreateMeetingComponent]
})

export class CommonModalModule {}
