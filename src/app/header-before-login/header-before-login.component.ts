import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-before-login',
  templateUrl: './header-before-login.component.html',
  styleUrls: ['./header-before-login.component.css']
})
export class HeaderBeforeLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status: boolean = false;
  clickEvent(){
  this.status = !this.status;       
  }

}
