import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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

  constructor(private commonService: CommonService, private http: HttpClient) { }



  ngOnInit() {
    this.userDetails = this.commonService.getUserAfterLoggedObj();
    this.bindState(undefined);
    this.frmUpdateUser = new FormGroup({
      userFullName: new FormControl({ value: this.userDetails.userFullName, disabled: false }, Validators.required),
      userEmailD: new FormControl({ value: this.userDetails.userEmailD || '' }),
      userMobileNumber: new FormControl({ value: this.userDetails.userMobileNumber, disabled: false }, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      userAlternateMobileNumber: new FormControl({ value: this.userDetails.userAlternateMobileNumber, disabled: false }, Validators.compose([Validators.minLength(10), Validators.maxLength(10)])),
      state: new FormControl({ value: this.userDetails.state, disabled: false }, Validators.required),
      city: new FormControl({ value: this.userDetails.city, disabled: false }, Validators.required)
    });
  }

  onSubmit() {
    if (this.frmUpdateUser.valid) {

      let params = {
        ['userMobileNumber']: this.frmUpdateUser.value.userMobileNumber,
        ['userFullName']: this.frmUpdateUser.value.userFullName,
        ['userAlternateMobileNumber']: this.frmUpdateUser.value.userAlternateMobileNumber,
        ['userEmailD']: this.frmUpdateUser.value.userEmailD,
        ['organizationId']: [{ "organizationID": "ORG-16102019-1" }, { "organizationID": "ORG-16102019-2" }],
        ['userType']: this.userDetails.userType || 'Owner',
        ['department']: this.userDetails.department || 'DPT-16102019-1',
        ['city']: this.frmUpdateUser.value.city.key,
        ['state']: this.frmUpdateUser.value.state.key,
        ['createdBy']: this.userDetails.createdBy,
        ['modifiedBy']: this.userDetails.modifiedBy,
        //organizationId: [UserOrganization{ "ORG-16102019-1" }]
        //['parent']: this.userDetails.parent || this.userDetails.createdBy,
        //['userPhotoLink']: this.frmUpdateUser.value.userPhotoLink || '',
        //['userAddress']: this.frmUpdateUser.value.userAddress,
        //['modifiedOn']: this.frmUpdateUser.value.modifiedOn,
        //['createdOn']: this.frmUpdateUser.value.createdOn,
        //['userID']: this.frmUpdateUser.value.userID,
        //['aadharFile']: this.frmUpdateUser.value.aadharFile,
        //['actionType']: this.frmUpdateUser.value.actionType,
        //['appUpdates']: this.frmUpdateUser.value.appUpdates,
        //['cityName']: this.frmUpdateUser.value.cityName,
        //['creditPoints']: this.frmUpdateUser.value.creditPoints,
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
        //['vehicleGroup']: this.frmUpdateUser.value.vehicleGroup
      };

      let orgIds = JSON.stringify([{ "organizationID": "OR-23102019-2" }]);

      //var obj = {
      //  userMobileNumber: this.frmUpdateUser.value.userMobileNumber,
      //  userFullName: this.frmUpdateUser.value.userFullName,
      //  userAlternateMobileNumber: this.frmUpdateUser.value.userAlternateMobileNumber,
      //  userEmailD: this.frmUpdateUser.value.userEmailD,
      //  organizationId: orgIds,
      //  userType: this.userDetails.userType || 'Owner',
      //  department: this.userDetails.department || 'DPT-16102019-1',
      //  city: this.frmUpdateUser.value.city.key,
      //  state: this.frmUpdateUser.value.state.key,
      //  createdBy: this.userDetails.createdBy,
      //  modifiedBy: this.userDetails.modifiedBy,
      //}

      var para = {
        ["city"]: "SC-14102019-74",
        ["createdBy"]: "USR-16102019-11",
        ["department"]: "DPT-16102019-1",
        ["modifiedBy"]: "USR-16102019-11",
        ["organizationId"]: orgIds,
        ["state"]: "SC-14102019-1",
        ["userAlternateMobileNumber"]: "9763111322",
        ["userAddress"]: "abc",
        ["userEmailD"]: "sgk@gmail.com",
        ["userFullName"]: "sgk",
        ["userMobileNumber"]: "9763111321",
        ["userType"]: "Owner"
      }

      var obj = {
        "city": "SC-14102019-74",
        "createdBy": "USR-16102019-11",
        "department": "DPT-16102019-1",
        "modifiedBy": "USR-16102019-11",
        "organizationId": orgIds,
        "state": "SC-14102019-1",
        "userAlternateMobileNumber": "9763111322",
        "userAddress": "abc",
        "userEmailD": "sgk@gmail.com",
        "userFullName": "sgk",
        "userMobileNumber": "9763111321",
        "userType": "Owner"
      }
      let fd = new FormData();
      fd.append('json', JSON.stringify(obj));

      //fd.append('json', JSON.stringify(obj));

      var formData: any = new FormData();
      formData.append("userMobileNumber", "9763111321");
      formData.append("userFullName", "sgk");
      formData.append("userAlternateMobileNumber", "9763111322");
      formData.append("userAddress", "abc");
      formData.append("userEmailD", "sgk@gmail.com");
      formData.append("userPhotoLink", { "file1": "asfdf.jpg" });
      formData.append("organizationId", [{ "organizationID": "OR-23102019-2" }]);
      formData.append("userType", "Owner");
      formData.append("department", "DPT-16102019-1");
      formData.append("city", "SC-14102019-74");
      formData.append("state", "SC-14102019-1");
      formData.append("createdBy", "USR-16102019-11");
      formData.append("modifiedBy", "USR-16102019-11");

      this.http.put('https://api.rentatruck.shauryatechnosoft.com/masterdata/User', formData, {
        headers: new HttpHeaders({
          //'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
          //'Accept': "application/json",
          'Authorization': "bearer eyJraWQiOiJzRFZCMW1yYjdISWEwWUtnOCtpaVU1TmRud1pPaStjcXZGMzk5dktkem93PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzYjA4ZGNkMi05MDkyLTQ4MWQtOGI2Mi1hM2QwMDJkODk0OGQiLCJhdWQiOiI0Z3NrNmNuZWxoZXBrZXB0bWZuaTNvaGFuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZXZlbnRfaWQiOiJlNzkzODMyMy04ZjVmLTQwOTUtYjgwOS1lYTI3NTNiYzc5NjIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3MTc0MjMzOSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9vdkN3Qm02SzEiLCJjb2duaXRvOnVzZXJuYW1lIjoiOTc2MzExMTMyMSIsImV4cCI6MTU3MTkyNzk5NiwiaWF0IjoxNTcxOTI0Mzk2LCJlbWFpbCI6InN1aml0Lmt1QHNwbHVzcGwuY29tIn0.L1ZQsRuaBr2R-CPg4HajFBO9sQiOHHJAuUoeUytZIgWyM8jgeY4QkK6r4cqRC4LNEYK1eG22s64zYS_uNZPSqaN0y3T4IJaR4XsGGHdNFc0Hx3qDJSsZsmq9go4ghlPo959KuxTVe-NzXV56AUHoLqnYlgiBihlt5Xg4ds5UROWpafUYWSyRWxBZAsu3JUUTG-D7t8nEoBXYYw5a94XI8az_5AHZdqmRiOyQiicNNlU_-aUlW98iu9mYZaZI3LR7SJRglwmyqlGFOp4T7lURDNIdUod6VAW6cg1thXBbXJH32YL1nOM3-zf9wPYbtdILU-S0-jMBM_BEzzoc-L_NFw",
        }),
      }).subscribe(
        (response) => {
          console.log(response);
          debugger;
        },
        (error) => {
          console.log(error);
          debugger;
        })


      //this.http.put('https://api.rentatruck.shauryatechnosoft.com/masterdata/User', {
      //  headers: new HttpHeaders({
      //    'Content-Type': 'application/json',
      //    //'Content-Type': 'multipart/form-data',
      //    'Authorization': "bearer eyJraWQiOiJzRFZCMW1yYjdISWEwWUtnOCtpaVU1TmRud1pPaStjcXZGMzk5dktkem93PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzYjA4ZGNkMi05MDkyLTQ4MWQtOGI2Mi1hM2QwMDJkODk0OGQiLCJhdWQiOiI0Z3NrNmNuZWxoZXBrZXB0bWZuaTNvaGFuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZXZlbnRfaWQiOiJlNzkzODMyMy04ZjVmLTQwOTUtYjgwOS1lYTI3NTNiYzc5NjIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3MTc0MjMzOSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9vdkN3Qm02SzEiLCJjb2duaXRvOnVzZXJuYW1lIjoiOTc2MzExMTMyMSIsImV4cCI6MTU3MTkxNDY1NSwiaWF0IjoxNTcxOTExMDU1LCJlbWFpbCI6InN1aml0Lmt1QHNwbHVzcGwuY29tIn0.NYmA71HLieQWHF6rEAjzXUMbeBDFjObqRXwK36zOxe0-mHgPyvPguhiE6ceE544FHgY4MMUXhoo5YfOW78qI5_cvfbjQdSv9y3qVR2bROodDKAAkckFP-wY-P44goceI_ow6IG1FX_cgrB2DueqRHqhujbiembv4J4-D9wg93UYdz98BUpLiVvKwliTDojvOU7HD1C0gBXtZny2DP6SBycD4lTelIrHGccG-BrpIlG-Ux8C1CE5fiZ16ep7FXPSPU8pLHN8_rGyTb9FSHRbtYs_hQw94ddp0SZVVcfBZBjopjLO31RZ13zLBQUdJXQBcWSLzJkUZ_itOm2Dzq-XNsA",
      //  }),
      //  params: para
      //}).subscribe( data => { console.log(data); debugger },
      //  error => { console.log(error); });

      //  .subscribe(data => {
      //  debugger
      //  data
      //});
      //this.commonService.setHttp('put', 'User', true, obj);
      //this.commonService.getHttp().then((responseData) => {
      //  if (responseData.statusCode === "200") {
      //    this.commonService.setUserObj({
      //      UserID: responseData.responseData,
      //      UserMobileNumber: this.frmUpdateUser.value.UserMobileNumber,
      //      OTP: this.frmUpdateUser.value.OTP
      //    });
      //    this.commonService.sendMessage('1');
      //  }
      //  else if (responseData.statusCode === "409") {
      //    alert(responseData.statusMessage);
      //  }
      //  else {
      //    console.log('Data not found');
      //  }
      //  debugger;
      //});
    }
    //let temp = JSON.parse(localStorage.getItem("userDetails"));
  }

  bindState(obj) {
    if (this.states.length && obj && this.frmUpdateUser) {
      this.frmUpdateUser.value.state = obj.stateId;
    }
    else {
      this.commonService.setHttp('get', 'Lookup/State', true, false);
      this.commonService.getHttp().then((responseData) => {
        if (responseData.statusCode === "200") {
          this.states = responseData.responseData;
          obj && (this.frmUpdateUser.patchValue({ state: obj.stateId }), this.onChangeState(obj))
          if (this.userDetails && this.frmUpdateUser) {
            obj = { cityId: this.userDetails.city };
            this.frmUpdateUser.patchValue({ userEmailD: this.userDetails.userEmailD });
            this.frmUpdateUser.patchValue({ state: this.userDetails.state });
            this.onChangeState(obj);
          }
        }
        else if (responseData.statusCode === "409") {
          alert('States not bind');
        }
        else {
          console.log('Data not found');
        }
      });
    }
  }
  onChangeState(obj) {
    if (this.cities.length && obj && this.frmUpdateUser) {
      debugger
      this.frmUpdateUser.patchValue({ city: obj.cityId })
    }
    this.commonService.setHttp('get', 'Lookup/GetCitiesByStateID/' + this.frmUpdateUser.value.state, true, false);
    this.commonService.getHttp().then((responseData) => {
      if (responseData.statusCode === "200") {
        this.cities = responseData.responseData;
        obj && (this.frmUpdateUser.patchValue({ city: obj.cityId }))
        if (this.userDetails && this.frmUpdateUser) {
          this.frmUpdateUser.patchValue({ city: this.userDetails.city });
          this.frmUpdateUser.patchValue({ userEmailD: this.userDetails.userEmailD });
        }
      }
      else if (responseData.statusCode === "409") {
        alert('States not bind');
      }
      else {
        console.log('Data not found');
      }
    })
  }

  onChangeStateUpdateValue() {
    this.frmUpdateUser.patchValue({ state: this.userDetails.state });
    this.frmUpdateUser.patchValue({ city: this.userDetails.city });
  }
}
