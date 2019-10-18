import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { debug } from 'util';

@Injectable({ providedIn: 'root' })
export class CommonService {
  constructor(private http: HttpClient, private router: Router) { }

  private subject = new Subject<any>();
  private userObj: any;
  private userAfterLoggedObj: Object;
  private httpObj: any = {
    type: '',
    url: '',
    options: Object
  };

  getBaseUrl() {
    return 'https://api.rentatruck.shauryatechnosoft.com/masterdata/';
  }

  //setIdToken(id: string) {
  //  this.idToken = id;
  //}

  getUserObj(): Object {
    return this.userObj;
  }
  setUserObj(obj: Object) {
    this.userObj = obj;
    console.log(obj);
  }

  getUserAfterLoggedObj(): Object {
    return this.userAfterLoggedObj;
  }
  setUserAfterLoggedObj(obj: Object) {
    this.userAfterLoggedObj = obj;
    console.log(obj);
  }

  clearMessages() {
    this.subject.next();
  }
  sendMessage(message: string) {
    this.subject.next({
      text: message
    });
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  clearHttp() {
    this.httpObj.type = '';
    this.httpObj.url = '';
    this.httpObj.options = {};
  }

  getHttp(): any {
    let promise = new Promise((resolve, reject) => {
      let temp: any = undefined;
      !this.httpObj.options.params && (delete this.httpObj.options.params)
      temp = this.http.request(this.httpObj.type, this.httpObj.url, this.httpObj.options);
      temp.toPromise().then(res => {
        let resData: any = res;
        if (resData.statusCode !== "200") {
          debugger
          //this.router.navigate(['/home']);
        }
        else {
          return resolve(resData);
        }
      });

    });
    return promise;
  }

  setHttp(type, url, isHeader: Boolean, params: any) {
    this.clearHttp();
    this.httpObj.type = type;
    this.httpObj.url = 'https://api.rentatruck.shauryatechnosoft.com/masterdata/' + url;
    if (isHeader) {
      this.httpObj.options.headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': "bearer " + this.userObj.idToken,
        'Accept': "application/json"
      });
    }
    if (params !== false) {
      this.httpObj.options.params = params;
    }
    else {
      this.httpObj.options.params = false;
    }
  }
}
