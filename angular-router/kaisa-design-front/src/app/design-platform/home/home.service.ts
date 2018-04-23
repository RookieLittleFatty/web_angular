import {Injectable} from '@angular/core';
import {HttpUtil} from '../../utils/http.util';


@Injectable()
export class HomeService {

  constructor(private httpUtil: HttpUtil){}

  getTaskList( taskType: number, taskStatus: number) {
    const url = '/items/itemsList?taskType=' + taskType + '&taskStatus=' + taskStatus;
    return this.httpUtil.get(url);
  }
}
