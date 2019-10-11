import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {

  }

  status: boolean = false;
  clickEvent(){
  this.status = !this.status;       
  }
  
  Fn_login(){document.getElementById('loginPopup_id').click();this.router.navigate(['/dashboard']);}

}
