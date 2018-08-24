import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  addClicked: boolean;
  @Input() showBack: boolean;
  @Input() headerName: string;
  @Input() showAddIcon: boolean;
  @Output() onback: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  add(){
    this.addClicked = true;
  }
  hide(){
    this.addClicked = false;
  }
  back(){
    this.onback.emit();
  }
}
