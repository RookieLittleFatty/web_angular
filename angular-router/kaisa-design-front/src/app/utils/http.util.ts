import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpUtil {
  baseUrl: any;
  private withCredentials = true;
  constructor(private http: Http) {
    this.baseUrl = environment.baseUrl;
  }

  post(url: string, param?: any) {
    url = this.baseUrl + url;
    const headers = new Headers({ 'X-Requested-With' : 'XMLHttpRequest', 'Authorization': 'Bearer ' + sessionStorage.getItem('token') , 'Cache-Control': 'no-cache', 'Pragma': 'no-cache'});
    const options = new RequestOptions({ headers: headers, withCredentials: this.withCredentials});
    return this.http.post(url, param, options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  put(url: string, param?: any) {
    url = this.baseUrl + url;
    const headers = new Headers({ 'X-Requested-With' : 'XMLHttpRequest', 'Authorization': 'Bearer ' +  sessionStorage.getItem('token'), 'Cache-Control': 'no-cache', 'Pragma': 'no-cache'});
    const options = new RequestOptions({ headers: headers, withCredentials: this.withCredentials});
    //noinspection TypeScriptValidateTypes
    return this.http.put(url, param, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  get(url: string) {
    url = this.baseUrl + url;
    const headers = new Headers({ 'X-Requested-With' : 'XMLHttpRequest', 'Authorization': 'Bearer ' + sessionStorage.getItem('token'), 'Cache-Control': 'no-cache', 'Pragma': 'no-cache'});
    const options = new RequestOptions({headers: headers, withCredentials: this.withCredentials});
    return  this.http.get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

   private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
