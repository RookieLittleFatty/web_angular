import { Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap';
import {LoginService} from './login.service';
import {RegisterEntity} from './register.entity';
import {RegisterQuotaEntity} from './register.quota.entity';
import {RegisterUserEntity} from './register.user.entity';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRemeber: boolean;
  type: string;
  currentEditIndex: number;
  userMember;
  lovList: any[];
  typeList: any[];
  registerEntity: RegisterEntity;
  quotaList: any[];
  projectList: any[];
  majorList: any[];
  focusIndex: number;
  @ViewChild('registerModal') registerModal: ModalDirective;
  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.registerEntity = new RegisterEntity();
    this.userMember = {};
    this.isRemeber = false;
    this.loginService.getLov().subscribe(data => {
       this.lovList = data.list;
       this.typeList = this.lovList[0].DESIGN_INSTITUTE_CATEGORY;
       this.quotaList = this.lovList[0].DESIGN_INSTITUTE_QUOTA;
       this.majorList = this.lovList[0].OUTER_USER_PROFESSION;
    });
  }
  focus(index) {
    this.focusIndex = index;
  }

  /*添加组员*/
  addRegisterMember() {
    this.registerEntity.jzyRegistOuterUserEntityList = this.registerEntity.jzyRegistOuterUserEntityList || [];
    const newMember: RegisterUserEntity = new RegisterUserEntity();
    newMember.status = 'edit';
    this.registerEntity.jzyRegistOuterUserEntityList.push(newMember);
    this.currentEditIndex = this.registerEntity.jzyRegistOuterUserEntityList.length - 1;
  }

  /*save member info*/
  saveMember(member) {
    member.status = 'unEdit';
    this.currentEditIndex = -1;
  }

  /*delete member*/
  deleteMember(index) {
    this.registerEntity.jzyRegistOuterUserEntityList.splice(index ,1);
    if(index === this.currentEditIndex){
      this.currentEditIndex = -1;
    }
  }
  /*edit member*/
  editMember(i, member) {
    member.status = 'edit';
    this.currentEditIndex = i;
  }
  login() {
    this.route.navigate(['/designPlatform/home']);
  }

  sureRegister() {
    const _self = this;
    _self.loginService.doRegister(_self.registerEntity).subscribe(data => {
      if (data.success) {
        this.registerModal.hide();
      } else {
        alert(data.message);
      }
    });
  }

  compareFun(obj1, obj2) {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
  }

  selectedProject() {
    const _self = this;
    _self.projectList = [];
    if(_self.registerEntity.cityName && _self.registerEntity.cityName != '') {
      _self.loginService.getProjectList(_self.registerEntity.cityName).subscribe(data => {
        _self.projectList = data.list;
      });
    }
  }

  changeType() {
      const _self = this;
       _self.registerEntity.jzyRegistQuotaEntityList = [];
       _self.quotaList.forEach(function(quota) {
          if (quota.parentCode === _self.registerEntity.category) {
            const registerQuotaEntity = new RegisterQuotaEntity();
            registerQuotaEntity.registQuotaCode = quota.paramValueCode;
            registerQuotaEntity.registQuotaName = quota.paramValueName;
            registerQuotaEntity.registQuotaValue = '';
            _self.registerEntity.jzyRegistQuotaEntityList.push(registerQuotaEntity);
          }
      });
  }
}
