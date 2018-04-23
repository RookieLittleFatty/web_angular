import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-doc-module',
  templateUrl: './doc-module.component.html',
  styleUrls: ['./doc-module.component.css']
})
export class DocModuleComponent implements OnInit {
  moduleName: string;
  moduleList: any[];
  @ViewChild ('addModule') addNewModal: ModalDirective;

  constructor(private router: Router) { }

  ngOnInit() {
    this.moduleList = [{
      id: 1,
      moduleName: '模块一'
    },{
      id: 2,
      moduleName: '模块二'
    }];
  }
  /*新增模块*/
  addNew(){
    if (!this.moduleName){
      return;
    }
    let newModule = {
      id: this.moduleList.length + 1,
      moduleName: undefined
    };
    newModule.moduleName = this.moduleName;
    delete this.moduleName;
    this.moduleList.push(newModule);
    this.addNewModal.hide();
  }
  showMore(moduleId){
    this.router.navigate(['/designPlatform/repository/moduleList']);
  }

}
