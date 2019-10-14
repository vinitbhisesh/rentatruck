import { Component } from '@angular/core';
import {Router} from "@angular/router";
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rentatruck';
  router: string;

  constructor(private _router: Router){
          this.router = _router.url; 
    }

  ngOnInit() {
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
    });
  }

}
