import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails: any;
  frmUpdateUser: FormGroup;
  states: [] = [];
  cities: [] = [];

  constructor(private commonService: CommonService, private http: HttpClient) {
    this.userDetails = this.commonService.getUserAfterLoggedObj();
    this.commonService.setHttp('get', 'Lookup/State', true, false);
    this.commonService.getHttp().then((responseData) => {
      if (responseData.statusCode === "200") {
        this.states = responseData.responseData;
      }
      else if (responseData.statusCode === "409") {
        alert('States not bind');
      }
      else {
        console.log('Data not found');
      }
    })
  }


  ngOnInit() {
    this.frmUpdateUser = new FormGroup({
      userFullName: new FormControl({ value: this.userDetails.userFullName || '', disabled: false }, Validators.required),
      userEmailD: new FormControl({ value: this.userDetails.userEmailD || '' }),
      userMobileNumber: new FormControl({ value: this.userDetails.userMobileNumber || '' }, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      userAlternateMobileNumber: new FormControl({ value: this.userDetails.userAlternateMobileNumber || '' }, Validators.compose([Validators.minLength(10), Validators.maxLength(10)])),
      state: new FormControl({ value: this.userDetails.state || '', disabled: false }, Validators.required),
      city: new FormControl({ value: this.userDetails.city || '', disabled: false }, Validators.required)
    });
  }

  onSubmit() {
    if (this.frmUpdateUser.valid) {
      debugger
      let params = {
        ['userMobileNumber']: this.frmUpdateUser.value.userMobileNumber,
        ['userFullName']: this.frmUpdateUser.value.userFullName,
        ['city']: this.frmUpdateUser.value.city.key,
        ['createdBy']: this.userDetails.createdBy,
        ['modifiedBy']: this.userDetails.modifiedBy,
        ['state']: this.frmUpdateUser.value.state.key,
        ['userAlternateMobileNumber']: this.frmUpdateUser.value.userAlternateMobileNumber,
        ['userEmailD']: this.frmUpdateUser.value.userEmailD,
        //['userPhotoLink']: this.frmUpdateUser.value.userPhotoLink || '',
        ['parent']: this.userDetails.parent,
        //['userAddress']: this.frmUpdateUser.value.userAddress,
        //['modifiedOn']: this.frmUpdateUser.value.modifiedOn,
        //['createdOn']: this.frmUpdateUser.value.createdOn,
        //['userID']: this.frmUpdateUser.value.userID,
        //['aadharFile']: this.frmUpdateUser.value.aadharFile,
        //['actionType']: this.frmUpdateUser.value.actionType,
        //['appUpdates']: this.frmUpdateUser.value.appUpdates,
        //['cityName']: this.frmUpdateUser.value.cityName,
        //['creditPoints']: this.frmUpdateUser.value.creditPoints,
        //['department']: this.frmUpdateUser.value.department,
        //['deviceID']: this.frmUpdateUser.value.deviceID,
        //['file1']: this.frmUpdateUser.value.file1,
        //['file2']: this.frmUpdateUser.value.file2,
        //['file3']: this.frmUpdateUser.value.file3,
        //['file4']: this.frmUpdateUser.value.file4,
        //['file5']: this.frmUpdateUser.value.file5,
        //['isDeleted']: this.frmUpdateUser.value.isDeleted,
        //['isPushNotification']: this.frmUpdateUser.value.isPushNotification,
        //['key']: this.frmUpdateUser.value.key,
        //['kycDocumentLink']: this.frmUpdateUser.value.kycDocumentLink,
        //['organizationId']: this.frmUpdateUser.value.organizationId,
        //['panFile']: this.frmUpdateUser.value.panFile,
        //['registrationID']: this.frmUpdateUser.value.registrationID,
        //['registrationToken']: this.frmUpdateUser.value.registrationToken,
        //['stateName']: this.frmUpdateUser.value.stateName,
        //['userAadharNumber']: this.frmUpdateUser.value.userAadharNumber,
        //['userIDs']: this.frmUpdateUser.value.userIDs,
        //['userLastLogin']: this.frmUpdateUser.value.userLastLogin,
        //['userPANNumber']: this.frmUpdateUser.value.userPANNumber,
        //['userPassword']: this.frmUpdateUser.value.userPassword,
        //['userRole']: this.frmUpdateUser.value.userRole,
        //['userStatus']: this.frmUpdateUser.value.userStatus,
        //['userType']: this.frmUpdateUser.value.userType,
        //['vehicleGroup']: this.frmUpdateUser.value.vehicleGroup
      };
      this.commonService.setHttp('put', 'User', true, params);
      this.commonService.getHttp().then((responseData) => {
        if (responseData.statusCode === "200") {
          this.commonService.setUserObj({
            UserID: responseData.responseData,
            UserMobileNumber: this.frmUpdateUser.value.UserMobileNumber,
            OTP: this.frmUpdateUser.value.OTP
          });
          this.commonService.sendMessage('1');
        }
        else if (responseData.statusCode === "409") {
          alert(responseData.statusMessage);
        }
        else {
          console.log('Data not found');
        }
        debugger;
      });
    }
    //let temp = JSON.parse(localStorage.getItem("userDetails"));
  }
  onChangeState() {
    this.commonService.setHttp('get', 'Lookup/GetCitiesByStateID/' + this.frmUpdateUser.value.state.key, true, false);
    this.commonService.getHttp().then((responseData) => {
      if (responseData.statusCode === "200") {
        this.cities = responseData.responseData;
      }
      else if (responseData.statusCode === "409") {
        alert('States not bind');
      }
      else {
        console.log('Data not found');
      }
    })
  }
}
