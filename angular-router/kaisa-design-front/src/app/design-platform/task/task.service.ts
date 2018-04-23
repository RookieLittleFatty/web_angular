import {Injectable} from '@angular/core';
import {HttpUtil} from '../../utils/http.util';
import {TaskEntity} from './task-entity';


@Injectable()
export class TaskService {

  constructor(private httpUtil: HttpUtil){}

  doSave(taskEntity: TaskEntity) {
     const url = '/projectTask/add';
     return this.httpUtil.post(url, taskEntity);
  }

}
