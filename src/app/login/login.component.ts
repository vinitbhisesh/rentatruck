import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { debug } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private commonService: CommonService, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  frmUserOTP: FormGroup;
  isValidateOTP: boolean = false;
  btnSubmitText: string = 'Generate OTP';

  ngOnInit() {
    this.frmUserOTP = new FormGroup(
      {
        UserMobileNumber: new FormControl({ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
        OTP: new FormControl({ value: '', disabled: this.isValidateOTP }),
      });
    this.isValidateOTP = false;
    this.btnSubmitText = 'Generate OTP';
  }
  onUserOTP() {
    if (this.frmUserOTP.valid) {
      if (this.isValidateOTP == false) {
        let params = new HttpParams();
        params.set('UserMobileNumber', this.frmUserOTP.value.UserMobileNumber);
        let responseData: any = this.commonService.setHttp('get', this.commonService.getBaseUrl + 'User/UserOTP', false, params);
        debugger
        if (responseData.statusCode === "200") {
          this.isValidateOTP = true;
          this.btnSubmitText = 'Verify';
        }

        //this.http.get(this.commonService.getBaseUrl() + 'User/UserOTP?UserMobileNumber=' + this.frmUserOTP.value.UserMobileNumber)
        //  .subscribe(responseData => {
        //    let resData: any = responseData;
        //    if (resData.statusCode === "200") {
        //      this.isValidateOTP = true;
        //      this.btnSubmitText = 'Verify';
        //    }
        //  }, error => {
        //    console.log(error);
        //    debugger
        //  })
      }
      else {
        let params = new HttpParams();
        params.set('UserMobileNumber', this.frmUserOTP.value.UserMobileNumber);
        params.set('OTP', this.frmUserOTP.value.OTP);
        let responseData: any = this.commonService.setHttp('get', this.commonService.getBaseUrl + 'User/UserOTP', false, params);
        debugger
        if (responseData.statusCode === "200") {
          this.commonService.setUserObj({ UserMobileNumber: this.frmUserOTP.value.UserMobileNumber });
          localStorage.setItem("userDetails", JSON.stringify(responseData.responseData));
          this.commonService.sendMessage('1');
          this.router.navigate(['/dashboard']);
        }

        //this.http.get(this.commonService.getBaseUrl() + 'User/ValidateOTP?UserMobileNumber=' + this.frmUserOTP.value.UserMobileNumber + '&OTP=' + this.frmUserOTP.value.OTP)
        //  .subscribe(responseData => {
        //    let resData: any = responseData;
        //    debugger
        //    if (resData.statusCode === "200") {
        //      this.commonService.setUserObj({ UserMobileNumber: this.frmUserOTP.value.UserMobileNumber });
        //      localStorage.setItem("userDetails", JSON.stringify(resData.responseData));
        //      this.commonService.sendMessage('1');
        //      this.router.navigate(['/dashboard']);
        //    }
        //  }, error => {
        //    console.log(error);
        //    debugger
        //  })
      }
    }
    // this.commonService.sendMessage('1');
    // this.router.navigate(['/dashboard']);
  }
  onCloseLoginModal() {
    document.getElementById("loginPopup_id").classList.remove('show');
    document.getElementById("loginPopup_id").style.display = 'none';
  }
  onGoToRegister() {
    document.getElementById("loginPopup_id").classList.remove('show');
    document.getElementById("loginPopup_id").style.display = 'none';
    document.getElementById("registerPopup_id").classList.add('show');
    document.getElementById("registerPopup_id").style.display = 'block';
  }
}
