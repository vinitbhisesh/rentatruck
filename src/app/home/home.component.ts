import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { filter } from 'minimatch';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService, private http: HttpClient, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }
  frmUserOTP: FormGroup;
  frmValidateOTP: FormGroup;
  status: boolean = false;
  isValidateOTP: boolean = false;
  formSubmitted = false;
  btnSubmitText: string = 'Generate OTP';
  ngOnInit() {
    this.frmUserOTP = new FormGroup(
      {
        //UserMobileNumber: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
        UserMobileNumber: new FormControl({ value: '', disabled: false }, Validators.required),
        OTP: new FormControl({ value: '', disabled: this.isValidateOTP }),
      });
    this.isValidateOTP = false;
    this.btnSubmitText = 'Generate OTP';
  }

  getBaseUrl() {
    return 'https://api.rentatruck.shauryatechnosoft.com/';
  }

  clickEvent() {
    this.status = !this.status;
  }



  onUserOTP() {
    // if (this.frmUserOTP.valid) {
    //   if (this.isValidateOTP == false) {
    //     this.http.get(this.getBaseUrl() + 'masterdata/User/UserOTP?UserMobileNumber=' + this.frmUserOTP.value.UserMobileNumber + '')
    //       .pipe(map(responseData => {
    //         let resData = [];
    //         if (responseData == null || responseData == '') { return resData } else {
    //           for (const key in responseData) { resData.push(responseData[key]) } return resData;
    //         }
    //       }))
    //       .subscribe(dt => {
    //         this.isValidateOTP = true;
    //         this.btnSubmitText = 'Verify';
    //       }, error => {

    //       })
    //   }
    //   else {
    //     this.http.get(this.getBaseUrl() + 'masterdata/User/ValidateOTP?UserMobileNumber=' + this.frmUserOTP.value.UserMobileNumber + '&OTP=' + this.frmUserOTP.value.OTP)
    //       .pipe(map(responseData => {
            
    //         let resData = [];
    //         if (responseData == null || responseData == '') { return resData } else {
    //           for (const key in responseData) { resData.push(responseData[key]) } return resData;
    //         }
    //       }))
    //       .subscribe(dt => {
    //         this.messageService.sendMessage('1');
    //         this.closeLoginModal();
    //         this.router.navigate(['/dashboard']);
    //         localStorage.info = (JSON.stringify(dt))
    //       }, error => {
    //         //alert(error.error.Message + '\n' + error.message)
    //       })
    //   }
    // }
            this.messageService.sendMessage('1');
            this.router.navigate(['/dashboard']);

  }

  closeLoginModal() {
    document.getElementById("loginPopup_id").classList.remove('show');
    document.getElementById("loginPopup_id").style.display = 'none';
  }

  onValidateOTP() {
    this.http.get(this.getBaseUrl() + 'masterdata/User/UserOTP?UserMobileNumber=9763111321')
      .subscribe(dt => {
        
        localStorage.info = (JSON.stringify(dt))
        //this.checkservice.isUserlogedincheck.next(true)
        //this.router.navigate(['/dashboard']);
        document.getElementById('loginPopup_id').click();
        this.router.navigate(['/dashboard']);
      }, error => {
        
        alert(error.error.Message + '\n' + error.message)
      }
      )

    document.getElementById('loginPopup_id').click();

    this.router.navigate(['/dashboard']);
  }
}
