import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }
  copyObj(obj) {
    let newObj: any = {};
    if (obj instanceof Array) {
      newObj = [];
    }
    for (let key in obj) {
      let val = obj[key];
      newObj[key] = typeof val === 'object' ? this.copyObj(val) : val;
    }
    return newObj;

  }
}
