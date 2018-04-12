import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {CommonService} from "../../../../common/common.service";

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  @ViewChild('addNewMember') addNewModal: ModalDirective;
  memberListArr: any[];
  listIndex: number;
  memberIndex: number;
  modalMember: any;
  majorList: any[];
  operateType: string;

  constructor(private commonUtil: CommonService) { }

  ngOnInit() {
    this.modalMember = {major: {id: '0'} };
    this.majorList = [{
      id: '0',
      name: '--请选择--',
    }, {
      id: '1',
      name: '结构',
    }, {
      id: '2',
      name: '暖通',
    }, {
      id: '3',
      name: '基建',
    }, {
      id: '4',
      name: '施工',
    }, {
      id: '5',
      name: '景观',
    }, {
      id: '6',
      name: '室内装饰',
    }];
    this.memberListArr = [{
      designName: '项目成员',
      list: [{
        major: {
          id: '1',
          name: '结构'
        },
        name: '张三',
        cellphone: '18862116784'
      }, {
        major: {
          id: '2',
          name: '暖通'
        },
        name: '许伟',
        cellphone: '18862116785'
      }, {
        major: {
          id: '3',
          name: '基建'
        },
        name: '李通',
        cellphone: '18862116786'
      }, {
        major: {
          id: '4',
          name: '施工'
        },
        name: '赵毅',
        cellphone: '18862116787'
      }, {
        major: {
          id: '5',
          name: '景观'
        },
        name: '王淳',
        cellphone: '18862116788'
      }, {
        major: {
          id: '6',
          name: '室内装饰'
        },
        name: '田安',
        cellphone: '18862116789'
      }]
    }, {
      designName: '设计院一',
      list: [{
        major: {
          id: '1',
          name: '结构'
        },
        name: '李四',
        cellphone: '13376895467'
      }, {
        major: {
          id: '5',
          name: '景观'
        },
        name: '刘道',
        cellphone: '13376895467'
      }, {
        major: {
          id: '4',
          name: '施工'
        },
        name: '孙龙',
        cellphone: '13376895467'
      }]
    }, {
      designName: '设计院二',
      list: [{
        major: {
          id: '3',
          name: '基建'
        },
        name: '王武',
        cellphone: '13376895467'
      }, {
        major: {
          id: '4',
          name: '施工'
        },
        name: '钱军',
        cellphone: '13376895467'
      }, {
        major: {
          id: '6',
          name: '室内装饰'
        },
        name: '杨刚',
        cellphone: '13376895467'
      }]
    }];
  }

  /*收缩列表*/
  toggleList(list){
    list.isFold = !list.isFold;
  }

  /*添加成员*/
  addMember(i){
    this.listIndex = i;
    this.operateType = 'add';
    this.addNewModal.show();
  }

  /*确定添加*/
  sureAdd() {
    console.log(this.modalMember);
    if ( this.operateType === 'add') {
      this.memberListArr[this.listIndex].list.push(this.modalMember);
    } else {
      this.memberListArr[this.listIndex].list[this.memberIndex] = this.modalMember;
    }
    delete this.modalMember;
    this.modalMember = {major: {id: '0'} };
    delete this.listIndex;
    delete this.memberIndex;
    this.addNewModal.hide();
  }
  /*edit*/
  edit(listIndex, memberIndex, member){
    this.memberIndex = memberIndex;
    this.listIndex = listIndex;
    this.operateType = 'edit';
    this.modalMember = this.commonUtil.copyObj(member);
    this.addNewModal.show();
  }

  compareFun(obj1, obj2){
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
  }

  /*删除*/
  delete(i, j) {
    this.memberListArr[i].list.splice(j,1);
  }

}
