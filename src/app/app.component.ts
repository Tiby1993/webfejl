import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { item } from './dashboard/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-basics5';
  param = 'jankiz';

  constructor(private router: Router, 
              ) {
  }

  ngOnInit() {
      
  }

  navigateToSignup() {
    this.router.navigate(['/signup', 'jankiz']);
  }
}
