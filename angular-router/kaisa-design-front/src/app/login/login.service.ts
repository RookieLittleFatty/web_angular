import {Injectable} from '@angular/core';
import {HttpUtil} from '../utils/http.util';
import {RegisterEntity} from './register.entity';

@Injectable()
export class LoginService {

  constructor(private httpUtil: HttpUtil){}

  getLov() {
    const url = '/parameter/all';
    return this.httpUtil.get(url);
  }

  getProjectList(cityName: any) {
    const url = '/projectInfo/areaName?areaName=' + cityName;
    return this.httpUtil.get(url);
  }

  doRegister(registerEntity: RegisterEntity) {
     const url = '/designInstitute/add';
     return this.httpUtil.post(url, registerEntity);
  }

}
