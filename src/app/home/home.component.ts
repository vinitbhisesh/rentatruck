import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private commonService: CommonService, private http: HttpClient, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        let isLoggedUserDetails: any = this.commonService.getUserAfterLoggedObj();
        if (isLoggedUserDetails === undefined) {
          let isLogged: any = this.commonService.getUserObj();
          if (isLogged) {
            this.commonService.setUserAfterLoggedObj({
              aadharFile: null,
              actionType: null,
              appUpdates: null,
              city: null,
              cityName: null,
              createdBy: "USR-16102019-11",
              createdOn: "2019-10-18T11:45:12.2841588+00:00",
              creditPoints: null,
              department: null,
              deviceID: null,
              file1: null,
              file2: null,
              file3: null,
              file4: null,
              file5: null,
              isDeleted: "false",
              isPushNotification: false,
              key: "USR-16102019-11",
              kycDocumentLink: null,
              modifiedBy: "USR-16102019-11",
              modifiedOn: "2019-10-18T11:45:12.2841632+00:00",
              organizationId: null,
              panFile: null,
              parent: null,
              registrationID: null,
              registrationToken: null,
              state: null,
              stateName: null,
              userAadharNumber: null,
              userAddress: null,
              userAlternateMobileNumber: null,
              userEmailD: null,
              userFullName: null,
              userID: "USR-16102019-11",
              userIDs: null,
              userLastLogin: null,
              userMobileNumber: "9763111321",
              userPANNumber: null,
              userPassword: null,
              userPhotoLink: null,
              userRole: null,
              userStatus: null,
              userType: "Owner",
              vehicleGroup: null,
            });

            //this.commonService.setHttp('get', 'User/' + isLogged.userMobileNumber, true, false);
            //this.commonService.getHttp().then((responseData) => {
            //  if (responseData.statusCode !== "200") {
            //    this.router.navigate(['/home']);
            //  }
            //  else {
            //    this.commonService.setUserAfterLoggedObj(responseData.responseData);
            //  }
            //});
          }
        }
      }
    });
  }
  ngOnInit(){
    this.commonService.isUserlogedincheck.next(false)

  }
}
