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
      applicationID: "HHJLXygpVvbZJmI"
      , idToken: "eyJraWQiOiJzRFZCMW1yYjdISWEwWUtnOCtpaVU1TmRud1pPaStjcXZGMzk5dktkem93PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzYjA4ZGNkMi05MDkyLTQ4MWQtOGI2Mi1hM2QwMDJkODk0OGQiLCJhdWQiOiI0Z3NrNmNuZWxoZXBrZXB0bWZuaTNvaGFuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZXZlbnRfaWQiOiJlNzkzODMyMy04ZjVmLTQwOTUtYjgwOS1lYTI3NTNiYzc5NjIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3MTc0MjMzOSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9vdkN3Qm02SzEiLCJjb2duaXRvOnVzZXJuYW1lIjoiOTc2MzExMTMyMSIsImV4cCI6MTU3MTkyNzk5NiwiaWF0IjoxNTcxOTI0Mzk2LCJlbWFpbCI6InN1aml0Lmt1QHNwbHVzcGwuY29tIn0.L1ZQsRuaBr2R-CPg4HajFBO9sQiOHHJAuUoeUytZIgWyM8jgeY4QkK6r4cqRC4LNEYK1eG22s64zYS_uNZPSqaN0y3T4IJaR4XsGGHdNFc0Hx3qDJSsZsmq9go4ghlPo959KuxTVe-NzXV56AUHoLqnYlgiBihlt5Xg4ds5UROWpafUYWSyRWxBZAsu3JUUTG-D7t8nEoBXYYw5a94XI8az_5AHZdqmRiOyQiicNNlU_-aUlW98iu9mYZaZI3LR7SJRglwmyqlGFOp4T7lURDNIdUod6VAW6cg1thXBbXJH32YL1nOM3-zf9wPYbtdILU-S0-jMBM_BEzzoc-L_NFw"
      ,refreshToken: "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.ei9LqmfzdilASkGj2iXmZzKx4wr8lVdIN2bVH-VbBSvbWvN5v_zBjom5Y6835kiPkITibEvlFW5WgM1WE0xms_iR1aC35iAtByyq6jryw4JJTd929qQj7oQ9MJs6sRavrrD5m9a4DX9iIE8VBCmkSefh8it3QpxgB0BKNMTaFPNf5Oepm6yk51C1UuOhg4u3f4CkZPwGWGYzxJC0qvyEYKL2K3c4d_4RNV56UaCPrz2RJQnSxq9KkaL1EJw4TuzJ9gKMVFr_K3FsXlv3zitCj3v1uwm5LS5zGe_Gt3GESFv2ImYKfYUMMW0bC5n09fv7q1dxeHeooh5ibTURl1LCKQ.G5rhbfx0o0Rd3NX3.Gj6ixTqUO7wdQqEPDnBFZDyoyqs4Ee3lURAh9n-c2l3fi9cGoZYh8VR0PrRqA1u9WctilXOkkIrEKBAkQAUDN9E46NhxB-fAw9bjFZguOEilKGFjq60Dm5JZ0hVnGcbnvnrIEYpzroK5Yu2jmtsbrmWC6ZH1-GKkbjuFt7iHv6quYaPM3fB58RgGCaIl481MkpG7S31q8Z_QTGefFpkn0MLM4J0uCG6oBp9KTR0l6kohc0EwyAG-VqmLy1Wmei-PJ6USayhk6ca4fijnHhu7WRO2xuCILUTJIqgX6CCcMtbGbTgn0PmQ5eegfz_P0oARqS5Y4gv5Zl_dN1iOuKg1b59Gp20BhxqkGgw6WfTMhGMbE3Jk8E_12d1Wb8iMxVpU2x9DA7z51DRRxIOCAEcdemWzKrRbKK8NY0vLGqwewcR6nKkE2HGD4imdWJ-Pe5J7BA1oUX7QdCLa_hgX-X98Nk6doNkMndSZv6Cc271iTbiLKCttQUVpYPquiEhK_e_Ozu2fjF27-_fRaHE0oQuxjfQqvqHthcN8XJqmubsEvdMAL9QaJQ1mbMmDBbxd_GzbF9Uz70_MfuRLCGmfUxKtxldzFOzWuf9ZwINRGmk5MP946oXLoSQ9kqcdSv-adX7sac1FJWEQ_8Hq9JR5acO4QsdPzlr7zHkoFVOVmbcqMBKMlrM4Lk25OX7JPuD6uucRfxSb1baieUnNLhyn-gdgEmhmqm214ExAF-OKBsuQVTame_7QkazsmKX-_1keVO3EHnEGUiI0T0UOluR7whhb3BOJgqtIiyBpcqVENn8CoilwhLRS_ZMU8C7SmBF09IIsjBVlmiPRL-GaND99Y6jd0bVxTBmaRFreQkkqb0h8X4y94ebljnAQBGpyTmaOyaRsJmO1w_ZgJ-W91hqOmoxL6T7b_fvEBMhoWSsnQB5MXGKs9pCxEGsvSrkpLsFiMg5LfLaOUf9xVVlmaWgqI3wXrR0-D46Brjzdmub306jEFEqMI7QnS1olQXccY5HecHK3MZzUuUU03dWlIqRBVbpavSbrpgh-L41alm44mefZ9iD_CSoPHVFafr8nQr6eHj20xfLvTfVnzJ3Z1vDhz565ImO83XmSgJrT44KbwoGhaCQ3IszWKKuuTPVfEjTctW_FIlI4Iy9HbRrNVWxGjZxDnFuh8PwcVw05f9gIkcquQmdz0LM99xnBc-kIvCVJd5d486BRL_hKTRr5GtOTr33GlzRykkvRHSalUdaq1PqMezP0ZHy0YMOboH5O8lwRtEOcvXCzJGLh9o7Tq5V1usY.IY2XIuXVG1ZwFAA_Fewguw"
      ,userMobileNumber: "9763111321"
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
