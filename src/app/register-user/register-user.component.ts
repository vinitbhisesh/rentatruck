import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { debug } from 'util';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  constructor(private commonService: CommonService, private http: HttpClient, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  frmRegisterUser: FormGroup;
  isValidateOTP: boolean = false;
  btnSubmitText: string = 'Generate OTP';

  ngOnInit() {
    this.frmRegisterUser = new FormGroup({
      UserType: new FormControl('', Validators.required),
      UserMobileNumber: new FormControl({ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      OTP: new FormControl({ value: '', disabled: this.isValidateOTP }),
    });
    this.isValidateOTP = false;
    this.btnSubmitText = 'Generate OTP';
  }
  onUserOTP() {
    if (this.frmRegisterUser.valid) {
      if (this.isValidateOTP == false) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        this.http.get(this.commonService.getBaseUrl() + 'masterdata/User/UserOTP?UserMobileNumber=' + this.frmRegisterUser.value.UserMobileNumber)
          .subscribe(responseData => {
            let resData: any = responseData;
            if (resData.statusCode === "200") {
              this.isValidateOTP = true;
              this.btnSubmitText = 'Verify';
            }
          }, error => {
            console.log(error);
            debugger
          })
      }
      else {
        this.http.get(this.commonService.getBaseUrl() + 'masterdata/User/ValidateOTP?UserMobileNumber=' + this.frmRegisterUser.value.UserMobileNumber + '&OTP=' + this.frmRegisterUser.value.OTP)
          .subscribe(responseData => {
            let resData: any = responseData;
            if (resData.statusCode === "200") {
              localStorage.setItem("userDetails", JSON.stringify(resData.responseData));
              this.onRegisterUser();
              //this.commonService.sendMessage('1');
              //this.router.navigate(['/dashboard']);
            }
          }, error => {
            console.log(error);
            debugger
          })
      }
    }
    // this.commonService.sendMessage('1');
    // this.router.navigate(['/dashboard']);
  }
  onGoToLogin() {
    document.getElementById("loginPopup_id").classList.add('show');
    document.getElementById("loginPopup_id").style.display = 'block';
    document.getElementById("registerPopup_id").classList.remove('show');
    document.getElementById("registerPopup_id").style.display = 'none';
  }
  onRegisterUser() {
    let params: object = {
      userMobileNumber: this.frmRegisterUser.value.UserMobileNumber,
      userType: this.frmRegisterUser.value.UserType
    }

    let temp = JSON.parse(localStorage.getItem("userDetails"));

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': "bearer " + temp.idToken,
        'Accept': "application/json"
      })
    };
    this.http.post(this.commonService.getBaseUrl() + 'masterdata/User/RegisterUser', params, options)
      .subscribe(responseData => {
        let resData: any = responseData;
        if (resData.statusCode === "200") {
          this.commonService.setUserObj({
            UserID: resData.responseData,
            UserMobileNumber: this.frmRegisterUser.value.UserMobileNumber,
            OTP: this.frmRegisterUser.value.OTP
          });
          this.commonService.sendMessage('1');
          this.router.navigate(['/dashboard']);
        }
        else if (resData.statusCode === "409") {
          alert(resData.statusMessage);
        }
      }, error => {
        console.log(error);
        debugger
      })
  }
  onCloseRegisterModal() {
    document.getElementById("registerPopup_id").classList.remove('show');
    document.getElementById("registerPopup_id").style.display = 'none';
  }
}
