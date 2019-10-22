import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    this.frmUserOTP = new FormGroup({
      UserMobileNumber: new FormControl({ value: '9763111321', disabled: false }, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      OTP: new FormControl({ value: '', disabled: this.isValidateOTP })
    });
    this.isValidateOTP = false;
    this.btnSubmitText = 'Generate OTP';
  }
  onUserOTP() {
    //if (this.frmUserOTP.valid) {
    //  if (this.isValidateOTP == false) {
    //    let params = { ['UserMobileNumber']: this.frmUserOTP.value.UserMobileNumber };
    //    this.commonService.setHttp('get', 'User/UserOTP', false, params);
    //    this.commonService.getHttp().then((responseData) => {
    //      if (responseData.statusCode === "200") {
    //        this.isValidateOTP = true;
    //        this.btnSubmitText = 'Verify';
    //      }
    //      else {
    //        console.log('Data not found');
    //        debugger
    //      }
    //    });
    //  }
    //  else {
    //    let params = { ['UserMobileNumber']: this.frmUserOTP.value.UserMobileNumber, ['OTP']: this.frmUserOTP.value.OTP };
    //    this.commonService.setHttp('get', 'User/ValidateOTP', false, params);
    //    this.commonService.getHttp().then((responseData) => {
    //      if (responseData.statusCode === "200") {
    //        this.commonService.setUserObj(responseData.responseData);
    //        this.commonService.sendMessage('1');
    //        this.router.navigate(['/dashboard']);
    //      }
    //      else {
    //        console.log('Data not found');
    //        debugger;
    //      }
    //    });
    //  }
    //}
    this.commonService.setUserObj({
      applicationID: "qNomLmSdIwViH5D"
      , idToken: "eyJraWQiOiJzRFZCMW1yYjdISWEwWUtnOCtpaVU1TmRud1pPaStjcXZGMzk5dktkem93PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzYjA4ZGNkMi05MDkyLTQ4MWQtOGI2Mi1hM2QwMDJkODk0OGQiLCJhdWQiOiI0Z3NrNmNuZWxoZXBrZXB0bWZuaTNvaGFuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZXZlbnRfaWQiOiJhZmVjYTU0Yy03ODdhLTRjOGEtYTg4OS0yYWFlOTRjMTYxNDMiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3MTQ4MTMxNSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9vdkN3Qm02SzEiLCJjb2duaXRvOnVzZXJuYW1lIjoiOTc2MzExMTMyMSIsImV4cCI6MTU3MTQ4NDkxNSwiaWF0IjoxNTcxNDgxMzE1LCJlbWFpbCI6InN1aml0Lmt1QHNwbHVzcGwuY29tIn0.BY4BpyQI0sS64UCSmP-AmrWhqll6YK9DZcr_DXuoaYtz0ICa_ZkrhaX2vsHVvd2R6gymWxTelWnIU1g0KGEYPMyMT8v8EM0h_jS2uBGvCqHucA6MxqbMZfbJrv9HS33EQwJcBtt0TCfbNMGL37r7vxAHoJjn7DpxcIM_SGpKzz_vkYLwxB_YgwLfbrNvMiR8dSIcusZ8OxolTZPUgXhzL26cnziORXgF7n-ytYTxS1yhEua94QEsUTHrjqQpgo1ODLdMR48BC6vRzQ0jnqC8Iww_DP7_-_9_NfTzRU-p75y1Po90ApVGEdG7p8B0zZENkeQZMlUgcHMBrVe8IdcyMg"
      , refreshToken: "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.J7AoorBP_5LgS5s1xCOxb-YOUCWdUTljLUSB2uQOPSLKP_n8Bi-zmJPnJ7MgKAvVlsaGnjrhdFFGCSc8vO4kR6wCoZMfMBXqJThr8ZD1g2qkLLYpFT9QSpwN8S2rv13FSJ_Bbc-N6ZF-9v27g9sugbz3Xls9dvnSYgElHPtpJGu3ns6kPBlvG3EYpLF04CxYxoqj2kxQYkpruJNqNkFEyr45J2-6YxTz7O4tDrXVtJpH3SYM8PnnCsJaMBfANaZYSj1r0nAa3Y1xp0zONsYiClVHy1Hf7GryO51klLD5VRvnuGcSyVHKHc7_nW9a166gOHKnIU1ZZN7kTTHX0d1I9Q.MZeQvkv3PN9kHIf3.obO42gd1OiTiUdcI0r-3p1egV2Ss3C1I3huJcegz-RA_FaQyfLLn2rTTe_-BKM_XvXolJy9kMONXeOjmBr_zvJxCjucwploXeOkqRX9QVR1_E9DNqw489T4tQ__yzUunxQcqqyuWL5Ec9x-sCX0SBm1uit68y68TOWbyt1SkVu5XY9PibPp-zK__Big26KjpqhdT8vMD6BAudTolxH3qablV8H8YiGX14cjNcIPYK1myveB0O-I4E6-gnaNNQTP4Wvc030skpnMdfIYWE56pw6NqflhdfcDYXQDfpEhbeicIlbcChkJD666IMm_t70-quNhwZjaB73nyi4LeNW5AX9HShCZNrPIYS9QwN0xyv7EJ0mqPvjfHJtoyGwMiK4nVDrBLA3q-OrB97YsNWPGLqP39E6TDbyYOIjXPGPSq_nXtkQ_RgP-3yYQHMe_IMRBex0UEoMXeCtpz97ex21NN3dzCEw8AIrCa7YQGRxwPaA06f65_mZmdt4F2tyhlkR7C9cC2sIT25bL2vhUvojvnIDasKIWrWBpJYKknxjiZR8ZKHLwxQ_1PPkrYCZFnS4DbbrsT_X_WX42zcYzs_64omXC_pyLNyJOKnqFeSq6flfEsq5_Kc_AfqHsS1KDXPiE6XaV9D3nSpZyoZC63kaiei3d9W1m_qRC6GNKQVRv6_orYN3CqEPRhSuXZRGV60gSrUa0CiOTUEJ9Zh1HNV1ZXjv1KRv-xfdgXAtJoBEXfuImXOxmEMH5t263Syiyy0lkVdIzwI2waJnW1wppQ2xBI9aGG4MfgrizulyKuDw3e63ZoTyxKev1vIAAJaQuIy7O62-3yBbpOSoYPOybZ6mQO7ioZwGuAq1S_2tllf8LvVrmwcBNsuMk85Sf20aJj64RFQsahqVZAbaTA4_eVL4aV9eFk-QwCBZ1_5lP9jU_wTMWaaD9ckOwyzaYAE4HXoA9PohQMPHrRgOpW7FXbGTHCRvyYQOlvRJIyw_3xq0YslLfB_3M6HpwNAcQAg5Ihi_0LfzqNRUgdBm87qK8uJkfGwtE2bXKkie7r9VvrwIxIAmUBi_DhPhtzDjJYt3DxpcK2YhtBPI_9r_FIMqBe6dq-bhHTunF04I32e5ImPsr0y5GDW5GFxnKHsIJ0w89HZ36BEneFp4HdMHYYWM_guinMODlH3L_UthI4crFQVWV9xvFKSnRpT7JE1MuAEod_vC5KdFVIiy-36tGRpnybB82udi2RqRuzAj8JV655Cid9ZemNibIBJHaUAxG3aGMb7-DuA_9x6veeGOw3APAca1M.OFvY5Hc5ZaCH75XAu_YBeA"
      , userMobileNumber: "9763111321"
    });
    this.commonService.sendMessage('1');
    this.router.navigate(['/dashboard']);
  }


  onGoToRegister() {
    document.getElementById("loginPopup_id").classList.remove('show');
    document.getElementById("loginPopup_id").style.display = 'none';
    document.getElementById("registerPopup_id").classList.add('show');
    document.getElementById("registerPopup_id").style.display = 'block';
  }

  onCloseLoginModal() {
    document.getElementById("loginPopup_id").classList.remove('show');
    document.getElementById("loginPopup_id").style.display = 'none';
  }
}
