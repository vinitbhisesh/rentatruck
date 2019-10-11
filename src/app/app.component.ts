import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rentatruck';

  ngOnInit() {
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
    });
  }

}
