import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-doc-left',
  templateUrl: './doc-left.component.html',
  styleUrls: ['./doc-left.component.css']
})
export class DocLeftComponent implements OnInit {
  @Output() showDoc: EventEmitter<any> = new EventEmitter<any>();
  testArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  selectedDoc: number;
  constructor() { }

  ngOnInit() {
    this.selectedDoc = 1;
  }
  chooseDoc(id){
    console.log(this.selectedDoc);
  }
  changeDoc(docId){
    this.selectedDoc = docId;
    this.showDoc.emit(this.selectedDoc);
  }

}
