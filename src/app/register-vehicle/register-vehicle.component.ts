import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;       
  }

}
