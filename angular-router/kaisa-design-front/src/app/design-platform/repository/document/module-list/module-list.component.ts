import { Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective, BsModalRef} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {CommonModalService} from "../../../../common/modals/common-modal.service";

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
  tipModal: BsModalRef;
  @ViewChild('uploadModal') docUpload: ModalDirective;

  constructor(private router: Router,
              private commonModalService: CommonModalService) { }

  ngOnInit() {
    this.totalItems = 64;
    this.currentPage = 1;
  }

  /*删除*/
  delete(){
    if (this.selectedDoc){
      this.testArr.splice(this.selectedDoc - 1, 1);
      delete this.selectedDoc;
      this.tipModal = this.commonModalService.openInfo('删除成功', false);
    } else {
      this.tipModal = this.commonModalService.openInfo('请选择一条记录', false);
      // this.tipModal.content.sureEvent.subscribe(data=>{
      //     this.commonModalService.openInfo("nestModal", false);
      // });
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
