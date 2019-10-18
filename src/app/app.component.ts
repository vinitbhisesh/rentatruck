import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import AOS from 'aos';
import { CommonService } from './common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title: string = 'rentatruck';
  router: string;
  isLoggedIn: boolean = false;
  messages: any[] = [];
  subscription: Subscription;

  constructor(private _router: Router, private commonService: CommonService) {
    this.router = _router.url;

    // subscribe to home component messages
    this.subscription = this.commonService.getMessage().subscribe(message => {
      if (message.text == '1') {
        this.messages.push(message);
        this.isLoggedIn = true;
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }

  ngOnInit() {
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
