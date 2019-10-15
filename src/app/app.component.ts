import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import AOS from 'aos';
import { MessageService } from './message.service';
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

  constructor(private _router: Router, private messageService: MessageService) {
    this.router = _router.url;

    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
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

  messages: any[] = [];
  subscription: Subscription;

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
