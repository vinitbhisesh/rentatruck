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
  clickEvent() {
    this.status = !this.status;
  }

  showLoginModal() {
    document.getElementById("loginPopup_id").classList.add('show');
    document.getElementById("loginPopup_id").style.display = 'block';
  }
  showRegisterModal() {
    document.getElementById("registerPopup_id").classList.add('show');
    document.getElementById("registerPopup_id").style.display = 'block';
  }
}
