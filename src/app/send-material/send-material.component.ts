import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-material',
  templateUrl: './send-material.component.html',
  styleUrls: ['./send-material.component.css']
})
export class SendMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;       
  }

  truckAI: boolean = true;
  clickEvtTruck(){
    this.truckAI = !this.truckAI;       
  }


}
