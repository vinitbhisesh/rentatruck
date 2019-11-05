import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-status',
  templateUrl: './all-status.component.html',
  styleUrls: ['./all-status.component.css']
})
export class AllStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;       
  }

}
