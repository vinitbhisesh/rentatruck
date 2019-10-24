import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  constructor(private commonService: CommonService, private router: Router) { }
  isValidateOTPregister: boolean = false;
  frmRegisterUser: FormGroup;
  isValidateOTP: boolean = false;
  btnSubmitText: string = 'Generate OTP';

  onResendOTPRegister() {
  }
  ngOnInit() {
    this.frmRegisterUser = new FormGroup({
      UserType: new FormControl('', Validators.required),
      UserMobileNumber: new FormControl({ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      OTP: new FormControl({ value: '', disabled: this.isValidateOTP })
    });
    this.isValidateOTP = false;
    this.btnSubmitText = 'Generate OTP';
  }
  onUserOTP() {
    if (this.frmRegisterUser.valid) {
      if (this.isValidateOTP == false) {
        let params = { ['UserMobileNumber']: this.frmRegisterUser.value.UserMobileNumber };
        this.commonService.setHttp('get', 'User/UserOTP', false, params);
        this.commonService.getHttp().then((responseData) => {
          if (responseData.statusCode === "200") {
            this.isValidateOTP = true;
            this.btnSubmitText = 'Verify';
          }
          else {
            console.log('Data not found');
            debugger
          }
          debugger;
        });
      }
      else {
        let params = { ['UserMobileNumber']: this.frmRegisterUser.value.UserMobileNumber, ['OTP']: this.frmRegisterUser.value.OTP };
        this.commonService.setHttp('get', 'User/ValidateOTP', false, params);
        this.commonService.getHttp().then((responseData) => {
          if (responseData.statusCode === "200") {
            this.commonService.setUserObj({ UserMobileNumber: this.frmRegisterUser.value.UserMobileNumber });
            localStorage.setItem("userDetails", JSON.stringify(responseData.responseData));
            this.onRegisterUser();
            //this.commonService.sendMessage('1');
            //this.router.navigate(['/dashboard']);
          }
          else {
            console.log('Data not found');
            debugger;
          }
          debugger;
        });
      }
    }
  }
  onGoToLogin() {
    document.getElementById("loginPopup_id").classList.add('show');
    document.getElementById("loginPopup_id").style.display = 'block';
    document.getElementById("registerPopup_id").classList.remove('show');
    document.getElementById("registerPopup_id").style.display = 'none';
  }
  onRegisterUser() {
    let params = {
      ['UserType']: this.frmRegisterUser.value.UserType,
      ['UserMobileNumber']: this.frmRegisterUser.value.UserMobileNumber,
      ['OTP']: this.frmRegisterUser.value.OTP
    };
    this.commonService.setHttp('post', 'User/RegisterUser', true, params);
    this.commonService.getHttp().then((responseData) => {
      if (responseData.statusCode === "200") {
        this.commonService.setUserObj({
          UserID: responseData.responseData,
          UserMobileNumber: this.frmRegisterUser.value.UserMobileNumber,
          OTP: this.frmRegisterUser.value.OTP
        });
        this.commonService.sendMessage('1');
        this.router.navigate(['/dashboard']);
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
  onCloseRegisterModal() {
    document.getElementById("registerPopup_id").classList.remove('show');
    document.getElementById("registerPopup_id").style.display = 'none';
  }
}
