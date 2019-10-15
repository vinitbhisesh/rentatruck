import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

status: boolean = false;
clickEvent(){
this.status = !this.status;       
}

}
