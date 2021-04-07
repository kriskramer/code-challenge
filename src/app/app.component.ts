import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kris Kramer\'s code challenge';

  constructor(public router: Router) { }

  goToPage1() {
    this.router.navigateByUrl('/page1');
  }

  goToPage2() {
    this.router.navigateByUrl('/page2');
  }

}
