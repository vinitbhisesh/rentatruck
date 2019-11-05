import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-available-trucks',
  templateUrl: './live-available-trucks.component.html',
  styleUrls: ['./live-available-trucks.component.css']
})
export class LiveAvailableTrucksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;       
  }

}
