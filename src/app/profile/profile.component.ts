import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
isEditprofile=false;
  constructor() { }

  ngOnInit() {
  }
Fn_edit(){this.isEditprofile=true;}
OnSubmit(){this.isEditprofile=false;}

}
