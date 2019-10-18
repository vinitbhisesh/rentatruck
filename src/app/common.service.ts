import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CommonService {

  constructor(private http: HttpClient,
    private router: Router,
    private params: HttpParams,
    private headers: HttpHeaders,
  ) { }

  getBaseUrl() {
    return 'https://api.rentatruck.shauryatechnosoft.com/masterdata/';
  }

  private subject = new Subject<any>();
  private userObj: Object;
  private userAfterLoggedObj: Object;
  private httpObj: any = {
    type: '',
    url: '',
    options: Object
  }



  private idToken: string;

  setUserObj(obj: Object) {
    this.userObj = obj
  }

  getUserObj(): Object {
    return this.userObj;
  }

  setUserAfterLoggedObj(obj: Object) {
    this.userAfterLoggedObj = obj
  }

  getUserAfterLoggedObj(): Object {
    return this.userAfterLoggedObj;
  }

  sendMessage(message: string) {
    this.subject.next({
      text: message
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  clearMessages() {
    this.subject.next();
  }

  setIdToken(id: string) {
    this.idToken = id;
  }

  clearHttp() {
    this.httpObj.type = '';
    this.httpObj.url = '';
    this.httpObj.options = Object;
  }

  setHttp(type, url, isHeader: Boolean, params: any) {
    this.clearHttp();
    this.httpObj.type = type;
    this.httpObj.url = url;

    if (isHeader) {
      this.httpObj.headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': "bearer " + this.idToken,
        'Accept': "application/json"
      });
    }

    if (params !== false) {
      this.httpObj.params = params;
    }
  }

  getHttp(): any {
    let tempObj: Object;
    switch (this.httpObj.type) {
      case 'get': this.http.get(this.httpObj.url, this.httpObj.options).subscribe(responseData => { let resData: any = responseData; if (resData.statusCode !== "200") { this.router.navigate(['/home']); } else { tempObj = resData } }, error => { console.log(error); tempObj = false; debugger }); break;
      case 'post': this.http.post(this.httpObj.url, this.httpObj.options).subscribe(responseData => { let resData: any = responseData; if (resData.statusCode !== "200") { this.router.navigate(['/home']); } else { tempObj = resData } }, error => { console.log(error); tempObj = false; debugger }); break;
      case 'put': this.http.put(this.httpObj.url, this.httpObj.options).subscribe(responseData => { let resData: any = responseData; if (resData.statusCode !== "200") { this.router.navigate(['/home']); } else { tempObj = resData } }, error => { console.log(error); tempObj = false; debugger }); break;
      case 'delete': this.http.delete(this.httpObj.url, this.httpObj.options).subscribe(responseData => { let resData: any = responseData; if (resData.statusCode !== "200") { this.router.navigate(['/home']); } else { tempObj = resData } }, error => { console.log(error); tempObj = false; debugger }); break;
      case 'patch': this.http.patch(this.httpObj.url, this.httpObj.options).subscribe(responseData => { let resData: any = responseData; if (resData.statusCode !== "200") { this.router.navigate(['/home']); } else { tempObj = resData } }, error => { console.log(error); tempObj = false; debugger }); break;
      case 'head': this.http.head(this.httpObj.url, this.httpObj.options).subscribe(responseData => { let resData: any = responseData; if (resData.statusCode !== "200") { this.router.navigate(['/home']); } else { tempObj = resData } }, error => { console.log(error); tempObj = false; debugger }); break;
      case 'default': tempObj = false; break;
    }
    return tempObj;
  }
}
