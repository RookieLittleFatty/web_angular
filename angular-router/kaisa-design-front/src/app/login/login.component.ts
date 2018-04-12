import { Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap';

class RegisterMember {
  major: any;
  name: string;
  cellphone: string;
  email: string;
  status: string;
}

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRemeber: boolean;
  registerMemberList: RegisterMember[];
  majors: any[];
  currentEditIndex: number;
  userMember;
  @ViewChild('registerModal') registerModal: ModalDirective;
  constructor(private route: Router) { }

  ngOnInit() {
    this.userMember = {};
    this.isRemeber = false;
    this.majors = [{
      id: 1,
      major: '基建'
    },{
      id: 2,
      major: '结构'
    },{
      id: 3,
      major: '幕墙'
    },{
      id: 4,
      major: '室内装饰设计'
    }];
  }

  /*添加组员*/
  addRegisterMember(){
    this.registerMemberList = this.registerMemberList || [];
    let newMember: RegisterMember = new RegisterMember();
    newMember.major = {id: 1};
    newMember.status = "edit";
    this.registerMemberList.push(newMember);
    this.currentEditIndex = this.registerMemberList.length - 1;
  }

  /*save member info*/
  saveMember(member){
    member.status = "unEdit";
    this.currentEditIndex = -1;
  }

  /*delete member*/
  deleteMember(index){
    this.registerMemberList.splice(index ,1);
    if(index === this.currentEditIndex){
      this.currentEditIndex = -1;
    }
  }
  /*edit member*/
  editMember(i, member){
    member.status = "edit";
    this.currentEditIndex = i;
  }
  login(){
    this.route.navigate(['/designPlatform/home']);
  }

  sureRegister(){
    this.registerModal.hide();
  }

  compareFun(obj1, obj2){
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
  }
}
