import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails: object;
  frmUpdateUser: FormGroup;

  constructor(private commonService: CommonService, private http: HttpClient, private router: Router) {
    this.userDetails = this.commonService.getUserAfterLoggedObj();

    //aadharFile: null
    //actionType: null
    //appUpdates: null
    //city: null
    //cityName: null
    //createdBy: "USR-16102019-11"
    //createdOn: "2019-10-17T05:22:51.5354989+00:00"
    //creditPoints: null
    //department: null
    //deviceID: null
    //file1: null
    //file2: null
    //file3: null
    //file4: null
    //file5: null
    //isDeleted: "false"
    //isPushNotification: false
    //key: "USR-16102019-11"
    //kycDocumentLink: null
    //modifiedBy: "USR-16102019-11"
    //modifiedOn: "2019-10-17T05:22:51.5355043+00:00"
    //organizationId: null
    //panFile: null
    //parent: null
    //registrationID: null
    //registrationToken: null
    //state: null
    //stateName: null
    //userAadharNumber: null
    //userAddress: null
    //userAlternateMobileNumber: null
    //userEmailD: null
    //userFullName: null
    //userID: "USR-16102019-11"
    //userIDs: null
    //userLastLogin: null
    //userMobileNumber: "9763111321"
    //userPANNumber: null
    //userPassword: null
    //userPhotoLink: null
    //userRole: null
    //userStatus: null
    //userType: "Owner"
    //vehicleGroup: null
    if (this.userDetails === undefined) {
      this.router.navigate(['/home']);
    }


  }

  ngOnInit() {
    this.frmUpdateUser = new FormGroup(
      {
        userFullName: new FormControl({ value: '', disabled: false }, Validators.required),
        userEmailD: new FormControl({ value: '' }),
        userMobileNumber: new FormControl({ value: '' }, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
        userAlternateMobileNumber: new FormControl({ value: '' }, Validators.compose([Validators.minLength(10), Validators.maxLength(10)])),
        state: new FormControl({ value: '', disabled: false }, Validators.required),
        city: new FormControl({ value: '', disabled: false }, Validators.required),
      });
  }

  onSubmit() {
    let temp = JSON.parse(localStorage.getItem("userDetails"));

    let params = new HttpParams();
    //params.set('city', this.frmUpdateUser.city);
    //params.set('createdBy', this.userDetails.createdBy);
    //params.set('createdOn', this.userDetails.createdOn);
    //params.set('modifiedBy', this.userDetails.modifiedBy);
    //params.set('modifiedOn', this.userDetails.modifiedOn);
    //params.set('state', this.frmUpdateUser.state);
    //params.set('userAddress', this.frmUpdateUser.userAddress);
    //params.set('userAlternateMobileNumber', this.frmUpdateUser.userAlternateMobileNumber);
    //params.set('userEmailD', this.frmUpdateUser.userEmailD);
    //params.set('userFullName', this.frmUpdateUser.userFullName);
    //params.set('userMobileNumber', this.frmUpdateUser.userMobileNumber);
    //params.set('userPhotoLink', this.frmUpdateUser.userPhotoLink);
    ////params.set('aadharFile', this.frmUpdateUser.aadharFile);
    ////params.set('actionType', this.frmUpdateUser.actionType);
    ////params.set('appUpdates', this.frmUpdateUser.appUpdates);
    ////params.set('cityName', this.frmUpdateUser.cityName);
    ////params.set('creditPoints', this.frmUpdateUser.creditPoints);
    ////params.set('department', this.frmUpdateUser.department);
    ////params.set('deviceID', this.frmUpdateUser.deviceID);
    ////params.set('file1', this.frmUpdateUser.file1);
    ////params.set('file2', this.frmUpdateUser.file2);
    ////params.set('file3', this.frmUpdateUser.file3);
    ////params.set('file4', this.frmUpdateUser.file4);
    ////params.set('file5', this.frmUpdateUser.file5);
    ////params.set('isDeleted', this.frmUpdateUser.isDeleted);
    ////params.set('isPushNotification', this.frmUpdateUser.isPushNotification);
    ////params.set('key', this.frmUpdateUser.key);
    ////params.set('kycDocumentLink', this.frmUpdateUser.kycDocumentLink);
    ////params.set('organizationId', this.frmUpdateUser.organizationId);
    ////params.set('panFile', this.frmUpdateUser.panFile);
    ////params.set('parent', this.frmUpdateUser.parent);
    ////params.set('registrationID', this.frmUpdateUser.registrationID);
    ////params.set('registrationToken', this.frmUpdateUser.registrationToken);
    ////params.set('stateName', this.frmUpdateUser.stateName);
    ////params.set('userAadharNumber', this.frmUpdateUser.userAadharNumber);
    ////params.set('userID', this.frmUpdateUser.userID);
    ////params.set('userIDs', this.frmUpdateUser.userIDs);
    ////params.set('userLastLogin', this.frmUpdateUser.userLastLogin);
    ////params.set('userPANNumber', this.frmUpdateUser.userPANNumber);
    ////params.set('userPassword', this.frmUpdateUser.userPassword);
    ////params.set('userRole', this.frmUpdateUser.userRole);
    ////params.set('userStatus', this.frmUpdateUser.userStatus);
    ////params.set('userType', this.frmUpdateUser.userType);
    ////params.set('vehicleGroup', this.frmUpdateUser.vehicleGroup);

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': "bearer " + temp.idToken,
        'Accept': "application/json"
      }),
      params: params
    };

    this.http.put(this.commonService.getBaseUrl() + 'masterdata/User', options)
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

  onChangeState(e) {
    this.frmUpdateUser.state.setValue(e.target.value, {
      onlySelf: true
    })
  }
}
