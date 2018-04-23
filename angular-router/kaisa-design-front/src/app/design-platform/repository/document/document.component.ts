import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  shownModuleId: number;
  docId: number;
  constructor() { }

  ngOnInit() {

  }

  /*查看模块更多*/
  showModuleList(e){
    this.shownModuleId = e;
  }

  /*点击左边显示右边模块*/
  changeToDoc(e){
    this.docId = e;
    console.log(this.docId);
    delete this.shownModuleId;
  }

}
