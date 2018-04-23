import { Injectable } from '@angular/core';
import {BsModalService} from "ngx-bootstrap";
import {CreateMeetingComponent} from "./create-meeting/create-meeting.component";
import {TipModalComponent} from "./tip-modal/tip-modal.component";

@Injectable()
export class CommonModalService {
  constructor(private bsModalService: BsModalService) { }
  openMeetingModal() {
    const modalConfig: any = {
      class: 'jzy-modal modal-md'
    };
    return  this.bsModalService.show(CreateMeetingComponent, modalConfig);
  }
  openInfo(tipMsg: string, isConfirm: boolean, sureBtn?: string) {
    const modalConfig: any = {
      class: 'jzy-modal modal-md',
      initialState: {
        message: tipMsg,
        typeFlag: isConfirm,
        sureText: sureBtn ? sureBtn : '确定'
      }
    };
    return this.bsModalService.show(TipModalComponent, modalConfig);
  }
}
