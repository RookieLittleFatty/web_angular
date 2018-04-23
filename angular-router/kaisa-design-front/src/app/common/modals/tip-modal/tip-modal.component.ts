import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-tip-modal',
  templateUrl: './tip-modal.component.html',
  styleUrls: ['./tip-modal.component.css']
})
export class TipModalComponent implements OnInit {
  @Input() message: string;
  @Input() typeFlag: boolean;
  @Input() sureText: string;
  @Output() sureEvent: EventEmitter<any> = new EventEmitter();

  constructor(public infoModal: BsModalRef) { }

  ngOnInit() {
  }

  sure(){
    this.sureEvent.emit({name: 'tzz', age: '27'});
    console.log(this.infoModal);
  }

}
