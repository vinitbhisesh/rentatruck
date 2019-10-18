import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    //let temp = this.commonService.getUserObj();
    debugger
  }

  status: boolean = false;
  clickEvent(){
    //this.status = !this.status;       
  }

}
