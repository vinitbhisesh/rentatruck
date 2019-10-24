import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  status: boolean = false;
  constructor() { }

  ngOnInit() {

  }
  onCompanyReg() {
    document.getElementById("addCompany_id").classList.add('show');
    document.getElementById("addCompany_id").style.display = 'block';
  }

  onBranchReg() {
    document.getElementById("addBranch_id").classList.add('show');
    document.getElementById("addBranch_id").style.display = 'block';
  }
}
