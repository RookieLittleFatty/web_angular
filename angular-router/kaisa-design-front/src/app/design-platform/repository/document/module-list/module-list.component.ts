import { Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  testArr = [1,2,3,4,5,6,7,8,9,10,11];
  fileNameStr: string;
  selectedDoc: number;
  fileTitle: string;
  content: string;
  totalItems: number;
  currentPage: number;
  @ViewChild('uploadModal') docUpload: ModalDirective;

  constructor(private router: Router) { }

  ngOnInit() {
    this.totalItems = 64;
    this.currentPage = 1;
  }

  /*删除*/
  delete(){
    if (this.selectedDoc){
      this.testArr.splice(this.selectedDoc - 1, 1);
      delete this.selectedDoc;
      alert('删除成功!');
    }else {
      alert("请选择一条记录!");
    }
  }

  /*上传*/
  upload(){
    this.docUpload.hide();
  }

  /*查看详情*/
  viewDetail(){
    this.router.navigate(['/designPlatform/repository/docDetail']);
  }
}
