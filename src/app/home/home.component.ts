import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private commonService: CommonService, private http: HttpClient, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        let isLoggedUserDetails: any = this.commonService.getUserAfterLoggedObj();
        if (isLoggedUserDetails === undefined) {
          let isLogged: any = this.commonService.getUserObj();
          if (isLogged) {
            let temp = JSON.parse(localStorage.getItem("userDetails"));
            let options = {
              headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': "bearer " + temp.idToken,
                'Accept': "application/json"
              })
            };
            this.http.get(this.commonService.getBaseUrl() + 'masterdata/User/' + isLogged.UserMobileNumber, options)
              .subscribe(responseData => {
                let resData: any = responseData;
                if (resData.statusCode !== "200") {
                  this.router.navigate(['/home']);
                }
                else {
                  this.commonService.setUserAfterLoggedObj(resData.responseData);
                }
              }, error => {
                console.log(error);
                debugger
              })
          }
        }
      }
    });
  }
}
