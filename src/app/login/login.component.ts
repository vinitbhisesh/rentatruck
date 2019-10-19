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
    if (this.frmUserOTP.valid) {
      if (this.isValidateOTP == false) {
        let params = { ['UserMobileNumber']: this.frmUserOTP.value.UserMobileNumber };
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
        });
      }
      else {
        let params = { ['UserMobileNumber']: this.frmUserOTP.value.UserMobileNumber, ['OTP']: this.frmUserOTP.value.OTP };
        this.commonService.setHttp('get', 'User/ValidateOTP', false, params);
        this.commonService.getHttp().then((responseData) => {
          if (responseData.statusCode === "200") {
            this.commonService.setUserObj(responseData.responseData);
            this.commonService.sendMessage('1');
            this.router.navigate(['/dashboard']);
          }
          else {
            console.log('Data not found');
            debugger;
          }
        });
      }
    }
    //this.commonService.setUserObj({
    //  applicationID: "oekHvUAzER5oyBK",
    //  idToken: "eyJraWQiOiJzRFZCMW1yYjdISWEwWUtnOCtpaVU1TmRud1pPaStjcXZGMzk5dktkem93PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzYjA4ZGNkMi05MDkyLTQ4MWQtOGI2Mi1hM2QwMDJkODk0OGQiLCJhdWQiOiI0Z3NrNmNuZWxoZXBrZXB0bWZuaTNvaGFuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZXZlbnRfaWQiOiIzYTE4ZWNmOS1iYzMyLTQzNjQtYmFlNi0zNmI0NWRhMWVlNTAiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3MTQwMzE5OSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9vdkN3Qm02SzEiLCJjb2duaXRvOnVzZXJuYW1lIjoiOTc2MzExMTMyMSIsImV4cCI6MTU3MTQwNjc5OSwiaWF0IjoxNTcxNDAzMTk5LCJlbWFpbCI6InN1aml0Lmt1QHNwbHVzcGwuY29tIn0.IMdAdSky3hK_mfrrpoTuP_Y6zeEhvmtI0o18ayW4VkJPKfVYsZIn4etSgNalEZdk3V6vsDy688goSLg_CtS4QSBe3MZVdaBinjhEZDDweGyaXzuo5FozbXiXpHpPLAQBaueNEQhpqU263HUNCAblFOiiSfIrRL-X5KAqvOKIe5jXjCopqkqO8GHS8jf2AZEgNvBDNiWdhQ-EsWufn930H4Ck8V_k5ti6Iy2ngATw_Jx8Ymo0LplJSk5CU5pzE6U6H6dQnaHwSxBuldaby7CtBQZg1hEmSQPkSyxW8GLrmzM8COnVg8wOHQrndi6PikAlxhpF2nqSEgT93KdUmk01YQ",
    //  refreshToken: "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.FsPs69PTmBZvc-M9lRddJYA_CPaejFrwzR4h4NjnimpOxeyk67PA6x6D1pKNuuBI6DLhZpHtVQmfsR9hi76fJsMe55HGJvcq9UvuK1WiGWhIMK_RNupc7K8nAqZks7acjhrH7gOTLcooNLEgZ16m8ZOnM48dhj6H5sFDh5HZBcJx801KZFVk8ngaSNooM7k41rkC9WIc1aLpZhqHa5IVnCj9ZG9iTWC_Kmq_yiG5XsUaMR4lmYxFujXZxyt87TDABq3HuiuHXLeXP7ChxyvPqYVmHWXdWdkzsCSoLMfeDmsjVvvLsSUQTL6LUHvzPBHlJGgFMA3tWcx9CG1wLhcwqg.00nFl1mMBCc1BkkX._B_kTH7ETbKqsGcO0R_ScdKCVHtiN2X0lB7JrNgFA6FifJzmQ4kMkjnwhvrtjp8tVeK5_wYeFib3vL--kpOxWPocngiT_Ng9htP4c8gsl-EeUubbGGQ32S9cFpL_N57wA3UqTd1u9EgtSUizYwlmhnNLqCI0meMMWZesKg1eNLhacbSSfJRb8a4AZLM68nwTXvNC3jFpzzt4IBzhcb1u8IyZP0Me9DcxfYDS5PHYtrZ1kcYUQl-UdIGuo7R5OE-diKNgzPrFHfW7O0uJHH_BISysDLiL7TVgPmVWI-JvVqqzFa4ZWBYpHwllsZlu5FVYkiLtO-mHugnJTm6GSPmCR0cKsHvuUo13dklPII2PxFPQcRtJ0UhjWcIXVZ_qE__gXDL9MTWV9s9Xn4XnZ7UYPUqA_lOcwpUaOGya2exvPjj7ES_H_BjKM0zVnnlxcNtNDamxftVQNguUVJAcIF3sv9BEKiBhbBY3GUk85fMrU_ajoP030mP7bnw-RX8FOXKv3MAAC6FtL5z2Ar19HDpnSk0NwwCfynxNeSgxy-W452gt72vqoTt6EwR-E-xxRHEigiaafsT_JGD5KcSizsKj2BKu3oqz-lyFbgVRskiUlAFUxGfVE2OsKEynyxhfb7yCjL-8s8XaYNChyCNG7qsBUM3vmqdFTpiX8VJht67CTo0i5oSmkFKiQKLgMCtwLfTb97WvbLmck1LSyLeTdJn8nPOsR041MuoNRkwpV4zI6pKBvJOfOnygZByY26boouzKQXZnRDrSKPPtd_d-1MxTVaYlp254__KGy9aS2jGqGFjYsdJP6kz4m7QHWQYuqW29QqUXTuMmNphhTC_Oenux7L4mQDQK302jRYBiHi2YMIqZCAaYQyszgqWqXCP5gZPtIkSVBhE5WvhMDm6jkD3TFa12xVNPdgRZkLPgkQrEVjkladO-gmuOEEkPB-JATguqsSsqbUuDtWk9P-VnstkQ1Cf9YCpYU7mP15dTxtJQo-40eWFFuLxX33PlUpmR-exlR2gMsE_D8wP_a5hqyRTYpR8tGS911nKKUKp6GzEYGFqIvmMZiR6SDHOmG3lx78t6gBmiYujONxQuL5s4ZhX_zNsRF_ljm4sFlM3WiuJrKAt01GapBfrMlefwxx5tz7dJtHoMlWdvZ-7NvHLFYzdDm24_9NmnEyAiFxbaXBirF6SNcV4_r-tVX9UO2JyLhpppubhOyO9I6bruI03lwDOe97c0r2g7KS0ketgAvIWmDlHCGxCTZqdMt5YvkEUmXinlhKyB6FQPTBXx1-cS6LA.DindiGz_L3qODik82ZbhWQ",
    //  userMobileNumber: "9763111321"
    //});
    //this.commonService.sendMessage('1');
    //this.router.navigate(['/dashboard']);
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
