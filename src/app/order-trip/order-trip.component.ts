import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-trip',
  templateUrl: './order-trip.component.html',
  styleUrls: ['./order-trip.component.css']
})
export class OrderTripComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

status: boolean = false;
clickEvent(){
  this.status = !this.status;       
}

}
