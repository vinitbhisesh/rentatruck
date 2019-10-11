import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-vehicle',
  templateUrl: './available-vehicle.component.html',
  styleUrls: ['./available-vehicle.component.css']
})
export class AvailableVehicleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;       
  }

}
