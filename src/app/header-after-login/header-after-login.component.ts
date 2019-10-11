import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-after-login',
  templateUrl: './header-after-login.component.html',
  styleUrls: ['./header-after-login.component.css']
})
export class HeaderAfterLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;

  clickEvent(){
    this.status = !this.status;       
  }

  clickEventM1(){
    this.status1 = !this.status1;       
  }
  clickEventM2(){
    this.status2 = !this.status2;       
  }

}
