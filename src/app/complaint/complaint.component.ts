import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    status: boolean = false;
  clickEvent(){
    this.status = !this.status;       
  }

}
