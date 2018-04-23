import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ModalModule, BsDatepickerModule} from "ngx-bootstrap";
import {CreateMeetingComponent} from "./modals/create-meeting/create-meeting.component";
import { TipModalComponent } from './modals/tip-modal/tip-modal.component';
import {CommonModalService} from "./modals/common-modal.service";

@NgModule({
  imports: [CommonModule, FormsModule, ModalModule.forRoot(), BsDatepickerModule.forRoot()],
  declarations: [CreateMeetingComponent, TipModalComponent],
  providers: [CommonModalService],
  entryComponents: [CreateMeetingComponent, TipModalComponent]
})
export class PublicModule {}
